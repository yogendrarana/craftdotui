"use client";

import {
	AlertTriangle,
	CheckCircle2,
	Info,
	Sparkles,
	Terminal,
} from "lucide-react";

export function Preview06() {
	return (
		<div
			className="border border-border bg-card text-card-foreground p-5 space-y-3"
			style={{
				borderRadius: "var(--radius-xl)",
				boxShadow: "var(--shadow-sm)",
			}}
		>
			<div className="flex items-center justify-between">
				<h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
					Semantic Extensions
				</h4>
				<Sparkles className="size-3.5 text-primary" />
			</div>
			<div className="grid grid-cols-2 gap-2">
				<div
					className="p-2.5 flex items-center gap-2 text-xs font-medium"
					style={{
						backgroundColor: "var(--success)",
						color: "var(--success-foreground)",
						borderRadius: "var(--radius)",
					}}
				>
					<CheckCircle2 className="size-3.5 shrink-0" />
					<span>Success</span>
				</div>
				<div
					className="p-2.5 flex items-center gap-2 text-xs font-medium"
					style={{
						backgroundColor: "var(--warning)",
						color: "var(--warning-foreground)",
						borderRadius: "var(--radius)",
					}}
				>
					<AlertTriangle className="size-3.5 shrink-0" />
					<span>Warning</span>
				</div>
				<div
					className="p-2.5 flex items-center gap-2 text-xs font-medium"
					style={{
						backgroundColor: "var(--info)",
						color: "var(--info-foreground)",
						borderRadius: "var(--radius)",
					}}
				>
					<Info className="size-3.5 shrink-0" />
					<span>Info</span>
				</div>
				<div
					className="p-2.5 flex items-center gap-2 text-xs font-medium"
					style={{
						backgroundColor: "var(--invert)",
						color: "var(--invert-foreground)",
						borderRadius: "var(--radius)",
					}}
				>
					<Terminal className="size-3.5 shrink-0" />
					<span>Invert</span>
				</div>
			</div>
		</div>
	);
}
