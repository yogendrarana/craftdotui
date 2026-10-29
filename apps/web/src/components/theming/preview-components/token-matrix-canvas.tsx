"use client";

import { TOKEN_DEFINITIONS, type ThemeTokens } from "@/config/themes";

interface TokenMatrixCanvasProps {
	tokens: ThemeTokens;
	onSelectToken?: (key: string) => void;
}

export function TokenMatrixCanvas({
	tokens,
	onSelectToken,
}: TokenMatrixCanvasProps) {
	const colorTokens = TOKEN_DEFINITIONS.filter((t) => t.type === "color");

	return (
		<div className="w-[1080px] space-y-4">
			<div
				className="border border-border bg-card text-card-foreground p-4 flex items-center justify-between gap-2"
				style={{
					borderRadius: "var(--radius-lg)",
					boxShadow: "var(--shadow-xs)",
				}}
			>
				<div>
					<h4 className="text-sm font-semibold">
						Complete Color Token Matrix ({colorTokens.length}{" "}
						Tokens)
					</h4>
					<p className="text-xs text-muted-foreground">
						Click any swatch card to jump to its editor control in
						the left panel.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-4">
				{colorTokens.map((def) => {
					const val = tokens[def.key] ?? "";
					const pairedVal = def.pairWith
						? tokens[def.pairWith]
						: undefined;

					return (
						<button
							key={def.key}
							type="button"
							onClick={() => onSelectToken?.(def.key)}
							className="group text-left border border-border bg-card text-card-foreground p-3 transition-all hover:border-primary cursor-pointer flex flex-col justify-between gap-2.5"
							style={{
								borderRadius: "var(--radius-lg)",
								boxShadow: "var(--shadow-2xs)",
							}}
						>
							<div
								className="h-16 w-full border border-border/60 flex items-end justify-between p-2 relative overflow-hidden"
								style={{
									backgroundColor: val,
									borderRadius: "var(--radius-md)",
								}}
							>
								{def.pairWith && pairedVal && (
									<span
										className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded-xs"
										style={{
											color: pairedVal,
										}}
									>
										Aa
									</span>
								)}
								{def.isExtension && (
									<span className="ml-auto font-mono text-[9px] uppercase px-1.5 py-0.5 rounded-xs bg-background/85 text-foreground backdrop-blur-xs">
										Ext
									</span>
								)}
							</div>

							<div className="min-w-0">
								<div className="flex items-center justify-between gap-1.5">
									<span className="text-xs font-semibold truncate group-hover:text-primary transition-colors">
										{def.label}
									</span>
									<code className="font-mono text-[10px] text-muted-foreground shrink-0">
										{def.key}
									</code>
								</div>
								<div className="mt-1 font-mono text-[10px] text-muted-foreground/80 truncate">
									{val}
								</div>
							</div>
						</button>
					);
				})}
			</div>
		</div>
	);
}
