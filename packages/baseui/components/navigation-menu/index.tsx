"use client";

import type { CSSProperties } from "react";
import { cva } from "class-variance-authority";
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Navigation Menu Root                                                        */
/* -------------------------------------------------------------------------- */

function NavigationMenuRoot({ ...props }: NavigationMenuPrimitive.Root.Props) {
	return (
		<NavigationMenuPrimitive.Root
			data-slot="navigation-menu-root"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu List                                                        */
/* -------------------------------------------------------------------------- */

function NavigationMenuList({
	className,
	...props
}: NavigationMenuPrimitive.List.Props) {
	return (
		<NavigationMenuPrimitive.List
			data-slot="navigation-menu-list"
			className={cn("relative flex items-center", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu Item                                                        */
/* -------------------------------------------------------------------------- */

function NavigationMenuItem(props: NavigationMenuPrimitive.Item.Props) {
	return (
		<NavigationMenuPrimitive.Item
			data-slot="navigation-menu-item"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu Trigger                                                    */
/* -------------------------------------------------------------------------- */

function NavigationMenuTrigger({
	className,
	...props
}: NavigationMenuPrimitive.Trigger.Props) {
	return (
		<NavigationMenuPrimitive.Trigger
			data-slot="navigation-menu-trigger"
			className={cn(
				"relative min-h-10 px-4 py-2 m-0 flex items-center justify-center gap-1.5",
				"text-sm box-border transition-colors rounded-md",
				"hover:bg-accent hover:text-accent-foreground",
				"focus-visible:bg-accent focus-visible:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-primary focus-visible:relative",
				"data-[popup-open]:bg-accent data-[popup-open]:text-accent-foreground",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu Content                                                     */
/* -------------------------------------------------------------------------- */

function NavigationMenuContent({
	className,
	...props
}: NavigationMenuPrimitive.Content.Props) {
	return (
		<NavigationMenuPrimitive.Content
			data-slot="navigation-menu-content"
			className={cn(
				"w-full",
				"transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] ",
				"data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 ",
				"data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%] ",
				"data-[starting-style]:data-[activation-direction=right]:translate-x-[50%] ",
				"data-[ending-style]:data-[activation-direction=left]:translate-x-[50%] ",
				"data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%]",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu Link                                                       */
/* -------------------------------------------------------------------------- */

const navigationMenuLinkStyle = cva([
	"p-2 flex flex-col items-start text-start gap-1 rounded-sm text-sm transition-all outline-none",
	"hover:bg-accent hover:text-accent-foreground",
	"data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground",
	"focus-visible:bg-accent focus-visible:text-accent-foreground focus-visible:relative focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-primary",
]);

function NavigationMenuLink({
	className,
	...props
}: NavigationMenuPrimitive.Link.Props) {
	return (
		<NavigationMenuPrimitive.Link
			data-slot="navigation-menu-link"
			className={cn(navigationMenuLinkStyle(), className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu Icon                                                        */
/* -------------------------------------------------------------------------- */

function NavigationMenuIcon({
	className,
	...props
}: NavigationMenuPrimitive.Icon.Props) {
	return (
		<NavigationMenuPrimitive.Icon
			data-slot="navigation-menu-icon"
			className={cn(
				"transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu Portal                                                      */
/* -------------------------------------------------------------------------- */

function NavigationMenuPortal(props: NavigationMenuPrimitive.Portal.Props) {
	return (
		<NavigationMenuPrimitive.Portal
			data-slot="navigation-menu-portal"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu Backdrop                                                    */
/* -------------------------------------------------------------------------- */

function NavigationMenuBackdrop({
	className,
	...props
}: NavigationMenuPrimitive.Backdrop.Props) {
	return (
		<NavigationMenuPrimitive.Backdrop
			data-slot="navigation-menu-backdrop"
			className={cn(
				"fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu Positioner                                                  */
/* -------------------------------------------------------------------------- */

function NavigationMenuPositioner({
	className,
	sideOffset = 10,
	style,
	...props
}: NavigationMenuPrimitive.Positioner.Props) {
	return (
		<NavigationMenuPrimitive.Positioner
			data-slot="navigation-menu-positioner"
			sideOffset={sideOffset}
			collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
			collisionAvoidance={{ side: "none" }}
			className={cn(
				"h-(--positioner-height) max-h-(--available-height) w-(--positioner-width) max-w-(--available-width)",
				"box-border z-50 transition-[top,left,right,bottom] duration-(--duration) ease-(--easing)",
				"before:absolute before:content-['']",
				"data-[instant]:transition-none",
				"data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5",
				"data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5",
				"data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5",
				"data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5",
				className,
			)}
			style={
				{
					"--duration": "0.35s",
					"--easing": "cubic-bezier(0.22, 1, 0.36, 1)",
					...style,
				} as unknown as CSSProperties
			}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu Popup                                                      */
/* -------------------------------------------------------------------------- */

function NavigationMenuPopup({
	className,
	children,
	...props
}: NavigationMenuPrimitive.Popup.Props) {
	return (
		<NavigationMenuPrimitive.Popup
			data-slot="navigation-menu-popup"
			className={cn(
				"h-(--popup-height) w-(--popup-width) p-3",
				"relative origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground shadow-lg border border-border",
				"transition-[opacity,transform,width,height,scale,translate] duration-(--duration) ease-(--easing)",
				"data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
				"data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[ending-style]:ease",
				className,
			)}
			{...props}
		>
			{children}
			<NavigationMenuViewport />
		</NavigationMenuPrimitive.Popup>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu Arrow                                                       */
/* -------------------------------------------------------------------------- */

function NavigationMenuArrow({
	className,
	...props
}: NavigationMenuPrimitive.Arrow.Props) {
	return (
		<NavigationMenuPrimitive.Arrow
			className={cn(
				"flex bg-background",
				"data-[side=top]:-bottom-2 data-[side=top]:rotate-180",
				"data-[side=left]:right-[-11px] data-[side=left]:rotate-90",
				"data-[side=bottom]:-top-2 data-[side=bottom]:rotate-0",
				"data-[side=right]:left-[-11px] data-[side=right]:-rotate-90",
				className,
			)}
			{...props}
		>
			<svg width="12" height="6" viewBox="0 0 12 6">
				<title>Navigation Menu Arrow</title>
				<path d="M0 6L6 0L12 6Z" className="fill-background" />
				<path d="M0 6L6 0L12 6Z" className="fill-none stroke-border" />
			</svg>
		</NavigationMenuPrimitive.Arrow>
	);
}

/* -------------------------------------------------------------------------- */
/* Navigation Menu Viewport                                                    */
/* -------------------------------------------------------------------------- */

function NavigationMenuViewport({
	className,
	...props
}: NavigationMenuPrimitive.Viewport.Props) {
	return (
		<NavigationMenuPrimitive.Viewport
			data-slot="navigation-menu-viewport"
			className={cn("relative h-full w-full overflow-hidden", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	NavigationMenuRoot,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	NavigationMenuIcon,
	NavigationMenuPortal,
	NavigationMenuBackdrop,
	NavigationMenuPositioner,
	NavigationMenuPopup,
	NavigationMenuArrow,
	NavigationMenuViewport,
	NavigationMenuPrimitive,
	navigationMenuLinkStyle,
};
