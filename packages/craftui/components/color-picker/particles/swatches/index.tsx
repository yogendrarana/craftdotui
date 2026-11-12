"use client";

import * as React from "react";
import {
	ColorPickerCanvas,
	ColorPickerContent,
	ColorPickerEyeDropper,
	ColorPickerHueSlider,
	ColorPickerInputs,
	ColorPickerPreview,
	ColorPickerRoot,
	ColorPickerSwatches,
} from "@craftdotui/craftui/components/color-picker";

const BRAND_PALETTE = [
	"#6366f1",
	"#8b5cf6",
	"#ec4899",
	"#f43f5e",
	"#ef4444",
	"#f97316",
	"#f59e0b",
	"#10b981",
];

export function Particle() {
	const [color, setColor] = React.useState("#8b5cf6");

	return (
		<div className="flex flex-col items-center justify-center p-4">
			<ColorPickerRoot value={color} onValueChange={setColor}>
				<ColorPickerContent className="w-72">
					<ColorPickerCanvas />
					<div className="flex items-center gap-2">
						<ColorPickerEyeDropper />
						<div className="flex-1">
							<ColorPickerHueSlider />
						</div>
						<ColorPickerPreview />
					</div>
					<ColorPickerInputs showAlpha={false} />
					<div className="pt-1">
						<span className="text-[11px] font-medium text-muted-foreground">
							Brand Palette
						</span>
						<ColorPickerSwatches swatches={BRAND_PALETTE} />
					</div>
				</ColorPickerContent>
			</ColorPickerRoot>
		</div>
	);
}

export default Particle;
