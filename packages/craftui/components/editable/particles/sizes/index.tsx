import {
	EditableArea,
	EditableInput,
	EditablePreview,
	EditableRoot,
} from "@craftdotui/craftui/components/editable";

export function Particle() {
	return (
		<div className="mx-auto flex w-full max-w-sm flex-col gap-3">
			<EditableRoot defaultValue="Small editable">
				<EditableArea>
					<EditablePreview size="sm" />
					<EditableInput size="sm" />
				</EditableArea>
			</EditableRoot>

			<EditableRoot defaultValue="Medium editable">
				<EditableArea>
					<EditablePreview size="md" />
					<EditableInput size="md" />
				</EditableArea>
			</EditableRoot>

			<EditableRoot defaultValue="Large editable">
				<EditableArea>
					<EditablePreview size="lg" />
					<EditableInput size="lg" />
				</EditableArea>
			</EditableRoot>
		</div>
	);
}

export default Particle;
