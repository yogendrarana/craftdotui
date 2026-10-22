import { Search, ShieldAlert } from "lucide-react";
import {
	CollapsiblePanel,
	CollapsibleRoot,
	CollapsibleTrigger,
	CollapsibleIcon,
} from "@craftdotui/baseui/components/collapsible";

export default function Particle() {
	return (
		<div className="flex w-full flex-col items-center gap-2 p-4">
			<p className="max-w-sm text-center text-xs text-muted-foreground">
				Press{" "}
				<kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[11px]">
					Cmd+F
				</kbd>{" "}
				or{" "}
				<kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[11px]">
					Ctrl+F
				</kbd>{" "}
				and search for{" "}
				<strong className="text-foreground">
					&quot;quantum-encryption-key&quot;
				</strong>{" "}
				to reveal the hidden panel automatically.
			</p>

			<CollapsibleRoot className="w-full max-w-sm">
				<CollapsibleTrigger className="border rounded-md px-2 py-1">
					<span className="flex items-center gap-2">
						<Search className="size-4 text-muted-foreground" />
						<span>Searchable Security Policies</span>
					</span>
					<CollapsibleIcon />
				</CollapsibleTrigger>
				<CollapsiblePanel hiddenUntilFound>
					<div className="pt-2">
						<div className="flex flex-col gap-2 rounded-md border border-border/60 bg-muted/40 p-3 text-xs leading-relaxed text-muted-foreground">
							<div className="flex items-center gap-1.5 font-medium text-foreground">
								<ShieldAlert className="size-4 text-amber-500" />
								<span>Zero-Trust Architecture Spec</span>
							</div>
							<p>
								All data payloads in transit must be signed with
								our proprietary{" "}
								<span className="font-mono font-semibold text-foreground">
									quantum-encryption-key
								</span>{" "}
								prior to network egress.
							</p>
						</div>
					</div>
				</CollapsiblePanel>
			</CollapsibleRoot>
		</div>
	);
}
