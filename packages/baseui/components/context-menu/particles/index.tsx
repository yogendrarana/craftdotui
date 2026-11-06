import {
	ContextMenuRoot,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSubmenu,
	ContextMenuSubmenuTrigger,
	ContextMenuCheckboxItem,
	ContextMenuGroup,
	ContextMenuGroupLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
} from "@craftdotui/baseui/components/context-menu";

export default function Particle() {
	return (
		<ContextMenuRoot>
			<ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border text-sm">
				Right click here
			</ContextMenuTrigger>

			<ContextMenuContent>
				<ContextMenuItem inset>
					New File
					<ContextMenuShortcut>⌘N</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem inset>
					Open File
					<ContextMenuShortcut>⌘O</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem inset disabled>
					Save
					<ContextMenuShortcut>⌘S</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSubmenu>
					<ContextMenuSubmenuTrigger inset>
						Edit
					</ContextMenuSubmenuTrigger>
					<ContextMenuContent className="w-48">
						<ContextMenuItem>Cut</ContextMenuItem>
						<ContextMenuItem>Copy</ContextMenuItem>
						<ContextMenuItem>Paste</ContextMenuItem>
						<ContextMenuSeparator />
						<ContextMenuItem>Find & Replace</ContextMenuItem>
						<ContextMenuSeparator />
						<ContextMenuItem>Clear All</ContextMenuItem>
					</ContextMenuContent>
				</ContextMenuSubmenu>
				<ContextMenuSeparator />
				<ContextMenuCheckboxItem inset defaultChecked>
					Show Line Numbers
				</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem inset>
					Word Wrap
				</ContextMenuCheckboxItem>
				<ContextMenuSeparator />
				<ContextMenuGroup>
					<ContextMenuRadioGroup defaultValue="dark">
						<ContextMenuGroupLabel inset>
							Themes
						</ContextMenuGroupLabel>
						<ContextMenuRadioItem inset value="light">
							Light Theme
						</ContextMenuRadioItem>
						<ContextMenuRadioItem inset value="dark">
							Dark Theme
						</ContextMenuRadioItem>
						<ContextMenuRadioItem inset value="auto">
							Auto Theme
						</ContextMenuRadioItem>
					</ContextMenuRadioGroup>
				</ContextMenuGroup>
			</ContextMenuContent>
		</ContextMenuRoot>
	);
}
