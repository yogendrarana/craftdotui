"use client";

import * as React from "react";
import { Drawer } from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="flex items-center gap-2">
			<Button variant="outline" onClick={() => setOpen(true)}>
				Open
			</Button>
			<Button
				variant="outline"
				onClick={() => setOpen(false)}
				disabled={!open}
			>
				Close
			</Button>

			<Drawer.Root open={open} onOpenChange={setOpen}>
				<Drawer.Portal>
					<Drawer.Backdrop />
					<Drawer.Viewport>
						<Drawer.Popup>
							<Drawer.Handle />
							<Drawer.Content>
								<Drawer.Title>Controlled Drawer</Drawer.Title>
								<Drawer.Description className="mt-1.5">
									This drawer is controlled externally via
									<code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
										open
									</code>
									and
									<code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
										onOpenChange
									</code>
									props.
								</Drawer.Description>
								<div className="mt-6 flex justify-end">
									<Button
										variant="outline"
										onClick={() => setOpen(false)}
									>
										Close
									</Button>
								</div>
							</Drawer.Content>
						</Drawer.Popup>
					</Drawer.Viewport>
				</Drawer.Portal>
			</Drawer.Root>
		</div>
	);
}
