"use client";

import TextShimmer from "@craftdotui/text/components/text-shimmer";

export function Particle() {
	return (
		<TextShimmer
			color="#38bdf8"
			duration={1.5}
			className="text-base text-foreground"
		>
			Thinking deeply about your request...
		</TextShimmer>
	);
}

export default Particle;
