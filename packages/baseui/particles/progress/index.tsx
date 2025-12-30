import {
	Progress,
	ProgressLabel,
	ProgressTrack,
	ProgressIndicator,
	ProgressValue,
} from "@craftdotui/baseui/components/progress";
import React from "react";

export function Particle() {
	const [value, setValue] = React.useState(20);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setValue((current) =>
				Math.min(100, Math.round(current + Math.random() * 25)),
			);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Progress value={value} max={100} className="max-w-100">
			<div className="flex items-center justify-between gap-2">
				<ProgressLabel>Downloading...</ProgressLabel>
				<ProgressValue />
			</div>
			<ProgressTrack>
				<ProgressIndicator />
			</ProgressTrack>
		</Progress>
	);
}
