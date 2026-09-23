"use client";

import { Drawer } from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	return (
		<Drawer.Root position="bottom">
			<Drawer.Trigger
				render={<Button variant="outline">Open Drawer</Button>}
			/>
			<Drawer.Portal>
				<Drawer.Backdrop />
				<Drawer.Viewport>
					<Drawer.Popup>
						<Drawer.Handle />
						<Drawer.Content>
							<Drawer.Title>Bottom Drawer</Drawer.Title>
							<Drawer.Description className="mt-1.5">
								A panel that slides up from the bottom of the
								screen. Swipe down or click outside to dismiss.
							</Drawer.Description>
							<div className="mt-6 flex justify-end gap-2">
								<Drawer.Close
									render={
										<Button variant="outline">
											Cancel
										</Button>
									}
								/>
								<Drawer.Close>
									<Button>Confirm</Button>
								</Drawer.Close>
							</div>
						</Drawer.Content>
					</Drawer.Popup>
				</Drawer.Viewport>
			</Drawer.Portal>
		</Drawer.Root>
	);
}
