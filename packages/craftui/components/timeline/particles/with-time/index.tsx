import {
	TimelineConnector,
	TimelineContent,
	TimelineDescription,
	TimelineItem,
	TimelineMarker,
	TimelineRoot,
	TimelineTime,
	TimelineTitle,
} from "@craftdotui/craftui/components/timeline";

export function Particle() {
	return (
		<TimelineRoot className="mx-auto max-w-md">
			<TimelineItem>
				<TimelineMarker className="border-primary bg-primary" />
				<TimelineConnector className="bg-primary" />
				<TimelineContent>
					<TimelineTime dateTime="2026-01-15">
						Jan 15, 2026
					</TimelineTime>
					<TimelineTitle>v2.0 Architecture Overhaul</TimelineTitle>
					<TimelineDescription>
						Migrated core primitives to Base UI with full render
						prop composition and semantic Tailwind v4 tokens.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker className="border-primary bg-primary" />
				<TimelineConnector />
				<TimelineContent>
					<TimelineTime dateTime="2026-02-10">
						Feb 10, 2026
					</TimelineTime>
					<TimelineTitle>Motion Package Extraction</TimelineTitle>
					<TimelineDescription>
						Extracted animation and physics primitives into the
						dedicated @craftdotui/motion package.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker />
				<TimelineContent>
					<TimelineTime dateTime="2026-03-01">
						Mar 01, 2026
					</TimelineTime>
					<TimelineTitle>CLI Registry v2</TimelineTitle>
					<TimelineDescription>
						One-command installation for components, particles, and
						blocks.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
		</TimelineRoot>
	);
}

export default Particle;
