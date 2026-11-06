import {
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyRoot,
	EmptyTitle,
} from "@craftdotui/craftui/components/empty";
import {
	AvatarFallback,
	AvatarImage,
	AvatarRoot,
} from "@craftdotui/baseui/components/avatar";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	return (
		<EmptyRoot>
			<EmptyHeader>
				<EmptyMedia variant="default">
					<AvatarRoot className="size-12 grayscale">
						<AvatarImage
							src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
							alt="User avatar"
						/>
						<AvatarFallback>YR</AvatarFallback>
					</AvatarRoot>
				</EmptyMedia>
				<EmptyTitle>User Offline</EmptyTitle>
				<EmptyDescription>
					This user is currently offline. You can leave a message to
					notify them or try again later.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button size="sm">Leave Message</Button>
			</EmptyContent>
		</EmptyRoot>
	);
}

export default Particle;
