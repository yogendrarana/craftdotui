import { RadioGroupRoot, RadioRoot } from "@craftdotui/baseui/components/radio";

export function Particle() {
	return (
		<RadioGroupRoot defaultValue="option-one">
			<div className="flex items-center gap-2">
				<RadioRoot value="option-one" id="option-one" />
				<label
					htmlFor="option-one"
					className="text-sm font-medium leading-none cursor-pointer"
				>
					Option One
				</label>
			</div>
			<div className="flex items-center gap-2">
				<RadioRoot value="option-two" id="option-two" disabled />
				<label
					htmlFor="option-two"
					className="text-sm text-muted-foreground cursor-not-allowed"
				>
					Option Two (Disabled)
				</label>
			</div>
		</RadioGroupRoot>
	);
}
