import {
	SliderRoot,
	SliderControl,
	SliderTrack,
	SliderIndicator,
	SliderThumb,
} from "@craftdotui/baseui/components/slider";

export function Particle() {
	return (
		<SliderRoot defaultValue={[25, 75]} className="w-full max-w-sm">
			<SliderControl>
				<SliderTrack>
					<SliderIndicator />
					<SliderThumb index={0} />
					<SliderThumb index={1} />
				</SliderTrack>
			</SliderControl>
		</SliderRoot>
	);
}
