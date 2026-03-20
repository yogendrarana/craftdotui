"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { cn } from "@craftdotui/lib/utils";
import { ARROW_STYLES, BaseArrow } from "@craftdotui/baseui/components/arrow";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

const PopoverRoot = PopoverPrimitive.Root;

/* -------------------------------------------------------------------------- */
/* Trigger                                                                    */
/* -------------------------------------------------------------------------- */

function PopoverTrigger(props: PopoverPrimitive.Trigger.Props) {
	return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Portal                                                                     */
/* -------------------------------------------------------------------------- */

function PopoverPortal(props: PopoverPrimitive.Portal.Props) {
	return <PopoverPrimitive.Portal {...props} data-slot="popover-portal" />;
}

/* -------------------------------------------------------------------------- */
/* Backdrop                                                                    */
/* -------------------------------------------------------------------------- */

function PopoverBackdrop({
	className,
	...props
}: PopoverPrimitive.Backdrop.Props) {
	return (
		<PopoverPrimitive.Backdrop
			className={cn(
				"fixed inset-0 z-50",
				"bg-background/70",
				"data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0",
				className,
			)}
			data-slot="popover-backdrop"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Positioner                                                                 */
/* -------------------------------------------------------------------------- */

function PopoverPositioner({
	className,
	sideOffset = 8,
	...props
}: PopoverPrimitive.Positioner.Props) {
	return (
		<PopoverPrimitive.Positioner
			sideOffset={sideOffset}
			className={cn(
				"z-50",
				"h-(--positioner-height) w-(--positioner-width) max-w-(--available-width)",
				"transition-[top,left,right,bottom,transform] ease-[cubic-bezier(0.22,1,0.36,1)] duration-300",
				"data-instant:transition-none",
				className,
			)}
			data-slot="popover-positioner"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Popup                                                                      */
/* -------------------------------------------------------------------------- */

function PopoverPopup({ className, ...props }: PopoverPrimitive.Popup.Props) {
	return (
		<PopoverPrimitive.Popup
			className={cn(
				"relative",
				"h-(--popup-height, auto) w-(--popup-width, auto) p-4 space-y-2",
				"z-50 border border-border bg-popover text-popover-foreground rounded-md shadow-xs outline-none",
				"origin-(--transform-origin) transition-[height,width,transform,scale,opacity] ease-[cubic-bezier(0.22,1,0.36,1)] duration-300",
				"data-starting-style:scale-90 data-starting-style:opacity-0",
				"data-ending-style:scale-90 data-ending-style:opacity-0",
				className,
			)}
			data-slot="popover-popup"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Arrow                                                                      */
/* -------------------------------------------------------------------------- */

function PopoverArrow({ className, ...props }: PopoverPrimitive.Arrow.Props) {
	return (
		<PopoverPrimitive.Arrow
			className={cn(ARROW_STYLES, className)}
			data-slot="popover-arrow"
			{...props}
		>
			<BaseArrow title="Popover Arrow" className="fill-background" />
		</PopoverPrimitive.Arrow>
	);
}

/* -------------------------------------------------------------------------- */
/* Title                                                                      */
/* -------------------------------------------------------------------------- */

function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
	return (
		<PopoverPrimitive.Title
			className={cn(
				"text-base font-semibold leading-none tracking-tight",
				className,
			)}
			data-slot="popover-title"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Description                                                                */
/* -------------------------------------------------------------------------- */

function PopoverDescription({
	className,
	...props
}: PopoverPrimitive.Description.Props) {
	return (
		<PopoverPrimitive.Description
			className={cn("text-sm text-muted-foreground", className)}
			data-slot="popover-description"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Close                                                                      */
/* -------------------------------------------------------------------------- */

function PopoverClose({ className, ...props }: PopoverPrimitive.Close.Props) {
	return (
		<PopoverPrimitive.Close
			className={cn("", className)}
			data-slot="popover-close"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Viewport                                                                   */
/* -------------------------------------------------------------------------- */

function PopoverViewport({
	className,
	...props
}: PopoverPrimitive.Viewport.Props) {
	return (
		<PopoverPrimitive.Viewport
			className={cn(
				"relative h-full w-full overflow-clip",
				"will-change-[transform,opacity]",

				/* shared animation contract */
				"[&_[data-current]]:translate-x-0",
				"[&_[data-current]]:opacity-100",
				"[&_[data-current]]:scale-100",
				"[&_[data-current]]:transition-[transform,opacity]",
				"[&_[data-current]]:duration-300",
				"[&_[data-current]]:ease-[cubic-bezier(0.22,1,0.36,1)]",

				"[&_[data-previous]]:translate-x-0",
				"[&_[data-previous]]:opacity-100",
				"[&_[data-previous]]:scale-100",
				"[&_[data-previous]]:transition-[transform,opacity]",
				"[&_[data-previous]]:duration-300",
				"[&_[data-previous]]:ease-[cubic-bezier(0.22,1,0.36,1)]",

				/* horizontal directions */
				"data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:-translate-x-6",
				"data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:translate-x-6",
				"data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:translate-x-6",
				"data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:-translate-x-6",

				/* vertical directions */
				"data-[activation-direction~='up']:[&_[data-current][data-starting-style]]:translate-y-2",
				"data-[activation-direction~='down']:[&_[data-current][data-starting-style]]:-translate-y-2",
				"data-[activation-direction~='up']:[&_[data-previous][data-ending-style]]:-translate-y-2",
				"data-[activation-direction~='down']:[&_[data-previous][data-ending-style]]:translate-y-2",

				/* depth */
				"[&_[data-current][data-starting-style]]:scale-95",
				"[&_[data-previous][data-ending-style]]:scale-95",

				/* instant */
				"[[data-instant]_&_[data-current]]:transition-none",
				"[[data-instant]_&_[data-previous]]:transition-none",

				className,
			)}
			data-slot="popover-viewport"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	PopoverRoot,
	PopoverTrigger,
	PopoverPortal,
	PopoverBackdrop,
	PopoverPositioner,
	PopoverPopup,
	PopoverArrow,
	PopoverTitle,
	PopoverDescription,
	PopoverClose,
	PopoverViewport,
	PopoverPrimitive,
};
