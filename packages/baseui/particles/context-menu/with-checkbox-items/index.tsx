import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuPortal,
	ContextMenuPositioner,
	ContextMenuPopup,
	ContextMenuCheckboxItem,
} from "@craftdotui/baseui/components/context-menu";

export function Particle() {
	return (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border text-sm">
				Preferences
			</ContextMenuTrigger>

			<ContextMenuPortal>
				<ContextMenuPositioner>
					<ContextMenuPopup className="min-w-48 p-1">
						<ContextMenuCheckboxItem inset>
							Enable autosave
						</ContextMenuCheckboxItem>

						<ContextMenuCheckboxItem inset>
							Sync files across devices
						</ContextMenuCheckboxItem>

						<ContextMenuCheckboxItem inset>
							Show file previews
						</ContextMenuCheckboxItem>

						<ContextMenuCheckboxItem inset>
							Live collaboration
						</ContextMenuCheckboxItem>

						<ContextMenuCheckboxItem inset>
							Auto backup to cloud
						</ContextMenuCheckboxItem>

						<ContextMenuCheckboxItem inset>
							Spell check
						</ContextMenuCheckboxItem>
					</ContextMenuPopup>
				</ContextMenuPositioner>
			</ContextMenuPortal>
		</ContextMenu>
	);
}
