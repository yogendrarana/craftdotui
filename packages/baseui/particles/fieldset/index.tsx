import {
	FieldRoot,
	FieldLabel,
	FieldControl,
} from "@craftdotui/baseui/components/field";

import {
	FieldsetRoot,
	FieldsetLegend,
} from "@craftdotui/baseui/components/fieldset";

export function FieldsetExampleWithFields() {
	return (
		<FieldsetRoot>
			<FieldsetLegend>Account details</FieldsetLegend>

			<FieldRoot>
				<FieldLabel>Email</FieldLabel>
				<FieldControl type="email" />
			</FieldRoot>

			<FieldRoot>
				<FieldLabel>Password</FieldLabel>
				<FieldControl type="password" />
			</FieldRoot>
		</FieldsetRoot>
	);
}
