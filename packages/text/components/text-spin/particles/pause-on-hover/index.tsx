"use client";

import TextSpin from "@craftdotui/text/components/text-spin";

export function Particle() {
	return (
		<TextSpin
			repeat={2}
			separator=" • "
			reverse
			pauseOnHover
			radius={54}
			className="cursor-pointer text-sm text-muted-foreground"
		>
			hover to pause
		</TextSpin>
	);
}

export default Particle;
