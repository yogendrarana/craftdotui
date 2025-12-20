"use client";

import type * as React from "react";
import { Search, X, ChevronsUpDown } from "lucide-react";
import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Autocomplete                                                               */
/* -------------------------------------------------------------------------- */

const Autocomplete = AutocompletePrimitive.Root;

/* -------------------------------------------------------------------------- */
/* AutocompleteInput                                                          */
/* -------------------------------------------------------------------------- */

interface AutocompleteInputProps extends AutocompletePrimitive.Input.Props {
	showClear?: boolean;
	showTrigger?: boolean;
	startAddon?: React.ReactNode;
}

function AutocompleteInput({
	className,
	showClear = false,
	showTrigger = false,
	startAddon = null,
	...props
}: AutocompleteInputProps) {
	return (
		<div className="relative">
			{startAddon && (
				<div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
					{startAddon}
				</div>
			)}

			<AutocompletePrimitive.Input
				onFocus={(e) => e.target.select()}
				className={cn(
					"h-10 w-full px-3 py-2 flex border border-input rounded-md bg-background text-sm",
					startAddon && "pl-10",
					(showClear || showTrigger) && "pr-10",
					"placeholder:text-muted-foreground",
					"disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				data-slot="autocomplete-input"
				{...props}
			/>

			<div className="absolute right-2 top-1/2 -translate-y-1/2 flex">
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
/* AutocompletePopup                                                          */
/* -------------------------------------------------------------------------- */

interface AutocompletePopupProps extends AutocompletePrimitive.Popup.Props {
	sideOffset?: number;
	hasBackdrop?: boolean;
	className?: string;
	children?: React.ReactNode;
}

function AutocompletePopup({
	className,
	children,
	sideOffset = 4,
	hasBackdrop = false,
	...props
}: AutocompletePopupProps) {
	return (
		<AutocompletePrimitive.Portal>
			{hasBackdrop && (
				<AutocompletePrimitive.Backdrop
					className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
					data-slot="autocomplete-backdrop"
				/>
			)}
			<AutocompletePrimitive.Positioner
				sideOffset={sideOffset}
				className="z-50"
				data-slot="autocomplete-positioner"
			>
				<AutocompletePrimitive.Popup
					className={cn(
						"max-h-96 w-(--anchor-width) max-w-(--available-width)",
						"rounded-md border border-border bg-popover text-popover-foreground shadow",
						"data-[state=open]:animate-in data-[state=closed]:animate-out",
						"data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
						"data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
						"origin-[--popover-transform-origin]",
						className,
					)}
					data-slot="autocomplete-popup"
					role="listbox"
					aria-live="polite"
					{...props}
				>
					{children}
				</AutocompletePrimitive.Popup>
			</AutocompletePrimitive.Positioner>
		</AutocompletePrimitive.Portal>
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
				"max-h-[min(var(--available-height),300px)] p-1 overflow-y-auto",
				"data-empty:p-0",
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

export {
	Autocomplete,
	AutocompleteInput,
	AutocompleteTrigger,
	AutocompleteClear,
	AutocompleteIcon,
	AutocompletePopup,
	AutocompleteList,
	AutocompleteItem,
	AutocompleteEmpty,
	AutocompleteSeparator,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteStatus,
	AutocompleteCollection,
};
