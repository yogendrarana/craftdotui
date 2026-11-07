"use client";

import type * as React from "react";
import { XIcon } from "lucide-react";
import { cn } from "cn";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cva, type VariantProps } from "class-variance-authority";
import {
	createHandle,
	DialogBackdrop,
	DialogClose,
	DialogDescription,
	DialogFooter,
	type DialogFooterProps,
	DialogHeader,
	type DialogHeaderProps,
	DialogPanel,
	type DialogPanelProps,
	DialogPortal,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from "@craftdotui/baseui/components/dialog";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

const sheetViewportVariants = cva("fixed inset-0 z-50", {
	variants: {
		side: {
			right: "flex justify-end",
			left: "flex justify-start",
			top: "grid grid-rows-[auto_1fr] pb-12",
			bottom: "grid grid-rows-[1fr_auto] pt-12",
		},
		variant: {
			default: "",
			inset: "sm:p-4",
		},
	},
	defaultVariants: {
		side: "right",
		variant: "default",
	},
});

const sheetVariants = cva(
	cn(
		"relative flex max-h-full min-h-0 w-full min-w-0 flex-col bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg border-border",
		"transition-[opacity,translate] duration-250 ease-out will-change-transform",
		"data-starting-style:opacity-0 data-ending-style:opacity-0",
		"focus:outline-none",
	),
	{
		variants: {
			side: {
				right: "h-full w-[calc(100%-(--spacing(12)))] max-w-sm border-l data-starting-style:translate-x-8 data-ending-style:translate-x-8",
				left: "h-full w-[calc(100%-(--spacing(12)))] max-w-sm border-r data-starting-style:-translate-x-8 data-ending-style:-translate-x-8",
				top: "h-auto max-h-[85vh] border-b data-starting-style:-translate-y-8 data-ending-style:-translate-y-8",
				bottom: "row-start-2 h-auto max-h-[85vh] border-t data-starting-style:translate-y-8 data-ending-style:translate-y-8",
			},
			variant: {
				default: "",
				inset: "sm:rounded-2xl sm:border",
			},
		},
		defaultVariants: {
			side: "right",
			variant: "default",
		},
	},
);

export type SheetVariants = VariantProps<typeof sheetVariants>;

/* -------------------------------------------------------------------------- */
/* Re-exported Dialog Primitives                                              */
/* -------------------------------------------------------------------------- */

const SheetRoot = DialogRoot;
const SheetTrigger = DialogTrigger;
const SheetPortal = DialogPortal;
const SheetBackdrop = DialogBackdrop;
const SheetHeader = DialogHeader;
const SheetPanel = DialogPanel;
const SheetTitle = DialogTitle;
const SheetDescription = DialogDescription;
const SheetClose = DialogClose;

/* -------------------------------------------------------------------------- */
/* Sheet Viewport                                                             */
/* -------------------------------------------------------------------------- */

export interface SheetViewportProps
	extends DialogPrimitive.Viewport.Props,
		SheetVariants {}

function SheetViewport({
	side = "right",
	variant = "default",
	className,
	...props
}: SheetViewportProps): React.ReactElement {
	return (
		<DialogPrimitive.Viewport
			data-slot="sheet-viewport"
			data-side={side}
			data-variant={variant}
			className={cn(sheetViewportVariants({ side, variant }), className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Sheet Popup                                                                */
/* -------------------------------------------------------------------------- */

export interface SheetPopupProps
	extends DialogPrimitive.Popup.Props,
		SheetVariants {}

function SheetPopup({
	side = "right",
	variant = "default",
	className,
	...props
}: SheetPopupProps): React.ReactElement {
	return (
		<DialogPrimitive.Popup
			data-slot="sheet-popup"
			data-side={side}
			data-variant={variant}
			className={cn(sheetVariants({ side, variant }), className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Sheet Content (Composite Component)                                        */
/* -------------------------------------------------------------------------- */

export interface SheetContentProps extends SheetPopupProps {
	hasBackdrop?: boolean;
	showCloseButton?: boolean;
	portalProps?: DialogPrimitive.Portal.Props;
	backdropProps?: DialogPrimitive.Backdrop.Props;
	viewportProps?: DialogPrimitive.Viewport.Props;
}

function SheetContent({
	side = "right",
	variant = "default",
	className,
	children,
	hasBackdrop = true,
	showCloseButton = true,
	portalProps,
	backdropProps,
	viewportProps,
	...props
}: SheetContentProps): React.ReactElement {
	return (
		<SheetPortal {...portalProps}>
			{hasBackdrop && <SheetBackdrop {...backdropProps} />}
			<SheetViewport side={side} variant={variant} {...viewportProps}>
				<SheetPopup
					side={side}
					variant={variant}
					className={className}
					{...props}
				>
					{showCloseButton && (
						<SheetClose
							className="absolute top-4 right-4 rounded-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
							aria-label="Close"
						>
							<XIcon className="size-4" />
						</SheetClose>
					)}
					{children}
				</SheetPopup>
			</SheetViewport>
		</SheetPortal>
	);
}

/* -------------------------------------------------------------------------- */
/* Sheet Footer                                                               */
/* -------------------------------------------------------------------------- */

export interface SheetFooterProps extends DialogFooterProps {}

function SheetFooter({
	className,
	...props
}: SheetFooterProps): React.ReactElement {
	return (
		<DialogFooter
			data-slot="sheet-footer"
			className={cn(
				"sm:rounded-b-none in-[[data-slot=sheet-popup][data-variant=inset]]:sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Sheet = Object.assign(SheetRoot, {
	Root: SheetRoot,
	Trigger: SheetTrigger,
	Portal: SheetPortal,
	Backdrop: SheetBackdrop,
	Viewport: SheetViewport,
	Popup: SheetPopup,
	Content: SheetContent,
	Header: SheetHeader,
	Panel: SheetPanel,
	Title: SheetTitle,
	Description: SheetDescription,
	Close: SheetClose,
	Footer: SheetFooter,
	createHandle,
});

export {
	SheetRoot,
	SheetTrigger,
	SheetPortal,
	SheetBackdrop,
	SheetViewport,
	SheetPopup,
	SheetContent,
	SheetHeader,
	SheetPanel,
	SheetTitle,
	SheetDescription,
	SheetClose,
	SheetFooter,
	sheetVariants,
	sheetViewportVariants,
	createHandle,
	type DialogHeaderProps as SheetHeaderProps,
	type DialogPanelProps as SheetPanelProps,
};
