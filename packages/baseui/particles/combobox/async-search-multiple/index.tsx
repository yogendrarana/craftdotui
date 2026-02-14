"use client";

import * as React from "react";
import { Loader2, X } from "lucide-react";
import {
	ComboboxRoot,
	ComboboxPositioner,
	ComboboxPopup,
	ComboboxList,
	ComboboxItem,
	ComboboxPortal,
	ComboboxStatus,
	ComboboxEmpty,
	ComboboxChips,
	ComboboxChip,
	ComboboxChipRemove,
	ComboboxChipsInput,
	ComboboxValue,
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
	{ id: "nuxtjs", name: "Nuxt.js" },
	{ id: "remix", name: "Remix" },
	{ id: "astro", name: "Astro" },
	{ id: "angular", name: "Angular" },
	{ id: "ember", name: "Ember" },
];

async function searchFrameworks(
	query: string,
	filter: (item: string, query: string) => boolean,
): Promise<{ frameworks: Framework[]; error: string | null }> {
	await new Promise((resolve) => setTimeout(resolve, 400));

	if (query === "error") {
		return { frameworks: [], error: "Failed to fetch. Try again." };
	}

	const frameworks = allFrameworks.filter((f) => filter(f.name, query));
	return { frameworks, error: null };
}

export default function ComboboxAsyncSearchMultiple() {
	const [searchResults, setSearchResults] = React.useState<Framework[]>([]);
	const [selectedValues, setSelectedValues] = React.useState<Framework[]>([]);
	const [searchValue, setSearchValue] = React.useState("");
	const [error, setError] = React.useState<string | null>(null);
	const [isPending, startTransition] = React.useTransition();

	const { contains } = ComboboxPrimitive.useFilter();
	const abortControllerRef = React.useRef<AbortController | null>(null);
	const containerRef = React.useRef<HTMLDivElement | null>(null);

	const trimmedSearchValue = searchValue.trim();

	const items = React.useMemo(() => {
		const result = [...searchResults];
		// Ensure selected items are always in the list so they can be rendered properly
		for (const selected of selectedValues) {
			if (!result.some((f) => f.id === selected.id)) {
				result.push(selected);
			}
		}
		return result;
	}, [searchResults, selectedValues]);

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
		<div className="w-64">
			<ComboboxRoot
				multiple
				items={items}
				value={selectedValues}
				onValueChange={(val) => {
					setSelectedValues(val);
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
				<ComboboxChips ref={containerRef}>
					<ComboboxValue>
						{(values: Framework[]) => (
							<>
								{values.map((item) => (
									<ComboboxChip key={item.id}>
										{item.name}
										<ComboboxChipRemove>
											<X className="size-3" />
										</ComboboxChipRemove>
									</ComboboxChip>
								))}
								<ComboboxChipsInput
									placeholder={
										values.length > 0
											? undefined
											: "Search..."
									}
									className="min-w-14"
								/>
							</>
						)}
					</ComboboxValue>
				</ComboboxChips>

				<ComboboxPortal>
					<ComboboxPositioner anchor={containerRef}>
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
