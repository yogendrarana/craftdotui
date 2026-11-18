"use client";

import * as React from "react";
import { Button } from "@craftdotui/baseui/components/button";
import TextShimmer from "@craftdotui/text/components/text-shimmer";

export function Particle() {
	const [active, setActive] = React.useState(true);

	return (
		<div className="flex flex-col items-center gap-3">
			<TextShimmer
				as="h3"
				active={active}
				className="text-lg text-foreground"
			>
				{active ? "Analyzing codebase..." : "Analysis complete"}
			</TextShimmer>
			<Button
				variant="outline"
				size="sm"
				onClick={() => setActive((prev) => !prev)}
			>
				{active ? "Stop shimmer" : "Start shimmer"}
			</Button>
		</div>
	);
}

export default Particle;
