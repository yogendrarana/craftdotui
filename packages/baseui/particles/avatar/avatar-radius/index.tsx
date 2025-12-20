import {
	Avatar,
	AvatarImage,
	AvatarFallback,
} from "@craftdotui/baseui/components/avatar";

export default function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-4">
			<Avatar className="rounded-full">
				<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
				<AvatarFallback>RD</AvatarFallback>
			</Avatar>
			<Avatar className="rounded-lg">
				<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
				<AvatarFallback>LG</AvatarFallback>
			</Avatar>
			<Avatar className="rounded-md">
				<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
				<AvatarFallback>MD</AvatarFallback>
			</Avatar>
		</div>
	);
}
