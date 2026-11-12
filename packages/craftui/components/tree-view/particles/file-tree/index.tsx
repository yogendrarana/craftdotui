"use client";

import * as React from "react";
import {
	FileCode,
	FileImage,
	FileJson,
	FileText,
	MoreHorizontal,
	Plus,
	Trash2,
} from "lucide-react";
import {
	TreeRoot,
	TreeItem,
	TreeItemTrigger,
	TreeItemContent,
	TreeItemChevron,
	TreeItemIcon,
	TreeItemLabel,
	TreeItemActions,
} from "@craftdotui/craftui/components/tree-view";

export function Particle() {
	const [activeFile, setActiveFile] = React.useState<string | string[]>(
		"page.tsx",
	);

	return (
		<div className="mx-auto flex w-full max-w-md flex-col gap-3 rounded-lg border border-border bg-card p-4 shadow-xs">
			<div className="flex items-center justify-between border-b border-border pb-2">
				<div>
					<h4 className="text-sm font-semibold text-foreground">
						File Explorer
					</h4>
					<p className="text-xs text-muted-foreground">
						Active file:{" "}
						<code className="font-mono text-primary">
							{Array.isArray(activeFile)
								? activeFile.join(", ")
								: activeFile}
						</code>
					</p>
				</div>
				<button
					type="button"
					aria-label="Add file"
					className="flex size-7 items-center justify-center rounded-md border border-border hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors"
					onClick={() => alert("Add file dialog")}
				>
					<Plus className="size-3.5" />
				</button>
			</div>

			<TreeRoot
				value={activeFile}
				onValueChange={setActiveFile}
				defaultExpanded={["src", "app"]}
				selectionMode="single"
			>
				<TreeItem value="src" label="src">
					<TreeItemTrigger>
						<TreeItemChevron />
						<TreeItemIcon />
						<TreeItemLabel>src</TreeItemLabel>
						<TreeItemActions>
							<button
								type="button"
								aria-label="Add inside src"
								className="flex size-5 items-center justify-center rounded hover:bg-accent hover:text-accent-foreground text-muted-foreground"
								onClick={() => alert("Add file in src")}
							>
								<Plus className="size-3" />
							</button>
							<button
								type="button"
								aria-label="More options"
								className="flex size-5 items-center justify-center rounded hover:bg-accent hover:text-accent-foreground text-muted-foreground"
							>
								<MoreHorizontal className="size-3" />
							</button>
						</TreeItemActions>
					</TreeItemTrigger>

					<TreeItemContent>
						<TreeItem value="app" label="app">
							<TreeItemTrigger>
								<TreeItemChevron />
								<TreeItemIcon />
								<TreeItemLabel>app</TreeItemLabel>
							</TreeItemTrigger>
							<TreeItemContent>
								<TreeItem
									value="page.tsx"
									label="page.tsx"
									isLeaf
								>
									<TreeItemTrigger>
										<TreeItemChevron />
										<TreeItemIcon
											fileIcon={
												<FileCode className="size-4 text-sky-500" />
											}
										/>
										<TreeItemLabel>page.tsx</TreeItemLabel>
										<TreeItemActions>
											<button
												type="button"
												aria-label="Delete page.tsx"
												className="flex size-5 items-center justify-center rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
												onClick={() =>
													alert("Delete page.tsx")
												}
											>
												<Trash2 className="size-3" />
											</button>
										</TreeItemActions>
									</TreeItemTrigger>
								</TreeItem>

								<TreeItem
									value="layout.tsx"
									label="layout.tsx"
									isLeaf
								>
									<TreeItemTrigger>
										<TreeItemChevron />
										<TreeItemIcon
											fileIcon={
												<FileCode className="size-4 text-sky-500" />
											}
										/>
										<TreeItemLabel>
											layout.tsx
										</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>

								<TreeItem
									value="globals.css"
									label="globals.css"
									isLeaf
								>
									<TreeItemTrigger>
										<TreeItemChevron />
										<TreeItemIcon
											fileIcon={
												<FileCode className="size-4 text-pink-500" />
											}
										/>
										<TreeItemLabel>
											globals.css
										</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>
							</TreeItemContent>
						</TreeItem>

						<TreeItem value="assets" label="assets">
							<TreeItemTrigger>
								<TreeItemChevron />
								<TreeItemIcon />
								<TreeItemLabel>assets</TreeItemLabel>
							</TreeItemTrigger>
							<TreeItemContent>
								<TreeItem
									value="logo.svg"
									label="logo.svg"
									isLeaf
								>
									<TreeItemTrigger>
										<TreeItemChevron />
										<TreeItemIcon
											fileIcon={
												<FileImage className="size-4 text-emerald-500" />
											}
										/>
										<TreeItemLabel>logo.svg</TreeItemLabel>
									</TreeItemTrigger>
								</TreeItem>
							</TreeItemContent>
						</TreeItem>
					</TreeItemContent>
				</TreeItem>

				<TreeItem value="package.json" label="package.json" isLeaf>
					<TreeItemTrigger>
						<TreeItemChevron />
						<TreeItemIcon
							fileIcon={
								<FileJson className="size-4 text-amber-500" />
							}
						/>
						<TreeItemLabel>package.json</TreeItemLabel>
					</TreeItemTrigger>
				</TreeItem>

				<TreeItem value="README.md" label="README.md" isLeaf>
					<TreeItemTrigger>
						<TreeItemChevron />
						<TreeItemIcon
							fileIcon={
								<FileText className="size-4 text-muted-foreground" />
							}
						/>
						<TreeItemLabel>README.md</TreeItemLabel>
					</TreeItemTrigger>
				</TreeItem>
			</TreeRoot>
		</div>
	);
}

export default Particle;
