import { Palette } from "lucide-react";
import {
	CollapsibleRoot,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@craftdotui/baseui/components/collapsible";

export default function Particle() {
	return (
		<div className="flex w-full justify-center p-4">
			<CollapsibleRoot className="w-full max-w-sm">
				<CollapsibleTrigger variant="secondary">
					<span className="flex items-center gap-2">
						<Palette className="size-4 text-secondary-foreground" />
						<span>Secondary Variant</span>
					</span>
				</CollapsibleTrigger>
				<CollapsiblePanel>
					<div className="pt-2">
						<div className="rounded-md border border-border/50 bg-secondary/50 p-3 text-xs text-secondary-foreground">
							Secondary trigger variant matching secondary button
							styling with smooth animated expansion.
						</div>
					</div>
				</CollapsiblePanel>
			</CollapsibleRoot>
		</div>
	);
}
