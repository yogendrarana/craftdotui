"use client";

import * as React from "react";
import {
	Check,
	Copy,
	Download,
	FileCode2,
	FileJson,
	Sparkles,
	Upload,
	AlertCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { TOKEN_DEFINITIONS, type ThemeTokens } from "@/config/themes";
import {
	type ColorFormat,
	formatColor,
	formatOklch,
	parseAnyColorToOklch,
} from "@/lib/theme-utils";
import { Dialog } from "@craftdotui/baseui/components/dialog";
import { Button } from "@craftdotui/baseui/components/button";
import { Tabs } from "@craftdotui/baseui/components/tabs";

interface ThemeExportImportModalProps {
	lightTokens: ThemeTokens;
	darkTokens: ThemeTokens;
	presetName: string;
	onImportTheme: (light: ThemeTokens, dark: ThemeTokens) => void;
}

type ExportFormat = "tailwind-v4" | "css-vars" | "json";

function formatTokenBlock(
	tokens: ThemeTokens,
	colorFormat: ColorFormat,
	indent = "\t",
): string {
	return TOKEN_DEFINITIONS.map((def) => {
		const raw = tokens[def.key] ?? "";
		const formatted =
			def.type === "color" ? formatColor(raw, colorFormat) : raw;
		return `${indent}${def.key}: ${formatted};`;
	}).join("\n");
}

export function generateThemeOutput(
	lightTokens: ThemeTokens,
	darkTokens: ThemeTokens,
	format: ExportFormat,
	colorFormat: ColorFormat,
	presetName: string,
): string {
	if (format === "json") {
		const convertMap = (tokens: ThemeTokens) => {
			const out: Record<string, string> = {};
			for (const def of TOKEN_DEFINITIONS) {
				const raw = tokens[def.key] ?? "";
				out[def.key] =
					def.type === "color" ? formatColor(raw, colorFormat) : raw;
			}
			return out;
		};
		return JSON.stringify(
			{
				name: presetName,
				version: "1.0.0",
				colorFormat,
				light: convertMap(lightTokens),
				dark: convertMap(darkTokens),
			},
			null,
			2,
		);
	}

	const rootBlock = `:root {\n${formatTokenBlock(lightTokens, colorFormat)}\n}`;
	const darkBlock = `.dark {\n${formatTokenBlock(darkTokens, colorFormat)}\n}`;

	if (format === "css-vars") {
		return `/* Craft UI Design Tokens — ${presetName} */\n\n${rootBlock}\n\n${darkBlock}\n`;
	}

	// Full Tailwind v4 @theme inline + :root + .dark
	return `@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
\t/* colors */
\t--color-background: var(--background);
\t--color-foreground: var(--foreground);

\t--color-card: var(--card);
\t--color-card-foreground: var(--card-foreground);

\t--color-popover: var(--popover);
\t--color-popover-foreground: var(--popover-foreground);

\t--color-primary: var(--primary);
\t--color-primary-foreground: var(--primary-foreground);

\t--color-secondary: var(--secondary);
\t--color-secondary-foreground: var(--secondary-foreground);

\t--color-muted: var(--muted);
\t--color-muted-foreground: var(--muted-foreground);

\t--color-accent: var(--accent);
\t--color-accent-foreground: var(--accent-foreground);

\t--color-destructive: var(--destructive);
\t--color-destructive-foreground: var(--destructive-foreground);

\t--color-success: var(--success);
\t--color-success-foreground: var(--success-foreground);

\t--color-warning: var(--warning);
\t--color-warning-foreground: var(--warning-foreground);

\t--color-info: var(--info);
\t--color-info-foreground: var(--info-foreground);

\t--color-invert: var(--invert);
\t--color-invert-foreground: var(--invert-foreground);

\t--color-backdrop: var(--backdrop);

\t/* colors - form */
\t--color-border: var(--border);
\t--color-input: var(--input);
\t--color-ring: var(--ring);

\t/* colors - charts */
\t--chart-1: var(--chart-1);
\t--chart-2: var(--chart-2);
\t--chart-3: var(--chart-3);
\t--chart-4: var(--chart-4);
\t--chart-5: var(--chart-5);

\t/* colors - sidebar */
\t--color-sidebar: var(--sidebar);
\t--color-sidebar-foreground: var(--sidebar-foreground);
\t--color-sidebar-primary: var(--sidebar-primary);
\t--color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
\t--color-sidebar-accent: var(--sidebar-accent);
\t--color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
\t--color-sidebar-border: var(--sidebar-border);
\t--color-sidebar-ring: var(--sidebar-ring);

\t/* typography & tracking */
\t--font-sans: var(--font-sans);
\t--font-serif: var(--font-serif);
\t--font-mono: var(--font-mono);
\t--tracking-normal: var(--tracking-normal);

\t/* radius */
\t--radius-sm: calc(var(--radius) - 4px);
\t--radius-md: calc(var(--radius) - 2px);
\t--radius: var(--radius);
\t--radius-lg: calc(var(--radius) + 2px);
\t--radius-xl: calc(var(--radius) + 4px);

\t/* spacing */
\t--spacing: var(--spacing);

\t/* shadows */
\t--shadow-2xs: var(--shadow-2xs);
\t--shadow-xs: var(--shadow-xs);
\t--shadow-sm: var(--shadow-sm);
\t--shadow: var(--shadow);
\t--shadow-md: var(--shadow-md);
\t--shadow-lg: var(--shadow-lg);
\t--shadow-xl: var(--shadow-xl);
\t--shadow-2xl: var(--shadow-2xl);
}

${rootBlock}

${darkBlock}
`;
}

export function parseImportedTheme(
	input: string,
	currentLight: ThemeTokens,
	currentDark: ThemeTokens,
): { light: ThemeTokens; dark: ThemeTokens; count: number } | null {
	const trimmed = input.trim();
	if (!trimmed) return null;

	const validKeys = new Set(TOKEN_DEFINITIONS.map((d) => d.key));
	const colorKeys = new Set(
		TOKEN_DEFINITIONS.filter((d) => d.type === "color").map((d) => d.key),
	);

	const normalizeValue = (key: string, val: string) => {
		const clean = val.trim().replace(/;$/, "").trim();
		if (colorKeys.has(key)) {
			const parsed = parseAnyColorToOklch(clean);
			if (parsed) return formatOklch(parsed);
		}
		return clean;
	};

	// 1. Try JSON format
	if (trimmed.startsWith("{")) {
		try {
			const parsed = JSON.parse(trimmed);
			const nextLight = { ...currentLight };
			const nextDark = { ...currentDark };
			let count = 0;

			if (parsed.light || parsed.dark) {
				if (parsed.light && typeof parsed.light === "object") {
					for (const [k, v] of Object.entries(parsed.light)) {
						const key = k.startsWith("--") ? k : `--${k}`;
						if (validKeys.has(key) && typeof v === "string") {
							nextLight[key] = normalizeValue(key, v);
							count++;
						}
					}
				}
				if (parsed.dark && typeof parsed.dark === "object") {
					for (const [k, v] of Object.entries(parsed.dark)) {
						const key = k.startsWith("--") ? k : `--${k}`;
						if (validKeys.has(key) && typeof v === "string") {
							nextDark[key] = normalizeValue(key, v);
							count++;
						}
					}
				}
			} else {
				// Flat JSON object of tokens
				for (const [k, v] of Object.entries(parsed)) {
					const key = k.startsWith("--") ? k : `--${k}`;
					if (validKeys.has(key) && typeof v === "string") {
						nextLight[key] = normalizeValue(key, v);
						count++;
					}
				}
			}

			return count > 0
				? { light: nextLight, dark: nextDark, count }
				: null;
		} catch {
			// Fallthrough to CSS parser
		}
	}

	// 2. Parse CSS (:root, .dark, or loose --token: value declarations)
	const nextLight = { ...currentLight };
	const nextDark = { ...currentDark };
	let count = 0;

	// Strip @theme inline block so we don't overwrite values with var(--...)
	const withoutThemeInline = trimmed.replace(
		/@theme\s+inline\s*\{[\s\S]*?\}/gi,
		"",
	);

	const darkMatch = withoutThemeInline.match(/\.dark\s*\{([\s\S]*?)\}/i);
	const rootMatch = withoutThemeInline.match(/:root\s*\{([\s\S]*?)\}/i);

	const parseDeclarations = (block: string, target: ThemeTokens) => {
		const regex = /(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;
		for (const match of block.matchAll(regex)) {
			const key = match[1].trim();
			const val = match[2].trim();
			if (validKeys.has(key) && !val.startsWith("var(--")) {
				target[key] = normalizeValue(key, val);
				count++;
			}
		}
	};

	if (rootMatch || darkMatch) {
		if (rootMatch) parseDeclarations(rootMatch[1], nextLight);
		if (darkMatch) parseDeclarations(darkMatch[1], nextDark);
	} else {
		parseDeclarations(withoutThemeInline, nextLight);
	}

	return count > 0 ? { light: nextLight, dark: nextDark, count } : null;
}

export function ThemeExportImportModal({
	lightTokens,
	darkTokens,
	presetName,
	onImportTheme,
}: ThemeExportImportModalProps) {
	const [exportFormat, setExportFormat] =
		React.useState<ExportFormat>("tailwind-v4");
	const [exportColorFormat, setExportColorFormat] =
		React.useState<ColorFormat>("oklch");
	const [copied, setCopied] = React.useState(false);

	const [importText, setImportText] = React.useState("");
	const [importStatus, setImportStatus] = React.useState<{
		type: "success" | "error";
		message: string;
	} | null>(null);

	const codeOutput = React.useMemo(
		() =>
			generateThemeOutput(
				lightTokens,
				darkTokens,
				exportFormat,
				exportColorFormat,
				presetName,
			),
		[lightTokens, darkTokens, exportFormat, exportColorFormat, presetName],
	);

	const handleCopy = () => {
		navigator.clipboard.writeText(codeOutput);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleDownload = () => {
		const ext = exportFormat === "json" ? "json" : "css";
		const blob = new Blob([codeOutput], {
			type: exportFormat === "json" ? "application/json" : "text/css",
		});
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `craftui-theme-${presetName.toLowerCase().replace(/\s+/g, "-")}.${ext}`;
		a.click();
		URL.revokeObjectURL(url);
	};

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === "string") {
				setImportText(reader.result);
				setImportStatus(null);
			}
		};
		reader.readAsText(file);
	};

	const handleApplyImport = () => {
		const result = parseImportedTheme(importText, lightTokens, darkTokens);
		if (!result) {
			setImportStatus({
				type: "error",
				message:
					"Could not detect valid Craft UI / shadcn CSS variables or JSON tokens.",
			});
			return;
		}
		onImportTheme(result.light, result.dark);
		setImportStatus({
			type: "success",
			message: `Successfully imported ${result.count} token definitions into the studio!`,
		});
	};

	return (
		<div className="flex items-center gap-2">
			{/* Import Modal */}
			<Dialog.Root>
				<Dialog.Trigger
					render={
						<Button
							size="sm"
							variant="outline"
							className="gap-1.5 font-mono text-xs"
						>
							<Upload className="size-3.5" />
							<span>Import</span>
						</Button>
					}
				/>
				<Dialog.Content
					showCloseButton
					className="max-w-2xl border-border bg-background"
				>
					<Dialog.Header>
						<Dialog.Title className="flex items-center gap-2">
							<Upload className="size-4 text-muted-foreground" />
							Import Theme CSS or JSON
						</Dialog.Title>
						<Dialog.Description>
							Paste a{" "}
							<code className="font-mono text-xs">
								globals.css
							</code>{" "}
							file (shadcn/ui or Craft UI{" "}
							<code className="font-mono text-xs">:root</code> /{" "}
							<code className="font-mono text-xs">.dark</code>{" "}
							variables) or a JSON token payload. Colors in HEX,
							RGB, HSL, or OKLCH are automatically normalized.
						</Dialog.Description>
					</Dialog.Header>

					<Dialog.Panel className="space-y-3">
						<div className="flex items-center justify-between gap-2">
							<span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
								CSS / JSON Payload
							</span>
							<label className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/40 hover:bg-muted text-xs font-mono cursor-pointer transition-colors">
								<FileCode2 className="size-3.5" />
								<span>Upload .css / .json</span>
								<input
									type="file"
									accept=".css,.json,.txt"
									onChange={handleFileUpload}
									className="sr-only"
								/>
							</label>
						</div>

						<textarea
							value={importText}
							onChange={(e) => {
								setImportText(e.target.value);
								setImportStatus(null);
							}}
							placeholder={`:root {\n  --background: oklch(1 0 0);\n  --foreground: oklch(0.145 0 0);\n  --primary: #4f46e5;\n  --radius: 0.625rem;\n}\n\n.dark {\n  --background: oklch(0.145 0 0);\n  --primary: #6366f1;\n}`}
							rows={11}
							className="w-full rounded-lg border border-border bg-muted/25 p-3 font-mono text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/30 resize-y"
						/>

						{importStatus && (
							<div
								className={cn(
									"flex items-center gap-2 rounded-md border px-3 py-2 text-xs",
									importStatus.type === "success"
										? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
										: "border-destructive/40 bg-destructive/10 text-destructive",
								)}
							>
								{importStatus.type === "success" ? (
									<Sparkles className="size-4 shrink-0" />
								) : (
									<AlertCircle className="size-4 shrink-0" />
								)}
								<span>{importStatus.message}</span>
							</div>
						)}
					</Dialog.Panel>

					<Dialog.Footer>
						<Dialog.Close
							render={
								<Button variant="outline" size="sm">
									Close
								</Button>
							}
						/>
						<Button
							size="sm"
							onClick={handleApplyImport}
							disabled={!importText.trim()}
						>
							Apply Imported Tokens
						</Button>
					</Dialog.Footer>
				</Dialog.Content>
			</Dialog.Root>

			{/* Export Modal */}
			<Dialog.Root>
				<Dialog.Trigger
					render={
						<Button
							size="sm"
							variant="default"
							className="gap-1.5 font-mono text-xs"
						>
							<Download className="size-3.5" />
							<span>Export</span>
						</Button>
					}
				/>
				<Dialog.Content
					showCloseButton
					className="max-w-3xl border-border bg-background"
				>
					<Dialog.Header>
						<Dialog.Title className="flex items-center gap-2">
							<FileCode2 className="size-4 text-muted-foreground" />
							Export Theme Configuration
						</Dialog.Title>
						<Dialog.Description>
							Copy or download your customized design tokens for
							Tailwind CSS v4, shadcn/ui, or JSON design token
							pipelines.
						</Dialog.Description>
					</Dialog.Header>

					<Dialog.Panel className="space-y-4">
						<div className="flex flex-wrap items-center justify-between gap-3">
							{/* Format Tabs */}
							<Tabs.Root
								value={exportFormat}
								onValueChange={(val) =>
									setExportFormat(val as ExportFormat)
								}
							>
								<Tabs.List tabSize="sm">
									<Tabs.Tab value="tailwind-v4">
										Tailwind v4 (globals.css)
									</Tabs.Tab>
									<Tabs.Tab value="css-vars">
										CSS Variables (:root / .dark)
									</Tabs.Tab>
									<Tabs.Tab value="json">
										<FileJson className="size-3.5" />
										JSON Tokens
									</Tabs.Tab>
								</Tabs.List>
							</Tabs.Root>

							{/* Color Syntax Selector */}
							<div className="flex items-center gap-1 rounded-lg border border-border bg-muted/40 p-1">
								{(
									[
										"oklch",
										"hex",
										"hsl",
										"rgb",
									] as ColorFormat[]
								).map((fmt) => (
									<Button
										key={fmt}
										size="xs"
										variant={
											exportColorFormat === fmt
												? "outline"
												: "ghost"
										}
										onClick={() =>
											setExportColorFormat(fmt)
										}
										className={cn(
											"h-6 px-2 font-mono text-[11px] uppercase",
											exportColorFormat !== fmt &&
												"text-muted-foreground hover:text-foreground",
										)}
									>
										{fmt}
									</Button>
								))}
							</div>
						</div>

						{/* Code Preview */}
						<div className="relative rounded-xl border border-border bg-muted/30 overflow-hidden">
							<div className="flex items-center justify-between border-b border-border bg-muted/50 px-3.5 py-2">
								<span className="font-mono text-xs text-muted-foreground">
									{exportFormat === "json"
										? "theme-tokens.json"
										: "globals.css"}
								</span>
								<div className="flex items-center gap-2">
									<Button
										size="xs"
										variant="outline"
										onClick={handleDownload}
										className="font-mono text-[11px] gap-1"
									>
										<Download className="size-3" />
										Download
									</Button>
									<Button
										size="xs"
										variant="default"
										onClick={handleCopy}
										className="font-mono text-[11px] gap-1"
									>
										{copied ? (
											<>
												<Check className="size-3" />
												Copied
											</>
										) : (
											<>
												<Copy className="size-3" />
												Copy Code
											</>
										)}
									</Button>
								</div>
							</div>
							<pre className="max-h-96 overflow-auto p-4 font-mono text-xs leading-relaxed text-foreground select-all">
								<code>{codeOutput}</code>
							</pre>
						</div>
					</Dialog.Panel>
				</Dialog.Content>
			</Dialog.Root>
		</div>
	);
}
