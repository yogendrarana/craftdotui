import {
	SliderRoot,
	SliderValue,
	SliderControl,
	SliderTrack,
	SliderIndicator,
	SliderThumb,
} from "@craftdotui/baseui/components/slider";

export function Particle() {
	return (
		<SliderRoot defaultValue={70} disabled className="w-full max-w-sm">
			<SliderValue />
			<SliderControl>
				<SliderTrack>
					<SliderIndicator />
					<SliderThumb />
				</SliderTrack>
			</SliderControl>
		</SliderRoot>
	);
}
