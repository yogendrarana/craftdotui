"use client";

import { cn } from "cn";
import type * as React from "react";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";

import { dialogFooterVariants, type DialogFooterVariants } from "../dialog";

/* -------------------------------------------------------------------------- */
/* Alert Dialog Handle                                                        */
/* -------------------------------------------------------------------------- */

const createHandle = AlertDialogPrimitive.createHandle;

/* -------------------------------------------------------------------------- */
/* Alert Dialog Root                                                          */
/* -------------------------------------------------------------------------- */

const AlertDialogRoot = AlertDialogPrimitive.Root;

/* -------------------------------------------------------------------------- */
/* Alert Dialog Trigger                                                       */
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
/* Alert Dialog Portal                                                        */
/* -------------------------------------------------------------------------- */

const AlertDialogPortal = AlertDialogPrimitive.Portal;

/* -------------------------------------------------------------------------- */
/* Alert Dialog Backdrop                                                      */
/* -------------------------------------------------------------------------- */

function AlertDialogBackdrop(
	props: AlertDialogPrimitive.Backdrop.Props,
): React.ReactElement {
	const { className, ...rest } = props;

	return (
		<AlertDialogPrimitive.Backdrop
			data-slot="alert-dialog-backdrop"
			className={cn(
				"fixed inset-0 z-50",
				"bg-backdrop backdrop-blur-xs",
				"transition-opacity duration-200 ease-out",
				"data-starting-style:opacity-0",
				"data-ending-style:opacity-0",
				"supports-[-webkit-touch-callout:none]:absolute",
				className,
			)}
			{...rest}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Alert Dialog Viewport                                                      */
/* -------------------------------------------------------------------------- */

function AlertDialogViewport(props: AlertDialogPrimitive.Viewport.Props) {
	const { className, ...rest } = props;

	return (
		<AlertDialogPrimitive.Viewport
			className={cn(
				"fixed inset-0 p-4 z-50 flex items-center justify-center overflow-hidden",
				className,
			)}
			data-slot="alert-dialog-viewport"
			{...rest}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Alert Dialog Popup                                                         */
/* -------------------------------------------------------------------------- */

function AlertDialogPopup({
	className,
	...props
}: AlertDialogPrimitive.Popup.Props) {
	return (
		<AlertDialogPrimitive.Popup
			className={cn(
				"relative flex flex-col min-h-0",
				"w-full max-w-lg rounded-xl border border-border bg-background shadow-lg",
				"transition-all duration-200 ease-out",
				"scale-[calc(1-0.08*var(--nested-dialogs,0))] translate-y-[calc(-1rem*var(--nested-dialogs,0))]",
				"after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-black/10 dark:after:bg-black/40 after:opacity-0 after:transition-opacity after:duration-200 after:ease-out data-nested-dialog-open:after:opacity-100",
				"data-starting-style:opacity-0 data-starting-style:scale-95",
				"data-ending-style:opacity-0 data-ending-style:scale-95",
				"focus:outline-none",
				className,
			)}
			data-slot="alert-dialog-popup"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Alert Dialog Title                                                         */
/* -------------------------------------------------------------------------- */

function AlertDialogTitle(props: AlertDialogPrimitive.Title.Props) {
	const { className, ...rest } = props;

	return (
		<AlertDialogPrimitive.Title
			className={cn(
				"text-base font-semibold leading-none text-foreground",
				className,
			)}
			data-slot="alert-dialog-title"
			{...rest}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Alert Dialog Description                                                   */
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
/* Alert Dialog Close                                                         */
/* -------------------------------------------------------------------------- */

function AlertDialogClose(props: AlertDialogPrimitive.Close.Props) {
	const { className, ...rest } = props;

	return (
		<AlertDialogPrimitive.Close
			className={cn("cursor-pointer", className)}
			data-slot="alert-dialog-close"
			{...rest}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Alert Dialog Header (Custom Primitive)                                     */
/* -------------------------------------------------------------------------- */

interface AlertDialogHeaderProps extends useRender.ComponentProps<"div"> {}

function AlertDialogHeader({
	className,
	render,
	...props
}: AlertDialogHeaderProps): React.ReactElement {
	const defaultProps = {
		className: cn(
			"flex flex-col gap-1.5 p-6 pb-2 shrink-0 in-[[data-slot=alert-dialog-popup]:not(:has([data-slot=alert-dialog-panel]))]:pb-4",
			className,
		),
		"data-slot": "alert-dialog-header",
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Alert Dialog Content (Composite Component)                                 */
/* -------------------------------------------------------------------------- */

interface AlertDialogContentProps extends AlertDialogPrimitive.Popup.Props {
	portalProps?: AlertDialogPrimitive.Portal.Props;
	backdropProps?: AlertDialogPrimitive.Backdrop.Props;
	viewportProps?: AlertDialogPrimitive.Viewport.Props;
}

function AlertDialogContent({
	className,
	children,
	portalProps,
	backdropProps,
	viewportProps,
	...props
}: AlertDialogContentProps): React.ReactElement {
	return (
		<AlertDialogPortal {...portalProps}>
			<AlertDialogBackdrop {...backdropProps} />
			<AlertDialogViewport {...viewportProps}>
				<AlertDialogPopup
					className={cn("max-h-full", className)}
					{...props}
				>
					{children}
				</AlertDialogPopup>
			</AlertDialogViewport>
		</AlertDialogPortal>
	);
}

/* -------------------------------------------------------------------------- */
/* Alert Dialog Panel (Custom Primitive)                                      */
/* -------------------------------------------------------------------------- */

interface AlertDialogPanelProps extends useRender.ComponentProps<"div"> {}

function AlertDialogPanel({
	className,
	render,
	children,
	...props
}: AlertDialogPanelProps): React.ReactElement {
	const defaultProps = {
		className: cn("flex flex-col gap-3 px-6 py-4", className),
		"data-slot": "alert-dialog-panel",
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, {
			children,
			...props,
		}),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Alert Dialog Footer (Custom Primitive)                                     */
/* -------------------------------------------------------------------------- */

const alertDialogFooterVariants = dialogFooterVariants;

type AlertDialogFooterVariants = DialogFooterVariants;

interface AlertDialogFooterProps
	extends useRender.ComponentProps<"div">,
		AlertDialogFooterVariants {}

function AlertDialogFooter({
	className,
	variant,
	render,
	...props
}: AlertDialogFooterProps): React.ReactElement {
	const defaultProps = {
		className: cn(alertDialogFooterVariants({ variant }), className),
		"data-slot": "alert-dialog-footer",
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const AlertDialog = {
	Root: AlertDialogRoot,
	Trigger: AlertDialogTrigger,
	Portal: AlertDialogPortal,
	Backdrop: AlertDialogBackdrop,
	Viewport: AlertDialogViewport,
	Popup: AlertDialogPopup,
	Content: AlertDialogContent,
	Header: AlertDialogHeader,
	Panel: AlertDialogPanel,
	Title: AlertDialogTitle,
	Description: AlertDialogDescription,
	Close: AlertDialogClose,
	Footer: AlertDialogFooter,
	createHandle,
};

export {
	AlertDialogRoot,
	AlertDialogTrigger,
	AlertDialogPortal,
	AlertDialogBackdrop,
	AlertDialogViewport,
	AlertDialogPopup,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogPanel,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogClose,
	AlertDialogFooter,
	alertDialogFooterVariants,
	type AlertDialogFooterVariants,
	type AlertDialogContentProps,
	type AlertDialogHeaderProps,
	type AlertDialogPanelProps,
	type AlertDialogFooterProps,
	createHandle,
};
