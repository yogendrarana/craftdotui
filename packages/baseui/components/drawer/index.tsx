"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

import { cn } from "@craftdotui/lib/utils";

type DrawerPosition = "top" | "bottom" | "left" | "right";
type DrawerSwipeDirection = "up" | "down" | "left" | "right";
type DrawerRadius = "default" | "straight";
type DrawerVariant = "default" | "inset";

const positionToSwipeDirectionMap: Record<
	DrawerPosition,
	DrawerPrimitive.Root.Props["swipeDirection"]
> = {
	bottom: "down",
	left: "left",
	right: "right",
	top: "up",
};

// ==================================================
// Drawer Context
// ==================================================

interface DrawerContextValue {
	position: DrawerPosition;
	radius: DrawerRadius;
	variant: DrawerVariant;
	modal: DrawerPrimitive.Root.Props["modal"];
}

const DrawerContext = React.createContext<DrawerContextValue>({
	position: "bottom",
	radius: "default",
	variant: "default",
	modal: true,
});

// ==================================================
// Drawer Provider
// ==================================================

function DrawerProvider(props: DrawerPrimitive.Provider.Props) {
	return <DrawerPrimitive.Provider {...props} />;
}

// ==================================================
// Drawer Root
// ==================================================

interface DrawerRootProps extends DrawerPrimitive.Root.Props {
	position?: DrawerPosition;
	radius?: DrawerRadius;
	variant?: DrawerVariant;
}

function DrawerRoot({
	position = "bottom",
	radius = "default",
	variant = "default",
	swipeDirection,
	modal = true,
	...props
}: DrawerRootProps) {
	return (
		<DrawerContext.Provider value={{ position, radius, variant, modal }}>
			<DrawerPrimitive.Root
				modal={modal}
				swipeDirection={
					swipeDirection ?? positionToSwipeDirectionMap[position]
				}
				{...props}
			/>
		</DrawerContext.Provider>
	);
}

// ==================================================
// Drawer Indent Background
// ==================================================

function DrawerIndentBackground({
	className,
	...props
}: DrawerPrimitive.IndentBackground.Props) {
	return (
		<DrawerPrimitive.IndentBackground
			data-slot="drawer-indent-background"
			className={cn(
				"z-50 fixed inset-0 transition-all duration-300",
				className,
			)}
			{...props}
		/>
	);
}

// ==================================================
// Drawer Indent
// ==================================================

function DrawerIndent({ className, ...props }: DrawerPrimitive.Indent.Props) {
	const { radius } = React.useContext(DrawerContext);
	return (
		<DrawerPrimitive.Indent
			data-slot="drawer-indent"
			className={cn(
				"relative min-h-[500px] w-full bg-background overflow-hidden origin-top will-change-transform",
				"[transition:transform_500ms_cubic-bezier(0.32,0.72,0,1),border-radius_500ms_cubic-bezier(0.32,0.72,0,1)]",
				"data-[active]:scale-[0.95] data-[active]:rounded-xl data-[active]:shadow-2xl",
				radius === "straight" && "data-[active]:rounded-none",
				className,
			)}
			{...props}
		/>
	);
}

// ==================================================
// Drawer Trigger
// ==================================================

function DrawerTrigger({ className, ...props }: DrawerPrimitive.Trigger.Props) {
	return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

// ==================================================
// Drawer Portal
// ==================================================

function DrawerPortal({ className, ...props }: DrawerPrimitive.Portal.Props) {
	return (
		<DrawerPrimitive.Portal
			data-slot="drawer-portal"
			className={cn(className)}
			{...props}
		/>
	);
}

// ==================================================
// Drawer Backdrop
// ==================================================

function DrawerBackdrop({
	className,
	...props
}: DrawerPrimitive.Backdrop.Props): React.ReactElement {
	return (
		<DrawerPrimitive.Backdrop
			data-slot="drawer-backdrop"
			className={cn(
				"fixed inset-0 z-50",
				"bg-black/40 backdrop-blur-sm",
				"transition-opacity duration-300 ease-out",

				// for swipe-driven opacity
				"opacity-[calc(1-var(--drawer-swipe-progress,0))]",

				// ensure backdrop is visible during snap points
				"data-swiping:opacity-[calc(1-var(--drawer-swipe-progress,0))]",

				"data-starting-style:opacity-0",
				"data-ending-style:opacity-0",

				// velocity based colsing
				"data-ending-style:duration-[calc(var(--drawer-swipe-strength,1)*300ms)]",

				// disable transition during swipe
				"data-swiping:transition-none",

				//iOS fix
				"supports-[-webkit-touch-callout:none]:absolute",

				className,
			)}
			{...props}
		/>
	);
}

// ==================================================
// Drawer Viewport
// ==================================================

interface DrawerViewportProps extends DrawerPrimitive.Viewport.Props {
	position?: DrawerPosition;
}

function DrawerViewport({
	className,
	position: positionProp,
	...props
}: DrawerViewportProps) {
	const context = React.useContext(DrawerContext);
	const position = positionProp ?? context.position;
	const variant = context.variant;
	const isModal = context.modal === true;

	return (
		<DrawerPrimitive.Viewport
			data-slot="drawer-viewport"
			className={cn(
				"fixed inset-0 z-50 flex",
				!isModal && "pointer-events-none",
				position === "bottom" && "items-end justify-center",
				position === "top" && "items-start justify-center",
				position === "left" && "items-center justify-start",
				position === "right" && "items-center justify-end",
				variant === "inset" && "p-2 sm:p-4",
				className,
			)}
			{...props}
		/>
	);
}

// ==================================================
// Drawer Popup
// ==================================================

interface DrawerPopupProps extends DrawerPrimitive.Popup.Props {
	position?: DrawerPosition;
	radius?: DrawerRadius;
	variant?: DrawerVariant;
}

function DrawerPopup({
	className,
	position: positionProp,
	radius: radiusProp,
	variant: variantProp,
	...props
}: DrawerPopupProps) {
	const context = React.useContext(DrawerContext);
	const position = positionProp ?? context.position;
	const radius = radiusProp ?? context.radius;
	const variant = variantProp ?? context.variant;

	const isStraight = radius === "straight";
	const isInset = variant === "inset";

	return (
		<DrawerPrimitive.Popup
			data-slot="drawer-popup"
			className={cn(
				"group/drawer-popup",
				"max-h-full min-h-0 w-full min-w-0 pointer-events-auto",
				"relative z-50 flex flex-col bg-background shadow-2xl overflow-y-auto overscroll-contain touch-auto will-change-transform",
				"transition-[transform,box-shadow,height] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",

				// no transition during swipe
				"data-swiping:transition-none data-swiping:select-none",
				"data-nested-drawer-swiping:transition-none",

				// velocity-based animation
				"data-ending-style:duration-[calc(var(--drawer-swipe-strength,1)*300ms)]",

				// Stacking CSS variables
				"[--peek:1.5rem] [--stack-step:0.05]",
				"[--scale-base:calc(max(0,1-(var(--nested-drawers,0)*var(--stack-step))))]",
				"[--scale:clamp(0,calc(var(--scale-base)+(var(--stack-step)*var(--stack-progress))),1)]",
				"[--shrink:calc(1-var(--scale))]",
				"[--stack-peek-offset:max(0px,calc((var(--nested-drawers,0)-var(--stack-progress))*var(--peek)))]",
				"[--stack-progress:clamp(0,var(--drawer-swipe-progress,0),1)]",
				"[--height:max(0px,calc(var(--drawer-frontmost-height,var(--drawer-height,auto))))]",

				isStraight && "[--stack-step:0]",

				// Dim overlay when nested drawer is open
				"after:pointer-events-none after:absolute after:inset-0 after:bg-transparent after:transition-colors after:duration-300 after:ease-[cubic-bezier(0.32,0.72,0,1)]",
				"data-nested-drawer-open:after:bg-black/5 dark:data-nested-drawer-open:after:bg-black/30",
				"data-nested-drawer-open:overflow-hidden",

				// Height for vertical drawers
				(position === "bottom" || position === "top") &&
					"h-[var(--drawer-height,auto)] data-nested-drawer-open:h-[var(--height)]",

				// bottom position
				position === "bottom" &&
					cn(
						"w-full max-h-[85vh]",
						isInset ? "border" : "border-t",
						isStraight
							? "rounded-none"
							: isInset
								? "rounded-xl"
								: "rounded-t-xl",
						"[transform:translateY(calc(var(--drawer-swipe-movement-y,0px)_+_var(--drawer-snap-point-offset,0px)))]",
						"data-starting-style:[transform:translateY(calc(100%+2px))]",
						"data-ending-style:[transform:translateY(calc(100%+2px))]",
						"data-nested-drawer-open:[transform:translateY(calc(var(--drawer-swipe-movement-y,0px)_-_var(--stack-peek-offset)_-_(var(--shrink)*var(--height))))_scale(var(--scale))]",
						"origin-bottom",
					),

				// top position
				position === "top" &&
					cn(
						"w-full max-h-[85vh]",
						isInset ? "border" : "border-b",
						isStraight
							? "rounded-none"
							: isInset
								? "rounded-xl"
								: "rounded-b-xl",
						"[transform:translateY(var(--drawer-swipe-movement-y,0px))]",
						"data-starting-style:[transform:translateY(calc(-100%-2px))]",
						"data-ending-style:[transform:translateY(calc(-100%-2px))]",
						"data-nested-drawer-open:[transform:translateY(calc(var(--drawer-swipe-movement-y,0px)_+_var(--stack-peek-offset)_+_(var(--shrink)*var(--height))))_scale(var(--scale))]",
						"origin-top",
					),

				// left position
				position === "left" &&
					cn(
						"h-full w-[var(--drawer-width,auto)] max-w-[85vw]",
						isInset ? "border" : "border-r",
						isStraight
							? "rounded-none"
							: isInset
								? "rounded-xl"
								: "rounded-r-xl",
						"[transform:translateX(var(--drawer-swipe-movement-x,0px))]",
						"data-starting-style:[transform:translateX(calc(-100%-2px))]",
						"data-ending-style:[transform:translateX(calc(-100%-2px))]",
						"data-nested-drawer-open:[transform:translateX(calc(var(--drawer-swipe-movement-x,0px)_+_var(--stack-peek-offset)))_scale(var(--scale))]",
						"origin-right",
					),

				// right position
				position === "right" &&
					cn(
						"[--bleed:0rem]",
						"h-full max-w-[85vw] w-[var(--drawer-width,calc(20rem+var(--bleed)))]",
						isInset ? "border" : "border-l",
						isStraight
							? "rounded-none"
							: isInset
								? "rounded-xl"
								: "rounded-l-xl",
						"-mr-[var(--bleed)]",
						"supports-[-webkit-touch-callout:none]:[--bleed:0px]",

						"[transform:translateX(var(--drawer-swipe-movement-x,0px))]",

						// life cycle
						"data-starting-style:[transform:translateX(calc(100%+2px))]",
						"data-ending-style:[transform:translateX(calc(100%+2px))]",
						"data-nested-drawer-open:[transform:translateX(calc(var(--drawer-swipe-movement-x,0px)_-_var(--stack-peek-offset)))_scale(var(--scale))]",
						"origin-left",

						// iOS fixes
						"supports-[-webkit-touch-callout:none]:mr-0",
						"supports-[-webkit-touch-callout:none]:w-[20rem]",
						"supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)]",
						!isStraight &&
							"supports-[-webkit-touch-callout:none]:rounded-[10px]",
					),

				className,
			)}
			{...props}
		/>
	);
}

// ==================================================
// Drawer Swipe Area
// ==================================================

interface DrawerSwipeAreaProps extends DrawerPrimitive.SwipeArea.Props {
	position?: DrawerPosition;
}

function DrawerSwipeArea({
	className,
	position: propPosition,
	...props
}: DrawerSwipeAreaProps) {
	const { position: contextPosition } = React.useContext(DrawerContext);
	const position = propPosition ?? contextPosition;

	return (
		<DrawerPrimitive.SwipeArea
			data-slot="drawer-swipe-area"
			className={cn(
				"absolute z-50",
				position === "bottom" && "inset-x-0 bottom-0 h-10",
				position === "top" && "inset-x-0 top-0 h-10",
				position === "left" && "inset-y-0 left-0 w-10",
				position === "right" && "inset-y-0 right-0 w-10",
				className,
			)}
			{...props}
		/>
	);
}

// ==================================================
// Drawer Content
// ==================================================

interface DrawerContentProps extends DrawerPrimitive.Content.Props {
	allowSelection?: boolean;
}

function DrawerContent({
	className,
	allowSelection = false,
	render,
	...props
}: DrawerContentProps) {
	const contentClassName = cn(
		"p-6 flex-1",
		"transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
		// Hide content when nested drawer is open
		"group-data-[nested-drawer-open]/drawer-popup:opacity-0",
		// Show content when swiping nested drawer
		"group-data-[nested-drawer-swiping]/drawer-popup:opacity-100",
		className,
	);

	if (allowSelection) {
		return (
			<DrawerPrimitive.Content
				data-slot="drawer-content"
				className={contentClassName}
				render={render}
				{...props}
			/>
		);
	}

	if (
		render &&
		React.isValidElement<
			React.HTMLAttributes<HTMLElement> & { "data-slot"?: string }
		>(render)
	) {
		return React.cloneElement(render, {
			"data-slot": "drawer-content",
			className: cn(contentClassName, render.props.className),
			...props,
		});
	}

	return (
		<div
			data-slot="drawer-content"
			className={contentClassName}
			{...(props as React.HTMLAttributes<HTMLDivElement>)}
		/>
	);
}

// ==================================================
// Drawer Title
// ==================================================

function DrawerTitle({ className, ...props }: DrawerPrimitive.Title.Props) {
	return (
		<DrawerPrimitive.Title
			data-slot="drawer-title"
			className={cn("text-lg font-semibold leading-none", className)}
			{...props}
		/>
	);
}

// ==================================================
// Drawer Description
// ==================================================

function DrawerDescription({
	className,
	...props
}: DrawerPrimitive.Description.Props) {
	return (
		<DrawerPrimitive.Description
			data-slot="drawer-description"
			className={cn("text-sm text-muted-foreground", className)}
			{...props}
		/>
	);
}

// ==================================================
// Drawer Close
// ==================================================

function DrawerClose(props: DrawerPrimitive.Close.Props): React.ReactElement {
	return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

// ==================================================
// Drawer Handle
// ==================================================

function DrawerHandle({
	className,
	position: positionProp,
	...props
}: React.HTMLAttributes<HTMLDivElement> & {
	position?: DrawerPosition;
}) {
	const { position: contextPosition } = React.useContext(DrawerContext);
	const position = positionProp ?? contextPosition;
	const horizontal = position === "left" || position === "right";

	return (
		<div
			data-slot="drawer-handle"
			className={cn(
				"absolute flex touch-none items-center justify-center p-3 before:rounded-full before:bg-input",
				"transition-opacity duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]",
				"group-data-[nested-drawer-open]/drawer-popup:opacity-0",
				"group-data-[nested-drawer-swiping]/drawer-popup:opacity-100",
				horizontal
					? "inset-y-0 before:h-12 before:w-1"
					: "inset-x-0 before:h-1 before:w-12",
				position === "top" && "bottom-0",
				position === "bottom" && "top-0",
				position === "left" && "right-0",
				position === "right" && "left-0",
				className,
			)}
			{...props}
		/>
	);
}

// ==================================================
// Drawer Object
// ==================================================

export const Drawer = {
	Provider: DrawerProvider,
	IndentBackground: DrawerIndentBackground,
	Indent: DrawerIndent,
	Root: DrawerRoot,
	Trigger: DrawerTrigger,
	SwipeArea: DrawerSwipeArea,
	Portal: DrawerPortal,
	Backdrop: DrawerBackdrop,
	Viewport: DrawerViewport,
	Popup: DrawerPopup,
	Content: DrawerContent,
	Title: DrawerTitle,
	Description: DrawerDescription,
	Close: DrawerClose,
	Handle: DrawerHandle,
	// Utility functions
	createHandle: DrawerPrimitive.createHandle,
};

// ==================================================
// Exports
// ==================================================

export {
	DrawerProvider,
	DrawerIndentBackground,
	DrawerIndent,
	DrawerRoot,
	DrawerTrigger,
	DrawerSwipeArea,
	DrawerPortal,
	DrawerBackdrop,
	DrawerViewport,
	DrawerPopup,
	DrawerContent,
	DrawerTitle,
	DrawerDescription,
	DrawerClose,
	DrawerHandle,
	DrawerPrimitive,
	type DrawerPosition,
	type DrawerSwipeDirection,
	type DrawerRadius,
	type DrawerVariant,
	type DrawerContentProps,
};

export default Drawer;
