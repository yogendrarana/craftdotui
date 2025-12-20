"use client";

import { useState, useEffect } from "react";
import {
	Autocomplete,
	AutocompleteInput,
	AutocompletePopup,
	AutocompleteList,
	AutocompleteItem,
	AutocompleteEmpty,
	AutocompleteStatus,
} from "@craftdotui/baseui/components/autocomplete";

interface User {
	id: string;
	name: string;
	email: string;
}

// Simulated API call
const searchUsers = async (query: string): Promise<User[]> => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const users = [
		{ id: "1", name: "John Doe", email: "john@example.com" },
		{ id: "2", name: "Jane Smith", email: "jane@example.com" },
		{ id: "3", name: "Bob Johnson", email: "bob@example.com" },
		{ id: "4", name: "Alice Williams", email: "alice@example.com" },
	];
	return users.filter((user) =>
		user.name.toLowerCase().includes(query.toLowerCase()),
	);
};

export default function Particle() {
	const [value, setValue] = useState("");
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const [items, setItems] = useState<User[]>([]);

	const shouldRenderPopup = query !== "";

	let status: React.ReactNode = `${items.length} result${items.length === 1 ? "" : "s"} found`;
	if (loading) {
		status = (
			<div className="flex items-center gap-2">
				<span
					aria-hidden
					className="inline-flex size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
				/>
				Searching...
			</div>
		);
	} else if (query.length === 0 && value) {
		status = `Movie or year "${value}" does not exist in the Top 100 IMDb movies`;
	}

	useEffect(() => {
		if (query.length > 0) {
			setLoading(true);
			searchUsers(query).then((results) => {
				setItems(results);
				setLoading(false);
			});
		} else {
			setItems([]);
		}
	}, [query]);

	return (
		<Autocomplete
			items={items}
			value={value}
			onValueChange={setValue}
			itemToStringValue={(item) => item.name}
			filter={null}
		>
			<AutocompleteInput
				placeholder="Search users..."
				onChange={(e) => setQuery(e.target.value)}
			/>

			{shouldRenderPopup && (
				<AutocompletePopup>
					<AutocompleteStatus>{status}</AutocompleteStatus>
					<AutocompleteEmpty>No users found.</AutocompleteEmpty>
					<AutocompleteList>
						{(user: User) => (
							<AutocompleteItem key={user.id} value={user}>
								<div className="flex flex-col">
									<span className="font-medium">
										{user.name}
									</span>
									<span className="text-xs text-muted-foreground">
										{user.email}
									</span>
								</div>
							</AutocompleteItem>
						)}
					</AutocompleteList>
				</AutocompletePopup>
			)}
		</Autocomplete>
	);
}
