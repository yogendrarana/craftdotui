"use client";

import TextLoop from "@craftdotui/text/components/text-loop";

export function Particle() {
	return (
		<TextLoop
			loop={false}
			interval={1400}
			preset="blur"
			className="text-sm text-muted-foreground"
		>
			<span>Initializing environment...</span>
			<span>Connecting to workspace...</span>
			<span>Installing dependencies...</span>
			<span>Syncing components...</span>
			<span>Running type checks...</span>
			<span className="text-foreground">Ready to build!</span>
		</TextLoop>
	);
}

export default Particle;
