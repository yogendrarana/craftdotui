"use client";

import { cn } from "cn";
import { X } from "lucide-react";
import * as React from "react";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cva, type VariantProps } from "class-variance-authority";

import {
	ScrollAreaContent,
	ScrollAreaRoot,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
} from "../scroll-area";

/* -------------------------------------------------------------------------- */
/* Dialog Handle                                                              */
/* -------------------------------------------------------------------------- */

const createHandle = DialogPrimitive.createHandle;

/* -------------------------------------------------------------------------- */
/* Dialog Context                                                             */
/* -------------------------------------------------------------------------- */

interface DialogContextValue {
	scroll?: "inside" | "outside";
}

const DialogContext = React.createContext<DialogContextValue>({
	scroll: "inside",
});

function useDialogContext() {
	return React.useContext(DialogContext);
}

/* -------------------------------------------------------------------------- */
/* Dialog Root                                                                */
/* -------------------------------------------------------------------------- */

interface DialogRootProps extends DialogPrimitive.Root.Props {
	scroll?: "inside" | "outside";
}

function DialogRoot({
	scroll = "inside",
	children,
	...props
}: DialogRootProps): React.ReactElement {
	return (
		<DialogContext.Provider value={{ scroll }}>
			<DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
		</DialogContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Dialog Trigger                                                             */
/* -------------------------------------------------------------------------- */

function DialogTrigger({ className, ...props }: DialogPrimitive.Trigger.Props) {
	return (
		<DialogPrimitive.Trigger
			className={cn("cursor-pointer", className)}
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
}: DialogPrimitive.Backdrop.Props): React.ReactElement {
	return (
		<DialogPrimitive.Backdrop
			data-slot="dialog-backdrop"
			className={cn(
				"fixed inset-0 z-50",
				"bg-backdrop backdrop-blur-xs",
				"transition-opacity duration-200 ease-out",
				"data-starting-style:opacity-0",
				"data-ending-style:opacity-0",
				"supports-[-webkit-touch-callout:none]:absolute",
				className,
			)}
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
				"fixed inset-0 p-4 z-50 flex items-center justify-center overflow-hidden",
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
				"text-base font-semibold leading-none text-foreground",
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
			className={cn("text-sm text-muted-foreground", className)}
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
/* Dialog Header (Custom Primitive)                                           */
/* -------------------------------------------------------------------------- */

interface DialogHeaderProps extends useRender.ComponentProps<"div"> {}

function DialogHeader({
	className,
	render,
	...props
}: DialogHeaderProps): React.ReactElement {
	const defaultProps = {
		className: cn("flex flex-col gap-1.5 p-6 pb-2 shrink-0", className),
		"data-slot": "dialog-header",
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Dialog Content (Composite Component)                                       */
/* -------------------------------------------------------------------------- */

interface DialogContentProps extends DialogPrimitive.Popup.Props {
	portalProps?: DialogPrimitive.Portal.Props;
	backdropProps?: DialogPrimitive.Backdrop.Props;
	viewportProps?: DialogPrimitive.Viewport.Props;
	showCloseButton?: boolean;
}

function DialogContent({
	className,
	children,
	portalProps,
	backdropProps,
	viewportProps,
	showCloseButton = false,
	...props
}: DialogContentProps): React.ReactElement {
	const { scroll } = useDialogContext();

	if (scroll === "outside") {
		return (
			<DialogPortal {...portalProps}>
				<DialogBackdrop {...backdropProps} />
				<DialogViewport
					{...viewportProps}
					className={cn(
						"group/dialog fixed inset-0",
						viewportProps?.className,
					)}
				>
					<ScrollAreaRoot
						style={{ position: undefined }}
						className="h-full w-full p-0 overscroll-contain group-data-ending-style/dialog:pointer-events-none"
					>
						<ScrollAreaViewport className="h-full overscroll-contain group-data-ending-style/dialog:pointer-events-none">
							<ScrollAreaContent className="flex min-h-full items-center justify-center">
								<DialogPopup
									className={cn("my-16 mx-auto", className)}
									{...props}
								>
									{showCloseButton && (
										<DialogClose
											className="absolute right-4 top-4 rounded-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
											aria-label="Close"
										>
											<X className="size-4" />
										</DialogClose>
									)}

									{children}
								</DialogPopup>
							</ScrollAreaContent>
						</ScrollAreaViewport>
						<ScrollAreaScrollbar>
							<ScrollAreaThumb />
						</ScrollAreaScrollbar>
					</ScrollAreaRoot>
				</DialogViewport>
			</DialogPortal>
		);
	}

	return (
		<DialogPortal {...portalProps}>
			<DialogBackdrop {...backdropProps} />
			<DialogViewport {...viewportProps}>
				<DialogPopup className={cn("max-h-full", className)} {...props}>
					{showCloseButton && (
						<DialogClose
							className="absolute right-4 top-4 rounded-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
							aria-label="Close"
						>
							<X className="size-4" />
						</DialogClose>
					)}

					{children}
				</DialogPopup>
			</DialogViewport>
		</DialogPortal>
	);
}

/* -------------------------------------------------------------------------- */
/* Dialog Panel (Custom Primitive)                                            */
/* -------------------------------------------------------------------------- */

interface DialogPanelProps extends useRender.ComponentProps<"div"> {
	scrollable?: boolean;
}

function DialogPanel({
	className,
	render,
	children,
	scrollable,
	...props
}: DialogPanelProps): React.ReactElement {
	const context = useDialogContext();
	const isScrollable = scrollable ?? context.scroll !== "outside";

	const defaultProps = {
		className: cn("flex flex-col gap-3 px-6 py-4", className),
		"data-slot": "dialog-panel",
	};

	const element = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, {
			children,
			...props,
		}),
		render,
	});

	if (!isScrollable) {
		return element;
	}

	return (
		<ScrollAreaRoot className="relative flex flex-1 flex-col min-h-0 overflow-hidden w-full p-0">
			<ScrollAreaViewport className="flex-1 min-h-0 overflow-y-auto overscroll-contain outline-none">
				<ScrollAreaContent>{element}</ScrollAreaContent>
			</ScrollAreaViewport>
			<ScrollAreaScrollbar>
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>
		</ScrollAreaRoot>
	);
}

/* -------------------------------------------------------------------------- */
/* Dialog Footer (Custom Primitive)                                           */
/* -------------------------------------------------------------------------- */

const dialogFooterVariants = cva(
	"flex flex-col-reverse gap-2 px-6 shrink-0 sm:flex-row sm:justify-end sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
	{
		variants: {
			variant: {
				default: "border-t border-border bg-muted/50 py-4",
				bare: "in-[[data-slot=dialog-popup]:has([data-slot=dialog-panel])]:pt-3 pt-4 pb-6",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

type DialogFooterVariants = VariantProps<typeof dialogFooterVariants>;

interface DialogFooterProps
	extends useRender.ComponentProps<"div">,
		DialogFooterVariants {}

function DialogFooter({
	className,
	variant,
	render,
	...props
}: DialogFooterProps): React.ReactElement {
	const defaultProps = {
		className: cn(dialogFooterVariants({ variant }), className),
		"data-slot": "dialog-footer",
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

export const Dialog = {
	Root: DialogRoot,
	Trigger: DialogTrigger,
	Portal: DialogPortal,
	Backdrop: DialogBackdrop,
	Viewport: DialogViewport,
	Popup: DialogPopup,
	Header: DialogHeader,
	Title: DialogTitle,
	Description: DialogDescription,
	Close: DialogClose,
	Content: DialogContent,
	Panel: DialogPanel,
	Footer: DialogFooter,
	createHandle,
};

export {
	DialogRoot,
	DialogTrigger,
	DialogPortal,
	DialogBackdrop,
	DialogViewport,
	DialogPopup,
	DialogContent,
	DialogHeader,
	DialogPanel,
	DialogTitle,
	DialogDescription,
	DialogClose,
	DialogFooter,
	dialogFooterVariants,
	type DialogFooterVariants,
	type DialogContentProps,
	type DialogHeaderProps,
	type DialogPanelProps,
	type DialogFooterProps,
	createHandle,
};
