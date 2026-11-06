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
					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title className="capitalize">
								Swipe {p.swipeDirection}
							</Drawer.Title>
							<Drawer.Description>
								Swipe {p.swipeDirection} to dismiss this drawer
								from the {p.position} position.
							</Drawer.Description>
						</Drawer.Header>
						<Drawer.Panel>
							<p className="text-sm text-muted-foreground">
								Drag towards the edge or click below to dismiss.
							</p>
						</Drawer.Panel>
						<Drawer.Footer>
							<Drawer.Close
								render={
									<Button variant="outline">Close</Button>
								}
							/>
						</Drawer.Footer>
					</Drawer.Content>
				</Drawer.Root>
			))}
		</div>
	);
}
