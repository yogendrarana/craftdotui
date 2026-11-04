"use client";

import type { ThemeTokens, TokenDefinition } from "@/config/themes";
import { NonColorTokenInput } from "@/components/theming/non-color-token-input";
import { ScrollArea } from "@craftdotui/baseui/components/scroll-area";

interface DimensionsTabProps {
	tokens: TokenDefinition[];
	currentTokens: ThemeTokens;
	defaultTokensForMode: ThemeTokens;
	onUpdateSharedToken: (key: string, value: string) => void;
}

export function DimensionsTab({
	tokens,
	currentTokens,
	defaultTokensForMode,
	onUpdateSharedToken,
}: DimensionsTabProps) {
	return (
		<div className="flex flex-col flex-1 min-h-0 overflow-hidden">
			<ScrollArea.Root className="flex-1 min-h-0 p-0">
				<ScrollArea.Panel
					viewportProps={{ className: "overscroll-contain" }}
					contentProps={{
						className: "p-3.5 space-y-3",
					}}
				>
					{tokens.map((token) => {
						const val = currentTokens[token.key] ?? "";
						const defVal = defaultTokensForMode[token.key] ?? "";
						return (
							<NonColorTokenInput
								key={token.key}
								token={token}
								value={val}
								defaultValue={defVal}
								onChange={(nextVal) =>
									onUpdateSharedToken(token.key, nextVal)
								}
								onReset={() =>
									onUpdateSharedToken(token.key, defVal)
								}
							/>
						);
					})}
				</ScrollArea.Panel>
			</ScrollArea.Root>
		</div>
	);
}
