"use client";

import { ArrowUpRight } from "lucide-react";
import TextSpin from "@craftdotui/text/components/text-spin";

export function Particle() {
	return (
		<TextSpin
			repeat={3}
			radius={52}
			className="text-xs font-medium tracking-wider text-foreground uppercase"
			center={
				<span className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground">
					<ArrowUpRight className="size-4" />
				</span>
			}
		>
			explore now
		</TextSpin>
	);
}

export default Particle;
