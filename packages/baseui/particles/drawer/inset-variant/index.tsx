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
					<Drawer.Portal>
						<Drawer.Backdrop />
						<Drawer.Viewport>
							<Drawer.Popup>
								<Drawer.Content>
									<Drawer.Title className="capitalize">
										{position} — Inset
									</Drawer.Title>
									<Drawer.Description className="mt-1.5">
										This drawer floats with padding from the{" "}
										{position} edge, creating a card-like
										appearance.
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
