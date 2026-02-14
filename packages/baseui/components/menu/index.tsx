"use client";

import type * as React from "react";
import { Check, ChevronRight, Dot } from "lucide-react";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";

import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Menu Root                                                                  */
/* -------------------------------------------------------------------------- */

function MenuRoot(props: MenuPrimitive.Root.Props) {
	return <MenuPrimitive.Root data-slot="menu-root" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Menu Trigger                                                               */
/* -------------------------------------------------------------------------- */

function MenuTrigger({ className, ...props }: MenuPrimitive.Trigger.Props) {
	return <MenuPrimitive.Trigger data-slot="menu-trigger" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Menu Portal                                                                */
/* -------------------------------------------------------------------------- */

function MenuPortal(props: MenuPrimitive.Portal.Props) {
	return <MenuPrimitive.Portal data-slot="menu-portal" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Menu Backdrop                                                              */
/* -------------------------------------------------------------------------- */

function MenuBackdrop({ className, ...props }: MenuPrimitive.Backdrop.Props) {
	return (
		<MenuPrimitive.Backdrop
			data-slot="menu-backdrop"
			className={cn("fixed inset-0 z-50 bg-black/20", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Menu Positioner                                                            */
/* -------------------------------------------------------------------------- */

function MenuPositioner({
	className,
	sideOffset = 10,
	...props
}: MenuPrimitive.Positioner.Props) {
	return (
		<MenuPrimitive.Positioner
			data-slot="menu-positioner"
			className={cn("z-50", className)}
			sideOffset={sideOffset}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Menu Popup                                                                 */
/* -------------------------------------------------------------------------- */

function MenuPopup({ className, ...props }: MenuPrimitive.Popup.Props) {
	return (
		<MenuPrimitive.Popup
			data-slot="menu-popup"
			className={cn(
				"z-50",
				"min-w-48 p-1",
				"overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md outline-none",
				"data-open:animate-in data-closed:animate-out",
				"data-open:fade-in data-closed:fade-out",
				"data-open:zoom-in-95 data-closed:zoom-out-95",
				"data-starting-style:opacity-0 data-starting-style:scale-95",
				"data-ending-style:opacity-0 data-ending-style:scale-95",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Menu Arrow                                                                 */
/* -------------------------------------------------------------------------- */

function MenuArrow({ className, ...props }: MenuPrimitive.Arrow.Props) {
	return (
		<MenuPrimitive.Arrow
			data-slot="menu-arrow"
			className={cn(
				"data-[side=bottom]:top-[-8px]",
				"data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180",
				"data-[side=left]:right-[-13px] data-[side=left]:rotate-90",
				"data-[side=right]:left-[-13px] data-[side=right]:-rotate-90",
				className,
			)}
			{...props}
		>
			<svg width="12" height="6" viewBox="0 0 12 6">
				<title>Menu Arrow</title>
				<path d="M0 6L6 0L12 6Z" className="fill-popover" />
				<path d="M0 6L6 0L12 6Z" className="fill-none stroke-border" />
			</svg>
		</MenuPrimitive.Arrow>
	);
}

/* -------------------------------------------------------------------------- */
/* Menu Item                                                                  */
/* -------------------------------------------------------------------------- */

function MenuItem({
	className,
	inset,
	...props
}: MenuPrimitive.Item.Props & { inset?: boolean }) {
	return (
		<MenuPrimitive.Item
			data-slot="menu-item"
			data-inset={inset}
			className={cn(
				"relative",
				"px-2 py-1.5 flex cursor-pointer select-none items-center gap-2",
				"rounded-sm text-sm outline-none transition-colors",
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				"data-inset:pl-8",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Menu Checkbox Item                                                         */
/* -------------------------------------------------------------------------- */

function MenuCheckboxItem({
	className,
	children,
	inset,
	...props
}: MenuPrimitive.CheckboxItem.Props & { inset?: boolean }) {
	return (
		<MenuPrimitive.CheckboxItem
			data-slot="menu-checkbox-item"
			data-inset={inset}
			className={cn(
				"relative",
				"py-1.5 pl-8 pr-2 flex cursor-pointer select-none items-center gap-2",
				"rounded-sm text-sm outline-none transition-colors",
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				className,
			)}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<MenuCheckboxItemIndicator />
			</span>
			{children}
		</MenuPrimitive.CheckboxItem>
	);
}

function MenuCheckboxItemIndicator(
	props: MenuPrimitive.CheckboxItemIndicator.Props,
) {
	return (
		<MenuPrimitive.CheckboxItemIndicator
			data-slot="menu-checkbox-indicator"
			{...props}
		>
			<Check className="size-4" />
		</MenuPrimitive.CheckboxItemIndicator>
	);
}

/* -------------------------------------------------------------------------- */
/* Menu Radio Item                                                            */
/* -------------------------------------------------------------------------- */

function MenuRadioItem({
	className,
	children,
	inset,
	...props
}: MenuPrimitive.RadioItem.Props & { inset?: boolean }) {
	return (
		<MenuPrimitive.RadioItem
			data-slot="menu-radio-item"
			data-inset={inset}
			className={cn(
				"relative",
				"py-1.5 pl-8 pr-2 flex cursor-pointer select-none items-center gap-2",
				"rounded-sm text-sm outline-none transition-colors",
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				className,
			)}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<MenuRadioItemIndicator />
			</span>
			{children}
		</MenuPrimitive.RadioItem>
	);
}

function MenuRadioItemIndicator(props: MenuPrimitive.RadioItemIndicator.Props) {
	return (
		<MenuPrimitive.RadioItemIndicator
			data-slot="menu-radio-indicator"
			{...props}
		>
			<Dot className="size-10" />
		</MenuPrimitive.RadioItemIndicator>
	);
}

/* -------------------------------------------------------------------------- */
/* Menu Radio Group                                                           */
/* -------------------------------------------------------------------------- */

function MenuRadioGroup(props: MenuPrimitive.RadioGroup.Props) {
	return <MenuPrimitive.RadioGroup data-slot="menu-radio-group" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Menu Submenu                                                               */
/* -------------------------------------------------------------------------- */

function MenuSubmenuRoot(props: MenuPrimitive.SubmenuRoot.Props) {
	return <MenuPrimitive.SubmenuRoot data-slot="menu-submenu" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Menu Submenu Trigger                                                       */
/* -------------------------------------------------------------------------- */

function MenuSubmenuTrigger({
	className,
	inset,
	children,
	...props
}: MenuPrimitive.SubmenuTrigger.Props & { inset?: boolean }) {
	return (
		<MenuPrimitive.SubmenuTrigger
			data-slot="menu-submenu-trigger"
			data-inset={inset}
			className={cn(
				"px-2 py-1.5 flex items-center",
				"cursor-pointer select-none rounded-sm text-sm outline-none transition-colors",
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground",
				"data-inset:pl-8",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRight className="ml-auto size-4" />
		</MenuPrimitive.SubmenuTrigger>
	);
}

/* -------------------------------------------------------------------------- */
/* Menu Group                                                                 */
/* -------------------------------------------------------------------------- */

function MenuGroup(props: MenuPrimitive.Group.Props) {
	return <MenuPrimitive.Group data-slot="menu-group" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Menu Group Label                                                           */
/* -------------------------------------------------------------------------- */

function MenuGroupLabel({
	className,
	inset,
	...props
}: MenuPrimitive.GroupLabel.Props & { inset?: boolean }) {
	return (
		<MenuPrimitive.GroupLabel
			data-slot="menu-group-label"
			data-inset={inset}
			className={cn(
				"px-2 py-1.5 text-xs font-medium text-muted-foreground",
				"data-inset:pl-8",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Menu Separator                                                             */
/* -------------------------------------------------------------------------- */

function MenuSeparator({ className, ...props }: MenuPrimitive.Separator.Props) {
	return (
		<MenuPrimitive.Separator
			data-slot="menu-separator"
			className={cn("-mx-1 my-1 h-px bg-border", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Menu Shortcut                                                              */
/* -------------------------------------------------------------------------- */

function MenuShortcut({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) {
	return (
		<span
			data-slot="menu-shortcut"
			className={cn(
				"ml-auto text-xs tracking-widest text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuBackdrop,
	MenuPositioner,
	MenuPopup,
	MenuArrow,
	MenuItem,
	MenuSeparator,
	MenuGroup,
	MenuGroupLabel,
	MenuRadioGroup,
	MenuRadioItem,
	MenuRadioItemIndicator,
	MenuCheckboxItem,
	MenuCheckboxItemIndicator,
	MenuSubmenuRoot,
	MenuSubmenuTrigger,
	MenuShortcut,
	MenuPrimitive,
};
