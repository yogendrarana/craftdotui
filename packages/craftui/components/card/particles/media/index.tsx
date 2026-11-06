import { ArrowRightIcon, ClockIcon } from "lucide-react";

import { Button } from "@craftdotui/baseui/components/button";
import { Badge } from "@craftdotui/craftui/components/badge";
import {
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardRoot,
	CardTitle,
} from "@craftdotui/craftui/components/card";

export default function Particle() {
	return (
		<CardRoot className="w-full max-w-sm overflow-hidden pt-0">
			<div className="aspect-16/9 w-full overflow-hidden border-b border-border bg-muted">
				<img
					src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
					alt="Abstract geometric waves"
					className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
				/>
			</div>
			<CardHeader>
				<CardTitle>Design Systems at Scale</CardTitle>
				<CardDescription>
					How composable tokens and headless primitives streamline
					cross-team product engineering.
				</CardDescription>
				<CardAction>
					<Badge variant="outline">Architecture</Badge>
				</CardAction>
			</CardHeader>
			<CardFooter className="justify-between">
				<span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
					<ClockIcon className="size-3.5" />6 min read
				</span>
				<Button variant="ghost" size="sm">
					Read article
					<ArrowRightIcon className="size-3.5" />
				</Button>
			</CardFooter>
		</CardRoot>
	);
}
