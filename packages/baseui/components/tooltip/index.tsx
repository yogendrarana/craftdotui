"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Tooltip Provider                                                           */
/* -------------------------------------------------------------------------- */

const TooltipProvider = TooltipPrimitive.Provider;

/* -------------------------------------------------------------------------- */
/* Tooltip Root                                                               */
/* -------------------------------------------------------------------------- */

function Tooltip(props: TooltipPrimitive.Root.Props) {
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

interface TooltipViewportProps extends TooltipPrimitive.Viewport.Props {
	className?: string;
}

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
				"px-(--viewport-inline-padding) py-1 [--viewport-inline-padding:--spacing(2)]",
				"[&_[data-previous]]:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))]",
				"[&_[data-previous]]:translate-x-0",
				"[&_[data-previous]]:opacity-100",
				"[&_[data-previous]]:transition-[translate,opacity]",
				"[&_[data-previous]]:duration-[350ms,175ms]",
				"[&_[data-previous]]:ease-[cubic-bezier(0.22,1,0.36,1)]",
				"[&_[data-current]]:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))]",
				"[&_[data-current]]:translate-x-0",
				"[&_[data-current]]:opacity-100",
				"[&_[data-current]]:transition-[translate,opacity]",
				"[&_[data-current]]:duration-[350ms,175ms]",
				"[&_[data-current]]:ease-[cubic-bezier(0.22,1,0.36,1)]",
				"data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:-translate-x-1/2",
				"data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:opacity-0",
				"data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:translate-x-1/2",
				"data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:opacity-0",
				"[[data-instant]_&_[data-previous]]:transition-none",
				"[[data-instant]_&_[data-current]]:transition-none",
				"data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:translate-x-1/2",
				"data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:opacity-0",
				"data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:-translate-x-1/2",
				"data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:opacity-0",

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

interface TooltipPopupProps extends TooltipPrimitive.Popup.Props {
	className?: string;
	hideTooltipArrow?: boolean;
}

function TooltipPopup({
	className,
	children,
	hideTooltipArrow = false,
	...props
}: TooltipPopupProps) {
	return (
		<TooltipPrimitive.Popup
			data-slot="tooltip-popup"
			className={cn(
				"h-(--popup-height,auto) w-(--popup-width,auto)",
				"relative flex rounded-md border bg-popover text-popover-foreground text-xs",
				// animations
				"origin-(--transform-origin)",
				"transition-[width,height,scale,opacity]",
				"data-starting-style:scale-98 data-ending-style:scale-98",
				"data-starting-style:opacity-0 data-ending-style:opacity-0",
				"data-instant:duration-0",
				className,
			)}
			{...props}
		>
			{!hideTooltipArrow && <TooltipArrow />}
			<TooltipViewport>{children}</TooltipViewport>
		</TooltipPrimitive.Popup>
	);
}

/* -------------------------------------------------------------------------- */
/* Tooltip Arrow                                                              */
/* -------------------------------------------------------------------------- */

interface TooltipArrowProps extends TooltipPrimitive.Arrow.Props {
	className?: string;
}

function TooltipArrow({ className, ...props }: TooltipArrowProps) {
	return (
		<TooltipPrimitive.Arrow
			className={cn(
				"flex bg-background",
				"data-[side=top]:-bottom-2 data-[side=top]:rotate-180",
				"data-[side=left]:right-[-11px] data-[side=left]:rotate-90",
				"data-[side=bottom]:-top-2 data-[side=bottom]:rotate-0",
				"data-[side=right]:left-[-11px] data-[side=right]:-rotate-90",
				className,
			)}
			{...props}
		>
			<svg width="12" height="6" viewBox="0 0 12 6">
				<title>Tooltip Arrow</title>
				<path d="M0 6L6 0L12 6Z" className="fill-background" />
				<path d="M0 6L6 0L12 6Z" className="fill-none stroke-border" />
			</svg>
		</TooltipPrimitive.Arrow>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	Tooltip,
	TooltipTrigger,
	TooltipPopup,
	TooltipProvider,
	TooltipPortal,
	TooltipPositioner,
	TooltipPrimitive,
	TooltipArrow,
};
