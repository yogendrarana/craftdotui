"use client";

import TextLoop from "@craftdotui/text/components/text-loop";

export function Particle() {
	return (
		<div className="inline-flex items-center gap-1.5 text-sm text-foreground">
			<span>Craft interfaces for</span>
			<TextLoop preset="blur">
				<span>Developers</span>
				<span>Designers</span>
				<span>Founders</span>
				<span>Teams</span>
			</TextLoop>
		</div>
	);
}

export default Particle;
