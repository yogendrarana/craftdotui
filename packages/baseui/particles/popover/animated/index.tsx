"use client";

import type * as React from "react";
import { Bell, List, User } from "lucide-react";
import {
	PopoverRoot,
	PopoverTrigger,
	PopoverPortal,
	PopoverPositioner,
	PopoverPopup,
	PopoverViewport,
	PopoverTitle,
	PopoverDescription,
	PopoverPrimitive,
	PopoverArrow,
} from "@craftdotui/baseui/components/popover";
import { Button } from "@craftdotui/baseui/components/button";

const animatedPopover = PopoverPrimitive.createHandle<React.ComponentType>();

export default function PopoverAnimatedDemo() {
	return (
		<div className="flex gap-2 justify-center">
			<PopoverTrigger
				handle={animatedPopover}
				payload={NotificationsPanel}
				render={
					<Button variant="outline" size="icon-sm">
						<Bell className="h-4 w-4" />
					</Button>
				}
			/>

			<PopoverTrigger
				handle={animatedPopover}
				payload={ActivityPanel}
				render={
					<Button variant="outline" size="icon-sm">
						<List className="h-4 w-4" />
					</Button>
				}
			/>

			<PopoverTrigger
				handle={animatedPopover}
				payload={ProfilePanel}
				render={
					<Button variant="outline" size="icon-sm">
						<User className="h-4 w-4" />
					</Button>
				}
			/>

			<PopoverRoot handle={animatedPopover}>
				{({ payload: Payload }) => (
					<PopoverPortal>
						<PopoverPositioner>
							<PopoverPopup>
								<PopoverArrow />
								<PopoverViewport>
									{Payload !== undefined && <Payload />}
								</PopoverViewport>
							</PopoverPopup>
						</PopoverPositioner>
					</PopoverPortal>
				)}
			</PopoverRoot>
		</div>
	);
}

function NotificationsPanel() {
	return (
		<div className="flex flex-col gap-1">
			<PopoverTitle className="text-base font-medium">
				Notifications
			</PopoverTitle>
			<PopoverDescription className="text-sm text-muted-foreground">
				You are all caught up. Good job!
			</PopoverDescription>
		</div>
	);
}

function ProfilePanel() {
	return (
		<div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
			<div className="col-start-1 col-end-2 row-start-1 row-end-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-muted">
				<img
					src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
					alt="User"
					className="h-full w-full object-cover"
				/>
			</div>
			<PopoverTitle className="text-base font-medium">
				Jason Eventon
			</PopoverTitle>
			<span className="text-sm text-muted-foreground">Pro plan</span>
			<div className="col-start-1 col-end-3 mt-4 flex flex-col gap-2 border-t pt-4">
				<a href="#abs" className="text-sm hover:underline">
					Profile settings
				</a>
				<a href="#abc" className="text-sm hover:underline">
					Log out
				</a>
			</div>
		</div>
	);
}

function ActivityPanel() {
	return (
		<div className="flex flex-col gap-1">
			<PopoverTitle className="text-base font-medium">
				Activity
			</PopoverTitle>
			<PopoverDescription className="text-sm text-muted-foreground">
				Nothing interesting happened recently.
			</PopoverDescription>
		</div>
	);
}
