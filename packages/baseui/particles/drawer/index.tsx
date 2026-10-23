"use client";

import { Drawer } from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	return (
		<Drawer.Root position="bottom">
			<Drawer.Trigger
				render={<Button variant="outline">Open Drawer</Button>}
			/>
			<Drawer.Content>
				<Drawer.Header>
					<Drawer.Title>Bottom Drawer</Drawer.Title>
					<Drawer.Description>
						A panel that slides up from the bottom of the screen.
						Swipe down or click outside to dismiss.
					</Drawer.Description>
				</Drawer.Header>
				<Drawer.Panel>
					<p className="text-sm text-muted-foreground">
						Drawers are perfect for mobile-friendly sheets, bottom
						action menus, and contextual secondary content.
					</p>
				</Drawer.Panel>
				<Drawer.Footer>
					<Drawer.Close
						render={<Button variant="outline">Cancel</Button>}
					/>
					<Drawer.Close render={<Button>Confirm</Button>} />
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
	);
}
