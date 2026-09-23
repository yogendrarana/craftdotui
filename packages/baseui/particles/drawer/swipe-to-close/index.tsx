"use client";

import {
	Drawer,
	type DrawerSwipeDirection,
	type DrawerPosition,
} from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

const positionAndSwipeDirection = [
	{ position: "right", swipeDirection: "right" },
	{ position: "left", swipeDirection: "left" },
	{ position: "top", swipeDirection: "up" },
	{ position: "bottom", swipeDirection: "down" },
];

export default function Particle() {
	return (
		<div className="flex flex-wrap gap-2">
			{positionAndSwipeDirection.map((p) => (
				<Drawer.Root
					position={p.position as DrawerPosition}
					swipeDirection={p.swipeDirection as DrawerSwipeDirection}
					key={p.position}
				>
					<Drawer.Trigger
						render={
							<Button variant="outline" className="capitalize">
								{p.position}
							</Button>
						}
					/>
					<Drawer.Portal>
						<Drawer.Backdrop />
						<Drawer.Viewport>
							<Drawer.Popup>
								<Drawer.Content>
									<Drawer.Title className="capitalize">
										Swipe {p.swipeDirection}
									</Drawer.Title>
									<Drawer.Description className="mt-1.5">
										Swipe {p.swipeDirection} to dismiss this
										drawer from the {p.position} position.
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
