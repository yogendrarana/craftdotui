import {
	CheckboxRoot,
	CheckboxIndicator,
} from "@craftdotui/baseui/components/checkbox";

export default function Particle() {
	return (
		<div className="flex items-center gap-2 cursor-pointer">
			<CheckboxRoot id="notifications">
				<CheckboxIndicator />
			</CheckboxRoot>
			<span>Enable notifications</span>
		</div>
	);
}
