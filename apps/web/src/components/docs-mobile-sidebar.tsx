"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import type { DocsNavItem } from "@/config/docs";
import type { NavItem } from "@/types/registry";
import { Drawer } from "@craftdotui/baseui/components/drawer";
import { Button } from "@craftdotui/baseui/components/button";

interface DocsMobileSidebarProps {
	items: DocsNavItem[];
}

export default function DocsMobileSidebar({ items }: DocsMobileSidebarProps) {
	const sidebarNav = items;
	const [open, setOpen] = React.useState(false);

	return (
		<Drawer.Root
			open={open}
			onOpenChange={setOpen}
			position="right"
			variant="inset"
		>
			<Drawer.Trigger
				render={
					<button
						type="button"
						aria-label="Open navigation menu"
						className="inline-flex h-full w-12 items-center justify-center bg-background text-foreground hover:bg-muted/40 transition-colors cursor-pointer"
					>
						<Menu className="size-4" />
					</button>
				}
			/>
			<Drawer.Portal>
				<Drawer.Backdrop />
				<Drawer.Viewport position="right">
					<Drawer.Popup
						position="right"
						className="w-[340px] max-w-[85vw] bg-sidebar text-sidebar-foreground border border-sidebar-border rounded-xl shadow-xl flex flex-col overflow-hidden"
					>
						<div className="flex items-center justify-between border-b border-sidebar-border px-4 py-3 shrink-0">
							<Drawer.Title className="text-base font-semibold tracking-tight">
								Craft Dot UI
							</Drawer.Title>
							<Drawer.Close
								render={
									<Button
										size="icon"
										variant="ghost"
										className="size-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40"
										aria-label="Close menu"
									>
										<X className="size-4" />
									</Button>
								}
							/>
						</div>

						<Drawer.Panel className="flex-1 overflow-y-auto p-4 space-y-4">
							{sidebarNav.map((item, index) => (
								<div key={index} className="pb-3 last:pb-0">
									<h4 className="mb-2 px-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
										{item.title}
									</h4>
									{item.items && (
										<MobileNavItems
											items={item.items}
											setOpen={setOpen}
										/>
									)}
								</div>
							))}
						</Drawer.Panel>
					</Drawer.Popup>
				</Drawer.Viewport>
			</Drawer.Portal>
		</Drawer.Root>
	);
}

function MobileNavItems({
	items,
	setOpen,
}: {
	items: NavItem[];
	setOpen: (open: boolean) => void;
}) {
	return (
		<div className="flex flex-col gap-1">
			{items.map((item, index) => (
				<div key={index}>
					{item.items?.length ? (
						<div className="pl-3 border-l border-border my-2 space-y-1">
							<h5 className="mb-1 text-xs font-medium text-muted-foreground">
								{item.title}
							</h5>
							<MobileNavItems
								items={item.items}
								setOpen={setOpen}
							/>
						</div>
					) : (
						item.href && (
							<Link
								href={item.href}
								onClick={() => setOpen(false)}
								className="px-2 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors block font-medium"
							>
								{item.title}
							</Link>
						)
					)}
				</div>
			))}
		</div>
	);
}
