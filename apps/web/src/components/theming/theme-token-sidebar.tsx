"use client";

import * as React from "react";
import { ArrowLeftRight, Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import {
	TOKEN_DEFINITIONS,
	type ThemeTokens,
	type TokenDefinition,
} from "@/config/themes";
import type { ColorFormat } from "@/lib/theme-utils";
import { ColorsTab } from "@/components/theming/sidebar-tabs/colors-tab";
import { DimensionsTab } from "@/components/theming/sidebar-tabs/dimensions-tab";
import { ShadowsTab } from "@/components/theming/sidebar-tabs/shadows-tab";
import {
	COLOR_SECTION_GROUPS,
	SEMANTIC_EXTENSION_GROUPS,
	type ColorSectionGroup,
} from "@/components/theming/sidebar-tabs/tab-constants";
import { TypographyTab } from "@/components/theming/sidebar-tabs/typography-tab";
import { Button } from "@craftdotui/baseui/components/button";
import { Tabs } from "@craftdotui/baseui/components/tabs";

export type StudioTab = "colors" | "typography" | "dimensions" | "shadows";

export {
	COLOR_SECTION_GROUPS,
	SEMANTIC_EXTENSION_GROUPS,
	type ColorSectionGroup,
};

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

	const filteredSemanticGroups = React.useMemo(() => {
		const q = searchQuery.trim().toLowerCase();
		if (!q) return SEMANTIC_EXTENSION_GROUPS;

		return SEMANTIC_EXTENSION_GROUPS.map((group) => {
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
			return [
				...filteredColorGroups.map((g) => g.id),
				...filteredSemanticGroups.map((g) => g.id),
			];
		}
		return openSections;
	}, [
		searchQuery,
		filteredColorGroups,
		filteredSemanticGroups,
		openSections,
	]);

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
					<ColorsTab
						activeMode={activeMode}
						searchQuery={searchQuery}
						onSearchQueryChange={onSearchQueryChange}
						colorFormat={colorFormat}
						onColorFormatChange={onColorFormatChange}
						openSections={openSections}
						onOpenSectionsChange={onOpenSectionsChange}
						currentTokens={currentTokens}
						defaultTokensForMode={defaultTokensForMode}
						tokenDefMap={tokenDefMap}
						filteredColorGroups={filteredColorGroups}
						filteredSemanticGroups={filteredSemanticGroups}
						effectiveOpenSections={effectiveOpenSections}
						onUpdateToken={onUpdateToken}
						onSyncSidebarFromBase={onSyncSidebarFromBase}
					/>
				</Tabs.Panel>

				{/* TAB 2: TYPOGRAPHY */}
				<Tabs.Panel
					value="typography"
					className="flex flex-col flex-1 min-h-0 overflow-hidden"
				>
					<TypographyTab
						tokens={typographyTokens}
						currentTokens={currentTokens}
						defaultTokensForMode={defaultTokensForMode}
						onUpdateSharedToken={onUpdateSharedToken}
					/>
				</Tabs.Panel>

				{/* TAB 3: RADIUS & SPACING */}
				<Tabs.Panel
					value="dimensions"
					className="flex flex-col flex-1 min-h-0 overflow-hidden"
				>
					<DimensionsTab
						tokens={dimensionTokens}
						currentTokens={currentTokens}
						defaultTokensForMode={defaultTokensForMode}
						onUpdateSharedToken={onUpdateSharedToken}
					/>
				</Tabs.Panel>

				{/* TAB 4: SHADOWS */}
				<Tabs.Panel
					value="shadows"
					className="flex flex-col flex-1 min-h-0 overflow-hidden"
				>
					<ShadowsTab
						activeMode={activeMode}
						colorFormat={colorFormat}
						primitiveTokens={shadowPrimitiveTokens}
						scaleTokens={shadowScaleTokens}
						currentTokens={currentTokens}
						defaultTokensForMode={defaultTokensForMode}
						onUpdateToken={onUpdateToken}
					/>
				</Tabs.Panel>
			</Tabs.Root>
		</div>
	);
}
