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

					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title className="capitalize">
								{p} Drawer
							</Drawer.Title>
							<Drawer.Description>
								This drawer slides in from the {p} edge of the
								screen.
							</Drawer.Description>
						</Drawer.Header>
						<Drawer.Panel>
							<p className="text-sm text-muted-foreground">
								Configure settings and preferences for this
								panel.
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
