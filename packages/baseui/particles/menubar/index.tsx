"use client";

import { Menubar } from "@craftdotui/baseui/components/menubar";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuItem,
	MenuSeparator,
	MenuSubmenuRoot,
	MenuSubmenuTrigger,
} from "@craftdotui/baseui/components/menu";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	return (
		<Menubar orientation="vertical">
			<MenuRoot>
				<MenuTrigger render={<Button variant="ghost">File</Button>} />
				<MenuPortal>
					<MenuPositioner>
						<MenuPopup>
							<MenuItem>New</MenuItem>
							<MenuItem>Open</MenuItem>
							<MenuItem>Save</MenuItem>

							<MenuSubmenuRoot>
								<MenuSubmenuTrigger>Export</MenuSubmenuTrigger>
								<MenuPortal>
									<MenuPositioner>
										<MenuPopup>
											<MenuItem>PDF</MenuItem>
											<MenuItem>PNG</MenuItem>
											<MenuItem>SVG</MenuItem>
										</MenuPopup>
									</MenuPositioner>
								</MenuPortal>
							</MenuSubmenuRoot>

							<MenuSeparator />
							<MenuItem>Print</MenuItem>
						</MenuPopup>
					</MenuPositioner>
				</MenuPortal>
			</MenuRoot>

			<MenuRoot>
				<MenuTrigger render={<Button variant="ghost">Edit</Button>} />
				<MenuPortal>
					<MenuPositioner>
						<MenuPopup>
							<MenuItem>Cut</MenuItem>
							<MenuItem>Copy</MenuItem>
							<MenuItem>Paste</MenuItem>
						</MenuPopup>
					</MenuPositioner>
				</MenuPortal>
			</MenuRoot>

			<MenuRoot>
				<MenuTrigger render={<Button variant="ghost">View</Button>} />
				<MenuPortal>
					<MenuPositioner>
						<MenuPopup>
							<MenuItem>Zoom In</MenuItem>
							<MenuItem>Zoom Out</MenuItem>

							<MenuSubmenuRoot>
								<MenuSubmenuTrigger>Layout</MenuSubmenuTrigger>
								<MenuPortal>
									<MenuPositioner>
										<MenuPopup>
											<MenuItem>Single Page</MenuItem>
											<MenuItem>Two Pages</MenuItem>
											<MenuItem>Continuous</MenuItem>
										</MenuPopup>
									</MenuPositioner>
								</MenuPortal>
							</MenuSubmenuRoot>

							<MenuSeparator />
							<MenuItem>Full Screen</MenuItem>
						</MenuPopup>
					</MenuPositioner>
				</MenuPortal>
			</MenuRoot>

			<MenuRoot disabled>
				<MenuTrigger render={<Button variant="ghost">Help</Button>} />
			</MenuRoot>
		</Menubar>
	);
}
