"use client";

import * as React from "react";
import { RotateCcw } from "lucide-react";

import {
	FONT_MONO_PRESETS,
	FONT_SANS_PRESETS,
	FONT_SERIF_PRESETS,
	type TokenDefinition,
} from "@/config/themes";
import { Button } from "@craftdotui/baseui/components/button";
import { Input } from "@craftdotui/baseui/components/input";
import { Select } from "@craftdotui/baseui/components/select";

interface NonColorTokenInputProps {
	token: TokenDefinition;
	value: string;
	defaultValue: string;
	onChange: (value: string) => void;
	onReset: () => void;
}

export function NonColorTokenInput({
	token,
	value,
	defaultValue,
	onChange,
	onReset,
}: NonColorTokenInputProps) {
	const isModified = value.trim() !== defaultValue.trim();

	const fontPresets =
		token.key === "--font-sans"
			? FONT_SANS_PRESETS
			: token.key === "--font-mono"
				? FONT_MONO_PRESETS
				: token.key === "--font-serif"
					? FONT_SERIF_PRESETS
					: null;

	const selectedFontPreset = React.useMemo(() => {
		if (!fontPresets) return null;
		const match = fontPresets.find((fp) => fp.value === value);
		return match ? match.value : "custom";
	}, [fontPresets, value]);

	const fontSelectItems = React.useMemo(() => {
		if (!fontPresets) return [];
		return [
			...fontPresets.map((fp) => ({ label: fp.label, value: fp.value })),
			{ label: "Custom Stack", value: "custom" },
		];
	}, [fontPresets]);

	return (
		<div className="rounded-lg border border-border/80 bg-background p-2.5 transition-colors hover:border-border space-y-2">
			{/* Top Row: Title (--variable) on Left, Select (for fonts) + Reset on Right */}
			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center gap-1.5 min-w-0">
					<span className="text-xs font-medium text-foreground truncate">
						{token.label}
					</span>
					<code className="rounded-xs border border-border bg-muted/40 px-1.5 py-0.2 font-mono text-[10px] text-muted-foreground shrink-0">
						{token.key}
					</code>
				</div>

				<div className="flex items-center gap-1.5 shrink-0">
					{fontPresets && (
						<Select.Root
							items={fontSelectItems}
							value={selectedFontPreset}
							onValueChange={(val) => {
								if (val && val !== "custom") {
									onChange(val);
								}
							}}
						>
							<Select.Trigger
								size="sm"
								className="w-36 h-7 text-xs px-2"
							>
								<Select.Value />
							</Select.Trigger>
							<Select.Content alignItemWithTrigger={false}>
								{fontSelectItems.map((item) => (
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
					)}

					{isModified && (
						<Button
							variant="ghost"
							size="icon-xs"
							onClick={onReset}
							title={`Reset ${token.key} to default (${defaultValue})`}
							className="size-5 rounded-xs text-muted-foreground hover:text-foreground"
						>
							<RotateCcw className="size-3" />
						</Button>
					)}
				</div>
			</div>

			{/* Bottom Row: Input Field for Direct Typability */}
			<Input
				size="sm"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={defaultValue}
				className="font-mono text-xs h-8 px-2.5 bg-muted/25 focus:bg-background"
			/>
		</div>
	);
}
