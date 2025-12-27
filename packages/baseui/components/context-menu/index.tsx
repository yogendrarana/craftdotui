"use client";

import type * as React from "react";
import { Check, ChevronRight, Dot } from "lucide-react";
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

function ContextMenu(props: ContextMenuPrimitive.Root.Props) {
	return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Trigger                                                                    */
/* -------------------------------------------------------------------------- */

function ContextMenuTrigger({
	className,
	...props
}: ContextMenuPrimitive.Trigger.Props) {
	return (
		<ContextMenuPrimitive.Trigger
			data-slot="context-menu-trigger"
			className={cn("cursor-context-menu select-none", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Portal                                                                     */
/* -------------------------------------------------------------------------- */

function ContextMenuPortal(props: ContextMenuPrimitive.Portal.Props) {
	return (
		<ContextMenuPrimitive.Portal
			data-slot="context-menu-portal"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Positioner                                                                 */
/* -------------------------------------------------------------------------- */

interface ContextMenuPositionerProps
	extends ContextMenuPrimitive.Positioner.Props {
	sideOffset?: number;
}

function ContextMenuPositioner({
	className,
	sideOffset = 4,
	...props
}: ContextMenuPositionerProps) {
	return (
		<ContextMenuPrimitive.Positioner
			data-slot="context-menu-positioner"
			sideOffset={sideOffset}
			className={cn("z-50", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Popup                                                                      */
/* -------------------------------------------------------------------------- */

function ContextMenuPopup({
	className,
	...props
}: ContextMenuPrimitive.Popup.Props) {
	return (
		<ContextMenuPrimitive.Popup
			data-slot="context-menu-popup"
			className={cn(
				"z-50 min-w-64 p-1 rounded border border-border bg-popover text-popover-foreground shadow-md",
				"overflow-x-hidden overflow-y-auto outline-none",
				"data-open:animate-in data-closed:animate-out",
				"data-open:fade-in-0 data-closed:fade-out-0",
				"data-open:zoom-in-95 data-closed:zoom-out-95",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Arrow                                                                      */
/* -------------------------------------------------------------------------- */

function ContextMenuArrow({
	className,
	...props
}: ContextMenuPrimitive.Arrow.Props) {
	return (
		<ContextMenuPrimitive.Arrow
			data-slot="context-menu-arrow"
			className={cn("fill-border", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Item                                                                       */
/* -------------------------------------------------------------------------- */

function ContextMenuItem({
	className,
	inset,
	...props
}: ContextMenuPrimitive.Item.Props & { inset?: boolean }) {
	return (
		<ContextMenuPrimitive.Item
			data-slot="context-menu-item"
			data-inset={inset}
			className={cn(
				"relative px-2 py-1.5 flex items-center cursor-default select-none text-sm rounded",
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
/* Submenu Root                                                               */
/* -------------------------------------------------------------------------- */

function ContextMenuSubmenu(props: ContextMenuPrimitive.SubmenuRoot.Props) {
	return (
		<ContextMenuPrimitive.SubmenuRoot
			data-slot="context-menu-submenu"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Submenu Trigger                                                            */
/* -------------------------------------------------------------------------- */

function ContextMenuSubmenuTrigger({
	className,
	inset,
	children,
	...props
}: ContextMenuPrimitive.SubmenuTrigger.Props & { inset?: boolean }) {
	return (
		<ContextMenuPrimitive.SubmenuTrigger
			data-slot="context-menu-submenu-trigger"
			data-inset={inset}
			className={cn(
				"flex w-full cursor-default items-center justify-between rounded-sm px-2 py-1.5 text-sm",
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				"data-inset:pl-8",
				className,
			)}
			{...props}
		>
			{children}
			<span className="ml-auto opacity-60">
				<ChevronRight className="size-4" />
			</span>
		</ContextMenuPrimitive.SubmenuTrigger>
	);
}

/* -------------------------------------------------------------------------- */
/* Group                                                                      */
/* -------------------------------------------------------------------------- */

function ContextMenuGroup({
	className,
	...props
}: ContextMenuPrimitive.Group.Props) {
	return (
		<ContextMenuPrimitive.Group
			data-slot="context-menu-group"
			className={className}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Group Label                                                                */
/* -------------------------------------------------------------------------- */

function ContextMenuGroupLabel({
	className,
	inset,
	...props
}: ContextMenuPrimitive.GroupLabel.Props & { inset?: boolean }) {
	return (
		<ContextMenuPrimitive.GroupLabel
			data-slot="context-menu-group-label"
			data-inset={inset}
			className={cn(
				"px-2 py-1 text-xs font-medium text-muted-foreground",
				"data-inset:pl-8",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Radio Group                                                               */
/* -------------------------------------------------------------------------- */

function ContextMenuRadioGroup(props: ContextMenuPrimitive.RadioGroup.Props) {
	return <ContextMenuPrimitive.RadioGroup {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Radio Item                                                                 */
/* -------------------------------------------------------------------------- */

function ContextMenuRadioItem({
	className,
	inset,
	children,
	...props
}: ContextMenuPrimitive.RadioItem.Props & { inset?: boolean }) {
	return (
		<ContextMenuPrimitive.RadioItem
			data-slot="context-menu-radio-item"
			data-inset={inset}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm",
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				"data-inset:pl-8",
				className,
			)}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<ContextMenuRadioItemIndicator />
			</span>
			{children}
		</ContextMenuPrimitive.RadioItem>
	);
}

/* -------------------------------------------------------------------------- */
/* Radio Item Indicator                                                       */
/* -------------------------------------------------------------------------- */

function ContextMenuRadioItemIndicator(
	props: ContextMenuPrimitive.RadioItemIndicator.Props,
) {
	return (
		<ContextMenuPrimitive.RadioItemIndicator {...props}>
			<Dot className="h-10 w-10" />
		</ContextMenuPrimitive.RadioItemIndicator>
	);
}

/* -------------------------------------------------------------------------- */
/* Checkbox Item                                                              */
/* -------------------------------------------------------------------------- */

function ContextMenuCheckboxItem({
	className,
	inset,
	children,
	...props
}: ContextMenuPrimitive.CheckboxItem.Props & { inset?: boolean }) {
	return (
		<ContextMenuPrimitive.CheckboxItem
			data-slot="context-menu-checkbox-item"
			data-inset={inset}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm",
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				"data-inset:pl-8",
				className,
			)}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<ContextMenuCheckboxItemIndicator />
			</span>
			{children}
		</ContextMenuPrimitive.CheckboxItem>
	);
}

/* -------------------------------------------------------------------------- */
/* Checkbox Item Indicator                                                    */
/* -------------------------------------------------------------------------- */

function ContextMenuCheckboxItemIndicator(
	props: ContextMenuPrimitive.CheckboxItemIndicator.Props,
) {
	return (
		<ContextMenuPrimitive.CheckboxItemIndicator {...props}>
			<Check className="h-3.5 w-3.5" />
		</ContextMenuPrimitive.CheckboxItemIndicator>
	);
}

/* -------------------------------------------------------------------------- */
/* Separator                                                                  */
/* -------------------------------------------------------------------------- */

function ContextMenuSeparator({
	className,
	...props
}: ContextMenuPrimitive.Separator.Props) {
	return (
		<ContextMenuPrimitive.Separator
			data-slot="context-menu-separator"
			className={cn("my-1 h-px bg-border", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Shortcut                                                                  */
/* -------------------------------------------------------------------------- */

function ContextMenuShortcut({
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="context-menu-shortcut"
			className={cn(
				"ml-auto text-xs tracking-widest text-muted-foreground",
				"group-focus/context-menu-item:text-accent-foreground",
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
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuPortal,
	ContextMenuPositioner,
	ContextMenuPopup,
	ContextMenuItem,
	ContextMenuShortcut,
	ContextMenuArrow,
	ContextMenuSeparator,
	// submenu
	ContextMenuSubmenu,
	ContextMenuSubmenuTrigger,
	// group
	ContextMenuGroup,
	ContextMenuGroupLabel,
	// radio
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuRadioItemIndicator,
	// checkbox
	ContextMenuCheckboxItem,
	ContextMenuCheckboxItemIndicator,
};
