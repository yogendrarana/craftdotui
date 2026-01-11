import {
	NumberFieldRoot,
	NumberFieldScrubArea,
	NumberFieldGroup,
	NumberFieldInput,
	NumberFieldIncrement,
	NumberFieldDecrement,
	NumberFieldScrubAreaCursor,
} from "@craftdotui/baseui/components/number-field";

export function Particle() {
	const id = "amount";

	return (
		<NumberFieldRoot
			id={id}
			defaultValue={100}
			className="flex flex-col gap-2"
		>
			<NumberFieldScrubArea>
				Amount
				<NumberFieldScrubAreaCursor />
			</NumberFieldScrubArea>

			<NumberFieldGroup>
				<NumberFieldDecrement />
				<NumberFieldInput />
				<NumberFieldIncrement />
			</NumberFieldGroup>
		</NumberFieldRoot>
	);
}
