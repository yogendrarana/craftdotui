import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuPortal,
	ContextMenuPositioner,
	ContextMenuPopup,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
} from "@craftdotui/baseui/components/context-menu";

export function Particle() {
	return (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border text-sm">
				Sort by
			</ContextMenuTrigger>

			<ContextMenuPortal>
				<ContextMenuPositioner>
					<ContextMenuPopup>
						<ContextMenuRadioGroup defaultValue="name">
							<ContextMenuRadioItem inset value="name">
								Name (A-Z)
							</ContextMenuRadioItem>

							<ContextMenuRadioItem inset value="date">
								Date modified (newest)
							</ContextMenuRadioItem>

							<ContextMenuRadioItem inset value="date-asc">
								Date modified (oldest)
							</ContextMenuRadioItem>

							<ContextMenuRadioItem inset value="size">
								Size (largest)
							</ContextMenuRadioItem>

							<ContextMenuRadioItem inset value="size-asc">
								Size (smallest)
							</ContextMenuRadioItem>

							<ContextMenuRadioItem inset value="type">
								Type
							</ContextMenuRadioItem>
						</ContextMenuRadioGroup>
					</ContextMenuPopup>
				</ContextMenuPositioner>
			</ContextMenuPortal>
		</ContextMenu>
	);
}
