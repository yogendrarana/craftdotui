import { Plus } from "lucide-react";
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
				<EmptyMedia>
					<div className="flex -space-x-2 *:ring-2 *:ring-background">
						<AvatarRoot className="size-10 grayscale">
							<AvatarImage
								src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
								alt="Member 1"
							/>
							<AvatarFallback>JD</AvatarFallback>
						</AvatarRoot>
						<AvatarRoot className="size-10 grayscale">
							<AvatarImage
								src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80"
								alt="Member 2"
							/>
							<AvatarFallback>AS</AvatarFallback>
						</AvatarRoot>
						<AvatarRoot className="size-10 grayscale">
							<AvatarImage
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
								alt="Member 3"
							/>
							<AvatarFallback>MK</AvatarFallback>
						</AvatarRoot>
					</div>
				</EmptyMedia>
				<EmptyTitle>No Team Members</EmptyTitle>
				<EmptyDescription>
					Invite your team to collaborate on this project.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button size="sm">
					<Plus />
					Invite Members
				</Button>
			</EmptyContent>
		</EmptyRoot>
	);
}

export default Particle;

