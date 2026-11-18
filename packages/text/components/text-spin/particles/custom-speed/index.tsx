"use client";

import TextSpin from "@craftdotui/text/components/text-spin";

export function Particle() {
	return (
		<TextSpin
			repeat={3}
			duration={4}
			radius={60}
			className="text-sm text-foreground"
		>
			craftdotui
		</TextSpin>
	);
}

export default Particle;
