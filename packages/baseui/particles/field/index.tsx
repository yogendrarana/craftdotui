import { Field } from "@craftdotui/baseui/components/field";

export default function Particle() {
	return (
		<Field.Root>
			<Field.Label>Email</Field.Label>
			<Field.Control placeholder="you@example.com" />
			<Field.Description>We’ll never share your email.</Field.Description>
		</Field.Root>
	);
}
