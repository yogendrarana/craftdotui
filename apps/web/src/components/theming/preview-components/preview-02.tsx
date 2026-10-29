"use client";

import * as React from "react";
import { X } from "lucide-react";

import { Button } from "@craftdotui/baseui/components/button";
import { Select } from "@craftdotui/baseui/components/select";
import { Slider } from "@craftdotui/baseui/components/slider";

const CURRENCY_ITEMS = [
	{ label: "USD — United States Dollar", value: "usd" },
	{ label: "EUR — Euro", value: "eur" },
	{ label: "GBP — British Pound", value: "gbp" },
];

export function Preview02() {
	const [payoutSlider, setPayoutSlider] = React.useState<number[]>([2500]);

	return (
		<div
			className="border border-border bg-card text-card-foreground p-5 space-y-4"
			style={{
				borderRadius: "var(--radius-xl)",
				boxShadow: "var(--shadow-sm)",
			}}
		>
			<div className="flex items-start justify-between gap-2">
				<div>
					<h4 className="text-sm font-semibold text-card-foreground">
						Payout Threshold
					</h4>
					<p className="text-xs text-muted-foreground mt-0.5">
						Set the minimum balance required before a payout is
						triggered.
					</p>
				</div>
				<span
					className="inline-flex size-6 items-center justify-center bg-muted text-muted-foreground shrink-0"
					style={{ borderRadius: "var(--radius-sm)" }}
				>
					<X className="size-3.5" />
				</span>
			</div>

			<div className="space-y-1.5">
				<span className="text-xs font-medium text-foreground block">
					Preferred Currency
				</span>
				<Select.Root items={CURRENCY_ITEMS} defaultValue="usd">
					<Select.Trigger
						size="sm"
						className="w-full text-xs"
						style={{ borderRadius: "var(--radius)" }}
					>
						<Select.Value />
					</Select.Trigger>
					<Select.Content alignItemWithTrigger={false}>
						{CURRENCY_ITEMS.map((item) => (
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
			</div>

			<div className="space-y-2">
				<div className="flex items-baseline justify-between">
					<span className="text-xs font-medium text-foreground">
						Minimum Payout
					</span>
					<span className="text-base font-semibold font-mono text-foreground">
						${payoutSlider[0].toLocaleString()}.00
					</span>
				</div>
				<Slider.Root
					value={payoutSlider}
					onValueChange={(v) =>
						setPayoutSlider(Array.isArray(v) ? v : [v])
					}
					min={50}
					max={10000}
					step={50}
				>
					<Slider.Control>
						<Slider.Track>
							<Slider.Indicator />
							<Slider.Thumb />
						</Slider.Track>
					</Slider.Control>
				</Slider.Root>
				<div className="flex justify-between font-mono text-[10px] text-muted-foreground">
					<span>$50 (MIN)</span>
					<span>$10,000 (MAX)</span>
				</div>
			</div>

			<div className="space-y-1.5">
				<label
					htmlFor="preview-payout-notes"
					className="text-xs font-medium text-foreground block"
				>
					Notes
				</label>
				<textarea
					id="preview-payout-notes"
					rows={2}
					placeholder="Add any notes for this payout configuration..."
					className="w-full border border-input bg-background p-2.5 text-xs text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none"
					style={{ borderRadius: "var(--radius)" }}
				/>
			</div>

			<Button
				size="sm"
				variant="default"
				className="w-full text-xs"
				style={{ borderRadius: "var(--radius)" }}
			>
				Save Threshold
			</Button>
		</div>
	);
}
