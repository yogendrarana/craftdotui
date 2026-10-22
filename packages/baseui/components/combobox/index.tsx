"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";

import { cn } from "cn";
import { Input, inputVariants } from "@craftdotui/baseui/components/input";

/* -------------------------------------------------------------------------- */
/* Combobox Context                                                           */
/* -------------------------------------------------------------------------- */

interface ComboboxContextInterface {
	isSearchPending?: boolean;
}

const ComboboxContext = React.createContext<ComboboxContextInterface>({
	isSearchPending: false,
});

/* -------------------------------------------------------------------------- */
/* Combobox Root                                                              */
/* -------------------------------------------------------------------------- */

type ComboboxRootInterface<
	Value = unknown,
	Multiple extends boolean | undefined = false,
> = ComboboxPrimitive.Root.Props<Value, Multiple> & {
	isSearchPending?: boolean;
};

function ComboboxRoot<Value, Multiple extends boolean | undefined = false>({
	isSearchPending,
	...props
}: ComboboxRootInterface<Value, Multiple>) {
	return (
		<ComboboxContext.Provider value={{ isSearchPending }}>
			<ComboboxPrimitive.Root data-slot="combobox-root" {...props} />
		</ComboboxContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Label                                                             */
/* -------------------------------------------------------------------------- */

type ComboboxLabelProps = ComboboxPrimitive.Label.Props;

function ComboboxLabel({ className, ...props }: ComboboxLabelProps) {
	return (
		<ComboboxPrimitive.Label
			data-slot="combobox-label"
			className={cn("text-sm font-medium text-foreground", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Input                                                             */
/* -------------------------------------------------------------------------- */

type ComboboxInputInterface = Omit<ComboboxPrimitive.Input.Props, "size"> & {
	size?: VariantProps<typeof inputVariants>["size"];
	variant?: VariantProps<typeof inputVariants>["variant"];
	hasStartAddon?: boolean;
	hasClear?: boolean;
	hasTrigger?: boolean;
};

type ComboboxInputProps = ComboboxInputInterface;

function ComboboxInput({
	className,
	size = "md",
	variant,
	hasStartAddon = false,
	hasClear = false,
	hasTrigger = false,
	...props
}: ComboboxInputProps) {
	return (
		<ComboboxPrimitive.Input
			data-slot="combobox-input"
			className={cn(
				hasStartAddon && "pl-10",
				hasClear && hasTrigger
					? "pr-16"
					: hasClear || hasTrigger
						? "pr-10"
						: "",
				className,
			)}
			render={<Input size={size} variant={variant} />}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Input Group (Composite Component)                                 */
/* -------------------------------------------------------------------------- */

interface ComboboxInputGroupProps
	extends Omit<ComboboxPrimitive.InputGroup.Props, "children"> {
	inputProps?: ComboboxInputProps;
	startAddon?: React.ReactNode;
	showTrigger?: boolean;
	triggerProps?: ComboboxPrimitive.Trigger.Props;
	showClear?: boolean;
	clearProps?: ComboboxPrimitive.Clear.Props;
}

type ComboboxInputGroupInterface = ComboboxInputGroupProps;

function ComboboxInputGroup({
	inputProps,
	className,
	startAddon,
	triggerProps,
	showTrigger = false,
	clearProps,
	showClear = false,
	...props
}: ComboboxInputGroupProps): React.ReactElement {
	const hasClear = Boolean(clearProps) || showClear;
	const hasTrigger = Boolean(triggerProps) || showTrigger;
	const hasStartAddon = Boolean(startAddon);

	return (
		<ComboboxPrimitive.InputGroup
			data-slot="combobox-input-group"
			className={cn(
				"relative w-full not-has-[>*.w-full]:w-fit",
				className,
			)}
			{...props}
		>
			{startAddon && (
				<div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10">
					{startAddon}
				</div>
			)}

			<ComboboxInput
				hasStartAddon={hasStartAddon}
				hasClear={hasClear}
				hasTrigger={hasTrigger}
				{...inputProps}
			/>

			{(hasClear || hasTrigger) && (
				<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
					{hasClear && (
						<ComboboxClear {...clearProps}>
							{clearProps?.children ?? <X className="size-4" />}
						</ComboboxClear>
					)}

					{hasTrigger && (
						<ComboboxTrigger {...triggerProps}>
							{triggerProps?.children ?? <ComboboxIcon />}
						</ComboboxTrigger>
					)}
				</div>
			)}
		</ComboboxPrimitive.InputGroup>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Trigger                                                           */
/* -------------------------------------------------------------------------- */

function ComboboxTrigger({
	className,
	...props
}: ComboboxPrimitive.Trigger.Props) {
	return (
		<ComboboxPrimitive.Trigger
			data-slot="combobox-trigger"
			className={cn(
				"p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Icon                                                              */
/* -------------------------------------------------------------------------- */

function ComboboxIcon({
	className,
	children,
	...props
}: ComboboxPrimitive.Icon.Props) {
	return (
		<ComboboxPrimitive.Icon
			data-slot="combobox-icon"
			className={cn("size-4 opacity-70", className)}
			{...props}
		>
			{children ?? <ChevronsUpDown className="size-4" />}
		</ComboboxPrimitive.Icon>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Clear                                                             */
/* -------------------------------------------------------------------------- */

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
	return (
		<ComboboxPrimitive.Clear
			data-slot="combobox-clear"
			className={cn(
				"p-1 opacity-70 hover:opacity-100 cursor-pointer",
				"data-disabled:pointer-events-none",
				className,
			)}
			aria-label="Clear selection"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Value (for single-select display inside input)                    */
/* -------------------------------------------------------------------------- */

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
	return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

/* --------------------------------------s------------------------------------ */
/* Combobox Portal                                                            */
/* -------------------------------------------------------------------------- */

function ComboboxPortal(props: ComboboxPrimitive.Portal.Props) {
	return <ComboboxPrimitive.Portal data-slot="combobox-portal" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Combobox Backdrop                                                          */
/* -------------------------------------------------------------------------- */

function ComboboxBackdrop({
	className,
	...props
}: ComboboxPrimitive.Backdrop.Props) {
	return (
		<ComboboxPrimitive.Backdrop
			data-slot="combobox-backdrop"
			className={cn(
				"fixed inset-0 z-50 bg-backdrop backdrop-blur-xs",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Positioner                                                        */
/* -------------------------------------------------------------------------- */

function ComboboxPositioner({
	className,
	sideOffset = 4,
	...props
}: ComboboxPrimitive.Positioner.Props) {
	return (
		<ComboboxPrimitive.Positioner
			data-slot="combobox-positioner"
			sideOffset={sideOffset}
			className={cn("z-50 select-none", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Popup                                                             */
/* -------------------------------------------------------------------------- */

function ComboboxPopup({ className, ...props }: ComboboxPrimitive.Popup.Props) {
	return (
		<ComboboxPrimitive.Popup
			data-slot="combobox-popup"
			className={cn(
				"relative",
				"max-h-full min-w-(--anchor-width) max-w-(--available-width)",
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
/* Combobox Arrow                                                             */
/* -------------------------------------------------------------------------- */

function ComboboxArrow({ className, ...props }: ComboboxPrimitive.Arrow.Props) {
	return (
		<ComboboxPrimitive.Arrow
			data-slot="combobox-arrow"
			className={cn(
				"size-3",
				"data-[side=bottom]:-top-px",
				"data-[side=top]:-bottom-px data-[side=top]:rotate-180",
				className,
			)}
			{...props}
		>
			<svg width="10" height="6" viewBox="0 0 10 6" fill="none">
				<title>Combobox Arrow</title>
				<path d="M0 6L5 0L10 6Z" className="fill-popover" />
				<path d="M0 6L5 0L10 6Z" className="stroke-border" />
			</svg>
		</ComboboxPrimitive.Arrow>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox List                                                              */
/* -------------------------------------------------------------------------- */

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
	return (
		<ComboboxPrimitive.List
			data-slot="combobox-list"
			className={cn(
				"max-h-[min(var(--available-height),400px)] p-1 space-y-0.5",
				"outline-0 overflow-y-auto overscroll-contain",
				"data-empty:p-0",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Empty                                                             */
/* -------------------------------------------------------------------------- */

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
	return (
		<ComboboxPrimitive.Empty
			data-slot="combobox-empty"
			className={cn(
				"py-4 text-center text-sm text-muted-foreground empty:hidden",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Item                                                              */
/* -------------------------------------------------------------------------- */

function ComboboxItem({ className, ...props }: ComboboxPrimitive.Item.Props) {
	return (
		<ComboboxPrimitive.Item
			data-slot="combobox-item"
			className={cn(
				"relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
				"data-highlighted:bg-accent data-highlighted:text-accent-foreground",
				"data-disabled:pointer-events-none data-disabled:opacity-50",
				"data-inset:pl-8",
				className,
			)}
			{...props}
		>
			{props.children}
			<ComboboxItemIndicator />
		</ComboboxPrimitive.Item>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Item Indicator                                                    */
/* -------------------------------------------------------------------------- */

function ComboboxItemIndicator({
	className,
	...props
}: ComboboxPrimitive.ItemIndicator.Props) {
	return (
		<ComboboxPrimitive.ItemIndicator
			data-slot="combobox-item-indicator"
			className={cn("text-muted-foreground ml-auto", className)}
			{...props}
		>
			<Check className="size-4" />
		</ComboboxPrimitive.ItemIndicator>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Group                                                             */
/* -------------------------------------------------------------------------- */

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
	return <ComboboxPrimitive.Group data-slot="combobox-group" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Combobox Group Label                                                       */
/* -------------------------------------------------------------------------- */

function ComboboxGroupLabel({
	className,
	...props
}: ComboboxPrimitive.GroupLabel.Props) {
	return (
		<ComboboxPrimitive.GroupLabel
			data-slot="combobox-group-label"
			className={cn(
				"px-2 py-2 text-xs font-semibold text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Separator                                                         */
/* -------------------------------------------------------------------------- */

function ComboboxSeparator({
	className,
	...props
}: ComboboxPrimitive.Separator.Props) {
	return (
		<ComboboxPrimitive.Separator
			data-slot="combobox-separator"
			className={cn("my-1 h-px bg-border", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Chips                                                             */
/* -------------------------------------------------------------------------- */

interface ComboboxChipsProps extends ComboboxPrimitive.Chips.Props {
	size?: VariantProps<typeof inputVariants>["size"];
	variant?: VariantProps<typeof inputVariants>["variant"];
	ref?: React.Ref<HTMLDivElement>;
}

function ComboboxChips({
	className,
	size = "md",
	variant = "default",
	ref,
	...props
}: ComboboxChipsProps) {
	return (
		<ComboboxPrimitive.Chips
			data-slot="combobox-chips"
			ref={ref}
			className={cn(
				inputVariants({ size, variant }),
				"w-full h-auto flex flex-wrap items-center gap-1",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Chip                                                              */
/* -------------------------------------------------------------------------- */

function ComboboxChip({ className, ...props }: ComboboxPrimitive.Chip.Props) {
	return (
		<ComboboxPrimitive.Chip
			data-slot="combobox-chip"
			className={cn(
				"inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm",
				"bg-secondary text-secondary-foreground text-xs font-medium",
				"has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Chip Remove                                                       */
/* -------------------------------------------------------------------------- */

function ComboboxChipRemove({
	className,
	...props
}: ComboboxPrimitive.ChipRemove.Props) {
	return (
		<ComboboxPrimitive.ChipRemove
			data-slot="combobox-chip-remove"
			className={cn(
				"h-full shrink-0 cursor-pointer opacity-70 hover:opacity-100 transition-opacity",
				"[&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5",
				"[&_svg]:pointer-events-none",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Status                                                            */
/* -------------------------------------------------------------------------- */

function ComboboxStatus({
	className,
	...props
}: ComboboxPrimitive.Status.Props) {
	return (
		<ComboboxPrimitive.Status
			data-slot="combobox-status"
			className={cn(
				"px-3 py-2 text-sm text-muted-foreground border-b",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Collection                                                        */
/* -------------------------------------------------------------------------- */

function ComboboxCollection(props: ComboboxPrimitive.Collection.Props) {
	return (
		<ComboboxPrimitive.Collection
			data-slot="combobox-collection"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Row                                                               */
/* -------------------------------------------------------------------------- */

function ComboboxRow(props: ComboboxPrimitive.Row.Props) {
	return <ComboboxPrimitive.Row data-slot="combobox-row" {...props} />;
}

function ComboboxChipsInput({
	className,
	...props
}: ComboboxPrimitive.Input.Props) {
	return (
		<ComboboxPrimitive.Input
			data-slot="combobox-chip-input"
			className={cn("min-w-16 flex-1 outline-none", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Combobox Content (Composite Component)                                     */
/* -------------------------------------------------------------------------- */

interface ComboboxContentProps extends ComboboxPrimitive.Popup.Props {
	hasBackdrop?: boolean;
	className?: string;
	children?: React.ReactNode;
	portalProps?: ComboboxPrimitive.Portal.Props;
	backdropProps?: ComboboxPrimitive.Backdrop.Props;
	positionerProps?: ComboboxPrimitive.Positioner.Props;
}

type ComboboxContentInterface = ComboboxContentProps;

function ComboboxContent({
	className,
	children,
	hasBackdrop = false,
	portalProps,
	backdropProps,
	positionerProps = { sideOffset: 4 },
	...props
}: ComboboxContentProps) {
	return (
		<ComboboxPortal {...portalProps}>
			{hasBackdrop && <ComboboxBackdrop {...backdropProps} />}
			<ComboboxPositioner sideOffset={4} {...positionerProps}>
				<ComboboxPopup className={className} {...props}>
					{children}
				</ComboboxPopup>
			</ComboboxPositioner>
		</ComboboxPortal>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

const useFilter = ComboboxPrimitive.useFilter;

export const Combobox = {
	Root: ComboboxRoot,
	Label: ComboboxLabel,
	InputGroup: ComboboxInputGroup,
	Input: ComboboxInput,
	Trigger: ComboboxTrigger,
	Icon: ComboboxIcon,
	Clear: ComboboxClear,
	Value: ComboboxValue,
	Portal: ComboboxPortal,
	Backdrop: ComboboxBackdrop,
	Positioner: ComboboxPositioner,
	Popup: ComboboxPopup,
	Arrow: ComboboxArrow,
	Content: ComboboxContent,
	List: ComboboxList,
	Item: ComboboxItem,
	ItemIndicator: ComboboxItemIndicator,
	Empty: ComboboxEmpty,
	Group: ComboboxGroup,
	GroupLabel: ComboboxGroupLabel,
	Separator: ComboboxSeparator,
	Status: ComboboxStatus,
	Collection: ComboboxCollection,
	Row: ComboboxRow,
	Chips: ComboboxChips,
	Chip: ComboboxChip,
	ChipRemove: ComboboxChipRemove,
	ChipsInput: ComboboxChipsInput,
	useFilter,
};

export {
	ComboboxRoot,
	ComboboxLabel,
	ComboboxInputGroup,
	ComboboxInput,
	ComboboxTrigger,
	ComboboxIcon,
	ComboboxClear,
	ComboboxValue,
	ComboboxPortal,
	ComboboxBackdrop,
	ComboboxPositioner,
	ComboboxPopup,
	ComboboxArrow,
	ComboboxContent,
	ComboboxList,
	ComboboxItem,
	ComboboxItemIndicator,
	ComboboxEmpty,
	ComboboxGroup,
	ComboboxGroupLabel,
	ComboboxSeparator,
	ComboboxStatus,
	ComboboxCollection,
	ComboboxRow,
	ComboboxChips,
	ComboboxChip,
	ComboboxChipRemove,
	ComboboxChipsInput,
	useFilter,
	type ComboboxRootInterface,
	type ComboboxLabelProps,
	type ComboboxInputGroupProps,
	type ComboboxInputGroupInterface,
	type ComboboxInputProps,
	type ComboboxInputInterface,
	type ComboboxContentProps,
	type ComboboxContentInterface,
};
