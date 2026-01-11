import {
	NumberFieldRoot,
	NumberFieldGroup,
	NumberFieldInput,
	NumberFieldIncrement,
	NumberFieldDecrement,
} from "@craftdotui/baseui/components/number-field";

export function Particle() {
	return (
		<NumberFieldRoot defaultValue={10}>
			<NumberFieldGroup>
				<NumberFieldDecrement />
				<NumberFieldInput />
				<NumberFieldIncrement />
			</NumberFieldGroup>
		</NumberFieldRoot>
	);
}
