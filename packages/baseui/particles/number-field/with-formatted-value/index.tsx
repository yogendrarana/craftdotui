import {
	NumberFieldRoot,
	NumberFieldGroup,
	NumberFieldInput,
	NumberFieldIncrement,
	NumberFieldDecrement,
} from "@craftdotui/baseui/components/number-field";

export function Particle() {
	return (
		<NumberFieldRoot
			defaultValue={10}
			format={{ currency: "USD", style: "currency" }}
		>
			<NumberFieldGroup>
				<NumberFieldDecrement />
				<NumberFieldInput />
				<NumberFieldIncrement />
			</NumberFieldGroup>
		</NumberFieldRoot>
	);
}
