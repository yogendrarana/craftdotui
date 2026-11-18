"use client";

import TextShimmer from "@craftdotui/text/components/text-shimmer";

export function Particle() {
	return (
		<TextShimmer
			reverse
			duration={2.5}
			spread={60}
			className="text-sm font-medium text-muted-foreground"
		>
			Reversed sweep with custom spread
		</TextShimmer>
	);
}

export default Particle;
