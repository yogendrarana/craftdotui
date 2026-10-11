import { GitBranch, GitCommit, Star, Tag } from "lucide-react";
import {
	CollapsibleRoot,
	CollapsiblePanel,
	CollapsibleTrigger,
	CollapsibleIcon,
} from "@craftdotui/baseui/components/collapsible";

export default function Particle() {
	return (
		<div className="flex w-full justify-center p-4">
			<CollapsibleRoot className="w-full max-w-md rounded-xl border border-border bg-card text-card-foreground shadow-xs">
				<div className="p-4 flex items-start justify-between gap-4">
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-2">
							<span className="font-semibold text-sm text-foreground">
								@craftdotui/baseui
							</span>
							<span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
								v0.1.0
							</span>
						</div>
						<p className="text-xs text-muted-foreground">
							Accessible, unstyled React primitives tailored with
							Tailwind CSS.
						</p>
					</div>

					<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
						<Star className="size-3.5 fill-amber-400 text-amber-400" />
						<span>1.2k</span>
					</div>
				</div>

				<div className="px-4 py-1 flex items-center justify-between border-t border-border/50">
					<div className="flex items-center gap-3 text-xs text-muted-foreground">
						<span className="flex items-center gap-1">
							<GitBranch className="size-3" /> main
						</span>
						<span className="flex items-center gap-1">
							<Tag className="size-3" /> latest
						</span>
					</div>

					<CollapsibleTrigger
						showCollapsibleIcon={false}
						variant="ghost"
						size="sm"
						className="w-auto p-0 text-xs font-normal text-muted-foreground hover:bg-mutec-foreground hover:text-foreground"
					>
						<span>Recent commits</span>
						<CollapsibleIcon className="size-3.5" />
					</CollapsibleTrigger>
				</div>

				<CollapsiblePanel>
					<div className="pt-2">
						<div className="flex flex-col gap-1.5 rounded-lg bg-muted/40 p-2.5 text-xs text-muted-foreground">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-1.5 truncate">
									<GitCommit className="size-3.5 shrink-0 text-primary" />
									<span className="truncate font-mono text-[11px] text-foreground">
										feat(collapsible): add Base UI
										primitives & css variables
									</span>
								</div>
								<span className="shrink-0 text-[10px] text-muted-foreground/80">
									just now
								</span>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-1.5 truncate">
									<GitCommit className="size-3.5 shrink-0 text-muted-foreground" />
									<span className="truncate font-mono text-[11px]">
										docs(collapsible): add interactive demo
										& API reference
									</span>
								</div>
								<span className="shrink-0 text-[10px] text-muted-foreground/80">
									1h ago
								</span>
							</div>
						</div>
					</div>
				</CollapsiblePanel>
			</CollapsibleRoot>
		</div>
	);
}
