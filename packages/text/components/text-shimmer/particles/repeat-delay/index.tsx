"use client";

import TextShimmer from "@craftdotui/text/components/text-shimmer";

export function Particle() {
	return (
		<TextShimmer
			duration={1.2}
			repeatDelay={1.5}
			angle={45}
			className="text-sm font-medium text-muted-foreground"
		>
			Periodic shimmer with 1.5s delay between sweeps
		</TextShimmer>
	);
}

export default Particle;
