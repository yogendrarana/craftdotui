"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { cn } from "cn";
import { ARROW_STYLES, BaseArrow } from "@craftdotui/baseui/components/arrow";

/* -------------------------------------------------------------------------- */
/* Tooltip Provider                                                           */
/* -------------------------------------------------------------------------- */

const TooltipProvider = TooltipPrimitive.Provider;

/* -------------------------------------------------------------------------- */
/* Tooltip Root                                                               */
/* -------------------------------------------------------------------------- */

function TooltipRoot(props: TooltipPrimitive.Root.Props) {
	return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Tooltip Trigger                                                            */
/* -------------------------------------------------------------------------- */

function TooltipTrigger(props: TooltipPrimitive.Trigger.Props) {
	return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Tooltip Portal                                                             */
/* -------------------------------------------------------------------------- */

function TooltipPortal(props: TooltipPrimitive.Portal.Props) {
	return <TooltipPrimitive.Portal data-slot="tooltip-portal" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Tooltip Positioner                                                         */
/* -------------------------------------------------------------------------- */

function TooltipPositioner(props: TooltipPrimitive.Positioner.Props) {
	return (
		<TooltipPrimitive.Positioner
			data-slot="tooltip-positioner"
			className={cn(
				"z-50",
				"h-(--positioner-height) w-(--positioner-width)",
				"max-w-(--available-width)",
				"transition-[top,left,right,bottom,transform]",
				"data-instant:transition-none",
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Tooltip Viewport                                                           */
/* -------------------------------------------------------------------------- */

type TooltipViewportProps = TooltipPrimitive.Viewport.Props;

function TooltipViewport({
	className,
	children,
	...props
}: TooltipViewportProps) {
	return (
		<TooltipPrimitive.Viewport
			data-slot="tooltip-viewport"
			className={cn(
				"relative h-full w-full overflow-clip",
				"px-(--viewport-inline-padding) py-1",
				"[--viewport-inline-padding:--spacing(2)]",

				/* previous */
				"**:data-previous:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))]",
				"**:data-previous:translate-x-0",
				"**:data-previous:opacity-100",
				"**:data-previous:transition-[translate,opacity]",
				"**:data-previous:duration-[350ms,175ms]",
				"**:data-previous:ease-[cubic-bezier(0.22,1,0.36,1)]",

				/* current */
				"**:data-current:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))]",
				"**:data-current:translate-x-0",
				"**:data-current:opacity-100",
				"**:data-current:transition-[translate,opacity]",
				"**:data-current:duration-[350ms,175ms]",
				"**:data-current:ease-[cubic-bezier(0.22,1,0.36,1)]",

				/* directional animations */
				"data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:-translate-x-1/2",
				"data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:opacity-0",
				"data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:translate-x-1/2",
				"data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:opacity-0",

				"data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:translate-x-1/2",
				"data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:opacity-0",
				"data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:-translate-x-1/2",
				"data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:opacity-0",

				/* instant */
				"[[data-instant]_&_[data-previous]]:transition-none",
				"[[data-instant]_&_[data-current]]:transition-none",

				className,
			)}
			{...props}
		>
			{children}
		</TooltipPrimitive.Viewport>
	);
}

/* -------------------------------------------------------------------------- */
/* Tooltip Popup                                                              */
/* -------------------------------------------------------------------------- */

function TooltipPopup({ className, ...props }: TooltipPrimitive.Popup.Props) {
	return (
		<TooltipPrimitive.Popup
			data-slot="tooltip-popup"
			className={cn(
				"h-(--popup-height,auto) w-(--popup-width,auto)",
				"relative flex rounded-md border border-border",
				"bg-popover text-popover-foreground text-xs",

				/* animations */
				"origin-(--transform-origin)",
				"transition-[width,height,scale,opacity]",
				"data-starting-style:scale-98 data-ending-style:scale-98",
				"data-starting-style:opacity-0 data-ending-style:opacity-0",
				"data-instant:duration-0",

				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Tooltip Arrow                                                              */
/* -------------------------------------------------------------------------- */

type TooltipArrowProps = TooltipPrimitive.Arrow.Props;

function TooltipArrow({ className, ...props }: TooltipArrowProps) {
	return (
		<TooltipPrimitive.Arrow
			data-slot="tooltip-arrow"
			className={cn(ARROW_STYLES, className)}
			{...props}
		>
			<BaseArrow title="Tooltip Arrow" className="fill-background" />
		</TooltipPrimitive.Arrow>
	);
}

/* -------------------------------------------------------------------------- */
/* Tooltip Content (Composite Component)                                      */
/* -------------------------------------------------------------------------- */

type TooltipPositionerProps = TooltipPrimitive.Positioner.Props;

interface TooltipContentProps extends TooltipPrimitive.Popup.Props {
	hasArrow?: boolean;
	portalProps?: TooltipPrimitive.Portal.Props;
	positionerProps?: TooltipPositionerProps;
	popupProps?: TooltipPrimitive.Popup.Props;
	arrowProps?: TooltipPrimitive.Arrow.Props;
	viewportProps?: TooltipPrimitive.Viewport.Props;
}

function TooltipContent({
	className,
	children,
	hasArrow = true,
	portalProps,
	positionerProps = { sideOffset: 10 },
	popupProps,
	arrowProps,
	viewportProps,
	...props
}: TooltipContentProps) {
	return (
		<TooltipPortal {...portalProps}>
			<TooltipPositioner {...positionerProps}>
				<TooltipPopup className={className} {...props} {...popupProps}>
					{hasArrow && <TooltipArrow {...arrowProps} />}
					<TooltipViewport {...viewportProps}>
						{children}
					</TooltipViewport>
				</TooltipPopup>
			</TooltipPositioner>
		</TooltipPortal>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

const createHandle = TooltipPrimitive.createHandle;

export const Tooltip = {
	Root: TooltipRoot,
	Trigger: TooltipTrigger,
	Content: TooltipContent,
	Popup: TooltipPopup,
	Provider: TooltipProvider,
	Portal: TooltipPortal,
	Positioner: TooltipPositioner,
	Viewport: TooltipViewport,
	Arrow: TooltipArrow,
	createHandle,
};

export {
	TooltipRoot,
	TooltipTrigger,
	TooltipContent,
	TooltipPopup,
	TooltipProvider,
	TooltipPortal,
	TooltipPositioner,
	TooltipViewport,
	TooltipArrow,
	createHandle,
};

export type {
	TooltipContentProps,
	TooltipPositionerProps,
	TooltipArrowProps,
	TooltipViewportProps,
};
