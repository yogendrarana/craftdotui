import {
	FieldRoot,
	FieldLabel,
	FieldDescription,
} from "@craftdotui/baseui/components/field";
import { Input } from "@craftdotui/baseui/components/input";

export function InputExampleWithField() {
	return (
		<FieldRoot>
			<FieldLabel>Email</FieldLabel>
			<Input type="email" placeholder="you@example.com" />
			<FieldDescription>We’ll never share your email.</FieldDescription>
		</FieldRoot>
	);
}
