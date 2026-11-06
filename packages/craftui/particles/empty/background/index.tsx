import { Bell, RefreshCcw } from "lucide-react";
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
		<EmptyRoot className="border border-border bg-muted/30">
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<Bell />
				</EmptyMedia>
				<EmptyTitle>No notifications</EmptyTitle>
				<EmptyDescription>
					You&apos;re all caught up. New notifications will appear
					here.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button variant="outline" size="sm">
					<RefreshCcw />
					Refresh
				</Button>
			</EmptyContent>
		</EmptyRoot>
	);
}

export default Particle;
