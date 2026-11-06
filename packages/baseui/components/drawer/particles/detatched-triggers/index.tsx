"use client";

import { Button } from "@craftdotui/baseui/components/button";
import { Drawer, createHandle } from "@craftdotui/baseui/components/drawer";

const drawerHandle = createHandle<{ title: string }>();

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
						<Drawer.Content>
							<Drawer.Header>
								<Drawer.Title>
									{realPayload?.title}
								</Drawer.Title>
								<Drawer.Description>
									Configure your{" "}
									{realPayload?.title?.toLowerCase()} here.
								</Drawer.Description>
							</Drawer.Header>
							<Drawer.Panel>
								<p className="text-sm text-muted-foreground">
									These triggers live outside the drawer root
									using the handle API.
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
					);
				}}
			</Drawer.Root>
		</div>
	);
}
