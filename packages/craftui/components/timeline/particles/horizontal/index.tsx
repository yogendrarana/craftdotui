import {
	TimelineConnector,
	TimelineContent,
	TimelineDescription,
	TimelineItem,
	TimelineMarker,
	TimelineRoot,
	TimelineTitle,
} from "@craftdotui/craftui/components/timeline";

export function Particle() {
	return (
		<TimelineRoot orientation="horizontal" className="w-full max-w-2xl">
			<TimelineItem>
				<TimelineMarker className="border-primary bg-primary" />
				<TimelineConnector className="bg-primary" />
				<TimelineContent>
					<TimelineTitle>2023</TimelineTitle>
					<TimelineDescription>Company Founded</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker className="border-primary bg-primary" />
				<TimelineConnector className="bg-primary" />
				<TimelineContent>
					<TimelineTitle>2024</TimelineTitle>
					<TimelineDescription>Seed Round Raised</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker className="border-primary bg-primary" />
				<TimelineConnector />
				<TimelineContent>
					<TimelineTitle>2025</TimelineTitle>
					<TimelineDescription>Global Launch</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker />
				<TimelineContent>
					<TimelineTitle>2026</TimelineTitle>
					<TimelineDescription>
						Enterprise Platform
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
		</TimelineRoot>
	);
}

export default Particle;
