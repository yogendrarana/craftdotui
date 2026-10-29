"use client";

import * as React from "react";
import { RotateCcw } from "lucide-react";

import {
	THEME_PRESETS,
	type ThemePreset,
	type ThemeTokens,
} from "@/config/themes";
import { CornerCrosshairs } from "@/components/grid-system";
import { ThemeExportImportModal } from "@/components/theming/theme-export-import-modal";
import { Button } from "@craftdotui/baseui/components/button";
import { Select } from "@craftdotui/baseui/components/select";

interface ThemeHeaderToolbarProps {
	activePreset: ThemePreset;
	activePresetId: string;
	modifiedCount: number;
	lightTokens: ThemeTokens;
	darkTokens: ThemeTokens;
	onSelectPresetById: (presetId: string | null) => void;
	onResetAll: () => void;
	onImportTheme: (light: ThemeTokens, dark: ThemeTokens) => void;
}

export function ThemeHeaderToolbar({
	activePreset,
	activePresetId,
	modifiedCount,
	lightTokens,
	darkTokens,
	onSelectPresetById,
	onResetAll,
	onImportTheme,
}: ThemeHeaderToolbarProps) {
	const presetSelectItems = React.useMemo(
		() =>
			THEME_PRESETS.map((p) => ({
				label: p.name,
				value: p.id,
			})),
		[],
	);

	return (
		<>
			{/* 1. Hero Header Banner */}
			<div className="relative border-b border-border bg-background px-6 sm:px-8 py-5">
				<CornerCrosshairs top={false} bottom />
				<div className="space-y-1.5 max-w-2xl">
					<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
						Theme Studio
					</h1>
					<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
						Configure, test, and export{" "}
						<span className="text-foreground font-medium">
							shadcn/ui
						</span>{" "}
						compatible design tokens and{" "}
						<span className="text-foreground font-medium">
							Craft UI semantic extensions
						</span>
						. Built exclusively for{" "}
						<span className="text-foreground font-medium">
							Tailwind CSS v4
						</span>{" "}
						- changes are strictly scoped to the interactive preview
						canvas.
					</p>
				</div>
			</div>

			{/* 2. Action Toolbar Row: Preset Select on Left, Action Buttons on Right */}
			<div className="relative border-b border-border bg-muted/20 px-6 sm:px-8 py-3">
				<CornerCrosshairs top={false} bottom />
				<div className="flex flex-wrap items-center justify-between gap-3">
					{/* Left: Preset Select Dropdown */}
					<div className="flex items-center gap-2.5">
						<span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground hidden sm:inline">
							Preset:
						</span>
						<Select.Root
							items={presetSelectItems}
							value={activePresetId}
							onValueChange={onSelectPresetById}
						>
							<Select.Trigger
								size="sm"
								className="w-52 sm:w-60 h-8 font-medium text-xs"
							>
								<div className="flex items-center gap-2 truncate">
									<span className="flex items-center -space-x-1 shrink-0">
										<span
											className="size-3 rounded-full border border-border"
											style={{
												backgroundColor:
													activePreset.light[
														"--primary"
													],
											}}
										/>
										<span
											className="size-3 rounded-full border border-border"
											style={{
												backgroundColor:
													activePreset.dark[
														"--background"
													],
											}}
										/>
										<span
											className="size-3 rounded-full border border-border"
											style={{
												backgroundColor:
													activePreset.light[
														"--accent"
													],
											}}
										/>
									</span>
									<Select.Value />
								</div>
							</Select.Trigger>
							<Select.Content alignItemWithTrigger={false}>
								{THEME_PRESETS.map((preset) => (
									<Select.Item
										key={preset.id}
										value={preset.id}
										className="text-xs"
									>
										<div className="flex items-center gap-2">
											<span className="flex items-center -space-x-1 shrink-0">
												<span
													className="size-3 rounded-full border border-border"
													style={{
														backgroundColor:
															preset.light[
																"--primary"
															],
													}}
												/>
												<span
													className="size-3 rounded-full border border-border"
													style={{
														backgroundColor:
															preset.dark[
																"--background"
															],
													}}
												/>
												<span
													className="size-3 rounded-full border border-border"
													style={{
														backgroundColor:
															preset.light[
																"--accent"
															],
													}}
												/>
											</span>
											<span>{preset.name}</span>
										</div>
									</Select.Item>
								))}
							</Select.Content>
						</Select.Root>
					</div>

					{/* Right: Reset, Import, Export */}
					<div className="flex flex-wrap items-center gap-2">
						<Button
							size="sm"
							variant="outline"
							onClick={onResetAll}
							disabled={modifiedCount === 0}
							className="gap-1.5 font-mono text-xs"
						>
							<RotateCcw className="size-3.5" />
							<span>
								Reset
								{modifiedCount > 0 ? ` (${modifiedCount})` : ""}
							</span>
						</Button>

						<ThemeExportImportModal
							lightTokens={lightTokens}
							darkTokens={darkTokens}
							presetName={activePreset.name}
							onImportTheme={onImportTheme}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
