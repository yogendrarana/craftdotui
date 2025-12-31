"use client";

import { useState } from "react";
import {
	Slider,
	SliderControl,
	SliderTrack,
	SliderIndicator,
	SliderThumb,
} from "@craftdotui/baseui/components/slider";

export function Particle() {
	const [value, setValue] = useState(50);

	return (
		<div className="w-full max-w-sm flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<span className="text-sm font-medium">Volume</span>
				<span className="text-sm text-muted-foreground">{value}%</span>
			</div>
			<Slider
				value={value}
				onValueChange={(val) => setValue(val as number)}
				className="w-full"
			>
				<SliderControl>
					<SliderTrack>
						<SliderIndicator />
						<SliderThumb />
					</SliderTrack>
				</SliderControl>
			</Slider>
		</div>
	);
}
