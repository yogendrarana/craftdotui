import {
	Slider,
	SliderControl,
	SliderTrack,
	SliderIndicator,
	SliderThumb,
} from "@craftdotui/baseui/components/slider";

export function Particle() {
	return (
		<div className="h-40 flex items-center justify-center">
			<Slider defaultValue={50} orientation="vertical" className="h-full">
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
