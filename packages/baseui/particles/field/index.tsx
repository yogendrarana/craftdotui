import {
	Field,
	FieldLabel,
	FieldControl,
	FieldDescription,
} from "@craftdotui/baseui/components/field";

export function Particle() {
	return (
		<Field>
			<FieldLabel>Email</FieldLabel>
			<FieldControl placeholder="you@example.com" />
			<FieldDescription>We’ll never share your email.</FieldDescription>
		</Field>
	);
}
