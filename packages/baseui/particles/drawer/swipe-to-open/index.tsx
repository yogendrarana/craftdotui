"use client";

import * as React from "react";
import Drawer from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	const [portalContainer, setPortalContainer] =
		React.useState<HTMLDivElement | null>(null);

	return (
		<div
			ref={setPortalContainer}
			className="relative h-full w-full overflow-hidden"
		>
			<Drawer.Root position="right" modal={false}>
				<Drawer.SwipeArea className="w-10 border-l-2 border-dashed border-primary/30 bg-primary/5">
					<span className="pointer-events-none absolute right-0 top-1/2 mr-2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap text-xs font-medium tracking-widest text-primary/60 uppercase">
						Swipe
					</span>
				</Drawer.SwipeArea>
				<div className="flex h-full items-center justify-center text-sm text-muted-foreground">
					Swipe from the right edge to open the drawer.
				</div>
				<Drawer.Portal container={portalContainer}>
					<Drawer.Backdrop className="absolute" />
					<Drawer.Viewport className="absolute inset-0 flex items-stretch justify-end">
						<Drawer.Popup>
							<Drawer.Content>
								<Drawer.Title>Library</Drawer.Title>
								<Drawer.Description className="mt-1.5">
									Swipe from the edge whenever you want to
									jump back into your playlists.
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
		</div>
	);
}
