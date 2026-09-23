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
			<Drawer.Portal>
				<Drawer.Backdrop />
				<Drawer.Viewport className="touch-none">
					<Drawer.Popup
						className="touch-none [transform:translateY(calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y,0px)))] [padding-bottom:max(0px,calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y,0px)))]"
						style={
							{
								"--top-margin": `${TOP_MARGIN_REM}rem`,
							} as React.CSSProperties
						}
					>
						<div className="shrink-0 border-b border-border px-6 pt-3.5 pb-4 touch-none select-none">
							<div className="mx-auto mb-2.5 h-1 w-12 shrink-0 rounded-full bg-input" />
							<Drawer.Title className="cursor-default text-center text-base font-bold">
								Snap Points
							</Drawer.Title>
						</div>
						<Drawer.Content className="overflow-y-auto overscroll-contain touch-auto">
							<div className="mx-auto w-full max-w-[350px]">
								<Drawer.Description className="mb-4 text-center">
									Drag the sheet to snap between a compact
									peek and a full-height view.
								</Drawer.Description>

								<div className="grid gap-3 mb-6" aria-hidden>
									{Array.from({ length: 20 }, (_, index) => (
										<div
											key={index}
											className="h-12 rounded-lg border border-border bg-muted/50"
										/>
									))}
								</div>
								<div className="flex items-center justify-end gap-3">
									<Drawer.Close
										render={
											<Button variant="outline">
												Close
											</Button>
										}
									/>
								</div>
							</div>
						</Drawer.Content>
					</Drawer.Popup>
				</Drawer.Viewport>
			</Drawer.Portal>
		</Drawer.Root>
	);
}
