"use client";

import TextShimmer from "@craftdotui/text/components/text-shimmer";

export function Particle() {
	return (
		<TextShimmer once duration={1.5} className="text-base text-foreground">
			Sweep plays once on mount
		</TextShimmer>
	);
}

export default Particle;
