"use client";

import TextSpin from "@craftdotui/text/components/text-spin";

export function Particle() {
	return (
		<TextSpin repeat={3} radius={54} className="text-sm text-foreground">
			ship faster
		</TextSpin>
	);
}

export default Particle;
