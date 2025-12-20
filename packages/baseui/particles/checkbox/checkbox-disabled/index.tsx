import {
	Checkbox,
	CheckboxIndicator,
	CheckIcon,
} from "@craftdotui/baseui/components/checkbox";

export default function Particle() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-2">
				<Checkbox id="disabled-unchecked" disabled>
					<CheckboxIndicator>
						<CheckIcon />
					</CheckboxIndicator>
				</Checkbox>
				<label
					htmlFor="disabled-unchecked"
					className="text-sm text-muted-foreground cursor-not-allowed"
				>
					Disabled unchecked
				</label>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox id="disabled-checked" disabled defaultChecked>
					<CheckboxIndicator>
						<CheckIcon />
					</CheckboxIndicator>
				</Checkbox>
				<label
					htmlFor="disabled-checked"
					className="text-sm text-muted-foreground cursor-not-allowed"
				>
					Disabled checked
				</label>
			</div>
		</div>
	);
}
