import { ArrowUpRightIcon, GitBranchIcon, StarIcon } from "lucide-react";

import { Button } from "@craftdotui/baseui/components/button";
import { Badge } from "@craftdotui/craftui/components/badge";
import {
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardRoot,
	CardTitle,
} from "@craftdotui/craftui/components/card";

export default function Particle() {
	return (
		<CardRoot className="w-full max-w-md">
			<CardHeader>
				<div className="flex items-center gap-2">
					<CardTitle>craftdotui/registry</CardTitle>
					<Badge variant="secondary">Public</Badge>
				</div>
				<CardDescription>
					Composable UI primitives and motion components built on Base
					UI and Tailwind CSS.
				</CardDescription>
				<CardAction>
					<Button variant="outline" size="sm">
						<StarIcon className="size-3.5" />
						Star
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-4 text-xs text-muted-foreground">
					<span className="flex items-center gap-1.5">
						<span className="size-2.5 rounded-full bg-info" />
						TypeScript
					</span>
					<span className="flex items-center gap-1">
						<StarIcon className="size-3.5" />
						2.4k
					</span>
					<span className="flex items-center gap-1">
						<GitBranchIcon className="size-3.5" />
						148 forks
					</span>
				</div>
			</CardContent>
			<CardFooter className="justify-between text-xs text-muted-foreground">
				<span>Updated 2 hours ago</span>
				<a
					href="#repo"
					className="inline-flex items-center gap-1 font-medium text-foreground hover:underline"
				>
					View repository
					<ArrowUpRightIcon className="size-3.5" />
				</a>
			</CardFooter>
		</CardRoot>
	);
}
