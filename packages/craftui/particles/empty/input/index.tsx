import { Search } from "lucide-react";
import {
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyRoot,
	EmptyTitle,
} from "@craftdotui/craftui/components/empty";
import { Input } from "@craftdotui/baseui/components/input";

export function Particle() {
	return (
		<EmptyRoot>
			<EmptyHeader>
				<EmptyTitle>404 - Not Found</EmptyTitle>
				<EmptyDescription>
					The page you&apos;re looking for doesn&apos;t exist. Try
					searching for what you need below.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<div className="relative w-full max-w-xs">
					<Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
					<Input
						placeholder="Try searching for pages..."
						className="pl-8"
					/>
				</div>
				<EmptyDescription className="text-xs">
					Need help? <a href="#support">Contact support</a>
				</EmptyDescription>
			</EmptyContent>
		</EmptyRoot>
	);
}

export default Particle;
