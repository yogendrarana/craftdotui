"use client";

import * as React from "react";
import { Button } from "@craftdotui/baseui/components/button";
import TextLoop from "@craftdotui/text/components/text-loop";

const items = [
	"Build faster with primitives",
	"Customize every detail",
	"Ship accessible components",
];

export function Particle() {
	const [index, setIndex] = React.useState(0);
	const [playing, setPlaying] = React.useState(true);

	return (
		<div className="flex flex-col items-center gap-4">
			<TextLoop
				index={index}
				onIndexChange={setIndex}
				trigger={playing}
				className="text-sm text-foreground"
			>
				{items.map((item) => (
					<span key={item}>{item}</span>
				))}
			</TextLoop>

			<div className="flex items-center gap-2">
				<Button
					variant="outline"
					size="sm"
					onClick={() =>
						setIndex(
							(prev) => (prev - 1 + items.length) % items.length,
						)
					}
				>
					Prev
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => setPlaying((prev) => !prev)}
				>
					{playing ? "Pause" : "Play"}
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() =>
						setIndex((prev) => (prev + 1) % items.length)
					}
				>
					Next
				</Button>
			</div>
		</div>
	);
}

export default Particle;
