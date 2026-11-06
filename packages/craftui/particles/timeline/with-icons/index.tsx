import { Check, GitCommit, GitPullRequest, Rocket } from "lucide-react";
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
				<TimelineMarker className="border border-primary/30">
					<GitCommit />
				</TimelineMarker>
				<TimelineConnector className="bg-primary/30" />
				<TimelineContent>
					<TimelineTime>2 hours ago</TimelineTime>
					<TimelineTitle>
						Pushed 4 commits to feat/timeline
					</TimelineTitle>
					<TimelineDescription>
						Refactored TimelineRoot orientation context and
						TimelineConnector primitive.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker className="border border-primary/30">
					<GitPullRequest />
				</TimelineMarker>
				<TimelineConnector className="bg-primary/30" />
				<TimelineContent>
					<TimelineTime>45 minutes ago</TimelineTime>
					<TimelineTitle>Merged pull request #142</TimelineTitle>
					<TimelineDescription>
						All CI checks passed and reviewed by 2 maintainers.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker>
					<Check />
				</TimelineMarker>
				<TimelineConnector />
				<TimelineContent>
					<TimelineTime>10 minutes ago</TimelineTime>
					<TimelineTitle>Build verified</TimelineTitle>
					<TimelineDescription>
						Registry artifacts and TypeScript declarations built
						successfully.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineMarker>
					<Rocket />
				</TimelineMarker>
				<TimelineContent>
					<TimelineTime>Pending</TimelineTime>
					<TimelineTitle>Production deployment</TimelineTitle>
					<TimelineDescription>
						Awaiting manual approval to promote to edge network.
					</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
		</TimelineRoot>
	);
}

export default Particle;
