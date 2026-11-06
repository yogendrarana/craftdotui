import { Search, ShieldCheck } from "lucide-react";
import {
	AccordionItem,
	AccordionPanel,
	AccordionRoot,
	AccordionTrigger,
} from "@craftdotui/baseui/components/accordion";

export default function Particle() {
	return (
		<div className="flex w-full flex-col items-center gap-3 p-4">
			<p className="max-w-md text-center text-xs text-muted-foreground">
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
					&quot;distributed-consensus-protocol&quot;
				</strong>{" "}
				to automatically expand the hidden panel.
			</p>

			<AccordionRoot hiddenUntilFound className="w-full max-w-md">
				<AccordionItem value="item-1">
					<AccordionTrigger>
						<span className="flex items-center gap-2">
							<Search className="size-4 text-muted-foreground" />
							<span>System Architecture Overview</span>
						</span>
					</AccordionTrigger>
					<AccordionPanel>
						Our core cluster utilizes an event-driven architecture
						providing resilient fault tolerance across multiple
						geographic availability zones.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>
						<span className="flex items-center gap-2">
							<ShieldCheck className="size-4 text-muted-foreground" />
							<span>Consensus &amp; Replication Spec</span>
						</span>
					</AccordionTrigger>
					<AccordionPanel>
						<p className="leading-relaxed">
							State replication relies on our proprietary{" "}
							<span className="font-mono font-semibold text-foreground">
								distributed-consensus-protocol
							</span>{" "}
							to maintain Byzantine fault-tolerant quorum under
							high concurrency.
						</p>
					</AccordionPanel>
				</AccordionItem>
			</AccordionRoot>
		</div>
	);
}
