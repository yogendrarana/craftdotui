import {
	Field,
	FieldLabel,
	FieldControl,
} from "@craftdotui/baseui/components/field";

import {
	Fieldset,
	FieldsetLegend,
} from "@craftdotui/baseui/components/fieldset";

export function FieldsetExampleWithFields() {
	return (
		<Fieldset>
			<FieldsetLegend>Account details</FieldsetLegend>

			<Field>
				<FieldLabel>Email</FieldLabel>
				<FieldControl type="email" />
			</Field>

			<Field>
				<FieldLabel>Password</FieldLabel>
				<FieldControl type="password" />
			</Field>
		</Fieldset>
	);
}
