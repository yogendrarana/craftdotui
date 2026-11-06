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
				<Drawer.Content>
					<Drawer.Header>
						<Drawer.Title>Controlled Drawer</Drawer.Title>
						<Drawer.Description>
							This drawer is controlled externally via state.
						</Drawer.Description>
					</Drawer.Header>
					<Drawer.Panel>
						<p className="text-sm text-muted-foreground">
							The drawer open state is managed using{" "}
							<code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
								open
							</code>{" "}
							and{" "}
							<code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
								onOpenChange
							</code>{" "}
							props.
						</p>
					</Drawer.Panel>
					<Drawer.Footer>
						<Button
							variant="outline"
							onClick={() => setOpen(false)}
						>
							Close
						</Button>
					</Drawer.Footer>
				</Drawer.Content>
			</Drawer.Root>
		</div>
	);
}
