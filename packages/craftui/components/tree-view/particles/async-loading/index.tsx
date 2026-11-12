"use client";

import * as React from "react";
import { Cloud, RefreshCw } from "lucide-react";
import {
	TreeView,
	type TreeNodeData,
} from "@craftdotui/craftui/components/tree-view";

const initialTreeData: TreeNodeData[] = [
	{
		id: "cloud-drive",
		label: "Cloud Storage",
		icon: <Cloud className="size-4 text-sky-500" />,
		isLeaf: false,
		children: [
			{
				id: "documents",
				label: "Remote Documents (Click to load)",
				isLeaf: false,
			},
			{
				id: "backups",
				label: "System Backups (Click to load)",
				isLeaf: false,
			},
		],
	},
	{
		id: "local-drive",
		label: "Local Cache",
		isLeaf: false,
		children: [
			{
				id: "readme.txt",
				label: "readme.txt",
				isLeaf: true,
			},
		],
	},
];

export function Particle() {
	const [treeData, setTreeData] =
		React.useState<TreeNodeData[]>(initialTreeData);
	const [status, setStatus] = React.useState<string>("Ready");

	const handleLoadChildren = async (nodeId: string) => {
		setStatus(`Loading contents for node: "${nodeId}"...`);

		// Simulate network latency
		await new Promise((resolve) => setTimeout(resolve, 800));

		setTreeData((prev) => {
			const updateChildren = (nodes: TreeNodeData[]): TreeNodeData[] => {
				return nodes.map((node) => {
					if (node.id === nodeId) {
						if (nodeId === "documents") {
							return {
								...node,
								children: [
									{
										id: "doc-report.pdf",
										label: "Q4-Financial-Report.pdf",
										isLeaf: true,
									},
									{
										id: "doc-presentation.pptx",
										label: "Keynote-Slides.pptx",
										isLeaf: true,
									},
									{
										id: "doc-contracts",
										label: "Client Contracts (Remote)",
										isLeaf: false,
									},
								],
							};
						}
						if (nodeId === "backups") {
							return {
								...node,
								children: [
									{
										id: "backup-2026-11-01.tar.gz",
										label: "backup-2026-11-01.tar.gz (1.2 GB)",
										isLeaf: true,
									},
									{
										id: "backup-2026-10-01.tar.gz",
										label: "backup-2026-10-01.tar.gz (980 MB)",
										isLeaf: true,
									},
								],
							};
						}
						if (nodeId === "doc-contracts") {
							return {
								...node,
								children: [
									{
										id: "contract-acme.pdf",
										label: "AcmeCorp-SLA.pdf",
										isLeaf: true,
									},
								],
							};
						}
					}
					if (node.children) {
						return {
							...node,
							children: updateChildren(node.children),
						};
					}
					return node;
				});
			};
			return updateChildren(prev);
		});

		setStatus(`Loaded node: "${nodeId}"`);
	};

	return (
		<div className="mx-auto flex w-full max-w-md flex-col gap-3 rounded-lg border border-border bg-card p-4 shadow-xs">
			<div className="flex items-center justify-between border-b border-border pb-2">
				<div>
					<h4 className="text-sm font-semibold text-foreground">
						Async Lazy Loading
					</h4>
					<p className="text-xs text-muted-foreground">{status}</p>
				</div>
				<button
					type="button"
					onClick={() => {
						setTreeData(initialTreeData);
						setStatus("Reset to initial state");
					}}
					className="flex items-center gap-1 rounded px-2 py-1 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
				>
					<RefreshCw className="size-3" />
					Reset
				</button>
			</div>

			<TreeView
				data={treeData}
				defaultExpanded={["cloud-drive"]}
				onLoadChildren={handleLoadChildren}
			/>
		</div>
	);
}

export default Particle;
