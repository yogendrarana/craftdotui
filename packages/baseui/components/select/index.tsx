"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

const Select = SelectPrimitive.Root;

/* -------------------------------------------------------------------------- */
/* SelectValue                                                                */
/* -------------------------------------------------------------------------- */

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
	return (
		<SelectPrimitive.Value
			className={cn(
				"flex-1 flex truncate text-foreground data-placeholder:text-muted-foreground",
				className,
			)}
			data-slot="select-value"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Icon                                                                       */
/* -------------------------------------------------------------------------- */

function SelectIcon({ className, ...props }: SelectPrimitive.Icon.Props) {
	return (
		<SelectPrimitive.Icon
			className={cn("text-muted-foreground", className)}
			data-slot="select-icon"
			{...props}
		>
			<ChevronsUpDown className="size-4" />
		</SelectPrimitive.Icon>
	);
}

/* -------------------------------------------------------------------------- */
/* Trigger                                                                    */
/* -------------------------------------------------------------------------- */

const selectTriggerVariants = cva(
	[
		"relative",
		"w-full min-w-0 inline-flex items-center justify-between gap-2 cursor-pointer",
		"bg-background outline-none border border-border rounded-md text-sm text-foreground",
		"transition-all duration-200 ease-in-out",
		"focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-offset-1",
		"disabled:cursor-not-allowed disabled:opacity-50",
	],
	{
		variants: {
			size: {
				sm: "min-h-7 px-2",
				md: "min-h-8 px-3",
				lg: "min-h-9 px-3 text-base",
			},
			variant: {
				unstyled:
					"border-0 bg-transparent rounded-none focus-visible:ring-0",
			},
		},
		defaultVariants: {
			size: "md",
		},
	},
);

type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>;

function SelectTrigger({
	className,
	size,
	variant,
	hideSelectTriggerIcon = false,
	children,
	...props
}: SelectPrimitive.Trigger.Props &
	SelectTriggerVariants & {
		hideSelectTriggerIcon?: boolean;
	}) {
	return (
		<SelectPrimitive.Trigger
			className={cn(selectTriggerVariants({ size, variant }), className)}
			data-slot="select-trigger"
			{...props}
		>
			{children}
			{!hideSelectTriggerIcon && <SelectIcon />}
		</SelectPrimitive.Trigger>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectScrollUpArrow                                                            */
/* -------------------------------------------------------------------------- */

function SelectScrollUpArrow({
	className,
	...props
}: SelectPrimitive.ScrollUpArrow.Props) {
	return (
		<SelectPrimitive.ScrollUpArrow
			className={cn(className)}
			data-slot="select-scroll-up-arrow"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectScrollDownArrow                                                          */
/* -------------------------------------------------------------------------- */

function SelectScrollDownArrow({
	className,
	...props
}: SelectPrimitive.ScrollDownArrow.Props) {
	return (
		<SelectPrimitive.ScrollDownArrow
			className={cn(className)}
			data-slot="select-scroll-down-arrow"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectPortal                                                              */
/* -------------------------------------------------------------------------- */

function SelectPortal({
	className,
	children,
	...props
}: SelectPrimitive.Portal.Props) {
	return (
		<SelectPrimitive.Portal
			className={cn(className)}
			data-slot="select-portal"
			{...props}
		>
			{children}
		</SelectPrimitive.Portal>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectPositioner                                                          */
/* -------------------------------------------------------------------------- */

function SelectPositioner({
	className,
	sideOffset = 4,
	children,
	...props
}: SelectPrimitive.Positioner.Props) {
	return (
		<SelectPrimitive.Positioner
			className={cn(className)}
			sideOffset={sideOffset}
			data-slot="select-positioner"
			{...props}
		>
			{children}
		</SelectPrimitive.Positioner>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectPopup                                                              */
/* -------------------------------------------------------------------------- */

function SelectPopup({
	className,
	children,
	...props
}: SelectPrimitive.Popup.Props) {
	return (
		<SelectPrimitive.Popup
			data-slot="select-content"
			className={cn(
				"z-50 min-w-[var(--anchor-width)]",
				"origin-[var(--transform-origin)]",
				"rounded-md border border-border bg-popover text-sm shadow",
				className,
			)}
			{...props}
		>
			{children}
		</SelectPrimitive.Popup>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectItemIndicator                                                        */
/* -------------------------------------------------------------------------- */

function SelectItemIndicator({
	className,
	...props
}: SelectPrimitive.ItemIndicator.Props) {
	return (
		<SelectPrimitive.ItemIndicator
			className={cn("text-muted-foreground ml-auto", className)}
			data-slot="select-item-indicator"
			{...props}
		>
			<Check className="size-4" />
		</SelectPrimitive.ItemIndicator>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectItemList                                                             */
/* -------------------------------------------------------------------------- */

function SelectItemList({
	className,
	children,
	...props
}: SelectPrimitive.List.Props) {
	return (
		<SelectPrimitive.List
			data-slot="select-item-list"
			className={cn(
				"max-h-(--available-height) min-w-(--anchor-width) p-1 overflow-y-auto",
				className,
			)}
			{...props}
		>
			{children}
		</SelectPrimitive.List>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectItem                                                                 */
/* -------------------------------------------------------------------------- */

function SelectItem({
	className,
	children,
	hideIndicator = false,
	...props
}: SelectPrimitive.Item.Props & { hideIndicator?: boolean }) {
	return (
		<SelectPrimitive.Item
			className={cn(
				"relative px-2 py-1.5 flex items-center justify-between gap-2",
				"cursor-pointer select-none rounded-sm text-foreground outline-none",
				"data-[highlighted]:bg-muted",
				"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				className,
			)}
			data-slot="select-item"
			{...props}
		>
			<SelectPrimitive.ItemText className="mr-auto">
				{children}
			</SelectPrimitive.ItemText>
			{!hideIndicator && <SelectItemIndicator />}
		</SelectPrimitive.Item>
	);
}

/* -------------------------------------------------------------------------- */
/* Group Label                                                                */
/* -------------------------------------------------------------------------- */

function SelectGroupLabel({
	className,
	...props
}: SelectPrimitive.GroupLabel.Props) {
	return (
		<SelectPrimitive.GroupLabel
			className={cn(
				"px-3 py-1 text-muted-foreground text-xs font-medium",
				className,
			)}
			data-slot="select-group-label"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Group                                                                      */
/* -------------------------------------------------------------------------- */

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
	return (
		<SelectPrimitive.Group
			className={cn("", className)}
			data-slot="select-group"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Separator                                                                  */
/* -------------------------------------------------------------------------- */

function SelectSeparator({
	className,
	...props
}: SelectPrimitive.Separator.Props) {
	return (
		<SelectPrimitive.Separator
			className={cn("h-px bg-border", className)}
			data-slot="select-separator"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	Select,
	SelectTrigger,
	SelectValue,
	SelectIcon,
	SelectPortal,
	SelectPositioner,
	SelectPopup,
	SelectItem,
	SelectItemList,
	SelectGroup,
	SelectGroupLabel,
	SelectSeparator,
	selectTriggerVariants,
	SelectScrollUpArrow,
	SelectScrollDownArrow,
};
