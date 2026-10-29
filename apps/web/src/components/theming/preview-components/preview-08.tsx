"use client";

import { Coffee, CreditCard, ShoppingBag } from "lucide-react";

import { Button } from "@craftdotui/baseui/components/button";

const TRANSACTIONS = [
	{
		icon: Coffee,
		name: "Blue Bottle Coffee",
		cat: "Food & Drink",
		date: "Today, 10:24 AM",
		amount: "-$6.50",
		positive: false,
	},
	{
		icon: ShoppingBag,
		name: "Whole Foods Market",
		cat: "Groceries",
		date: "Yesterday",
		amount: "-$142.30",
		positive: false,
	},
	{
		icon: CreditCard,
		name: "Stripe Payout",
		cat: "Income",
		date: "Oct 12",
		amount: "+$4,200.00",
		positive: true,
	},
];

export function Preview08() {
	return (
		<div
			className="border border-border bg-card text-card-foreground p-5 space-y-4"
			style={{
				borderRadius: "var(--radius-xl)",
				boxShadow: "var(--shadow-sm)",
			}}
		>
			<div className="flex items-center justify-between">
				<div>
					<h4 className="text-sm font-semibold text-card-foreground">
						Recent Transactions
					</h4>
					<p className="text-xs text-muted-foreground mt-0.5">
						Your latest account activity across connected cards.
					</p>
				</div>
				<Button
					size="xs"
					variant="outline"
					style={{ borderRadius: "var(--radius)" }}
				>
					View All
				</Button>
			</div>

			<div className="divide-y divide-border text-xs">
				{TRANSACTIONS.map((tx) => {
					const Icon = tx.icon;
					return (
						<div
							key={tx.name}
							className="py-2.5 flex items-center justify-between gap-4"
						>
							<div className="flex items-center gap-3">
								<span
									className="size-8 bg-muted text-foreground flex items-center justify-center shrink-0"
									style={{
										borderRadius: "var(--radius-md)",
									}}
								>
									<Icon className="size-4" />
								</span>
								<div>
									<p className="font-medium text-foreground">
										{tx.name}
									</p>
									<p className="text-[11px] text-muted-foreground">
										{tx.cat}
									</p>
								</div>
							</div>
							<span className="text-muted-foreground font-mono text-[11px]">
								{tx.date}
							</span>
							<span
								className="font-mono font-semibold"
								style={{
									color: tx.positive
										? "var(--success)"
										: "var(--foreground)",
								}}
							>
								{tx.amount}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
