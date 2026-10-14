"use client";

import type * as React from "react";
import { Search, X, ChevronsUpDown } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";

import { cn } from "cn";
import { Input, type inputVariants } from "@craftdotui/baseui/components/input";

/* -------------------------------------------------------------------------- */
/* Autocomplete                                                               */
/* -------------------------------------------------------------------------- */

const AutocompleteRoot = AutocompletePrimitive.Root;

/* -------------------------------------------------------------------------- */
/* AutocompleteInput                                                          */
/* -------------------------------------------------------------------------- */

type AutocompleteInputInterface = Omit<
	AutocompletePrimitive.Input.Props,
	"size"
> & {
	size?: VariantProps<typeof inputVariants>["size"];
	variant?: VariantProps<typeof inputVariants>["variant"];
	showClear?: boolean;
	showTrigger?: boolean;
	startAddon?: React.ReactNode;
};

type AutocompleteInputProps = AutocompleteInputInterface;

function AutocompleteInput({
	className,
	size = "md",
	variant,
	showClear = false,
	showTrigger = false,
	startAddon,
	...props
}: AutocompleteInputProps) {
	return (
		<div className="relative w-full not-has-[>*.w-full]:w-fit">
			{startAddon && (
				<div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
					{startAddon}
				</div>
			)}

			<AutocompletePrimitive.Input
				data-slot="autocomplete-input"
				className={cn(
					startAddon && "pl-10",
					showClear && showTrigger
						? "pr-16"
						: showClear || showTrigger
							? "pr-10"
							: "",
					className,
				)}
				render={<Input size={size} variant={variant} />}
				{...props}
			/>

			<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
				{showClear && (
					<AutocompleteClear>
						<X className="size-4" />
					</AutocompleteClear>
				)}

				{showTrigger && (
					<AutocompleteTrigger>
						<ChevronsUpDown className="size-4" />
					</AutocompleteTrigger>
				)}
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* AutocompleteTrigger                                                        */
/* -------------------------------------------------------------------------- */

function AutocompleteTrigger({
	className,
	...props
}: AutocompletePrimitive.Trigger.Props) {
	return (
		<AutocompletePrimitive.Trigger
			className={cn(
				"p-1 opacity-70 hover:opacity-100 cursor-pointer",
				className,
			)}
			data-slot="autocomplete-trigger"
			aria-label="Toggle options"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* AutocompleteClear                                                          */
/* -------------------------------------------------------------------------- */

function AutocompleteClear({
	className,
	...props
}: AutocompletePrimitive.Clear.Props) {
	return (
		<AutocompletePrimitive.Clear
			className={cn(
				"p-1 opacity-70 hover:opacity-100 cursor-pointer",
				"data-disabled:pointer-events-none",
				className,
			)}
			data-slot="autocomplete-clear"
			aria-label="Clear search"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* AutocompleteIcon                                                           */
/* -------------------------------------------------------------------------- */

function AutocompleteIcon({
	className,
	...props
}: AutocompletePrimitive.Icon.Props) {
	return (
		<AutocompletePrimitive.Icon
			className={cn(
				"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",
				className,
			)}
			data-slot="autocomplete-icon"
			{...props}
		>
			<Search className="size-4" />
		</AutocompletePrimitive.Icon>
	);
}

/* -------------------------------------------------------------------------- */
/* Autocomplete Portal                                                        */
/* -------------------------------------------------------------------------- */

function AutocompletePortal(props: AutocompletePrimitive.Portal.Props) {
	return (
		<AutocompletePrimitive.Portal
			data-slot="autocomplete-portal"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Autocomplete Backdrop                                                      */
/* -------------------------------------------------------------------------- */

function AutocompleteBackdrop({
	className,
	...props
}: AutocompletePrimitive.Backdrop.Props) {
	return (
		<AutocompletePrimitive.Backdrop
			data-slot="autocomplete-backdrop"
			className={cn(
				"fixed inset-0 z-50 bg-backdrop backdrop-blur-xs",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Autocomplete Positioner                                                    */
/* -------------------------------------------------------------------------- */

function AutocompletePositioner({
	className,
	sideOffset = 4,
	...props
}: AutocompletePrimitive.Positioner.Props) {
	return (
		<AutocompletePrimitive.Positioner
			data-slot="autocomplete-positioner"
			sideOffset={sideOffset}
			className={cn("z-50 select-none", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Autocomplete Popup                                                         */
/* -------------------------------------------------------------------------- */

function AutocompletePopup({
	className,
	...props
}: AutocompletePrimitive.Popup.Props) {
	return (
		<AutocompletePrimitive.Popup
			data-slot="autocomplete-popup"
			role="listbox"
			aria-live="polite"
			className={cn(
				"relative",
				"max-h-96 min-w-(--anchor-width) max-w-(--available-width)",
				"origin-(--transform-origin) overflow-hidden outline-none rounded-md border border-border bg-popover text-popover-foreground shadow-lg shadow-black/5",
				"data-open:animate-in data-open:fade-in data-open:zoom-in-95",
				"data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95",
				"data-starting-style:opacity-0 data-starting-style:scale-95",
				"data-ending-style:opacity-0 data-ending-style:scale-95",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Autocomplete Arrow                                                         */
/* -------------------------------------------------------------------------- */

function AutocompleteArrow({
	className,
	...props
}: AutocompletePrimitive.Arrow.Props) {
	return (
		<AutocompletePrimitive.Arrow
			data-slot="autocomplete-arrow"
			className={cn(
				"size-3",
				"data-[side=bottom]:-top-px",
				"data-[side=top]:-bottom-px data-[side=top]:rotate-180",
				className,
			)}
			{...props}
		>
			<svg width="10" height="6" viewBox="0 0 10 6" fill="none">
				<title>Autocomplete Arrow</title>
				<path d="M0 6L5 0L10 6Z" className="fill-popover" />
				<path d="M0 6L5 0L10 6Z" className="stroke-border" />
			</svg>
		</AutocompletePrimitive.Arrow>
	);
}

/* -------------------------------------------------------------------------- */
/* Autocomplete Content (Composite Component)                                 */
/* -------------------------------------------------------------------------- */

interface AutocompleteContentProps extends AutocompletePrimitive.Popup.Props {
	sideOffset?: number;
	hasBackdrop?: boolean;
	portalProps?: AutocompletePrimitive.Portal.Props;
	backdropProps?: AutocompletePrimitive.Backdrop.Props;
	positionerProps?: AutocompletePrimitive.Positioner.Props;
	className?: string;
	children?: React.ReactNode;
}

function AutocompleteContent({
	className,
	children,
	sideOffset = 4,
	hasBackdrop = false,
	portalProps,
	backdropProps,
	positionerProps,
	...props
}: AutocompleteContentProps) {
	return (
		<AutocompletePortal {...portalProps}>
			{hasBackdrop && <AutocompleteBackdrop {...backdropProps} />}
			<AutocompletePositioner
				sideOffset={sideOffset}
				{...positionerProps}
			>
				<AutocompletePopup className={className} {...props}>
					{children}
				</AutocompletePopup>
			</AutocompletePositioner>
		</AutocompletePortal>
	);
}

/* -------------------------------------------------------------------------- */
/* AutocompleteList                                                           */
/* -------------------------------------------------------------------------- */

function AutocompleteList({
	className,
	children,
	...props
}: AutocompletePrimitive.List.Props) {
	return (
		<AutocompletePrimitive.List
			className={cn(
				"max-h-[min(var(--available-height),300px)] p-1 overflow-y-auto overscroll-contain",
				className,
			)}
			data-slot="autocomplete-list"
			{...props}
		>
			{children}
		</AutocompletePrimitive.List>
	);
}

/* -------------------------------------------------------------------------- */
/* AutocompleteItem                                                           */
/* -------------------------------------------------------------------------- */

function AutocompleteItem({
	className,
	children,
	...props
}: AutocompletePrimitive.Item.Props) {
	return (
		<AutocompletePrimitive.Item
			className={cn(
				"relative w-full px-2 py-1.5 flex items-center cursor-default select-none rounded-sm text-sm outline-none",
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				className,
			)}
			data-slot="autocomplete-item"
			{...props}
		>
			{children}
		</AutocompletePrimitive.Item>
	);
}

/* -------------------------------------------------------------------------- */
/* AutocompleteEmpty                                                          */
/* -------------------------------------------------------------------------- */

function AutocompleteEmpty({
	className,
	children,
	...props
}: AutocompletePrimitive.Empty.Props) {
	return (
		<AutocompletePrimitive.Empty
			className={cn(
				"py-4 text-center text-sm text-muted-foreground empty:hidden",
				className,
			)}
			data-slot="autocomplete-empty"
			role="status"
			aria-live="polite"
			{...props}
		>
			{children ?? "No results found."}
		</AutocompletePrimitive.Empty>
	);
}

/* -------------------------------------------------------------------------- */
/* AutocompleteSeparator                                                      */
/* -------------------------------------------------------------------------- */

function AutocompleteSeparator({
	className,
	...props
}: AutocompletePrimitive.Separator.Props) {
	return (
		<AutocompletePrimitive.Separator
			className={cn("h-px bg-border my-1", className)}
			data-slot="autocomplete-separator"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* AutocompleteGroup                                                          */
/* -------------------------------------------------------------------------- */

function AutocompleteGroup({
	className,
	children,
	...props
}: AutocompletePrimitive.Group.Props) {
	return (
		<AutocompletePrimitive.Group
			className={cn("", className)}
			data-slot="autocomplete-group"
			{...props}
		>
			{children}
		</AutocompletePrimitive.Group>
	);
}

/* -------------------------------------------------------------------------- */
/* AutocompleteGroupLabel                                                     */
/* -------------------------------------------------------------------------- */

function AutocompleteGroupLabel({
	className,
	children,
	...props
}: AutocompletePrimitive.GroupLabel.Props) {
	return (
		<AutocompletePrimitive.GroupLabel
			className={cn(
				"px-2 py-1.5 text-xs font-semibold uppercase text-muted-foreground",
			)}
			data-slot="autocomplete-group-label"
			{...props}
		>
			{children}
		</AutocompletePrimitive.GroupLabel>
	);
}

/* -------------------------------------------------------------------------- */
/* AutocompleteCollection                                                     */
/* -------------------------------------------------------------------------- */

function AutocompleteCollection({
	...props
}: AutocompletePrimitive.Collection.Props) {
	return (
		<AutocompletePrimitive.Collection
			data-slot="autocomplete-collection"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* AutocompleteStatus                                                         */
/* -------------------------------------------------------------------------- */

function AutocompleteStatus({
	className,
	children,
	...props
}: AutocompletePrimitive.Status.Props) {
	return (
		<AutocompletePrimitive.Status
			className={cn(
				"p-3 text-sm text-muted-foreground border-b",
				className,
			)}
			data-slot="autocomplete-status"
			role="status"
			aria-live="polite"
			{...props}
		>
			{children}
		</AutocompletePrimitive.Status>
	);
}

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export const Autocomplete = {
	Root: AutocompleteRoot,
	Input: AutocompleteInput,
	Trigger: AutocompleteTrigger,
	Clear: AutocompleteClear,
	Icon: AutocompleteIcon,
	Portal: AutocompletePortal,
	Backdrop: AutocompleteBackdrop,
	Positioner: AutocompletePositioner,
	Popup: AutocompletePopup,
	Arrow: AutocompleteArrow,
	Content: AutocompleteContent,
	List: AutocompleteList,
	Item: AutocompleteItem,
	Empty: AutocompleteEmpty,
	Separator: AutocompleteSeparator,
	Group: AutocompleteGroup,
	GroupLabel: AutocompleteGroupLabel,
	Status: AutocompleteStatus,
	Collection: AutocompleteCollection,
};

export {
	AutocompleteRoot,
	AutocompleteInput,
	AutocompleteTrigger,
	AutocompleteClear,
	AutocompleteIcon,
	AutocompletePortal,
	AutocompleteBackdrop,
	AutocompletePositioner,
	AutocompletePopup,
	AutocompleteArrow,
	AutocompleteContent,
	AutocompleteList,
	AutocompleteItem,
	AutocompleteEmpty,
	AutocompleteSeparator,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteStatus,
	AutocompleteCollection,
};
export type {
	AutocompleteInputInterface,
	AutocompleteInputProps,
	AutocompleteContentProps,
};
