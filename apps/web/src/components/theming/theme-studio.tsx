"use client";

import * as React from "react";

import {
	DEFAULT_DARK_TOKENS,
	DEFAULT_LIGHT_TOKENS,
	THEME_PRESETS,
	TOKEN_DEFINITIONS,
	type ThemePreset,
	type ThemeTokens,
} from "@/config/themes";
import type { ColorFormat } from "@/lib/theme-utils";
import { CornerCrosshairs } from "@/components/grid-system";
import { ThemeHeaderToolbar } from "@/components/theming/theme-header-toolbar";
import {
	COLOR_SECTION_GROUPS,
	type StudioTab,
	ThemeTokenSidebar,
} from "@/components/theming/theme-token-sidebar";
import { ThemePreviewCanvas } from "@/components/theming/theme-preview-canvas";

const STORAGE_KEY = "craftui:theme-studio:v1";

export function ThemeStudio() {
	const [activePresetId, setActivePresetId] =
		React.useState<string>("craft-default");
	const [activeMode, setActiveMode] = React.useState<"light" | "dark">(
		"light",
	);
	const [colorFormat, setColorFormat] = React.useState<ColorFormat>("oklch");
	const [activeTab, setActiveTab] = React.useState<StudioTab>("colors");
	const [searchQuery, setSearchQuery] = React.useState("");
	const [openSections, setOpenSections] = React.useState<string[]>([
		"primary",
	]);

	const [lightTokens, setLightTokens] = React.useState<ThemeTokens>(() => ({
		...DEFAULT_LIGHT_TOKENS,
	}));
	const [darkTokens, setDarkTokens] = React.useState<ThemeTokens>(() => ({
		...DEFAULT_DARK_TOKENS,
	}));

	// Hydrate persisted custom theme from localStorage on mount
	React.useEffect(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			const parsed = JSON.parse(raw);
			if (parsed.light && parsed.dark) {
				setLightTokens({ ...DEFAULT_LIGHT_TOKENS, ...parsed.light });
				setDarkTokens({ ...DEFAULT_DARK_TOKENS, ...parsed.dark });
			}
			if (parsed.presetId) {
				setActivePresetId(parsed.presetId);
			}
		} catch {
			// Ignore malformed storage
		}
	}, []);

	// Save changes to localStorage
	React.useEffect(() => {
		try {
			localStorage.setItem(
				STORAGE_KEY,
				JSON.stringify({
					presetId: activePresetId,
					light: lightTokens,
					dark: darkTokens,
				}),
			);
		} catch {
			// Ignore storage quota errors
		}
	}, [activePresetId, lightTokens, darkTokens]);

	const activePreset: ThemePreset = React.useMemo(
		() =>
			THEME_PRESETS.find((p) => p.id === activePresetId) ??
			THEME_PRESETS[0],
		[activePresetId],
	);

	const currentTokens = activeMode === "light" ? lightTokens : darkTokens;
	const defaultTokensForMode =
		activeMode === "light" ? activePreset.light : activePreset.dark;

	const updateToken = React.useCallback(
		(key: string, value: string) => {
			if (activeMode === "light") {
				setLightTokens((prev) => ({ ...prev, [key]: value }));
			} else {
				setDarkTokens((prev) => ({ ...prev, [key]: value }));
			}
		},
		[activeMode],
	);

	const updateSharedToken = React.useCallback(
		(key: string, value: string) => {
			setLightTokens((prev) => ({ ...prev, [key]: value }));
			setDarkTokens((prev) => ({ ...prev, [key]: value }));
		},
		[],
	);

	const handleSelectPresetById = (presetId: string | null) => {
		if (!presetId) return;
		const preset = THEME_PRESETS.find((p) => p.id === presetId);
		if (!preset) return;
		setActivePresetId(preset.id);
		setLightTokens({ ...preset.light });
		setDarkTokens({ ...preset.dark });
	};

	const handleResetAll = () => {
		setLightTokens({ ...activePreset.light });
		setDarkTokens({ ...activePreset.dark });
	};

	const handleSyncCurrentModeToOther = () => {
		const sharedKeys = [
			"--primary",
			"--primary-foreground",
			"--destructive",
			"--destructive-foreground",
			"--success",
			"--success-foreground",
			"--warning",
			"--warning-foreground",
			"--info",
			"--info-foreground",
			"--ring",
			"--radius",
			"--spacing",
			"--font-sans",
			"--font-serif",
			"--font-mono",
			"--tracking-normal",
			"--chart-1",
			"--chart-2",
			"--chart-3",
			"--chart-4",
			"--chart-5",
		];

		if (activeMode === "light") {
			setDarkTokens((prev) => {
				const next = { ...prev };
				for (const k of sharedKeys) {
					if (lightTokens[k]) next[k] = lightTokens[k];
				}
				return next;
			});
		} else {
			setLightTokens((prev) => {
				const next = { ...prev };
				for (const k of sharedKeys) {
					if (darkTokens[k]) next[k] = darkTokens[k];
				}
				return next;
			});
		}
	};

	// Sync Sidebar variables from their Base/Primary/Accent/Border counterparts
	const handleSyncSidebarFromBase = () => {
		const syncPairs: Array<[string, string]> = [
			["--sidebar", "--background"],
			["--sidebar-foreground", "--foreground"],
			["--sidebar-primary", "--primary"],
			["--sidebar-primary-foreground", "--primary-foreground"],
			["--sidebar-accent", "--accent"],
			["--sidebar-accent-foreground", "--accent-foreground"],
			["--sidebar-border", "--border"],
			["--sidebar-ring", "--ring"],
		];

		const applySync = (prev: ThemeTokens) => {
			const next = { ...prev };
			for (const [sidebarKey, baseKey] of syncPairs) {
				if (prev[baseKey]) {
					next[sidebarKey] = prev[baseKey];
				}
			}
			return next;
		};

		if (activeMode === "light") {
			setLightTokens(applySync);
		} else {
			setDarkTokens(applySync);
		}

		if (!openSections.includes("sidebar")) {
			setOpenSections((prev) => [...prev, "sidebar"]);
		}
	};

	const handleJumpToToken = (tokenKey: string) => {
		const found = TOKEN_DEFINITIONS.find((t) => t.key === tokenKey);
		if (!found) return;

		if (found.category === "typography") {
			setActiveTab("typography");
		} else if (found.category === "dimensions") {
			setActiveTab("dimensions");
		} else if (found.category === "shadows") {
			setActiveTab("shadows");
		} else {
			setActiveTab("colors");
			const group = COLOR_SECTION_GROUPS.find((g) =>
				g.keys.includes(tokenKey),
			);
			if (group && !openSections.includes(group.id)) {
				setOpenSections((prev) => [...prev, group.id]);
			}
			setSearchQuery(tokenKey);
		}
	};

	const modifiedCount = React.useMemo(() => {
		let count = 0;
		for (const def of TOKEN_DEFINITIONS) {
			if (
				(lightTokens[def.key] ?? "").trim() !==
					(activePreset.light[def.key] ?? "").trim() ||
				(darkTokens[def.key] ?? "").trim() !==
					(activePreset.dark[def.key] ?? "").trim()
			) {
				count++;
			}
		}
		return count;
	}, [lightTokens, darkTokens, activePreset]);

	return (
		<section className="flex-1 min-h-0 w-full border-b border-border bg-background flex flex-col overflow-hidden">
			<div className="flex-1 min-h-0 max-w-7xl w-full mx-auto border-x border-border relative flex flex-col overflow-hidden">
				<CornerCrosshairs top={false} bottom />
				{/* Hero Header + Preset & Action Toolbar (Fixed at Top) */}
				<div className="shrink-0">
					<ThemeHeaderToolbar
						activePreset={activePreset}
						activePresetId={activePresetId}
						modifiedCount={modifiedCount}
						lightTokens={lightTokens}
						darkTokens={darkTokens}
						onSelectPresetById={handleSelectPresetById}
						onResetAll={handleResetAll}
						onImportTheme={(light, dark) => {
							setLightTokens(light);
							setDarkTokens(dark);
						}}
					/>
				</div>

				{/* Split Workbench: Fills Remaining Viewport Height; Left & Right Scroll Independently */}
				<div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[360px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-border overflow-hidden">
					{/* LEFT COLUMN: Compact Token Sidebar */}
					<ThemeTokenSidebar
						activeMode={activeMode}
						onModeChange={setActiveMode}
						activeTab={activeTab}
						onTabChange={setActiveTab}
						colorFormat={colorFormat}
						onColorFormatChange={setColorFormat}
						searchQuery={searchQuery}
						onSearchQueryChange={setSearchQuery}
						openSections={openSections}
						onOpenSectionsChange={setOpenSections}
						currentTokens={currentTokens}
						defaultTokensForMode={defaultTokensForMode}
						onUpdateToken={updateToken}
						onUpdateSharedToken={updateSharedToken}
						onSyncModeToOther={handleSyncCurrentModeToOther}
						onSyncSidebarFromBase={handleSyncSidebarFromBase}
					/>

					{/* RIGHT COLUMN: Horizontally & Vertically Scrollable Preview Canvas */}
					<ThemePreviewCanvas
						activeMode={activeMode}
						lightTokens={lightTokens}
						darkTokens={darkTokens}
						onSelectToken={handleJumpToToken}
					/>
				</div>
			</div>
		</section>
	);
}
