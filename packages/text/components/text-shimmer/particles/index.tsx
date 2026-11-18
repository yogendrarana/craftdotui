"use client";

import TextShimmer from "@craftdotui/text/components/text-shimmer";

export function Particle() {
	return (
		<TextShimmer className="text-sm font-medium text-muted-foreground">
			Generating response...
		</TextShimmer>
	);
}

export default Particle;
