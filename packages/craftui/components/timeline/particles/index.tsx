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
		<TimelineRoot className="mx-auto max-w-md">
			<TimelineItem>
				<TimelineMarker />
				<TimelineConnector />
				<TimelineContent>
					<TimelineTitle>Project Kickoff</TimelineTitle>
					<TimelineDescription>
						Initial discovery session, scope alignment, and
						architecture planning with the core engineering team.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker />
				<TimelineConnector />
				<TimelineContent>
					<TimelineTitle>Design System & Primitives</TimelineTitle>
					<TimelineDescription>
						Built accessible, composable UI primitives and semantic
						design tokens.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker />
				<TimelineContent>
					<TimelineTitle>Production Release</TimelineTitle>
					<TimelineDescription>
						Completed final QA, performance benchmarks, and rolled
						out v1.0 to production.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
		</TimelineRoot>
	);
}

export default Particle;
