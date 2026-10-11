import { Layers } from "lucide-react";
import {
	CollapsibleRoot,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@craftdotui/baseui/components/collapsible";

export default function Particle() {
	return (
		<div className="flex w-full justify-center p-4">
			<CollapsibleRoot className="w-full max-w-sm">
				<CollapsibleTrigger variant="outline">
					<span className="flex items-center gap-2">
						<Layers className="size-4 text-muted-foreground" />
						<span>Outline Variant</span>
					</span>
				</CollapsibleTrigger>
				<CollapsiblePanel>
					<div className="pt-2">
						<div className="rounded-md border border-border/60 bg-background p-3 text-xs text-muted-foreground">
							Clean bordered trigger suited for distinct form
							sections or card expansions.
						</div>
					</div>
				</CollapsiblePanel>
			</CollapsibleRoot>
		</div>
	);
}
