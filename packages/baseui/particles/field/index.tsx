import {
	FieldRoot,
	FieldLabel,
	FieldControl,
	FieldDescription,
} from "@craftdotui/baseui/components/field";

export function Particle() {
	return (
		<FieldRoot>
			<FieldLabel>Email</FieldLabel>
			<FieldControl placeholder="you@example.com" />
			<FieldDescription>We’ll never share your email.</FieldDescription>
		</FieldRoot>
	);
}
