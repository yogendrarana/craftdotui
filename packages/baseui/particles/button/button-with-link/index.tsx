import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	return (
		<Button
			variant="link"
			render={
				<a href="/" aria-label="Home">
					Home
				</a>
			}
		>
			Link
		</Button>
	);
}
