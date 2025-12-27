"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Dialog Root                                                                */
/* -------------------------------------------------------------------------- */

const Dialog = DialogPrimitive.Root;

/* -------------------------------------------------------------------------- */
/* Dialog Trigger                                                             */
/* -------------------------------------------------------------------------- */

function DialogTrigger({ className, ...props }: DialogPrimitive.Trigger.Props) {
	return (
		<DialogPrimitive.Trigger
			className={cn(className)}
			data-slot="dialog-trigger"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Dialog Portal                                                              */
/* -------------------------------------------------------------------------- */

const DialogPortal = DialogPrimitive.Portal;

/* -------------------------------------------------------------------------- */
/* Dialog Backdrop                                                            */
/* -------------------------------------------------------------------------- */

function DialogBackdrop({
	className,
	...props
}: DialogPrimitive.Backdrop.Props) {
	return (
		<DialogPrimitive.Backdrop
			className={cn(
				"fixed inset-0 z-50 bg-muted/50 backdrop-blur-sm transition-opacity duration-200 ease-out",
				"data-ending-style:opacity-0 data-starting-style:opacity-0",
				className,
			)}
			data-slot="dialog-backdrop"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Dialog Viewport                                                            */
/* -------------------------------------------------------------------------- */

function DialogViewport({
	className,
	...props
}: DialogPrimitive.Viewport.Props) {
	return (
		<DialogPrimitive.Viewport
			className={cn(
				"fixed inset-0 p-4 z-50 flex items-center justify-center",
				className,
			)}
			data-slot="dialog-viewport"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Dialog Popup                                                               */
/* -------------------------------------------------------------------------- */

function DialogPopup({ className, ...props }: DialogPrimitive.Popup.Props) {
	return (
		<DialogPrimitive.Popup
			className={cn(
				"relative",
				"w-full max-w-lg p-6 rounded-lg border border-border bg-background shadow-sm",
				"transition-all duration-200 ease-out",
				"data-starting-style:opacity-0 data-starting-style:scale-95 data-ending-style:opacity-0 data-ending-style:scale-95",
				className,
			)}
			data-slot="dialog-popup"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Dialog Title                                                               */
/* -------------------------------------------------------------------------- */

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
	return (
		<DialogPrimitive.Title
			className={cn(
				"text-lg font-semibold leading-none text-foreground",
				className,
			)}
			data-slot="dialog-title"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Dialog Description                                                         */
/* -------------------------------------------------------------------------- */

function DialogDescription({
	className,
	...props
}: DialogPrimitive.Description.Props) {
	return (
		<DialogPrimitive.Description
			className={cn("mt-2 text-sm text-muted-foreground", className)}
			data-slot="dialog-description"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Dialog Close                                                               */
/* -------------------------------------------------------------------------- */

function DialogClose({ className, ...props }: DialogPrimitive.Close.Props) {
	return (
		<DialogPrimitive.Close
			className={cn("cursor-pointer", className)}
			data-slot="dialog-close"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Dialog Footer                                                              */
/* -------------------------------------------------------------------------- */
function DialogFooter(props: React.HTMLAttributes<HTMLDivElement>) {
	const { className, ...rest } = props;

	return (
		<div
			className={cn(
				"mt-6 flex flex-col-reverse gap-1 sm:flex-row sm:justify-end",
				className,
			)}
			data-slot="alert-dialog-footer"
			{...rest}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export {
	Dialog,
	DialogTrigger,
	DialogPortal,
	DialogBackdrop,
	DialogViewport,
	DialogPopup,
	DialogTitle,
	DialogDescription,
	DialogClose,
	DialogFooter,
};
