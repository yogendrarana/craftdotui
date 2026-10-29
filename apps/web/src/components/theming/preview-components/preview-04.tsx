"use client";

import { DollarSign } from "lucide-react";

import { Button } from "@craftdotui/baseui/components/button";
import { Input } from "@craftdotui/baseui/components/input";
import { Select } from "@craftdotui/baseui/components/select";

const ORDER_ITEMS = [
	{ label: "Market Order", value: "market" },
	{ label: "Limit Order", value: "limit" },
	{ label: "Stop Loss", value: "stop" },
];

export function Preview04() {
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
					Buy Investment
				</h4>
				<p className="text-xs text-muted-foreground mt-0.5">
					Instant fractional execution
				</p>
			</div>

			<div className="space-y-1.5">
				<label
					htmlFor="preview-invest-amount"
					className="text-xs font-medium text-foreground block"
				>
					Amount to Invest
				</label>
				<div className="relative">
					<DollarSign className="size-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2" />
					<Input
						id="preview-invest-amount"
						defaultValue="1,000.00"
						className="pl-8 font-mono text-xs"
						style={{ borderRadius: "var(--radius)" }}
					/>
				</div>
			</div>

			<div className="space-y-1.5">
				<span className="text-xs font-medium text-foreground block">
					Order Type
				</span>
				<Select.Root items={ORDER_ITEMS} defaultValue="market">
					<Select.Trigger
						size="sm"
						className="w-full text-xs"
						style={{ borderRadius: "var(--radius)" }}
					>
						<Select.Value />
					</Select.Trigger>
					<Select.Content alignItemWithTrigger={false}>
						{ORDER_ITEMS.map((item) => (
							<Select.Item
								key={item.value}
								value={item.value}
								className="text-xs"
							>
								{item.label}
							</Select.Item>
						))}
					</Select.Content>
				</Select.Root>
				<p className="text-[11px] text-muted-foreground">
					Market orders execute at the current price.
				</p>
			</div>

			<div className="space-y-1.5 pt-2 border-t border-border text-xs">
				<div className="flex justify-between">
					<span className="text-muted-foreground">
						Estimated Shares
					</span>
					<span className="font-mono font-medium text-foreground">
						4.82
					</span>
				</div>
				<div className="flex justify-between">
					<span className="text-muted-foreground">Buying Power</span>
					<span className="font-mono font-medium text-foreground">
						$12,450.00
					</span>
				</div>
			</div>

			<Button
				size="sm"
				variant="default"
				className="w-full text-xs"
				style={{ borderRadius: "var(--radius)" }}
			>
				Review Order
			</Button>
		</div>
	);
}
