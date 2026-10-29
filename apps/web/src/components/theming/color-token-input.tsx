"use client";

import * as React from "react";
import { RotateCcw } from "lucide-react";

import {
	type ColorFormat,
	colorToHexForPicker,
	formatColor,
	formatOklch,
	parseAnyColorToOklch,
} from "@/lib/theme-utils";
import type { TokenDefinition } from "@/config/themes";
import { Button } from "@craftdotui/baseui/components/button";
import { Input } from "@craftdotui/baseui/components/input";

interface ColorTokenInputProps {
	token: TokenDefinition;
	value: string;
	defaultValue: string;
	colorFormat: ColorFormat;
	onChange: (value: string) => void;
	onReset: () => void;
}

export function ColorTokenInput({
	token,
	value,
	defaultValue,
	colorFormat,
	onChange,
	onReset,
}: ColorTokenInputProps) {
	const formattedDisplay = React.useMemo(
		() => formatColor(value, colorFormat),
		[value, colorFormat],
	);

	const [inputValue, setInputValue] = React.useState(formattedDisplay);

	React.useEffect(() => {
		setInputValue(formattedDisplay);
	}, [formattedDisplay]);

	const oklch = React.useMemo(
		() => parseAnyColorToOklch(value) ?? { l: 0.5, c: 0, h: 0 },
		[value],
	);

	const hexValue = React.useMemo(() => colorToHexForPicker(value), [value]);

	const isModified = value.trim() !== defaultValue.trim();

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const next = e.target.value;
		setInputValue(next);
		const parsed = parseAnyColorToOklch(next);
		if (parsed) {
			onChange(formatOklch(parsed));
		} else if (next.startsWith("var(") || next.startsWith("oklch(")) {
			onChange(next);
		}
	};

	const handleTextBlur = () => {
		const parsed = parseAnyColorToOklch(inputValue);
		if (parsed) {
			const canonical = formatOklch(parsed);
			onChange(canonical);
			setInputValue(formatColor(canonical, colorFormat));
		} else {
			setInputValue(formattedDisplay);
		}
	};

	const handleNativeColorChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const hex = e.target.value;
		const parsed = parseAnyColorToOklch(hex);
		if (parsed) {
			if (oklch.alpha !== undefined && oklch.alpha < 1) {
				parsed.alpha = oklch.alpha;
			}
			onChange(formatOklch(parsed));
		}
	};

	return (
		<div className="group rounded-lg border border-border/80 bg-background p-2.5 transition-colors hover:border-border">
			{/* Top Row: Title on Left, Variable Name + Reset on Right */}
			<div className="flex items-center justify-between gap-2 mb-1.5">
				<span className="text-xs font-medium text-foreground truncate">
					{token.label}
				</span>

				<div className="flex items-center gap-1.5 shrink-0">
					<code className="rounded-xs border border-border bg-muted/40 px-1.5 py-0.2 font-mono text-[10px] text-muted-foreground">
						{token.key}
					</code>

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

			{/* Bottom Row: Native Color Picker Swatch + Value Input */}
			<div className="flex items-center gap-2">
				<label
					title={`Click to pick color for ${token.key}`}
					className="relative size-8 shrink-0 rounded-md border border-border shadow-2xs overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-ring"
					style={{
						backgroundImage:
							"repeating-conic-gradient(#80808025 0% 25%, transparent 0% 50%)",
						backgroundSize: "8px 8px",
					}}
				>
					<span
						className="absolute inset-0 block"
						style={{ backgroundColor: value }}
					/>
					<input
						type="color"
						value={hexValue}
						onChange={handleNativeColorChange}
						aria-label={`Choose color for ${token.label}`}
						className="absolute inset-0 size-full opacity-0 cursor-pointer"
					/>
				</label>

				<div className="flex-1 min-w-0">
					<Input
						size="sm"
						value={inputValue}
						onChange={handleTextChange}
						onBlur={handleTextBlur}
						placeholder={defaultValue}
						aria-label={`${token.label} color value`}
						className="font-mono text-xs h-8 px-2.5 bg-muted/25 focus:bg-background"
					/>
				</div>
			</div>
		</div>
	);
}
