import { KeyRound } from "lucide-react";
import {
	CollapsibleRoot,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@craftdotui/baseui/components/collapsible";

export default function Particle() {
	return (
		<CollapsibleRoot className="w-full max-w-xs">
			<CollapsibleTrigger>
				<span className="flex items-center gap-2">
					<KeyRound className="size-4 text-muted-foreground" />
					<span>Recovery Keys</span>
				</span>
			</CollapsibleTrigger>
			<CollapsiblePanel>
				<div className="pt-2">
					<div className="flex flex-col gap-1.5 rounded-md border border-border/60 bg-muted/50 p-2.5 font-mono text-xs text-muted-foreground">
						<div className="rounded px-2 py-1 text-foreground">
							alien-bean-pasta
						</div>
						<div className="rounded px-2 py-1 text-foreground">
							wild-irish-burrito
						</div>
						<div className="rounded px-2 py-1 text-foreground">
							horse-battery-staple
						</div>
					</div>
				</div>
			</CollapsiblePanel>
		</CollapsibleRoot>
	);
}
