import { Button } from "@craftdotui/baseui/components/button";
import {
	EditableArea,
	EditableCancelTrigger,
	EditableControl,
	EditableEditTrigger,
	EditableInput,
	EditableLabel,
	EditablePreview,
	EditableRoot,
	EditableSubmitTrigger,
} from "@craftdotui/craftui/components/editable";

export function Particle() {
	return (
		<EditableRoot
			defaultValue="Write a short bio or description here. Press Cmd/Ctrl + Enter to save, or Escape to cancel."
			placeholder="Add a description..."
			orientation="vertical"
			submitMode="none"
			className="mx-auto w-full max-w-md"
		>
			<EditableLabel>Bio</EditableLabel>
			<EditableArea>
				<EditablePreview className="whitespace-pre-wrap" />
				<EditableInput multiline rows={3} />
			</EditableArea>
			<EditableControl>
				<EditableEditTrigger
					render={<Button variant="outline" size="sm" />}
				>
					Edit
				</EditableEditTrigger>
				<EditableCancelTrigger
					render={<Button variant="ghost" size="sm" />}
				>
					Cancel
				</EditableCancelTrigger>
				<EditableSubmitTrigger render={<Button size="sm" />}>
					Save
				</EditableSubmitTrigger>
			</EditableControl>
		</EditableRoot>
	);
}

export default Particle;
