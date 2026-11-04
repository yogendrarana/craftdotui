"use client";

import { RefreshCw, Search } from "lucide-react";

import type { ThemeTokens, TokenDefinition } from "@/config/themes";
import type { ColorFormat } from "@/lib/theme-utils";
import { ColorTokenInput } from "@/components/theming/color-token-input";
import type {
	COLOR_SECTION_GROUPS,
	SEMANTIC_EXTENSION_GROUPS,
} from "@/components/theming/sidebar-tabs/tab-constants";
import { Accordion } from "@craftdotui/baseui/components/accordion";
import { Button } from "@craftdotui/baseui/components/button";
import { Input } from "@craftdotui/baseui/components/input";
import { ScrollArea } from "@craftdotui/baseui/components/scroll-area";
import { Select } from "@craftdotui/baseui/components/select";

const COLOR_FORMAT_OPTIONS: Array<{ label: string; value: ColorFormat }> = [
	{ label: "OKLCH", value: "oklch" },
	{ label: "HEX", value: "hex" },
	{ label: "HSL", value: "hsl" },
	{ label: "RGB", value: "rgb" },
];

interface ColorsTabProps {
	activeMode: "light" | "dark";
	searchQuery: string;
	onSearchQueryChange: (q: string) => void;
	colorFormat: ColorFormat;
	onColorFormatChange: (fmt: ColorFormat) => void;
	openSections: string[];
	onOpenSectionsChange: (sections: string[]) => void;
	currentTokens: ThemeTokens;
	defaultTokensForMode: ThemeTokens;
	tokenDefMap: Map<string, TokenDefinition>;
	filteredColorGroups: typeof COLOR_SECTION_GROUPS;
	filteredSemanticGroups: typeof SEMANTIC_EXTENSION_GROUPS;
	effectiveOpenSections: string[];
	onUpdateToken: (key: string, value: string) => void;
	onSyncSidebarFromBase: () => void;
}

export function ColorsTab({
	activeMode,
	searchQuery,
	onSearchQueryChange,
	colorFormat,
	onColorFormatChange,
	onOpenSectionsChange,
	currentTokens,
	defaultTokensForMode,
	tokenDefMap,
	filteredColorGroups,
	filteredSemanticGroups,
	effectiveOpenSections,
	onUpdateToken,
	onSyncSidebarFromBase,
}: ColorsTabProps) {
	return (
		<div className="flex flex-col flex-1 min-h-0 overflow-hidden">
			{/* Search + Color Format Select */}
			<div className="border-b border-border bg-muted/20 p-3 flex items-center gap-2 shrink-0">
				<div className="relative flex-1 min-w-0">
					<Search className="size-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
					<Input
						size="sm"
						value={searchQuery}
						onChange={(e) => onSearchQueryChange(e.target.value)}
						placeholder="Search colors..."
						className="pl-8 font-mono text-xs h-8"
					/>
				</div>

				<Select.Root
					items={COLOR_FORMAT_OPTIONS}
					value={colorFormat}
					onValueChange={(val) => {
						if (val) onColorFormatChange(val as ColorFormat);
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
					{filteredColorGroups.length === 0 &&
					filteredSemanticGroups.length === 0 ? (
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
						<div className="space-y-4">
							{/* Core Token Groups */}
							{filteredColorGroups.length > 0 && (
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
											<Accordion.Trigger className="flex-1 py-2.5 text-xs font-mono uppercase tracking-wider text-foreground hover:no-underline">
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
													<span>{group.title}</span>
													<span className="text-[10px] text-muted-foreground">
														({group.keys.length})
													</span>
												</div>
											</Accordion.Trigger>

											<Accordion.Panel innerClassName="pt-1 pb-3 space-y-2">
												{group.canSyncFromBase && (
													<div className="flex items-center justify-end">
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
													</div>
												)}

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

							{/* Divider and Semantic Extensions Section */}
							{filteredSemanticGroups.length > 0 && (
								<div className="space-y-2.5 pt-3 border-t border-border">
									<div className="px-1 flex items-center justify-between">
										<span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
											Semantic Extensions
										</span>
									</div>

									<Accordion.Root
										multiple
										value={effectiveOpenSections}
										onValueChange={(val) =>
											onOpenSectionsChange(
												val as string[],
											)
										}
										className="space-y-2"
									>
										{filteredSemanticGroups.map((group) => (
											<Accordion.Item
												key={group.id}
												value={group.id}
												className="rounded-xl border border-border bg-muted/15 px-3 not-last:border-b"
											>
												<Accordion.Trigger className="w-full py-2.5 text-xs font-mono uppercase tracking-wider text-foreground hover:no-underline">
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

												<Accordion.Panel innerClassName="pt-1 pb-3 space-y-2">
													{group.keys.map((key) => {
														const token =
															tokenDefMap.get(
																key,
															);
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
								</div>
							)}
						</div>
					)}
				</ScrollArea.Panel>
			</ScrollArea.Root>
		</div>
	);
}
