"use client";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

const AlertDialog = AlertDialogPrimitive.Root;

/* -------------------------------------------------------------------------- */
/* Trigger                                                                    */
/* -------------------------------------------------------------------------- */

function AlertDialogTrigger(props: AlertDialogPrimitive.Trigger.Props) {
	const { className, ...rest } = props;

	return (
		<AlertDialogPrimitive.Trigger
			className={cn("cursor-pointer", className)}
			data-slot="alert-dialog-trigger"
			{...rest}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Portal                                                                     */
/* -------------------------------------------------------------------------- */

const AlertDialogPortal: typeof AlertDialogPrimitive.Portal =
	AlertDialogPrimitive.Portal;

/* -------------------------------------------------------------------------- */
/* Backdrop                                                                   */
/* -------------------------------------------------------------------------- */

function AlertDialogBackdrop(props: AlertDialogPrimitive.Backdrop.Props) {
	const { className, ...rest } = props;

	return (
		<AlertDialogPrimitive.Backdrop
			className={cn(
				"fixed inset-0 z-50 bg-muted/50 backdrop-blur-sm transition-opacity duration-200 ease-out",
				"data-ending-style:opacity-0 data-starting-style:opacity-0",
				className,
			)}
			data-slot="alert-dialog-backdrop"
			{...rest}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Viewport                                                                   */
/* -------------------------------------------------------------------------- */

function AlertDialogViewport(props: AlertDialogPrimitive.Viewport.Props) {
	const { className, ...rest } = props;

	return (
		<AlertDialogPrimitive.Viewport
			className={cn(
				"p-4 fixed inset-0 z-50 flex items-center justify-center",
				className,
			)}
			data-slot="alert-dialog-viewport"
			{...rest}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Popup / Content                                                            */
/* -------------------------------------------------------------------------- */

function AlertDialogPopup(props: AlertDialogPrimitive.Popup.Props) {
	const { className, ...rest } = props;

	return (
		<AlertDialogPortal>
			<AlertDialogBackdrop />
			<AlertDialogViewport>
				<AlertDialogPrimitive.Popup
					className={cn(
						"w-full max-w-lg p-6 rounded-lg border border-border bg-background shadow-sm",
						"transition-all duration-200 ease-out",
						"data-starting-style:opacity-0 data-starting-style:scale-95",
						"data-ending-style:opacity-0 data-ending-style:scale-95",
						"focus:outline-none",
						className,
					)}
					data-slot="alert-dialog-popup"
					{...rest}
				/>
			</AlertDialogViewport>
		</AlertDialogPortal>
	);
}

/* -------------------------------------------------------------------------- */
/* Layout Helpers                                                             */
/* -------------------------------------------------------------------------- */

function AlertDialogHeader(props: React.HTMLAttributes<HTMLDivElement>) {
	const { className, ...rest } = props;

	return (
		<div
			className={cn("flex flex-col gap-2", className)}
			data-slot="alert-dialog-header"
			{...rest}
		/>
	);
}

function AlertDialogFooter(props: React.HTMLAttributes<HTMLDivElement>) {
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
/* Title                                                                      */
/* -------------------------------------------------------------------------- */

function AlertDialogTitle(props: AlertDialogPrimitive.Title.Props) {
	const { className, ...rest } = props;

	return (
		<AlertDialogPrimitive.Title
			className={cn(
				"text-lg font-semibold leading-none text-foreground",
				className,
			)}
			data-slot="alert-dialog-title"
			{...rest}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Description                                                                */
/* -------------------------------------------------------------------------- */

function AlertDialogDescription(props: AlertDialogPrimitive.Description.Props) {
	const { className, ...rest } = props;

	return (
		<AlertDialogPrimitive.Description
			className={cn("text-sm text-muted-foreground", className)}
			data-slot="alert-dialog-description"
			{...rest}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Close                                                                      */
/* -------------------------------------------------------------------------- */

function AlertDialogClose(props: AlertDialogPrimitive.Close.Props) {
	const { className, ...rest } = props;

	return (
		<AlertDialogPrimitive.Close
			className={cn(className)}
			data-slot="alert-dialog-close"
			{...rest}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogPortal,
	AlertDialogBackdrop,
	AlertDialogViewport,
	AlertDialogPopup,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogClose,
};
