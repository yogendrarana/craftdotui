import {
	Meter,
	MeterLabel,
	MeterTrack,
	MeterIndicator,
	MeterValue,
} from "@craftdotui/baseui/components/meter";

export function MeterExampleCustom() {
	return (
		<Meter value={85} max={100} className="max-w-100">
			<div className="flex items-center justify-between gap-2">
				<MeterLabel>Storage usage</MeterLabel>
				<MeterValue />
			</div>
			<MeterTrack>
				<MeterIndicator className="bg-destructive" />
			</MeterTrack>
		</Meter>
	);
}
