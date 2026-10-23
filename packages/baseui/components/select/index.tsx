"use client";

import { Check, ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "cn";
import { ARROW_STYLES, BaseArrow } from "@craftdotui/baseui/components/arrow";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

const SelectRoot = SelectPrimitive.Root;

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

function SelectLabel({ className, ...props }: SelectPrimitive.Label.Props) {
	return (
		<SelectPrimitive.Label
			className={cn("text-sm font-medium text-foreground", className)}
			data-slot="select-label"
			{...props}
		/>
	);
}

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
			className={cn(
				selectTriggerVariants({ size, variant }),
				"w-50",
				className,
			)}
			data-slot="select-trigger"
			{...props}
		>
			{children}
			{!hideSelectTriggerIcon && <SelectIcon />}
		</SelectPrimitive.Trigger>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectPortal                                                               */
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
/* SelectBackdrop                                                             */
/* -------------------------------------------------------------------------- */

function SelectBackdrop({
	className,
	...props
}: SelectPrimitive.Backdrop.Props) {
	return (
		<SelectPrimitive.Backdrop
			className={cn(
				"fixed inset-0 z-50 bg-black/20",
				"transition-opacity duration-200 ease-out",
				"data-starting-style:opacity-0 data-ending-style:opacity-0",
				className,
			)}
			data-slot="select-backdrop"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectPositioner                                                           */
/* -------------------------------------------------------------------------- */

function SelectPositioner({
	className,
	sideOffset = 4,
	children,
	...props
}: SelectPrimitive.Positioner.Props) {
	return (
		<SelectPrimitive.Positioner
			className={cn("z-50", className)}
			sideOffset={sideOffset}
			data-slot="select-positioner"
			{...props}
		>
			{children}
		</SelectPrimitive.Positioner>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectPopup                                                                */
/* -------------------------------------------------------------------------- */

function SelectPopup({
	className,
	children,
	...props
}: SelectPrimitive.Popup.Props) {
	return (
		<SelectPrimitive.Popup
			data-slot="select-popup"
			className={cn(
				"z-50 min-w-[var(--anchor-width)]",
				"origin-[var(--transform-origin)]",
				"rounded-md border border-border bg-popover text-popover-foreground text-sm shadow-md",
				"transition-[opacity,transform] duration-150 ease-out",
				"data-starting-style:opacity-0 data-starting-style:scale-95",
				"data-ending-style:opacity-0 data-ending-style:scale-95",
				className,
			)}
			{...props}
		>
			{children}
		</SelectPrimitive.Popup>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectArrow                                                                */
/* -------------------------------------------------------------------------- */

function SelectArrow({ className, ...props }: SelectPrimitive.Arrow.Props) {
	return (
		<SelectPrimitive.Arrow
			className={cn(ARROW_STYLES, className)}
			data-slot="select-arrow"
			{...props}
		>
			<BaseArrow title="Select Arrow" className="fill-popover" />
		</SelectPrimitive.Arrow>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectScrollUpArrow                                                        */
/* -------------------------------------------------------------------------- */

function SelectScrollUpArrow({
	className,
	children,
	...props
}: SelectPrimitive.ScrollUpArrow.Props) {
	return (
		<SelectPrimitive.ScrollUpArrow
			className={cn(
				"flex cursor-default items-center justify-center py-1 text-muted-foreground",
				className,
			)}
			data-slot="select-scroll-up-arrow"
			{...props}
		>
			{children || <ChevronUp className="size-4" />}
		</SelectPrimitive.ScrollUpArrow>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectScrollDownArrow                                                      */
/* -------------------------------------------------------------------------- */

function SelectScrollDownArrow({
	className,
	children,
	...props
}: SelectPrimitive.ScrollDownArrow.Props) {
	return (
		<SelectPrimitive.ScrollDownArrow
			className={cn(
				"flex cursor-default items-center justify-center py-1 text-muted-foreground",
				className,
			)}
			data-slot="select-scroll-down-arrow"
			{...props}
		>
			{children || <ChevronDown className="size-4" />}
		</SelectPrimitive.ScrollDownArrow>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectItemList (SelectList)                                                */
/* -------------------------------------------------------------------------- */

function SelectItemList({
	className,
	children,
	...props
}: SelectPrimitive.List.Props) {
	return (
		<SelectPrimitive.List
			data-slot="select-list"
			className={cn(
				"max-h-[var(--available-height)] min-w-[var(--anchor-width)] p-1 overflow-y-auto",
				className,
			)}
			{...props}
		>
			{children}
		</SelectPrimitive.List>
	);
}

const SelectList = SelectItemList;

/* -------------------------------------------------------------------------- */
/* SelectItemText                                                             */
/* -------------------------------------------------------------------------- */

function SelectItemText({
	className,
	...props
}: SelectPrimitive.ItemText.Props) {
	return (
		<SelectPrimitive.ItemText
			className={cn("mr-auto", className)}
			data-slot="select-item-text"
			{...props}
		/>
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
			data-slot="select-item"
			className={cn(
				"relative px-2 py-1.5 flex items-center justify-between gap-2",
				"cursor-pointer select-none rounded-sm text-foreground outline-none",
				"data-[highlighted]:bg-muted",
				"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				className,
			)}
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
/* Separator                                                                  */
/* -------------------------------------------------------------------------- */

function SelectSeparator({
	className,
	...props
}: SelectPrimitive.Separator.Props) {
	return (
		<SelectPrimitive.Separator
			className={cn("-mx-1 my-1 h-px bg-border", className)}
			data-slot="select-separator"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* SelectContent (Composite Component)                                        */
/* -------------------------------------------------------------------------- */

type SelectPositionerProps = SelectPrimitive.Positioner.Props;

interface SelectContentProps extends SelectPrimitive.Popup.Props {
	hasBackdrop?: boolean;
	hasArrow?: boolean;
	hasScrollArrows?: boolean;
	alignItemWithTrigger?: boolean;
	sideOffset?: number;
	className?: string;
	children?: React.ReactNode;
	portalProps?: SelectPrimitive.Portal.Props;
	backdropProps?: SelectPrimitive.Backdrop.Props;
	positionerProps?: SelectPositionerProps;
	arrowProps?: SelectPrimitive.Arrow.Props;
	scrollUpArrowProps?: SelectPrimitive.ScrollUpArrow.Props;
	scrollDownArrowProps?: SelectPrimitive.ScrollDownArrow.Props;
	listProps?: SelectPrimitive.List.Props;
}

function SelectContent({
	className,
	children,
	hasBackdrop = false,
	hasArrow = false,
	hasScrollArrows = true,
	alignItemWithTrigger,
	sideOffset = 4,
	portalProps,
	backdropProps,
	positionerProps,
	arrowProps,
	scrollUpArrowProps,
	scrollDownArrowProps,
	listProps,
	...props
}: SelectContentProps) {
	const resolvedPositionerProps: SelectPositionerProps = {
		sideOffset,
		...(alignItemWithTrigger !== undefined && { alignItemWithTrigger }),
		...positionerProps,
	};

	return (
		<SelectPortal {...portalProps}>
			{hasBackdrop && <SelectBackdrop {...backdropProps} />}
			<SelectPositioner {...resolvedPositionerProps}>
				<SelectPopup className={className} {...props}>
					{hasScrollArrows && (
						<SelectScrollUpArrow {...scrollUpArrowProps} />
					)}
					{hasArrow && <SelectArrow {...arrowProps} />}
					<SelectItemList {...listProps}>{children}</SelectItemList>
					{hasScrollArrows && (
						<SelectScrollDownArrow {...scrollDownArrowProps} />
					)}
				</SelectPopup>
			</SelectPositioner>
		</SelectPortal>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Select = {
	Root: SelectRoot,
	Label: SelectLabel,
	Trigger: SelectTrigger,
	Value: SelectValue,
	Icon: SelectIcon,
	Portal: SelectPortal,
	Backdrop: SelectBackdrop,
	Positioner: SelectPositioner,
	Popup: SelectPopup,
	Content: SelectContent,
	Arrow: SelectArrow,
	Item: SelectItem,
	ItemText: SelectItemText,
	ItemIndicator: SelectItemIndicator,
	List: SelectItemList,
	ItemList: SelectItemList,
	Group: SelectGroup,
	GroupLabel: SelectGroupLabel,
	Separator: SelectSeparator,
	ScrollUpArrow: SelectScrollUpArrow,
	ScrollDownArrow: SelectScrollDownArrow,
};

export {
	SelectRoot,
	SelectLabel,
	SelectTrigger,
	SelectValue,
	SelectIcon,
	SelectPortal,
	SelectBackdrop,
	SelectPositioner,
	SelectPopup,
	SelectContent,
	SelectArrow,
	SelectItem,
	SelectItemText,
	SelectItemIndicator,
	SelectItemList,
	SelectList,
	SelectGroup,
	SelectGroupLabel,
	SelectSeparator,
	SelectScrollUpArrow,
	SelectScrollDownArrow,
	selectTriggerVariants,
	type SelectContentProps,
	type SelectPositionerProps,
	type SelectTriggerVariants,
};
