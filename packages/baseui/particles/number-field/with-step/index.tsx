import {
	NumberFieldRoot,
	NumberFieldGroup,
	NumberFieldInput,
	NumberFieldIncrement,
	NumberFieldDecrement,
	NumberFieldScrubArea,
	NumberFieldScrubAreaCursor,
} from "@craftdotui/baseui/components/number-field";

export function Particle() {
	return (
		<div className="flex flex-col gap-8">
			<NumberFieldRoot defaultValue={10} step={10} id="step-10">
				<NumberFieldScrubArea>
					<span>Step 10</span>
					<NumberFieldScrubAreaCursor />
				</NumberFieldScrubArea>

				<NumberFieldGroup className="mt-2">
					<NumberFieldDecrement />
					<NumberFieldInput />
					<NumberFieldIncrement />
				</NumberFieldGroup>
			</NumberFieldRoot>

			<NumberFieldRoot defaultValue={10} step={0.1} id="step-0.1">
				<NumberFieldScrubArea>
					<span>Step 0.1</span>
					<NumberFieldScrubAreaCursor />
				</NumberFieldScrubArea>

				<NumberFieldGroup className="mt-2">
					<NumberFieldDecrement />
					<NumberFieldInput />
					<NumberFieldIncrement />
				</NumberFieldGroup>
			</NumberFieldRoot>
		</div>
	);
}
