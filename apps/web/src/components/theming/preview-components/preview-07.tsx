"use client";

import * as React from "react";

import { Checkbox } from "@craftdotui/baseui/components/checkbox";
import { Switch } from "@craftdotui/baseui/components/switch";

export function Preview07() {
	const [notificationsEnabled, setNotificationsEnabled] =
		React.useState(true);

	return (
		<div
			className="border border-border bg-card text-card-foreground p-5 space-y-4"
			style={{
				borderRadius: "var(--radius-xl)",
				boxShadow: "var(--shadow-sm)",
			}}
		>
			<div className="space-y-1">
				<span className="text-xs text-muted-foreground">
					Claimable Balance
				</span>
				<div className="text-3xl font-bold tracking-tight font-mono text-foreground">
					$0.00
				</div>
				<span
					className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-medium"
					style={{
						backgroundColor: "var(--warning)",
						color: "var(--warning-foreground)",
						borderRadius: "var(--radius-sm)",
					}}
				>
					<span className="size-1.5 rounded-full bg-current" />
					Pending Setup
				</span>
			</div>

			<div
				className="bg-muted/50 border border-border/60 p-3 space-y-2 text-xs"
				style={{ borderRadius: "var(--radius-lg)" }}
			>
				<div className="flex justify-between">
					<span className="text-muted-foreground">Net Royalties</span>
					<span className="font-mono text-foreground">$0.00</span>
				</div>
				<div className="flex justify-between">
					<span className="text-muted-foreground">
						Processing Fee
					</span>
					<span className="font-mono text-foreground">-$0.00</span>
				</div>
				<div className="border-t border-border pt-2 flex justify-between font-medium">
					<span className="text-foreground">
						Total Ready to Claim
					</span>
					<span className="font-mono text-foreground">$0.00 USD</span>
				</div>
			</div>

			<div className="flex items-center justify-between pt-1">
				<div className="inline-flex items-center gap-2 text-xs">
					<Checkbox.Root defaultChecked>
						<Checkbox.Indicator />
					</Checkbox.Root>
					<span>Auto-payout on 15th</span>
				</div>
				<Switch
					checked={notificationsEnabled}
					onCheckedChange={setNotificationsEnabled}
				/>
			</div>

			<p className="text-[11px] text-muted-foreground leading-relaxed border-t border-border pt-3">
				Once your bank is connected, balances over $10.00 are
				automatically eligible for monthly distribution.
			</p>
		</div>
	);
}
