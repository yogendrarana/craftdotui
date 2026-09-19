"use client";

import Drawer from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	return (
		<Drawer.Root modal={false} position="right">
			<Drawer.Trigger
				render={<Button variant="outline">Non-Modal Drawer</Button>}
			/>

			<Drawer.Portal>
				<Drawer.Viewport>
					<Drawer.Popup>
						<Drawer.Content>
							<Drawer.Title>Non-Modal Drawer</Drawer.Title>
							<Drawer.Description className="mt-1.5">
								This drawer does not trap focus or block
								interaction with the rest of the page. You can
								still click on elements behind it.
							</Drawer.Description>
							<div className="mt-6 flex justify-end">
								<Drawer.Close
									render={
										<Button variant="outline">Close</Button>
									}
								/>
							</div>
						</Drawer.Content>
					</Drawer.Popup>
				</Drawer.Viewport>
			</Drawer.Portal>
		</Drawer.Root>
	);
}
