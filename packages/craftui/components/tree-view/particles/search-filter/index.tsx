"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import {
	TreeView,
	type TreeNodeData,
} from "@craftdotui/craftui/components/tree-view";

const initialComponentsData: TreeNodeData[] = [
	{
		id: "primitives",
		label: "Primitives",
		children: [
			{
				id: "buttons",
				label: "Buttons",
				children: [
					{ id: "button-default", label: "Button", isLeaf: true },
					{ id: "icon-button", label: "IconButton", isLeaf: true },
					{
						id: "toggle-button",
						label: "ToggleButton",
						isLeaf: true,
					},
				],
			},
			{
				id: "inputs",
				label: "Inputs",
				children: [
					{ id: "text-field", label: "TextField", isLeaf: true },
					{ id: "number-input", label: "NumberInput", isLeaf: true },
					{ id: "slider", label: "Slider", isLeaf: true },
				],
			},
		],
	},
	{
		id: "layout",
		label: "Layout",
		children: [
			{
				id: "containers",
				label: "Containers",
				children: [
					{ id: "card", label: "Card", isLeaf: true },
					{ id: "sheet", label: "Sheet", isLeaf: true },
					{ id: "dialog", label: "Dialog", isLeaf: true },
				],
			},
			{
				id: "navigation",
				label: "Navigation",
				children: [
					{ id: "breadcrumb", label: "Breadcrumb", isLeaf: true },
					{ id: "stepper", label: "Stepper", isLeaf: true },
					{ id: "tree-view-node", label: "TreeView", isLeaf: true },
				],
			},
		],
	},
	{
		id: "feedback",
		label: "Feedback",
		children: [
			{ id: "alert", label: "Alert", isLeaf: true },
			{ id: "banner", label: "Banner", isLeaf: true },
			{ id: "toast", label: "Toast", isLeaf: true },
			{ id: "progress", label: "Progress", isLeaf: true },
		],
	},
];

export function Particle() {
	const [query, setQuery] = React.useState<string>("tree");
	const [selected, setSelected] = React.useState<string | string[]>(
		"tree-view-node",
	);

	return (
		<div className="mx-auto flex w-full max-w-md flex-col gap-3 rounded-lg border border-border bg-card p-4 shadow-xs">
			<div className="flex flex-col gap-2 border-b border-border pb-3">
				<h4 className="text-sm font-semibold text-foreground">
					Component Search & Filter
				</h4>
				<div className="relative flex items-center">
					<Search className="pointer-events-none absolute left-2.5 size-4 text-muted-foreground" />
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Filter components (e.g. tree, button, card)..."
						className="h-8 w-full rounded-md border border-input bg-background pl-8 pr-7 text-xs outline-none focus:border-ring focus:ring-1 focus:ring-ring"
					/>
					{query && (
						<button
							type="button"
							aria-label="Clear search"
							onClick={() => setQuery("")}
							className="absolute right-2 text-muted-foreground hover:text-foreground"
						>
							<X className="size-3.5" />
						</button>
					)}
				</div>
			</div>

			<TreeView
				data={initialComponentsData}
				search={query}
				value={selected}
				onValueChange={setSelected}
			/>
		</div>
	);
}

export default Particle;
