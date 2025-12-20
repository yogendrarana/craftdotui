import {
	Checkbox,
	CheckIcon,
	CheckboxIndicator,
} from "@craftdotui/baseui/components/checkbox";

export default function Particle() {
	return (
		<div className="flex items-center gap-2 cursor-pointer">
			<Checkbox id="notifications">
				<CheckboxIndicator>
					<CheckIcon />
				</CheckboxIndicator>
				{/* <CheckboxIndicator /> */}
			</Checkbox>
			<span>Enable notifications</span>
		</div>
	);
}
