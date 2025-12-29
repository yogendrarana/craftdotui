import {
	Meter,
	MeterTrack,
	MeterIndicator,
	MeterValue,
} from "@craftdotui/baseui/components/meter";

export function MeterExampleMinimal() {
	return (
		<Meter value={85} max={100} className="max-w-100">
			<MeterTrack>
				<MeterIndicator />
			</MeterTrack>
			<MeterValue />
		</Meter>
	);
}
