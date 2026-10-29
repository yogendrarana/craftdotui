"use client";

import * as React from "react";
import { Layers, Palette } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ThemeTokens } from "@/config/themes";
import { Button } from "@craftdotui/baseui/components/button";
import { ScrollArea } from "@craftdotui/baseui/components/scroll-area";
import { ComponentShowcaseCanvas } from "@/components/theming/preview-components/component-showcase-canvas";
import { TokenMatrixCanvas } from "@/components/theming/preview-components/token-matrix-canvas";

interface ThemePreviewCanvasProps {
	activeMode: "light" | "dark";
	lightTokens: ThemeTokens;
	darkTokens: ThemeTokens;
	onSelectToken?: (tokenKey: string) => void;
}

type PreviewView = "components" | "palette";
type BackdropPattern = "hatch" | "dots" | "plain";

export function buildScopedStyleObject(
	tokens: ThemeTokens,
): React.CSSProperties {
	const style: Record<string, string> = {};

	for (const [k, v] of Object.entries(tokens)) {
		style[k] = v;
	}

	const colorMappings: Array<[string, string]> = [
		["--color-background", "--background"],
		["--color-foreground", "--foreground"],
		["--color-card", "--card"],
		["--color-card-foreground", "--card-foreground"],
		["--color-popover", "--popover"],
		["--color-popover-foreground", "--popover-foreground"],
		["--color-primary", "--primary"],
		["--color-primary-foreground", "--primary-foreground"],
		["--color-secondary", "--secondary"],
		["--color-secondary-foreground", "--secondary-foreground"],
		["--color-muted", "--muted"],
		["--color-muted-foreground", "--muted-foreground"],
		["--color-accent", "--accent"],
		["--color-accent-foreground", "--accent-foreground"],
		["--color-destructive", "--destructive"],
		["--color-destructive-foreground", "--destructive-foreground"],
		["--color-success", "--success"],
		["--color-success-foreground", "--success-foreground"],
		["--color-warning", "--warning"],
		["--color-warning-foreground", "--warning-foreground"],
		["--color-info", "--info"],
		["--color-info-foreground", "--info-foreground"],
		["--color-invert", "--invert"],
		["--color-invert-foreground", "--invert-foreground"],
		["--color-backdrop", "--backdrop"],
		["--color-border", "--border"],
		["--color-input", "--input"],
		["--color-ring", "--ring"],
		["--color-sidebar", "--sidebar"],
		["--color-sidebar-foreground", "--sidebar-foreground"],
		["--color-sidebar-primary", "--sidebar-primary"],
		["--color-sidebar-primary-foreground", "--sidebar-primary-foreground"],
		["--color-sidebar-accent", "--sidebar-accent"],
		["--color-sidebar-accent-foreground", "--sidebar-accent-foreground"],
		["--color-sidebar-border", "--sidebar-border"],
		["--color-sidebar-ring", "--sidebar-ring"],
	];

	for (const [twKey, rawKey] of colorMappings) {
		if (tokens[rawKey]) {
			style[twKey] = tokens[rawKey];
		}
	}

	const radius = tokens["--radius"] || "0.5rem";
	style["--radius-sm"] = `calc(${radius} - 4px)`;
	style["--radius-md"] = `calc(${radius} - 2px)`;
	style["--radius-lg"] = `calc(${radius} + 2px)`;
	style["--radius-xl"] = `calc(${radius} + 4px)`;
	style["--radius-2xl"] = `calc(${radius} + 8px)`;

	if (tokens["--font-sans"]) {
		style.fontFamily = tokens["--font-sans"];
	}
	if (tokens["--tracking-normal"]) {
		style.letterSpacing = tokens["--tracking-normal"];
	}

	return style as React.CSSProperties;
}

export function ThemePreviewCanvas({
	activeMode,
	lightTokens,
	darkTokens,
	onSelectToken,
}: ThemePreviewCanvasProps) {
	const [view, setView] = React.useState<PreviewView>("components");
	const [pattern, setPattern] = React.useState<BackdropPattern>("hatch");

	const activeTokens = activeMode === "light" ? lightTokens : darkTokens;
	const scopedStyle = React.useMemo(
		() => buildScopedStyleObject(activeTokens),
		[activeTokens],
	);

	return (
		<div className="flex flex-col h-full min-h-0 min-w-0">
			{/* Preview Canvas Toolbar */}
			<div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-4 sm:px-6 py-2.5 shrink-0">
				<div className="flex items-center rounded-lg border border-border bg-background p-0.5 gap-0.5">
					{(
						[
							{
								id: "components",
								label: "Component Showcase",
								icon: Layers,
							},
							{
								id: "palette",
								label: "Token Matrix",
								icon: Palette,
							},
						] as const
					).map((tab) => {
						const Icon = tab.icon;
						const active = view === tab.id;
						return (
							<Button
								key={tab.id}
								size="xs"
								variant={active ? "secondary" : "ghost"}
								onClick={() => setView(tab.id)}
								className={cn(
									"h-6 px-2.5 gap-1.5 text-xs font-medium",
									!active &&
										"text-muted-foreground hover:text-foreground",
								)}
							>
								<Icon className="size-3.5" />
								<span>{tab.label}</span>
							</Button>
						);
					})}
				</div>

				<div className="flex items-center gap-2">
					{/* Canvas Backdrop Selector (Hatch default) */}
					<div className="hidden sm:flex items-center rounded-lg border border-border bg-background p-0.5 gap-0.5 font-mono">
						{(
							[
								{ id: "hatch", label: "Hatch" },
								{ id: "dots", label: "Dots" },
								{ id: "plain", label: "Plain" },
							] as const
						).map((p) => (
							<Button
								key={p.id}
								size="xs"
								variant={
									pattern === p.id ? "secondary" : "ghost"
								}
								onClick={() => setPattern(p.id)}
								className={cn(
									"h-6 px-2 text-[11px]",
									pattern !== p.id &&
										"text-muted-foreground hover:text-foreground",
								)}
							>
								{p.label}
							</Button>
						))}
					</div>
				</div>
			</div>

			{/* STRICTLY SCOPED THEME PREVIEW CONTAINER (Scrollable Both Horizontally & Vertically) */}
			<div
				data-theme-preview-scope
				style={scopedStyle}
				className={cn(
					"flex-1 min-h-0 bg-background text-foreground transition-colors duration-200 overflow-hidden",
					activeMode === "dark" && "dark",
					pattern === "hatch" && "bg-hatch",
					pattern === "dots" && "bg-dot-matrix",
				)}
			>
				<ScrollArea.Root className="size-full p-0">
					<ScrollArea.Panel
						orientation="both"
						viewportProps={{ className: "overscroll-contain" }}
						contentProps={{
							className: "p-6 sm:p-8 min-w-max",
						}}
					>
						{view === "components" ? (
							<ComponentShowcaseCanvas />
						) : (
							<TokenMatrixCanvas
								tokens={activeTokens}
								onSelectToken={onSelectToken}
							/>
						)}
					</ScrollArea.Panel>
				</ScrollArea.Root>
			</div>
		</div>
	);
}
