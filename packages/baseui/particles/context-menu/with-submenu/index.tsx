import {
	ContextMenuRoot,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuSubmenu,
	ContextMenuSubmenuTrigger,
	ContextMenuItem,
} from "@craftdotui/baseui/components/context-menu";

export function Particle() {
	return (
		<ContextMenuRoot>
			<ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border text-sm">
				Right click
			</ContextMenuTrigger>

			<ContextMenuContent className="min-w-48 p-1">
				<ContextMenuItem>Open</ContextMenuItem>
				<ContextMenuItem>Open in new tab</ContextMenuItem>
				<ContextMenuItem>Open as preview</ContextMenuItem>

				<ContextMenuSubmenu>
					<ContextMenuSubmenuTrigger>Share</ContextMenuSubmenuTrigger>
					<ContextMenuContent className="min-w-48 p-1 w-48">
						<ContextMenuItem>Email</ContextMenuItem>
						<ContextMenuItem>Copy link</ContextMenuItem>
						<ContextMenuItem>Copy image</ContextMenuItem>
						<ContextMenuItem>Share to social</ContextMenuItem>
					</ContextMenuContent>
				</ContextMenuSubmenu>

				<ContextMenuSubmenu>
					<ContextMenuSubmenuTrigger>Edit</ContextMenuSubmenuTrigger>
					<ContextMenuContent className="min-w-48 p-1 w-48">
						<ContextMenuItem>Rename</ContextMenuItem>
						<ContextMenuItem>Duplicate</ContextMenuItem>
						<ContextMenuItem>Move to...</ContextMenuItem>
					</ContextMenuContent>
				</ContextMenuSubmenu>
			</ContextMenuContent>
		</ContextMenuRoot>
	);
}
