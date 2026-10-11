import { SlidersHorizontal } from "lucide-react";
import {
	CollapsibleRoot,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@craftdotui/baseui/components/collapsible";

export default function Particle() {
	return (
		<div className="flex w-full justify-center p-4">
			<CollapsibleRoot defaultOpen className="w-full max-w-sm">
				<CollapsibleTrigger>
					<span className="flex items-center gap-2">
						<SlidersHorizontal className="size-4 text-muted-foreground" />
						<span>API Configuration</span>
					</span>
				</CollapsibleTrigger>
				<CollapsiblePanel>
					<div className="pt-2">
						<div className="flex flex-col gap-2 rounded-md border border-border/60 bg-card p-3 text-xs text-muted-foreground">
							<div className="flex items-center justify-between">
								<span className="font-medium text-foreground">
									Endpoint:
								</span>
								<code className="font-mono text-[11px] text-primary">
									https://api.craftdotui.com/v1
								</code>
							</div>
							<div className="flex items-center justify-between">
								<span className="font-medium text-foreground">
									Timeout:
								</span>
								<span>5000ms</span>
							</div>
							<div className="flex items-center justify-between">
								<span className="font-medium text-foreground">
									Environment:
								</span>
								<span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
									Production
								</span>
							</div>
						</div>
					</div>
				</CollapsiblePanel>
			</CollapsibleRoot>
		</div>
	);
}
