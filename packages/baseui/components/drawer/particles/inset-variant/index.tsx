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
					variant="inset"
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
								{position} — Inset
							</Drawer.Title>
							<Drawer.Description>
								This drawer floats with padding from the{" "}
								{position} edge, creating a card-like
								appearance.
							</Drawer.Description>
						</Drawer.Header>
						<Drawer.Panel>
							<p className="text-sm text-muted-foreground">
								The inset variant creates a floating sheet
								detached from the screen edges for a lightweight
								modern look.
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
