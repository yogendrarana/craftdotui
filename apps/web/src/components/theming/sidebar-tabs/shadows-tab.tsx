"use client";

import type { ThemeTokens, TokenDefinition } from "@/config/themes";
import type { ColorFormat } from "@/lib/theme-utils";
import { ColorTokenInput } from "@/components/theming/color-token-input";
import { NonColorTokenInput } from "@/components/theming/non-color-token-input";
import { ScrollArea } from "@craftdotui/baseui/components/scroll-area";

interface ShadowsTabProps {
	activeMode: "light" | "dark";
	colorFormat: ColorFormat;
	primitiveTokens: TokenDefinition[];
	scaleTokens: TokenDefinition[];
	currentTokens: ThemeTokens;
	defaultTokensForMode: ThemeTokens;
	onUpdateToken: (key: string, value: string) => void;
}

export function ShadowsTab({
	activeMode,
	colorFormat,
	primitiveTokens,
	scaleTokens,
	currentTokens,
	defaultTokensForMode,
	onUpdateToken,
}: ShadowsTabProps) {
	return (
		<div className="flex flex-col flex-1 min-h-0 overflow-hidden">
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
						{primitiveTokens.map((token) => {
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
											onUpdateToken(token.key, nextVal)
										}
										onReset={() =>
											onUpdateToken(token.key, defVal)
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
										onUpdateToken(token.key, nextVal)
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
						{scaleTokens.map((token) => {
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
										onUpdateToken(token.key, nextVal)
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
		</div>
	);
}
