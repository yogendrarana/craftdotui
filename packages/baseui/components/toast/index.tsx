"use client";

import {
	CircleAlertIcon,
	CircleCheckIcon,
	InfoIcon,
	Loader,
	TriangleAlertIcon,
	X,
} from "lucide-react";
import { Toast as ToastPrimitive } from "@base-ui/react/toast";

import { cn } from "@craftdotui/lib/utils";
import { buttonVariants } from "@craftdotui/baseui/components/button";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type ToastPosition =
	| "top-left"
	| "top-center"
	| "top-right"
	| "bottom-left"
	| "bottom-center"
	| "bottom-right";

export type ToastType =
	| "default"
	| "success"
	| "info"
	| "warning"
	| "error"
	| "loading";

export type ToastSwipeDirection = "up" | "down" | "left" | "right";

/* -------------------------------------------------------------------------- */
/* Toast Manager                                                              */
/* -------------------------------------------------------------------------- */

const toastManager = ToastPrimitive.createToastManager();
const anchoredToastManager = ToastPrimitive.createToastManager();

/* -------------------------------------------------------------------------- */
/* Toast Portal                                                               */
/* -------------------------------------------------------------------------- */

function ToastPortal(props: ToastPrimitive.Portal.Props) {
	return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Toast Viewport                                                             */
/* -------------------------------------------------------------------------- */

interface ToastViewportProps extends ToastPrimitive.Viewport.Props {
	position?: ToastPosition;
}

function ToastViewport({
	className,
	position = "bottom-right",
	...props
}: ToastViewportProps) {
	return (
		<ToastPrimitive.Viewport
			data-slot="toast-viewport"
			data-position={position}
			className={cn(
				"[--toast-inset:--spacing(4)] sm:[--toast-inset:--spacing(8)]",
				"fixed z-50 w-[calc(100%-var(--toast-inset)*2)] max-w-90 flex mx-auto",

				// vertical positioning
				"data-[position*=top]:top-(--toast-inset)",
				"data-[position*=bottom]:bottom-(--toast-inset)",

				// horizontal positioning
				"data-[position*=left]:left-(--toast-inset)",
				"data-[position*=right]:right-(--toast-inset)",

				// centering
				"data-[position*=center]:-translate-x-1/2 data-[position*=center]:left-1/2",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Toast Content                                                              */
/* -------------------------------------------------------------------------- */

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
	return (
		<ToastPrimitive.Content
			data-slot="toast-content"
			className={cn(
				"px-3.5 py-3",
				"flex items-center justify-between gap-1.5 pointer-events-auto overflow-hidden text-sm transition-opacity duration-250",
				"data-behind:not-data-expanded:pointer-events-none data-behind:opacity-0",
				"data-expanded:opacity-100",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Toast Title                                                                */
/* -------------------------------------------------------------------------- */

function ToastTitle({ className, ...props }: ToastPrimitive.Title.Props) {
	return (
		<ToastPrimitive.Title
			data-slot="toast-title"
			className={cn("font-medium", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Toast Description                                                          */
/* -------------------------------------------------------------------------- */

function ToastDescription({
	className,
	...props
}: ToastPrimitive.Description.Props) {
	return (
		<ToastPrimitive.Description
			data-slot="toast-description"
			className={cn("text-muted-foreground", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Toast Action                                                               */
/* -------------------------------------------------------------------------- */

function ToastAction({ className, ...props }: ToastPrimitive.Action.Props) {
	return (
		<ToastPrimitive.Action
			data-slot="toast-action"
			className={cn(buttonVariants({ size: "sm" }), className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Toast Close                                                                */
/* -------------------------------------------------------------------------- */

function ToastClose({
	className,
	children,
	...props
}: ToastPrimitive.Close.Props) {
	return (
		<ToastPrimitive.Close
			data-slot="toast-close"
			className={cn(
				"absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity",
				"hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100",
				className,
			)}
			{...props}
		>
			{children || <X className="size-4" />}
		</ToastPrimitive.Close>
	);
}

/* -------------------------------------------------------------------------- */
/* Toast Icon                                                                 */
/* -------------------------------------------------------------------------- */

interface ToastIconProps extends React.ComponentProps<"div"> {
	toast: ToastPrimitive.Root.ToastObject;
}

const TOAST_ICONS = {
	error: CircleAlertIcon,
	info: InfoIcon,
	loading: Loader,
	success: CircleCheckIcon,
	warning: TriangleAlertIcon,
} as const;

function ToastIcon({ toast, className, ...props }: ToastIconProps) {
	const Icon = toast.type
		? TOAST_ICONS[toast.type as keyof typeof TOAST_ICONS]
		: null;

	if (!Icon) return null;

	return (
		<div
			className={cn(
				"[&>svg]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			data-slot="toast-icon"
			{...props}
		>
			<Icon
				className={cn(
					"in-data-[type=loading]:animate-spin",
					"in-data-[type=error]:text-destructive",
					"in-data-[type=info]:text-info",
					"in-data-[type=success]:text-success ",
					"in-data-[type=warning]:text-warning",
					"in-data-[type=loading]:opacity-80",
				)}
			/>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Stacked Toast Provider                                                     */
/* -------------------------------------------------------------------------- */

function ToastProvider({
	children,
	position = "bottom-right",
	...props
}: ToastPrimitive.Provider.Props & { position?: ToastPosition }) {
	return (
		<ToastPrimitive.Provider {...props} toastManager={toastManager}>
			{children}
			<Toasts position={position} />
		</ToastPrimitive.Provider>
	);
}

function Toasts({ position }: { position: ToastPosition }) {
	const { toasts } = ToastPrimitive.useToastManager();

	return (
		<ToastPortal>
			<ToastViewport key={position} position={position as ToastPosition}>
				{toasts.map((toast) => (
					<ToastRoot
						key={toast.id}
						toast={toast}
						position={position as ToastPosition}
					>
						<ToastContent>
							<div className="flex gap-2">
								<ToastIcon toast={toast} />
								<div className="flex flex-col gap-0.5">
									<ToastTitle />
									<ToastDescription />
								</div>
							</div>
							{toast.actionProps && (
								<ToastAction>
									{toast.actionProps.children}
								</ToastAction>
							)}
						</ToastContent>
						<ToastClose />
					</ToastRoot>
				))}
			</ToastViewport>
		</ToastPortal>
	);
}

/* -------------------------------------------------------------------------- */
/* Toast Root                                                                 */
/* -------------------------------------------------------------------------- */

interface ToastRootProps extends ToastPrimitive.Root.Props {
	position?: ToastPosition;
}

const defaultSwipeMap: Record<
	ToastPosition,
	ToastPrimitive.Root.Props["swipeDirection"]
> = {
	"top-center": ["up", "right", "left"],
	"top-right": ["up", "right"],
	"top-left": ["up", "left"],
	"bottom-center": ["down", "right", "left"],
	"bottom-left": ["down", "left"],
	"bottom-right": ["right", "down"],
};

function getDefaultSwipeDirection(
	position: ToastPosition,
	swipeDirection?: ToastPrimitive.Root.Props["swipeDirection"],
) {
	return swipeDirection ?? defaultSwipeMap[position];
}

function ToastRoot({
	className,
	position = "bottom-right",
	...props
}: ToastRootProps) {
	return (
		<ToastPrimitive.Root
			data-slot="toast-root"
			data-position={position}
			swipeDirection={getDefaultSwipeDirection(
				position,
				props.swipeDirection,
			)}
			className={cn(
				// base styles for root
				"absolute",
				"h-(--toast-calc-height) w-full min-w-[200px] border select-none bg-clip-padding bg-popover text-popover-foreground rounded-lg",

				// stacking animations and zindex
				"z-[calc(1000-var(--toast-index))]",
				"[transition:transform_.5s_cubic-bezier(.22,1,.36,1),opacity_.25s,height_.25s]",
				"data-limited:opacity-0",

				// positioning depending on the viewport slot
				"data-[position=top-left]:top-4 data-[position=top-left]:left-4",
				"data-[position=top-center]:top-4 data-[position=top-center]:left-1/2 data-[position=top-center]:-translate-x-1/2",
				"data-[position=top-right]:top-4 data-[position=top-right]:right-4",
				"data-[position=bottom-left]:bottom-4 data-[position=bottom-left]:left-4",
				"data-[position=bottom-center]:bottom-4 data-[position=bottom-center]:left-1/2 data-[position=bottom-center]:-translate-x-1/2",
				"data-[position=bottom-right]:bottom-4 data-[position=bottom-right]:right-4",

				// css variables used for stack offset, scaling, and peek
				"[--toast-calc-height:var(--toast-frontmost-height,var(--toast-height))]",
				"[--toast-gap:--spacing(2)]",
				"[--toast-peek:--spacing(2)]",
				"[--toast-scale:calc(max(0,1-(var(--toast-index)*.05)))]",
				"[--toast-shrink:calc(1-var(--toast-scale))]",
				// offset for expanded stack (used in data-expanded transform)
				"data-[position*=top]:[--toast-calc-offset-y:calc(var(--toast-offset-y)+var(--toast-index)*var(--toast-gap)+var(--toast-swipe-movement-y))]",
				"data-[position*=bottom]:[--toast-calc-offset-y:calc(var(--toast-offset-y)*-1+var(--toast-index)*var(--toast-gap)*-1+var(--toast-swipe-movement-y))]",

				// base transform for stacked toasts
				// stack + scale + swipe
				"data-[position*=top]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--toast-peek))+(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]",
				"data-[position*=bottom]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--toast-peek))-(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]",
				// expanded state
				"data-expanded:h-(--toast-height)",
				"data-position:data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(var(--toast-calc-offset-y))]",

				// starting animations (slide in)
				"data-[position*=top]:data-starting-style:transform-[translateY(calc(-100%-var(--toast-inset)))]",
				"data-[position*=bottom]:data-starting-style:transform-[translateY(calc(100%+var(--toast-inset)))]",

				// ending animations (slide out + fade)
				"data-ending-style:opacity-0",
				// default ending when no swipe
				"data-ending-style:not-data-limited:not-data-swipe-direction:transform-[translateY(calc(100%+var(--toast-inset)))]",
				// swipe-based ending
				"data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]",
				"data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]",
				"data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-100%-var(--toast-inset)))]",
				"data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+100%+var(--toast-inset)))]",
				// expanded + swipe ending
				"data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]",
				"data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]",
				"data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-100%-var(--toast-inset)))]",
				"data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+100%+var(--toast-inset)))]",

				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Anchored Toast Provider                                                    */
/* -------------------------------------------------------------------------- */

function AnchoredToastProvider({
	children,
	...props
}: ToastPrimitive.Provider.Props) {
	return (
		<ToastPrimitive.Provider {...props} toastManager={anchoredToastManager}>
			{children}
			<AnchoredToasts position="bottom-right" />
		</ToastPrimitive.Provider>
	);
}

function AnchoredToasts({ position }: { position: ToastPosition }) {
	const { toasts } = ToastPrimitive.useToastManager();

	return (
		<ToastPortal>
			<ToastViewport position={position}>
				{toasts.map((toast) => {
					const anchor = toast.positionerProps?.anchor;
					if (!anchor) return null;

					const showAsTooltip = toast.data?.showAsTooltip ?? false;

					return (
						<ToastPositioner key={toast.id} toast={toast}>
							<ToastArrow />

							<ToastPrimitive.Root
								toast={toast}
								className={cn(
									"data-starting-style:scale-98 data-starting-style:opacity-0",
									"data-ending-style:scale-98 data-ending-style:opacity-0 ",
									!showAsTooltip &&
										"border border-border rounded-md",
								)}
							>
								{showAsTooltip ? (
									<ToastTitle className="px-2 py-1 rounded-md border border-border bg-popover text-popover-foreground text-xs" />
								) : (
									<ToastContent>
										<div className="flex gap-2">
											<ToastIcon toast={toast} />
											<div className="flex flex-col gap-0.5">
												<ToastTitle />
												<ToastDescription />
											</div>
										</div>
										{toast.actionProps && (
											<ToastAction>
												{toast.actionProps.children}
											</ToastAction>
										)}
									</ToastContent>
								)}
								<ToastClose />
							</ToastPrimitive.Root>
						</ToastPositioner>
					);
				})}
			</ToastViewport>
		</ToastPortal>
	);
}

/* -------------------------------------------------------------------------- */
/* Toast Positioner                                                           */
/* -------------------------------------------------------------------------- */

function ToastPositioner({
	sideOffset = 10,
	className,
	...props
}: ToastPrimitive.Positioner.Props) {
	return (
		<ToastPrimitive.Positioner
			data-slot="toast-positioner"
			sideOffset={sideOffset}
			className={cn(
				"z-50 max-w-[min(--spacing(64),var(--available-width))]",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Toast Arrow                                                                */
/* -------------------------------------------------------------------------- */

function ToastArrow({ className, ...props }: ToastPrimitive.Arrow.Props) {
	return (
		<ToastPrimitive.Arrow
			data-slot="toast-arrow"
			className={cn(
				"flex bg-background",
				"data-[side=top]:-bottom-2 data-[side=top]:rotate-180",
				"data-[side=left]:-right-2.75 data-[side=left]:rotate-90",
				"data-[side=bottom]:-top-2 data-[side=bottom]:rotate-0",
				"data-[side=right]:-left-2.75 data-[side=right]:-rotate-90",
				className,
			)}
			{...props}
		>
			<svg width="12" height="6" viewBox="0 0 12 6">
				<title>Toast Arrow</title>
				<path d="M0 6L6 0L12 6Z" className="fill-background" />
				<path d="M0 6L6 0L12 6Z" className="fill-none stroke-border" />
			</svg>
		</ToastPrimitive.Arrow>
	);
}

export {
	ToastProvider,
	AnchoredToastProvider,
	toastManager,
	anchoredToastManager,
	ToastPrimitive,
};
