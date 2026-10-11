import { ArrowRight, ChevronsUpDown, Sparkles } from "lucide-react";
import {
	CollapsibleRoot,
	CollapsiblePanel,
	CollapsibleTrigger,
	CollapsibleIcon,
} from "@craftdotui/baseui/components/collapsible";

export default function Particle() {
	return (
		<div className="flex w-full flex-col items-center gap-4 p-4">
			{/* Custom Icon wrapped in CollapsibleIcon */}
			<CollapsibleRoot className="w-full max-w-sm">
				<CollapsibleTrigger>
					<span className="flex items-center gap-2">
						<Sparkles className="size-4 text-primary" />
						<span>Wrapped Custom Icon</span>
					</span>
					<CollapsibleIcon>
						<ChevronsUpDown />
					</CollapsibleIcon>
				</CollapsibleTrigger>
				<CollapsiblePanel>
					<div className="pt-2">
						<div className="rounded-md border border-border/60 bg-muted/40 p-3 text-xs text-muted-foreground">
							Wrapping any icon with{" "}
							<code className="text-foreground">
								&lt;CollapsibleIcon&gt;
							</code>{" "}
							provides automatic rotation and transitions.
						</div>
					</div>
				</CollapsiblePanel>
			</CollapsibleRoot>

			{/* Direct CollapsibleIcon with custom arrow */}
			<CollapsibleRoot className="w-full max-w-sm">
				<CollapsibleTrigger variant="outline">
					<span className="flex items-center gap-2">
						<span>Direct Arrow Indicator</span>
					</span>
					<CollapsibleIcon className="text-primary">
						<ArrowRight />
					</CollapsibleIcon>
				</CollapsibleTrigger>
				<CollapsiblePanel>
					<div className="pt-2">
						<div className="rounded-md border border-border/60 bg-muted/40 p-3 text-xs text-muted-foreground">
							Using{" "}
							<code className="text-foreground">
								&lt;CollapsibleIcon&gt;
							</code>{" "}
							directly inside the trigger gives you complete
							control over icon choice, placement, and styling.
						</div>
					</div>
				</CollapsiblePanel>
			</CollapsibleRoot>
		</div>
	);
}
