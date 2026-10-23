"use client";

import {
	Drawer,
	type DrawerPosition,
} from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

const positions = ["top", "bottom", "left", "right"];

export default function Particle() {
	return (
		<div className="flex flex-wrap gap-2">
			{positions.map((position) => (
				<Drawer.Root
					key={position}
					position={position as DrawerPosition}
					radius="straight"
				>
					<Drawer.Trigger
						render={
							<Button variant="outline" className="capitalize">
								{position}
							</Button>
						}
					/>
					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title className="capitalize">
								{position} — Straight
							</Drawer.Title>
							<Drawer.Description>
								This drawer uses straight (square) edges instead
								of rounded corners.
							</Drawer.Description>
						</Drawer.Header>
						<Drawer.Panel>
							<p className="text-sm text-muted-foreground">
								Straight radius gives the drawer crisp right
								angles, ideal for full-bleed and flush layouts.
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
