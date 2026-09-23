"use client";

import {
	Drawer,
	type DrawerPosition,
} from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

const positions = ["right", "left", "top", "bottom"];

export default function Particle() {
	return (
		<div className="flex flex-wrap gap-2">
			{positions.map((p) => (
				<Drawer.Root position={p as DrawerPosition} key={p}>
					<Drawer.Trigger
						render={
							<Button variant="outline" className="capitalize">
								{p}
							</Button>
						}
					/>

					<Drawer.Portal>
						<Drawer.Backdrop />
						<Drawer.Viewport position={p as DrawerPosition}>
							<Drawer.Popup position={p as DrawerPosition}>
								<Drawer.Content>
									<Drawer.Title className="capitalize">
										{p} Drawer
									</Drawer.Title>
									<Drawer.Description className="mt-1.5">
										This drawer slides in from the {p} edge
										of the screen.
									</Drawer.Description>
									<div className="mt-6 flex justify-end">
										<Drawer.Close
											render={
												<Button variant="outline">
													Close
												</Button>
											}
										/>
									</div>
								</Drawer.Content>
							</Drawer.Popup>
						</Drawer.Viewport>
					</Drawer.Portal>
				</Drawer.Root>
			))}
		</div>
	);
}
