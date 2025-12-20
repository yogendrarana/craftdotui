"use client";

import * as React from "react";

import {
	Autocomplete,
	AutocompleteCollection,
	AutocompleteEmpty,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompletePopup,
	AutocompleteSeparator,
} from "@craftdotui/baseui/components/autocomplete";

interface Framework {
	id: string;
	value: string;
	category: string;
}

type FrameworkGroup = { value: string; items: Framework[] };

const frameworksData: Framework[] = [
	// JavaScript/TypeScript
	{ id: "js-react", value: "React", category: "JavaScript" },
	{ id: "js-next", value: "Next.js", category: "JavaScript" },
	{ id: "js-vue", value: "Vue.js", category: "JavaScript" },
	{ id: "js-svelte", value: "Svelte", category: "JavaScript" },
	{ id: "js-angular", value: "Angular", category: "JavaScript" },
	{ id: "js-astro", value: "Astro", category: "JavaScript" },
	{ id: "js-solid", value: "Solid.js", category: "JavaScript" },
	{ id: "js-qwik", value: "Qwik", category: "JavaScript" },

	// Python
	{ id: "py-django", value: "Django", category: "Python" },
	{ id: "py-fastapi", value: "FastAPI", category: "Python" },
	{ id: "py-flask", value: "Flask", category: "Python" },
	{ id: "py-streamlit", value: "Streamlit", category: "Python" },

	// Go
	{ id: "go-gin", value: "Gin", category: "Go" },
	{ id: "go-echo", value: "Echo", category: "Go" },
	{ id: "go-fiber", value: "Fiber", category: "Go" },

	// Rust
	{ id: "rs-actix", value: "Actix Web", category: "Rust" },
	{ id: "rs-axum", value: "Axum", category: "Rust" },
	{ id: "rs-rocket", value: "Rocket", category: "Rust" },
	{ id: "rs-leptos", value: "Leptos", category: "Rust" },

	// Java
	{ id: "java-spring", value: "Spring Boot", category: "Java" },
	{ id: "java-quarkus", value: "Quarkus", category: "Java" },
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
		"Java",
	];
	return order.map((value) => ({ items: groups[value] ?? [], value }));
}

const groupedFrameworks: FrameworkGroup[] = groupFrameworks(frameworksData);

export default function Particle() {
	return (
		<Autocomplete items={groupedFrameworks}>
			<div className="flex flex-col items-start gap-2">
				<AutocompleteInput
					aria-label="Search frameworks"
					placeholder="e.g. React, Django, Gin..."
				/>
			</div>
			<AutocompletePopup>
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
							{group.value !== "Java" && (
								<AutocompleteSeparator />
							)}
						</React.Fragment>
					)}
				</AutocompleteList>
			</AutocompletePopup>
		</Autocomplete>
	);
}
