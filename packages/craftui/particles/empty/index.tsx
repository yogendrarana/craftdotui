import { ArrowUpRight, FolderCode } from "lucide-react";
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
		<EmptyRoot>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderCode />
				</EmptyMedia>
				<EmptyTitle>No projects yet</EmptyTitle>
				<EmptyDescription>
					You haven&apos;t created any projects yet. Get started by
					creating your first project.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<div className="flex gap-2">
					<Button>Create Project</Button>
					<Button variant="outline">Import Project</Button>
				</div>
				<Button
					variant="link"
					size="sm"
					className="text-muted-foreground"
					render={<a href="#learn-more" />}
				>
					Learn More <ArrowUpRight />
				</Button>
			</EmptyContent>
		</EmptyRoot>
	);
}

export default Particle;
