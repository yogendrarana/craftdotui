import {
	SliderRoot,
	SliderControl,
	SliderTrack,
	SliderIndicator,
	SliderThumb,
} from "@craftdotui/baseui/components/slider";

export function Particle() {
	return (
		<div className="h-40 flex items-center justify-center">
			<SliderRoot
				defaultValue={50}
				orientation="vertical"
				className="h-full"
			>
				<SliderControl>
					<SliderTrack>
						<SliderIndicator />
						<SliderThumb />
					</SliderTrack>
				</SliderControl>
			</SliderRoot>
		</div>
	);
}
