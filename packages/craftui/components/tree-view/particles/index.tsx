"use client";

import * as React from "react";
import {
	TreeRoot,
	TreeItem,
	TreeItemTrigger,
	TreeItemContent,
	TreeItemChevron,
	TreeItemIcon,
	TreeItemLabel,
} from "@craftdotui/craftui/components/tree-view";

export function Particle() {
	const [selected, setSelected] = React.useState<string | string[]>("app");

	return (
		<div className="mx-auto flex w-full max-w-sm flex-col gap-3 rounded-lg border border-border bg-card p-4 shadow-xs">
			<div className="flex items-center justify-between border-b border-border pb-2">
				<span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
					Project Explorer
				</span>
				<span className="text-xs text-muted-foreground">
					Selected:{" "}
					<code className="font-mono text-foreground">
						{Array.isArray(selected)
							? selected.join(", ")
							: selected}
					</code>
				</span>
			</div>

			<TreeRoot
				value={selected}
				onValueChange={setSelected}
				defaultExpanded={["src", "components"]}
				selectionMode="single"
			>
				<TreeItem value="src" label="src">
					<TreeItemTrigger>
						<TreeItemChevron />
						<TreeItemIcon />
						<TreeItemLabel>src</TreeItemLabel>
					</TreeItemTrigger>
					<TreeItemContent>
						<TreeItem value="components" label="components">
							<TreeItemTrigger>
								<TreeItemChevron />
								<TreeItemIcon />
								<TreeItemLabel>components</TreeItemLabel>
							</TreeItemTrigger>
							<TreeItemContent>
								<TreeItem
									value="button.tsx"
									label="button.tsx"
									isLeaf
								>
									<TreeItemTrigger>
										<TreeItemChevron />
										<TreeItemIcon />
										<TreeItemLabel>
											button.tsx
										</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>
								<TreeItem
									value="dialog.tsx"
									label="dialog.tsx"
									isLeaf
								>
									<TreeItemTrigger>
										<TreeItemChevron />
										<TreeItemIcon />
										<TreeItemLabel>
											dialog.tsx
										</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>
								<TreeItem
									value="tree.tsx"
									label="tree.tsx"
									isLeaf
								>
									<TreeItemTrigger>
										<TreeItemChevron />
										<TreeItemIcon />
										<TreeItemLabel>tree.tsx</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>
							</TreeItemContent>
						</TreeItem>

						<TreeItem value="hooks" label="hooks">
							<TreeItemTrigger>
								<TreeItemChevron />
								<TreeItemIcon />
								<TreeItemLabel>hooks</TreeItemLabel>
							</TreeItemTrigger>
							<TreeItemContent>
								<TreeItem
									value="use-tree.ts"
									label="use-tree.ts"
									isLeaf
								>
									<TreeItemTrigger>
										<TreeItemChevron />
										<TreeItemIcon />
										<TreeItemLabel>
											use-tree.ts
										</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>
							</TreeItemContent>
						</TreeItem>

						<TreeItem value="app.tsx" label="app.tsx" isLeaf>
							<TreeItemTrigger>
								<TreeItemChevron />
								<TreeItemIcon />
								<TreeItemLabel>app.tsx</TreeItemLabel>
							</TreeItemTrigger>
						</TreeItem>
					</TreeItemContent>
				</TreeItem>

				<TreeItem value="package.json" label="package.json" isLeaf>
					<TreeItemTrigger>
						<TreeItemChevron />
						<TreeItemIcon />
						<TreeItemLabel>package.json</TreeItemLabel>
					</TreeItemTrigger>
				</TreeItem>

				<TreeItem value="tsconfig.json" label="tsconfig.json" isLeaf>
					<TreeItemTrigger>
						<TreeItemChevron />
						<TreeItemIcon />
						<TreeItemLabel>tsconfig.json</TreeItemLabel>
					</TreeItemTrigger>
				</TreeItem>
			</TreeRoot>
		</div>
	);
}

export default Particle;
