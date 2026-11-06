"use client";

import { Drawer } from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	return (
		<Drawer.Root modal={false} position="right">
			<Drawer.Trigger
				render={<Button variant="outline">Non-Modal Drawer</Button>}
			/>

			<Drawer.Content>
				<Drawer.Header>
					<Drawer.Title>Non-Modal Drawer</Drawer.Title>
					<Drawer.Description>
						This drawer does not trap focus or block interaction.
					</Drawer.Description>
				</Drawer.Header>
				<Drawer.Panel>
					<p className="text-sm text-muted-foreground">
						You can continue interacting with elements on the page
						while this drawer remains open in the background.
					</p>
				</Drawer.Panel>
				<Drawer.Footer>
					<Drawer.Close
						render={<Button variant="outline">Close</Button>}
					/>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
	);
}
