"use client";

import TextLoop from "@craftdotui/text/components/text-loop";

export function Particle() {
	return (
		<TextLoop
			pauseOnHover
			direction="down"
			interval={1600}
			className="cursor-default text-sm text-foreground"
		>
			<span>Hover to pause cycling</span>
			<span>Slides downward cleanly</span>
			<span>Resumes on mouse leave</span>
		</TextLoop>
	);
}

export default Particle;
