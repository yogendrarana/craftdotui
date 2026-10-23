"use client";

import { Drawer } from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

export default function Particle() {
	return (
		<Drawer.Root>
			<Drawer.Trigger
				render={
					<Button variant="outline">Open Scrollable Drawer</Button>
				}
			/>
			<Drawer.Content
				showHandle={false}
				contentProps={{ className: "p-0" }}
			>
				<Drawer.Header className="border-b border-border pt-3.5 pb-4 select-none">
					<Drawer.Handle />
					<Drawer.Title>Scrollable Content</Drawer.Title>
					<Drawer.Description>
						The content below scrolls independently of the
						drawer&apos;s swipe gesture.
					</Drawer.Description>
				</Drawer.Header>
				<Drawer.Panel className="space-y-3">
					{Array.from({ length: 20 }, (_, index) => (
						<div
							key={index}
							className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4"
						>
							<div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-sm font-semibold text-primary">
								{index + 1}
							</div>
							<div>
								<p className="text-sm font-medium">
									Item {index + 1}
								</p>
								<p className="text-xs text-muted-foreground">
									Scrollable list item description
								</p>
							</div>
						</div>
					))}
				</Drawer.Panel>
				<Drawer.Footer className="border-t border-border">
					<Drawer.Close
						render={<Button variant="outline">Close</Button>}
					/>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
	);
}
