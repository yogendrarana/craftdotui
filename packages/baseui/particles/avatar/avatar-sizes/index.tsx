import {
	AvatarRoot,
	AvatarImage,
	AvatarFallback,
} from "@craftdotui/baseui/components/avatar";

export default function Particle() {
	return (
		<div className="flex flex-wrap items-center gap-4">
			<AvatarRoot>
				<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
				<AvatarFallback className="text-xs">XS</AvatarFallback>
			</AvatarRoot>
			<AvatarRoot className="size-10">
				<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
				<AvatarFallback>LG</AvatarFallback>
			</AvatarRoot>
			<AvatarRoot className="size-12">
				<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
				<AvatarFallback className="text-lg">XL</AvatarFallback>
			</AvatarRoot>
		</div>
	);
}
