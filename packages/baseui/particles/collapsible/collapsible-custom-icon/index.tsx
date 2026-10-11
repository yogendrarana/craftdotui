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
			{/* Custom Icon via Trigger icon prop */}
			<CollapsibleRoot className="w-full max-w-sm">
				<CollapsibleTrigger icon={ChevronsUpDown}>
					<span className="flex items-center gap-2">
						<Sparkles className="size-4 text-primary" />
						<span>Trigger with icon prop</span>
					</span>
				</CollapsibleTrigger>
				<CollapsiblePanel>
					<div className="pt-2">
						<div className="rounded-md border border-border/60 bg-muted/40 p-3 text-xs text-muted-foreground">
							The <code className="text-foreground">icon</code>{" "}
							prop replaces the default ChevronRight with any
							custom icon component.
						</div>
					</div>
				</CollapsiblePanel>
			</CollapsibleRoot>

			{/* Direct CollapsibleIcon Component */}
			<CollapsibleRoot className="w-full max-w-sm">
				<CollapsibleTrigger
					variant="outline"
					showCollapsibleIcon={false}
				>
					<span className="flex items-center gap-2">
						<span>Direct CollapsibleIcon</span>
					</span>
					<CollapsibleIcon
						icon={ArrowRight}
						className="size-4 text-primary"
					/>
				</CollapsibleTrigger>
				<CollapsiblePanel>
					<div className="pt-2">
						<div className="rounded-md border border-border/60 bg-muted/40 p-3 text-xs text-muted-foreground">
							Using{" "}
							<code className="text-foreground">
								&lt;CollapsibleIcon /&gt;
							</code>{" "}
							directly gives you complete control over icon
							placement and styling.
						</div>
					</div>
				</CollapsiblePanel>
			</CollapsibleRoot>
		</div>
	);
}
