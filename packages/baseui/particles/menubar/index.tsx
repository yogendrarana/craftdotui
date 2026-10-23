"use client";

import { MenubarRoot } from "@craftdotui/baseui/components/menubar";
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuSeparator,
	MenuSubmenuRoot,
	MenuSubmenuTrigger,
	MenuTrigger,
} from "@craftdotui/baseui/components/menu";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	return (
		<MenubarRoot>
			<MenuRoot>
				<MenuTrigger render={<Button variant="ghost">File</Button>} />
				<MenuContent>
					<MenuItem>New</MenuItem>
					<MenuItem>Open</MenuItem>
					<MenuItem>Save</MenuItem>

					<MenuSubmenuRoot>
						<MenuSubmenuTrigger>Export</MenuSubmenuTrigger>
						<MenuContent>
							<MenuItem>PDF</MenuItem>
							<MenuItem>PNG</MenuItem>
							<MenuItem>SVG</MenuItem>
						</MenuContent>
					</MenuSubmenuRoot>

					<MenuSeparator />
					<MenuItem>Print</MenuItem>
				</MenuContent>
			</MenuRoot>

			<MenuRoot>
				<MenuTrigger render={<Button variant="ghost">Edit</Button>} />
				<MenuContent>
					<MenuItem>Cut</MenuItem>
					<MenuItem>Copy</MenuItem>
					<MenuItem>Paste</MenuItem>
				</MenuContent>
			</MenuRoot>

			<MenuRoot>
				<MenuTrigger render={<Button variant="ghost">View</Button>} />
				<MenuContent>
					<MenuItem>Zoom In</MenuItem>
					<MenuItem>Zoom Out</MenuItem>

					<MenuSubmenuRoot>
						<MenuSubmenuTrigger>Layout</MenuSubmenuTrigger>
						<MenuContent>
							<MenuItem>Single Page</MenuItem>
							<MenuItem>Two Pages</MenuItem>
							<MenuItem>Continuous</MenuItem>
						</MenuContent>
					</MenuSubmenuRoot>

					<MenuSeparator />
					<MenuItem>Full Screen</MenuItem>
				</MenuContent>
			</MenuRoot>

			<MenuRoot disabled>
				<MenuTrigger render={<Button variant="ghost">Help</Button>} />
			</MenuRoot>
		</MenubarRoot>
	);
}

export default Particle;
