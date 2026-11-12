"use client";

import * as React from "react";
import { ColorPicker } from "@craftdotui/craftui/components/color-picker";

export function Particle() {
	const [color, setColor] = React.useState("#3b82f6");

	return (
		<div className="flex flex-col items-center justify-center p-4">
			<ColorPicker value={color} onValueChange={setColor} />
		</div>
	);
}

export default Particle;
