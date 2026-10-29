"use client";

import { Button } from "@craftdotui/baseui/components/button";

const BARS = [
	{ month: "Dec", h: 48, color: "var(--chart-1)" },
	{ month: "Jan", h: 72, color: "var(--chart-2)" },
	{ month: "Feb", h: 58, color: "var(--chart-1)" },
	{ month: "Mar", h: 80, color: "var(--chart-3)" },
	{ month: "Apr", h: 44, color: "var(--chart-4)" },
	{ month: "May", h: 95, color: "var(--chart-5)" },
];

export function Preview01() {
	return (
		<div
			className="border border-border bg-card text-card-foreground p-5 space-y-4"
			style={{
				borderRadius: "var(--radius-xl)",
				boxShadow: "var(--shadow-sm)",
			}}
		>
			<div>
				<h4 className="text-sm font-semibold text-card-foreground">
					Contribution History
				</h4>
				<p className="text-xs text-muted-foreground mt-0.5">
					Last 6 months of activity
				</p>
			</div>

			<div className="h-32 flex items-end justify-between gap-2.5 pt-4 px-1">
				{BARS.map((bar) => (
					<div
						key={bar.month}
						className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end"
					>
						<div
							className="w-full transition-all duration-300"
							style={{
								height: `${bar.h}%`,
								backgroundColor: bar.color,
								borderRadius: "var(--radius-sm)",
							}}
						/>
						<span className="font-mono text-[10px] text-muted-foreground">
							{bar.month}
						</span>
					</div>
				))}
			</div>

			<div className="grid grid-cols-2 gap-2.5">
				<div
					className="bg-muted/60 p-2.5 space-y-0.5"
					style={{ borderRadius: "var(--radius-md)" }}
				>
					<span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
						Upcoming
					</span>
					<p className="text-xs font-semibold text-foreground">
						May 25, 2026
					</p>
					<p className="text-[11px] text-muted-foreground">
						$1,000 scheduled
					</p>
				</div>
				<div
					className="bg-muted/60 p-2.5 space-y-0.5"
					style={{ borderRadius: "var(--radius-md)" }}
				>
					<span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
						Auto-Save Plan
					</span>
					<p className="text-xs font-semibold text-foreground">
						Accelerated
					</p>
					<p className="text-[11px] text-muted-foreground">
						Recurring weekly
					</p>
				</div>
			</div>

			<Button
				size="sm"
				variant="default"
				className="w-full text-xs"
				style={{ borderRadius: "var(--radius)" }}
			>
				View Full Report
			</Button>
		</div>
	);
}
