"use client";

import { Button } from "@craftdotui/baseui/components/button";
import Drawer from "@craftdotui/baseui/components/drawer";

const drawerHandle = Drawer.createHandle<{ title: string }>();

export default function Particle() {
	return (
		<div className="flex gap-2">
			<Drawer.Trigger
				handle={drawerHandle}
				payload={{ title: "Profile Settings" }}
				render={<Button variant="outline">Edit Profile</Button>}
			/>

			<Drawer.Trigger
				handle={drawerHandle}
				payload={{ title: "Account Settings" }}
				render={<Button variant="outline">Account</Button>}
			/>

			<Drawer.Root handle={drawerHandle} position="right">
				{({ payload }) => {
					const realPayload = payload as { title: string };

					return (
						<Drawer.Portal>
							<Drawer.Backdrop />
							<Drawer.Viewport position="right">
								<Drawer.Popup position="right">
									<Drawer.Content>
										<Drawer.Title>
											{realPayload?.title}
										</Drawer.Title>
										<Drawer.Description className="mt-1.5">
											Configure your{" "}
											{realPayload?.title?.toLowerCase()}{" "}
											here. These triggers live outside
											the drawer root.
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
					);
				}}
			</Drawer.Root>
		</div>
	);
}
