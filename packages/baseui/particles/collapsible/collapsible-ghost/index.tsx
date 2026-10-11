import { Terminal } from "lucide-react";
import {
	CollapsibleRoot,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@craftdotui/baseui/components/collapsible";

export default function Particle() {
	return (
		<div className="flex w-full justify-center p-4">
			<CollapsibleRoot className="w-full max-w-sm">
				<CollapsibleTrigger variant="ghost">
					<span className="flex items-center gap-2">
						<Terminal className="size-4 text-muted-foreground" />
						<span>Ghost Variant</span>
					</span>
				</CollapsibleTrigger>
				<CollapsiblePanel>
					<div className="pt-2">
						<div className="rounded-md bg-muted/40 p-3 text-xs text-muted-foreground">
							Transparent trigger optimal for inline disclosures,
							trees, or minimal interfaces.
						</div>
					</div>
				</CollapsiblePanel>
			</CollapsibleRoot>
		</div>
	);
}
