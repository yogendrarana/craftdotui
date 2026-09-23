import {
	AvatarRoot,
	AvatarImage,
	AvatarFallback,
} from "@craftdotui/baseui/components/avatar";

export default function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-4">
			<AvatarRoot className="rounded-full">
				<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
				<AvatarFallback>RD</AvatarFallback>
			</AvatarRoot>
			<AvatarRoot className="rounded-lg">
				<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
				<AvatarFallback>LG</AvatarFallback>
			</AvatarRoot>
			<AvatarRoot className="rounded-md">
				<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
				<AvatarFallback>MD</AvatarFallback>
			</AvatarRoot>
		</div>
	);
}
