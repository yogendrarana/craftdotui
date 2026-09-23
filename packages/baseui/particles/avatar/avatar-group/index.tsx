import {
	AvatarRoot,
	AvatarImage,
	AvatarFallback,
} from "@craftdotui/baseui/components/avatar";

export default function Particle() {
	return (
		<div className="flex -space-x-3">
			<AvatarRoot className="border-2 border-background">
				<AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
				<AvatarFallback>U1</AvatarFallback>
			</AvatarRoot>
			<AvatarRoot className="border-2 border-background">
				<AvatarImage src="https://github.com/vercel.png" alt="User 2" />
				<AvatarFallback>U2</AvatarFallback>
			</AvatarRoot>
			<AvatarRoot className="border-2 border-background">
				<AvatarImage src="https://github.com/nextjs.png" alt="User 3" />
				<AvatarFallback>U3</AvatarFallback>
			</AvatarRoot>
			<AvatarRoot className="border-2 border-background">
				<AvatarFallback className="bg-primary text-primary-foreground">
					+5
				</AvatarFallback>
			</AvatarRoot>
		</div>
	);
}
