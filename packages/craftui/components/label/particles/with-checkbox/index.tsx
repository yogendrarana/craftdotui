import {
	CheckboxIndicator,
	CheckboxRoot,
} from "@craftdotui/baseui/components/checkbox";
import { Label } from "@craftdotui/craftui/components/label";

export default function Particle() {
	return (
		<div className="flex items-center gap-2">
			<CheckboxRoot id="label-terms" defaultChecked>
				<CheckboxIndicator />
			</CheckboxRoot>
			<Label htmlFor="label-terms">Accept terms and conditions</Label>
		</div>
	);
}
