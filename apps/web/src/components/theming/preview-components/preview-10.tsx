"use client";

import { ArrowUpRight, Terminal } from "lucide-react";

export function Preview10() {
	return (
		<div
			className="border border-border bg-popover text-popover-foreground p-4 space-y-2.5"
			style={{
				borderRadius: "var(--radius-xl)",
				boxShadow: "var(--shadow-lg)",
			}}
		>
			<div className="flex items-center justify-between">
				<span className="text-xs font-semibold flex items-center gap-1.5">
					<Terminal className="size-3.5 text-primary" />
					Popover Surface (--popover)
				</span>
				<span className="font-mono text-[10px] text-muted-foreground">
					⌘K
				</span>
			</div>
			<p className="text-xs text-muted-foreground">
				Floating menus, comboboxes, and dialogs use{" "}
				<code className="font-mono text-popover-foreground">
					--popover
				</code>{" "}
				and{" "}
				<code className="font-mono text-popover-foreground">
					--shadow-lg
				</code>
				.
			</p>
			<div
				className="px-2.5 py-1.5 bg-accent text-accent-foreground text-xs font-medium flex items-center justify-between"
				style={{ borderRadius: "var(--radius-sm)" }}
			>
				<span>Highlighted Item (--accent)</span>
				<ArrowUpRight className="size-3.5" />
			</div>
		</div>
	);
}
