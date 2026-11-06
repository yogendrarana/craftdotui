"use client";

import type * as React from "react";
import { Drawer } from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

const TOP_MARGIN_REM = 1;
const VISIBLE_SNAP_POINTS_REM = [20];

function toViewportSnapPoint(heightRem: number) {
	return `${heightRem + TOP_MARGIN_REM}rem`;
}

const snapPoints = [...VISIBLE_SNAP_POINTS_REM.map(toViewportSnapPoint), 1];

export default function Particle() {
	return (
		<Drawer.Root snapPoints={snapPoints}>
			<Drawer.Trigger
				render={<Button variant="outline">Open Snap Drawer</Button>}
			/>
			<Drawer.Content
				viewportProps={{ className: "touch-none" }}
				popupProps={{
					className:
						"touch-none [transform:translateY(calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y,0px)))] [padding-bottom:max(0px,calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y,0px)))]",
					style: {
						"--top-margin": `${TOP_MARGIN_REM}rem`,
					} as React.CSSProperties,
				}}
				contentProps={{
					className: "overflow-y-auto overscroll-contain touch-auto",
				}}
			>
				<div className="mx-auto w-full max-w-[350px]">
					<Drawer.Header className="text-center px-0">
						<Drawer.Title className="cursor-default text-base font-bold">
							Snap Points
						</Drawer.Title>
						<Drawer.Description>
							Drag the sheet to snap between a compact peek and a
							full-height view.
						</Drawer.Description>
					</Drawer.Header>

					<Drawer.Panel className="px-0 py-4">
						<div className="grid gap-3" aria-hidden>
							{Array.from({ length: 20 }, (_, index) => (
								<div
									key={index}
									className="h-12 rounded-lg border border-border bg-muted/50"
								/>
							))}
						</div>
					</Drawer.Panel>

					<Drawer.Footer className="px-0">
						<Drawer.Close
							render={<Button variant="outline">Close</Button>}
						/>
					</Drawer.Footer>
				</div>
			</Drawer.Content>
		</Drawer.Root>
	);
}
