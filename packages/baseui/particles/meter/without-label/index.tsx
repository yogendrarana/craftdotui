import {
	MeterRoot,
	MeterTrack,
	MeterIndicator,
	MeterValue,
} from "@craftdotui/baseui/components/meter";

export function MeterExampleMinimal() {
	return (
		<MeterRoot value={85} max={100} className="max-w-100">
			<MeterTrack>
				<MeterIndicator />
			</MeterTrack>
			<MeterValue />
		</MeterRoot>
	);
}
