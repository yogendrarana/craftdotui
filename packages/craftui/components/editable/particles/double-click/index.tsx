import {
	EditableArea,
	EditableInput,
	EditableLabel,
	EditablePreview,
	EditableRoot,
} from "@craftdotui/craftui/components/editable";

export function Particle() {
	return (
		<EditableRoot
			defaultValue="Double-click to edit"
			placeholder="Enter text..."
			activationMode="dblclick"
			orientation="vertical"
			className="mx-auto w-full max-w-sm"
		>
			<EditableLabel>Project Name</EditableLabel>
			<EditableArea>
				<EditablePreview />
				<EditableInput />
			</EditableArea>
		</EditableRoot>
	);
}

export default Particle;
