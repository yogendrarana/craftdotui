"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import {
	ComboboxRoot,
	ComboboxInput,
	ComboboxPositioner,
	ComboboxPopup,
	ComboboxList,
	ComboboxItem,
	ComboboxPortal,
	ComboboxEmpty,
	ComboboxStatus,
	ComboboxPrimitive,
} from "@craftdotui/baseui/components/combobox";

interface Framework {
	id: string;
	name: string;
}

const allFrameworks: Framework[] = [
	{ id: "react", name: "React" },
	{ id: "vue", name: "Vue" },
	{ id: "svelte", name: "Svelte" },
	{ id: "solid", name: "Solid" },
	{ id: "nextjs", name: "Next.js" },
	{ id: "angular", name: "Angular" },
];

async function searchFrameworks(
	query: string,
	filter: (item: string, query: string) => boolean,
): Promise<{ frameworks: Framework[]; error: string | null }> {
	await new Promise((resolve) => setTimeout(resolve, 400));

	// Simulate rare error
	if (query === "error") {
		return { frameworks: [], error: "Failed to fetch. Try again." };
	}

	const frameworks = allFrameworks.filter((f) => filter(f.name, query));
	return { frameworks, error: null };
}

export default function ComboboxAsyncSearchSingle() {
	const [searchResults, setSearchResults] = React.useState<Framework[]>([]);
	const [selectedValue, setSelectedValue] = React.useState<Framework | null>(
		null,
	);
	const [searchValue, setSearchValue] = React.useState("");
	const [error, setError] = React.useState<string | null>(null);
	const [isPending, startTransition] = React.useTransition();

	const { contains } = ComboboxPrimitive.useFilter();
	const abortControllerRef = React.useRef<AbortController | null>(null);

	const trimmedSearchValue = searchValue.trim();

	const items = React.useMemo(() => {
		if (
			!selectedValue ||
			searchResults.some((f) => f.id === selectedValue.id)
		) {
			return searchResults;
		}
		return [...searchResults, selectedValue];
	}, [searchResults, selectedValue]);

	function getStatus() {
		if (isPending) {
			return (
				<div className="flex items-center gap-2">
					<Loader2 className="size-3 animate-spin" />
					Searching…
				</div>
			);
		}
		if (error)
			return (
				<span className="text-destructive font-normal">{error}</span>
			);
		if (trimmedSearchValue !== "" && searchResults.length === 0) {
			return `No matches for "${trimmedSearchValue}".`;
		}
		return searchResults.length > 0
			? `${searchResults.length} results found`
			: null;
	}

	return (
		<div className="max-w-64 relative">
			<ComboboxRoot
				items={items}
				value={selectedValue}
				onValueChange={(val) => {
					setSelectedValue(val);
					setSearchValue("");
				}}
				onInputValueChange={(nextSearchValue, { reason }) => {
					setSearchValue(nextSearchValue);
					if (nextSearchValue === "") {
						setSearchResults([]);
						return;
					}
					if (reason === "item-press") return;

					const controller = new AbortController();
					abortControllerRef.current?.abort();
					abortControllerRef.current = controller;

					startTransition(async () => {
						const result = await searchFrameworks(
							nextSearchValue,
							contains,
						);
						if (controller.signal.aborted) return;

						setSearchResults(result.frameworks);
						setError(result.error);
					});
				}}
				itemToStringLabel={(f: Framework) => f.name}
				filter={null}
			>
				<div className="flex flex-col gap-2">
					<label htmlFor="fw-search" className="text-sm font-medium">
						Frameworks
					</label>
					<ComboboxInput
						id="fw-search"
						placeholder="Start typing..."
						showClear
						showTrigger
						className="w-full"
					/>
				</div>

				<ComboboxPortal>
					<ComboboxPositioner>
						{trimmedSearchValue !== "" && (
							<ComboboxPopup
								className="p-0 overflow-hidden h-fit"
								aria-busy={isPending}
							>
								<ComboboxStatus className="empty:hidden">
									{getStatus()}
								</ComboboxStatus>
								<ComboboxEmpty className="p-4">
									Try a different search term.
								</ComboboxEmpty>
								<ComboboxList className="p-1">
									{(f: Framework) => (
										<ComboboxItem key={f.id} value={f}>
											{f.name}
										</ComboboxItem>
									)}
								</ComboboxList>
							</ComboboxPopup>
						)}
					</ComboboxPositioner>
				</ComboboxPortal>
			</ComboboxRoot>
		</div>
	);
}
