"use client";

import TextLoop from "@craftdotui/text/components/text-loop";

export function Particle() {
	return (
		<TextLoop
			animateWidth={false}
			className="w-60 text-left text-sm text-foreground"
		>
			<span>Build faster with primitives</span>
			<span>Customize every detail</span>
			<span>Ship accessible components</span>
		</TextLoop>
	);
}

export default Particle;
