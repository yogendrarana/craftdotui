import { Cloud } from "lucide-react";
import {
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyRoot,
	EmptyTitle,
} from "@craftdotui/craftui/components/empty";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	return (
		<EmptyRoot className="border border-border">
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<Cloud />
				</EmptyMedia>
				<EmptyTitle>Cloud Storage Empty</EmptyTitle>
				<EmptyDescription>
					Upload files to your cloud storage to access them anywhere.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button variant="outline" size="sm">
					Upload Files
				</Button>
			</EmptyContent>
		</EmptyRoot>
	);
}

export default Particle;

