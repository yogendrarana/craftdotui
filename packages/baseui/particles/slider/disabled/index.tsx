import {
	Slider,
	SliderValue,
	SliderControl,
	SliderTrack,
	SliderIndicator,
	SliderThumb,
} from "@craftdotui/baseui/components/slider";

export function Particle() {
	return (
		<Slider defaultValue={70} disabled className="w-full max-w-sm">
			<SliderValue />
			<SliderControl>
				<SliderTrack>
					<SliderIndicator />
					<SliderThumb />
				</SliderTrack>
			</SliderControl>
		</Slider>
	);
}
