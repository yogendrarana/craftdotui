"use client";

import TextSpin from "@craftdotui/text/components/text-spin";

export function Particle() {
	return (
		<TextSpin radius={64} className="text-sm text-foreground">
			{"eat • sleep • code • repeat • "}
		</TextSpin>
	);
}

export default Particle;
