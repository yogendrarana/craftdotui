"use client";

import * as React from "react";
import { ArrowLeftRight, Moon, RefreshCw, Search, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import {
	TOKEN_DEFINITIONS,
	type ThemeTokens,
	type TokenDefinition,
} from "@/config/themes";
import type { ColorFormat } from "@/lib/theme-utils";
import { ColorTokenInput } from "@/components/theming/color-token-input";
import { NonColorTokenInput } from "@/components/theming/non-color-token-input";
import { Accordion } from "@craftdotui/baseui/components/accordion";
import { Button } from "@craftdotui/baseui/components/button";
import { Input } from "@craftdotui/baseui/components/input";
import { ScrollArea } from "@craftdotui/baseui/components/scroll-area";
import { Select } from "@craftdotui/baseui/components/select";
import { Tabs } from "@craftdotui/baseui/components/tabs";

export type StudioTab = "colors" | "typography" | "dimensions" | "shadows";

const COLOR_FORMAT_OPTIONS: Array<{ label: string; value: ColorFormat }> = [
	{ label: "OKLCH", value: "oklch" },
	{ label: "HEX", value: "hex" },
	{ label: "HSL", value: "hsl" },
	{ label: "RGB", value: "rgb" },
];

export interface ColorSectionGroup {
	id: string;
	title: string;
	keys: string[];
	canSyncFromBase?: boolean;
}

export const COLOR_SECTION_GROUPS: ColorSectionGroup[] = [
	{
		id: "primary",
		title: "Primary",
		keys: ["--primary", "--primary-foreground"],
	},
	{
		id: "secondary",
		title: "Secondary",
		keys: ["--secondary", "--secondary-foreground"],
	},
	{
		id: "accent",
		title: "Accent",
		keys: ["--accent", "--accent-foreground"],
	},
	{
		id: "base",
		title: "Base",
		keys: ["--background", "--foreground"],
	},
	{
		id: "card",
		title: "Card",
		keys: ["--card", "--card-foreground"],
	},
	{
		id: "popover",
		title: "Popover",
		keys: ["--popover", "--popover-foreground"],
	},
	{
		id: "muted",
		title: "Muted",
		keys: ["--muted", "--muted-foreground"],
	},
	{
		id: "destructive",
		title: "Destructive",
		keys: ["--destructive", "--destructive-foreground"],
	},
	{
		id: "semantic",
		title: "Semantic Extensions",
		keys: [
			"--success",
			"--success-foreground",
			"--warning",
			"--warning-foreground",
			"--info",
			"--info-foreground",
			"--invert",
			"--invert-foreground",
			"--backdrop",
		],
	},
	{
		id: "border-input",
		title: "Border & Input",
		keys: ["--border", "--input", "--ring"],
	},
	{
		id: "chart",
		title: "Chart",
		keys: ["--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5"],
	},
	{
		id: "sidebar",
		title: "Sidebar",
		canSyncFromBase: true,
		keys: [
			"--sidebar",
			"--sidebar-foreground",
			"--sidebar-primary",
			"--sidebar-primary-foreground",
			"--sidebar-accent",
			"--sidebar-accent-foreground",
			"--sidebar-border",
			"--sidebar-ring",
		],
	},
];

interface ThemeTokenSidebarProps {
	activeMode: "light" | "dark";
	onModeChange: (mode: "light" | "dark") => void;
	activeTab: StudioTab;
	onTabChange: (tab: StudioTab) => void;
	colorFormat: ColorFormat;
	onColorFormatChange: (fmt: ColorFormat) => void;
	searchQuery: string;
	onSearchQueryChange: (q: string) => void;
	openSections: string[];
	onOpenSectionsChange: (sections: string[]) => void;
	currentTokens: ThemeTokens;
	defaultTokensForMode: ThemeTokens;
	onUpdateToken: (key: string, value: string) => void;
	onUpdateSharedToken: (key: string, value: string) => void;
	onSyncModeToOther: () => void;
	onSyncSidebarFromBase: () => void;
}

export function ThemeTokenSidebar({
	activeMode,
	onModeChange,
	activeTab,
	onTabChange,
	colorFormat,
	onColorFormatChange,
	searchQuery,
	onSearchQueryChange,
	openSections,
	onOpenSectionsChange,
	currentTokens,
	defaultTokensForMode,
	onUpdateToken,
	onUpdateSharedToken,
	onSyncModeToOther,
	onSyncSidebarFromBase,
}: ThemeTokenSidebarProps) {
	const tokenDefMap = React.useMemo(() => {
		const map = new Map<string, TokenDefinition>();
		for (const def of TOKEN_DEFINITIONS) {
			map.set(def.key, def);
		}
		return map;
	}, []);

	const typographyTokens = React.useMemo(
		() => TOKEN_DEFINITIONS.filter((t) => t.category === "typography"),
		[],
	);

	const dimensionTokens = React.useMemo(
		() => TOKEN_DEFINITIONS.filter((t) => t.category === "dimensions"),
		[],
	);

	const shadowPrimitiveTokens = React.useMemo(
		() =>
			TOKEN_DEFINITIONS.filter(
				(t) => t.category === "shadows" && t.type !== "shadow",
			),
		[],
	);

	const shadowScaleTokens = React.useMemo(
		() =>
			TOKEN_DEFINITIONS.filter(
				(t) => t.category === "shadows" && t.type === "shadow",
			),
		[],
	);

	const filteredColorGroups = React.useMemo(() => {
		const q = searchQuery.trim().toLowerCase();
		if (!q) return COLOR_SECTION_GROUPS;

		return COLOR_SECTION_GROUPS.map((group) => {
			const matchingKeys = group.keys.filter((key) => {
				const def = tokenDefMap.get(key);
				return (
					key.toLowerCase().includes(q) ||
					group.title.toLowerCase().includes(q) ||
					(def?.label.toLowerCase().includes(q) ?? false)
				);
			});
			return { ...group, keys: matchingKeys };
		}).filter((g) => g.keys.length > 0);
	}, [searchQuery, tokenDefMap]);

	const effectiveOpenSections = React.useMemo(() => {
		if (searchQuery.trim()) {
			return filteredColorGroups.map((g) => g.id);
		}
		return openSections;
	}, [searchQuery, filteredColorGroups, openSections]);

	return (
		<div className="flex flex-col h-full min-h-0 bg-background min-w-0">
			{/* Mode Switcher + Sync */}
			<div className="border-b border-border bg-muted/30 px-3.5 py-2.5 flex items-center justify-between gap-2 shrink-0">
				<div className="flex items-center rounded-lg border border-border bg-background p-0.5 gap-0.5">
					<Button
						size="xs"
						variant={activeMode === "light" ? "default" : "ghost"}
						onClick={() => onModeChange("light")}
						className={cn(
							"h-6 px-2 gap-1.5 font-mono text-xs",
							activeMode !== "light" &&
								"text-muted-foreground hover:text-foreground",
						)}
					>
						<Sun className="size-3" />
						<span>:root</span>
					</Button>
					<Button
						size="xs"
						variant={activeMode === "dark" ? "default" : "ghost"}
						onClick={() => onModeChange("dark")}
						className={cn(
							"h-6 px-2 gap-1.5 font-mono text-xs",
							activeMode !== "dark" &&
								"text-muted-foreground hover:text-foreground",
						)}
					>
						<Moon className="size-3" />
						<span>.dark</span>
					</Button>
				</div>

				<Button
					size="xs"
					variant="outline"
					onClick={onSyncModeToOther}
					title={`Copy shared brand & semantic tokens from ${activeMode} to ${activeMode === "light" ? "dark" : "light"} mode`}
					className="h-7 px-2 gap-1 font-mono text-[11px] text-muted-foreground hover:text-foreground"
				>
					<ArrowLeftRight className="size-3" />
					<span>
						Sync → {activeMode === "light" ? "Dark" : "Light"}
					</span>
				</Button>
			</div>

			{/* Top-level Category Tabs: Colors | Typography | Radius | Shadows */}
			<Tabs.Root
				value={activeTab}
				onValueChange={(val) => onTabChange(val as StudioTab)}
				className="flex flex-col flex-1 min-h-0 gap-0"
			>
				<div className="border-b border-border bg-muted/15 px-3 pt-1.5 shrink-0">
					<Tabs.List
						variant="ghost"
						tabSize="sm"
						className="data-[orientation=horizontal]:border-b-0 justify-start gap-0.5"
					>
						<Tabs.Tab value="colors" className="px-2.5">
							Colors
						</Tabs.Tab>
						<Tabs.Tab value="typography" className="px-2.5">
							Typography
						</Tabs.Tab>
						<Tabs.Tab value="dimensions" className="px-2.5">
							Radius
						</Tabs.Tab>
						<Tabs.Tab value="shadows" className="px-2.5">
							Shadows
						</Tabs.Tab>
					</Tabs.List>
				</div>

				{/* TAB 1: COLORS */}
				<Tabs.Panel
					value="colors"
					className="flex flex-col flex-1 min-h-0 overflow-hidden"
				>
					{/* Search + Color Format Select */}
					<div className="border-b border-border bg-muted/20 p-3 flex items-center gap-2 shrink-0">
						<div className="relative flex-1 min-w-0">
							<Search className="size-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
							<Input
								size="sm"
								value={searchQuery}
								onChange={(e) =>
									onSearchQueryChange(e.target.value)
								}
								placeholder="Search colors..."
								className="pl-8 font-mono text-xs h-8"
							/>
						</div>

						<Select.Root
							items={COLOR_FORMAT_OPTIONS}
							value={colorFormat}
							onValueChange={(val) => {
								if (val)
									onColorFormatChange(val as ColorFormat);
							}}
						>
							<Select.Trigger
								size="sm"
								className="w-24 h-8 font-mono text-xs shrink-0 px-2.5"
							>
								<Select.Value />
							</Select.Trigger>
							<Select.Content alignItemWithTrigger={false}>
								{COLOR_FORMAT_OPTIONS.map((opt) => (
									<Select.Item
										key={opt.value}
										value={opt.value}
										className="font-mono text-xs"
									>
										{opt.label}
									</Select.Item>
								))}
							</Select.Content>
						</Select.Root>
					</div>

					{/* Isolated ScrollArea with overscroll-contain so page doesn't scroll */}
					<ScrollArea.Root className="flex-1 min-h-0 p-0">
						<ScrollArea.Panel
							viewportProps={{ className: "overscroll-contain" }}
							contentProps={{
								className: "p-3.5",
							}}
						>
							{filteredColorGroups.length === 0 ? (
								<div className="py-12 text-center space-y-2">
									<p className="text-sm font-medium text-foreground">
										No matching color tokens
									</p>
									<Button
										size="xs"
										variant="outline"
										onClick={() => onSearchQueryChange("")}
									>
										Clear Search
									</Button>
								</div>
							) : (
								<Accordion.Root
									multiple
									value={effectiveOpenSections}
									onValueChange={(val) =>
										onOpenSectionsChange(val as string[])
									}
									className="space-y-2"
								>
									{filteredColorGroups.map((group) => (
										<Accordion.Item
											key={group.id}
											value={group.id}
											className="rounded-xl border border-border bg-muted/15 px-3 not-last:border-b"
										>
											<div className="flex items-center justify-between gap-2">
												<Accordion.Trigger className="py-2.5 text-xs font-mono uppercase tracking-wider text-foreground hover:no-underline">
													<div className="flex items-center gap-2">
														<span className="flex items-center -space-x-1">
															{group.keys
																.slice(0, 3)
																.map((k) => (
																	<span
																		key={k}
																		className="size-3 rounded-full border border-border"
																		style={{
																			backgroundColor:
																				currentTokens[
																					k
																				],
																		}}
																	/>
																))}
														</span>
														<span>
															{group.title}
														</span>
														<span className="text-[10px] text-muted-foreground">
															({group.keys.length}
															)
														</span>
													</div>
												</Accordion.Trigger>

												{group.canSyncFromBase && (
													<Button
														size="xs"
														variant="outline"
														onClick={(e) => {
															e.stopPropagation();
															onSyncSidebarFromBase();
														}}
														title="Sync Sidebar tokens with Base, Primary, Accent, and Border tokens"
														className="h-6 px-2 gap-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-foreground shrink-0 mr-1"
													>
														<RefreshCw className="size-2.5" />
														<span>Sync</span>
													</Button>
												)}
											</div>

											<Accordion.Panel innerClassName="pt-1 pb-3 space-y-2">
												{group.keys.map((key) => {
													const token =
														tokenDefMap.get(key);
													if (!token) return null;
													const val =
														currentTokens[
															token.key
														] ?? "";
													const defVal =
														defaultTokensForMode[
															token.key
														] ?? "";

													return (
														<ColorTokenInput
															key={`${activeMode}-${token.key}`}
															token={token}
															value={val}
															defaultValue={
																defVal
															}
															colorFormat={
																colorFormat
															}
															onChange={(
																nextVal,
															) =>
																onUpdateToken(
																	token.key,
																	nextVal,
																)
															}
															onReset={() =>
																onUpdateToken(
																	token.key,
																	defVal,
																)
															}
														/>
													);
												})}
											</Accordion.Panel>
										</Accordion.Item>
									))}
								</Accordion.Root>
							)}
						</ScrollArea.Panel>
					</ScrollArea.Root>
				</Tabs.Panel>

				{/* TAB 2: TYPOGRAPHY */}
				<Tabs.Panel
					value="typography"
					className="flex flex-col flex-1 min-h-0 overflow-hidden"
				>
					<ScrollArea.Root className="flex-1 min-h-0 p-0">
						<ScrollArea.Panel
							viewportProps={{ className: "overscroll-contain" }}
							contentProps={{
								className: "p-3.5 space-y-3",
							}}
						>
							{typographyTokens.map((token) => {
								const val = currentTokens[token.key] ?? "";
								const defVal =
									defaultTokensForMode[token.key] ?? "";
								return (
									<NonColorTokenInput
										key={token.key}
										token={token}
										value={val}
										defaultValue={defVal}
										onChange={(nextVal) =>
											onUpdateSharedToken(
												token.key,
												nextVal,
											)
										}
										onReset={() =>
											onUpdateSharedToken(
												token.key,
												defVal,
											)
										}
									/>
								);
							})}
						</ScrollArea.Panel>
					</ScrollArea.Root>
				</Tabs.Panel>

				{/* TAB 3: RADIUS & SPACING */}
				<Tabs.Panel
					value="dimensions"
					className="flex flex-col flex-1 min-h-0 overflow-hidden"
				>
					<ScrollArea.Root className="flex-1 min-h-0 p-0">
						<ScrollArea.Panel
							viewportProps={{ className: "overscroll-contain" }}
							contentProps={{
								className: "p-3.5 space-y-3",
							}}
						>
							{dimensionTokens.map((token) => {
								const val = currentTokens[token.key] ?? "";
								const defVal =
									defaultTokensForMode[token.key] ?? "";
								return (
									<NonColorTokenInput
										key={token.key}
										token={token}
										value={val}
										defaultValue={defVal}
										onChange={(nextVal) =>
											onUpdateSharedToken(
												token.key,
												nextVal,
											)
										}
										onReset={() =>
											onUpdateSharedToken(
												token.key,
												defVal,
											)
										}
									/>
								);
							})}
						</ScrollArea.Panel>
					</ScrollArea.Root>
				</Tabs.Panel>

				{/* TAB 4: SHADOWS */}
				<Tabs.Panel
					value="shadows"
					className="flex flex-col flex-1 min-h-0 overflow-hidden"
				>
					<ScrollArea.Root className="flex-1 min-h-0 p-0">
						<ScrollArea.Panel
							viewportProps={{ className: "overscroll-contain" }}
							contentProps={{
								className: "p-3.5 space-y-4",
							}}
						>
							{/* Shadow Primitives (--shadow-color on top) */}
							<div className="space-y-2.5">
								<span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
									Shadow Primitives
								</span>
								{shadowPrimitiveTokens.map((token) => {
									const val = currentTokens[token.key] ?? "";
									const defVal =
										defaultTokensForMode[token.key] ?? "";

									if (token.type === "color") {
										return (
											<ColorTokenInput
												key={`${activeMode}-${token.key}`}
												token={token}
												value={val}
												defaultValue={defVal}
												colorFormat={colorFormat}
												onChange={(nextVal) =>
													onUpdateToken(
														token.key,
														nextVal,
													)
												}
												onReset={() =>
													onUpdateToken(
														token.key,
														defVal,
													)
												}
											/>
										);
									}

									return (
										<NonColorTokenInput
											key={`${activeMode}-${token.key}`}
											token={token}
											value={val}
											defaultValue={defVal}
											onChange={(nextVal) =>
												onUpdateToken(
													token.key,
													nextVal,
												)
											}
											onReset={() =>
												onUpdateToken(token.key, defVal)
											}
										/>
									);
								})}
							</div>

							{/* Clear Border Divider */}
							<div className="border-t border-border pt-4 space-y-2.5">
								<span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
									Shadow Scale
								</span>
								{shadowScaleTokens.map((token) => {
									const val = currentTokens[token.key] ?? "";
									const defVal =
										defaultTokensForMode[token.key] ?? "";

									return (
										<NonColorTokenInput
											key={`${activeMode}-${token.key}`}
											token={token}
											value={val}
											defaultValue={defVal}
											onChange={(nextVal) =>
												onUpdateToken(
													token.key,
													nextVal,
												)
											}
											onReset={() =>
												onUpdateToken(token.key, defVal)
											}
										/>
									);
								})}
							</div>
						</ScrollArea.Panel>
					</ScrollArea.Root>
				</Tabs.Panel>
			</Tabs.Root>
		</div>
	);
}
