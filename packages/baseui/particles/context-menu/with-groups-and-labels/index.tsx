import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuPortal,
	ContextMenuPositioner,
	ContextMenuPopup,
	ContextMenuGroup,
	ContextMenuGroupLabel,
	ContextMenuItem,
	ContextMenuSeparator,
} from "@craftdotui/baseui/components/context-menu";

export function Particle() {
	return (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border text-sm">
				Right click for actions
			</ContextMenuTrigger>

			<ContextMenuPortal>
				<ContextMenuPositioner>
					<ContextMenuPopup>
						<ContextMenuGroup>
							<ContextMenuGroupLabel>File</ContextMenuGroupLabel>
							<ContextMenuItem>New File</ContextMenuItem>
							<ContextMenuItem>Open</ContextMenuItem>
							<ContextMenuItem>Save</ContextMenuItem>
						</ContextMenuGroup>

						<ContextMenuSeparator />

						<ContextMenuGroup>
							<ContextMenuGroupLabel>Edit</ContextMenuGroupLabel>
							<ContextMenuItem>Undo</ContextMenuItem>
							<ContextMenuItem>Redo</ContextMenuItem>
							<ContextMenuItem>Rename</ContextMenuItem>
						</ContextMenuGroup>
					</ContextMenuPopup>
				</ContextMenuPositioner>
			</ContextMenuPortal>
		</ContextMenu>
	);
}
