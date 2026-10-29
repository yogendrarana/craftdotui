"use client";

import { Button } from "@craftdotui/baseui/components/button";
import { Progress } from "@craftdotui/baseui/components/progress";

export function Preview03() {
	return (
		<div
			className="border border-border bg-card text-card-foreground p-5 space-y-4"
			style={{
				borderRadius: "var(--radius-xl)",
				boxShadow: "var(--shadow-sm)",
			}}
		>
			<div className="flex items-center justify-between gap-2">
				<div>
					<h4 className="text-sm font-semibold text-card-foreground">
						Savings Targets
					</h4>
					<p className="text-xs text-muted-foreground mt-0.5">
						Active milestones for 2026
					</p>
				</div>
				<Button
					size="xs"
					variant="outline"
					style={{ borderRadius: "var(--radius)" }}
				>
					New Goal
				</Button>
			</div>

			<div
				className="bg-muted/50 border border-border/60 p-3.5 space-y-2.5"
				style={{ borderRadius: "var(--radius-lg)" }}
			>
				<span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
					Retirement
				</span>
				<div className="text-xl font-bold tracking-tight text-foreground">
					$420,000
				</div>
				<Progress.Root value={65}>
					<Progress.Track>
						<Progress.Indicator />
					</Progress.Track>
				</Progress.Root>
				<div className="flex justify-between text-[11px] text-muted-foreground">
					<span>65% achieved</span>
					<span className="font-medium text-foreground">
						$273,000
					</span>
				</div>
			</div>

			<div
				className="bg-muted/50 border border-border/60 p-3.5 space-y-2.5"
				style={{ borderRadius: "var(--radius-lg)" }}
			>
				<span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
					Real Estate
				</span>
				<div className="text-xl font-bold tracking-tight text-foreground">
					$85,000
				</div>
				<Progress.Root value={32}>
					<Progress.Track>
						<Progress.Indicator />
					</Progress.Track>
				</Progress.Root>
				<div className="flex justify-between text-[11px] text-muted-foreground">
					<span>32% achieved</span>
					<span className="font-medium text-foreground">$27,200</span>
				</div>
			</div>

			<p className="text-[11px] text-muted-foreground border-t border-border pt-3">
				Targets automatically rebalance on the 1st of each quarter.
			</p>
		</div>
	);
}
