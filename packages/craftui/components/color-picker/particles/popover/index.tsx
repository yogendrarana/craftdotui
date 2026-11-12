"use client";

import * as React from "react";
import { ColorPicker } from "@craftdotui/craftui/components/color-picker";

export function Particle() {
	const [color, setColor] = React.useState("#10b981");

	return (
		<div className="flex flex-col items-center justify-center p-8">
			<ColorPicker
				inline={false}
				value={color}
				onValueChange={setColor}
			/>
		</div>
	);
}

export default Particle;
