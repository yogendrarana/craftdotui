"use client";

import * as React from "react";

import {
	AutocompleteRoot,
	AutocompleteCollection,
	AutocompleteContent,
	AutocompleteEmpty,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompleteSeparator,
} from "@craftdotui/baseui/components/autocomplete";

interface Framework {
	id: string;
	value: string;
	category: string;
}

type FrameworkGroup = { value: string; items: Framework[] };

const frameworksData: Framework[] = [
	// JavaScript
	{ id: "js-react", value: "React", category: "JavaScript" },
	{ id: "js-next", value: "Next.js", category: "JavaScript" },
	{ id: "js-vue", value: "Vue.js", category: "JavaScript" },

	// Python
	{ id: "py-django", value: "Django", category: "Python" },
	{ id: "py-fastapi", value: "FastAPI", category: "Python" },
	{ id: "py-flask", value: "Flask", category: "Python" },

	// Go
	{ id: "go-gin", value: "Gin", category: "Go" },
	{ id: "go-fiber", value: "Fiber", category: "Go" },
	{ id: "go-echo", value: "Echo", category: "Go" },

	// Rust
	{ id: "rs-actix", value: "Actix", category: "Rust" },
	{ id: "rs-axum", value: "Axum", category: "Rust" },
	{ id: "rs-tauri", value: "Tauri", category: "Rust" },
];

function groupFrameworks(frameworks: Framework[]): FrameworkGroup[] {
	const groups: Record<string, Framework[]> = {};
	for (const fw of frameworks) {
		if (!groups[fw.category]) {
			groups[fw.category] = [];
		}
		groups[fw.category]?.push(fw);
	}

	const order: Array<FrameworkGroup["value"]> = [
		"JavaScript",
		"Python",
		"Go",
		"Rust",
	];
	return order.map((value) => ({ items: groups[value] ?? [], value }));
}

const groupedFrameworks: FrameworkGroup[] = groupFrameworks(frameworksData);

export default function Particle() {
	return (
		<div className="w-64">
			<AutocompleteRoot items={groupedFrameworks}>
				<AutocompleteInput
					aria-label="Search frameworks"
					placeholder="Search frameworks (e.g. React)..."
				/>
				<AutocompleteContent>
					<AutocompleteEmpty>No frameworks found.</AutocompleteEmpty>
					<AutocompleteList>
						{(group: FrameworkGroup) => (
							<React.Fragment key={group.value}>
								<AutocompleteGroup items={group.items}>
									<AutocompleteGroupLabel>
										{group.value}
									</AutocompleteGroupLabel>
									<AutocompleteCollection>
										{(fw: Framework) => (
											<AutocompleteItem
												key={fw.id}
												value={fw}
											>
												{fw.value}
											</AutocompleteItem>
										)}
									</AutocompleteCollection>
								</AutocompleteGroup>
								{group.value !== "Rust" && (
									<AutocompleteSeparator />
								)}
							</React.Fragment>
						)}
					</AutocompleteList>
				</AutocompleteContent>
			</AutocompleteRoot>
		</div>
	);
}
