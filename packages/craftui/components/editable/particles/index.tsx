import { Check, Pencil, X } from "lucide-react";
import { Button } from "@craftdotui/baseui/components/button";
import {
	EditableArea,
	EditableCancelTrigger,
	EditableControl,
	EditableEditTrigger,
	EditableInput,
	EditablePreview,
	EditableRoot,
	EditableSubmitTrigger,
} from "@craftdotui/craftui/components/editable";

export function Particle() {
	return (
		<EditableRoot
			defaultValue="Click to edit title"
			placeholder="Enter a title..."
			className="mx-auto w-full max-w-sm"
		>
			<EditableArea>
				<EditablePreview />
				<EditableInput />
			</EditableArea>
			<EditableControl>
				<EditableEditTrigger
					render={<Button variant="ghost" size="icon-sm" />}
					aria-label="Edit"
				>
					<Pencil className="size-3.5" />
				</EditableEditTrigger>
				<EditableSubmitTrigger
					render={<Button variant="ghost" size="icon-sm" />}
					aria-label="Save"
				>
					<Check className="size-3.5" />
				</EditableSubmitTrigger>
				<EditableCancelTrigger
					render={<Button variant="ghost" size="icon-sm" />}
					aria-label="Cancel"
				>
					<X className="size-3.5" />
				</EditableCancelTrigger>
			</EditableControl>
		</EditableRoot>
	);
}

export default Particle;
