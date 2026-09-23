import {
	SliderRoot,
	SliderControl,
	SliderTrack,
	SliderIndicator,
	SliderThumb,
} from "@craftdotui/baseui/components/slider";

export function Particle() {
	return (
		<SliderRoot defaultValue={50} className="w-full max-w-sm">
			<SliderControl>
				<SliderTrack>
					<SliderIndicator />
					<SliderThumb />
				</SliderTrack>
			</SliderControl>
		</SliderRoot>
	);
}
