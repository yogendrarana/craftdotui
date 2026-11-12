"use client";

import * as React from "react";
import { CheckSquare, Square, X } from "lucide-react";
import {
	TreeRoot,
	TreeItem,
	TreeItemTrigger,
	TreeItemContent,
	TreeItemChevron,
	TreeItemIcon,
	TreeItemLabel,
} from "@craftdotui/craftui/components/tree-view";

const allNodeIds = [
	"design-system",
	"tokens",
	"colors.json",
	"typography.json",
	"components",
	"buttons",
	"inputs",
	"cards",
	"documentation",
	"intro.mdx",
	"changelog.mdx",
];

export function Particle() {
	const [selected, setSelected] = React.useState<string | string[]>([
		"colors.json",
		"typography.json",
	]);

	const selectedArray = Array.isArray(selected) ? selected : [selected];

	const handleSelectAll = () => {
		setSelected(allNodeIds);
	};

	const handleClear = () => {
		setSelected([]);
	};

	return (
		<div className="mx-auto flex w-full max-w-md flex-col gap-3 rounded-lg border border-border bg-card p-4 shadow-xs">
			<div className="flex items-center justify-between border-b border-border pb-2">
				<div className="flex items-center gap-2">
					<h4 className="text-sm font-semibold text-foreground">
						Permissions & Assets
					</h4>
					<span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
						{selectedArray.length} selected
					</span>
				</div>
				<div className="flex items-center gap-1.5">
					<button
						type="button"
						onClick={handleSelectAll}
						className="rounded px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
					>
						Select all
					</button>
					<button
						type="button"
						onClick={handleClear}
						className="flex items-center gap-1 rounded px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
					>
						<X className="size-3" />
						Clear
					</button>
				</div>
			</div>

			<TreeRoot
				value={selected}
				onValueChange={setSelected}
				defaultExpanded={["design-system", "tokens", "components"]}
				selectionMode="multiple"
			>
				<TreeItem value="design-system" label="design-system">
					<TreeItemTrigger>
						<TreeItemChevron />
						{selectedArray.includes("design-system") ? (
							<CheckSquare className="size-4 text-primary" />
						) : (
							<Square className="size-4 text-muted-foreground" />
						)}
						<TreeItemIcon />
						<TreeItemLabel>design-system</TreeItemLabel>
					</TreeItemTrigger>

					<TreeItemContent>
						<TreeItem value="tokens" label="tokens">
							<TreeItemTrigger>
								<TreeItemChevron />
								{selectedArray.includes("tokens") ? (
									<CheckSquare className="size-4 text-primary" />
								) : (
									<Square className="size-4 text-muted-foreground" />
								)}
								<TreeItemIcon />
								<TreeItemLabel>tokens</TreeItemLabel>
							</TreeItemTrigger>
							<TreeItemContent>
								<TreeItem
									value="colors.json"
									label="colors.json"
									isLeaf
								>
									<TreeItemTrigger>
										<TreeItemChevron />
										{selectedArray.includes(
											"colors.json",
										) ? (
											<CheckSquare className="size-4 text-primary" />
										) : (
											<Square className="size-4 text-muted-foreground" />
										)}
										<TreeItemIcon />
										<TreeItemLabel>
											colors.json
										</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>
								<TreeItem
									value="typography.json"
									label="typography.json"
									isLeaf
								>
									<TreeItemTrigger>
										<TreeItemChevron />
										{selectedArray.includes(
											"typography.json",
										) ? (
											<CheckSquare className="size-4 text-primary" />
										) : (
											<Square className="size-4 text-muted-foreground" />
										)}
										<TreeItemIcon />
										<TreeItemLabel>
											typography.json
										</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>
							</TreeItemContent>
						</TreeItem>

						<TreeItem value="components" label="components">
							<TreeItemTrigger>
								<TreeItemChevron />
								{selectedArray.includes("components") ? (
									<CheckSquare className="size-4 text-primary" />
								) : (
									<Square className="size-4 text-muted-foreground" />
								)}
								<TreeItemIcon />
								<TreeItemLabel>components</TreeItemLabel>
							</TreeItemTrigger>
							<TreeItemContent>
								<TreeItem
									value="buttons"
									label="buttons"
									isLeaf
								>
									<TreeItemTrigger>
										<TreeItemChevron />
										{selectedArray.includes("buttons") ? (
											<CheckSquare className="size-4 text-primary" />
										) : (
											<Square className="size-4 text-muted-foreground" />
										)}
										<TreeItemIcon />
										<TreeItemLabel>buttons</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>
								<TreeItem value="inputs" label="inputs" isLeaf>
									<TreeItemTrigger>
										<TreeItemChevron />
										{selectedArray.includes("inputs") ? (
											<CheckSquare className="size-4 text-primary" />
										) : (
											<Square className="size-4 text-muted-foreground" />
										)}
										<TreeItemIcon />
										<TreeItemLabel>inputs</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>
								<TreeItem value="cards" label="cards" isLeaf>
									<TreeItemTrigger>
										<TreeItemChevron />
										{selectedArray.includes("cards") ? (
											<CheckSquare className="size-4 text-primary" />
										) : (
											<Square className="size-4 text-muted-foreground" />
										)}
										<TreeItemIcon />
										<TreeItemLabel>cards</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>
							</TreeItemContent>
						</TreeItem>
					</TreeItemContent>
				</TreeItem>

				<TreeItem value="documentation" label="documentation">
					<TreeItemTrigger>
						<TreeItemChevron />
						{selectedArray.includes("documentation") ? (
							<CheckSquare className="size-4 text-primary" />
						) : (
							<Square className="size-4 text-muted-foreground" />
						)}
						<TreeItemIcon />
						<TreeItemLabel>documentation</TreeItemLabel>
					</TreeItemTrigger>
					<TreeItemContent>
						<TreeItem value="intro.mdx" label="intro.mdx" isLeaf>
							<TreeItemTrigger>
								<TreeItemChevron />
								{selectedArray.includes("intro.mdx") ? (
									<CheckSquare className="size-4 text-primary" />
								) : (
									<Square className="size-4 text-muted-foreground" />
								)}
								<TreeItemIcon />
								<TreeItemLabel>intro.mdx</TreeItemLabel>
							</TreeItemTrigger>
						</TreeItem>
						<TreeItem
							value="changelog.mdx"
							label="changelog.mdx"
							isLeaf
						>
							<TreeItemTrigger>
								<TreeItemChevron />
								{selectedArray.includes("changelog.mdx") ? (
									<CheckSquare className="size-4 text-primary" />
								) : (
									<Square className="size-4 text-muted-foreground" />
								)}
								<TreeItemIcon />
								<TreeItemLabel>changelog.mdx</TreeItemLabel>
							</TreeItemTrigger>
						</TreeItem>
					</TreeItemContent>
				</TreeItem>
			</TreeRoot>
		</div>
	);
}

export default Particle;
