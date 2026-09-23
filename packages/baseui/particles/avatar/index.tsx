import {
	AvatarRoot,
	AvatarImage,
	AvatarFallback,
} from "@craftdotui/baseui/components/avatar";

export default function Particle() {
	return (
		<AvatarRoot>
			<AvatarImage
				src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg"
				alt="User Avatar"
			/>
			<AvatarFallback>JD</AvatarFallback>
		</AvatarRoot>
	);
}
