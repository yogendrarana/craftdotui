"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Slider                                                                     */
/* -------------------------------------------------------------------------- */

function Slider({ className, ...props }: SliderPrimitive.Root.Props) {
	return (
		<SliderPrimitive.Root
			className={cn(
				"w-full",
				"flex flex-col gap-2",
				"data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44",
				"data-[orientation=vertical]:flex-row data-[orientation=vertical]:gap-4",
				className,
			)}
			data-slot="slider"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Slider Value                                                               */
/* -------------------------------------------------------------------------- */

function SliderValue({ className, ...props }: SliderPrimitive.Value.Props) {
	return (
		<SliderPrimitive.Value
			className={cn("text-xs text-muted-foreground", className)}
			data-slot="slider-value"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Slider Control                                                             */
/* -------------------------------------------------------------------------- */

function SliderControl({ className, ...props }: SliderPrimitive.Control.Props) {
	return (
		<SliderPrimitive.Control
			className={cn(
				"w-full",
				"flex items-center",
				"data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto",
				className,
			)}
			data-slot="slider-control"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Slider Track                                                               */
/* -------------------------------------------------------------------------- */

function SliderTrack({ className, ...props }: SliderPrimitive.Track.Props) {
	return (
		<SliderPrimitive.Track
			className={cn(
				"h-1 w-full",
				"flex items-center",
				"relative rounded-full bg-input",
				"data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1",
				className,
			)}
			data-slot="slider-track"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Slider Indicator                                                           */
/* -------------------------------------------------------------------------- */

function SliderIndicator({
	className,
	...props
}: SliderPrimitive.Indicator.Props) {
	return (
		<SliderPrimitive.Indicator
			className={cn(
				"h-full w-full",
				"rounded-full bg-primary",
				"data-[orientation=vertical]:w-full data-[orientation=vertical]:h-full",
				className,
			)}
			data-slot="slider-indicator"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Slider Thumb                                                               */
/* -------------------------------------------------------------------------- */

function SliderThumb({ className, ...props }: SliderPrimitive.Thumb.Props) {
	return (
		<SliderPrimitive.Thumb
			className={cn(
				"h-4 w-4",
				"flex items-center justify-center",
				"rounded-full border border-input bg-white outline-none shadow-xs transition-shadow",
				"focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-offset-1",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"data-dragging:ring-[3px] data-dragging:ring-ring/10",
				"dark:data-dragging:ring-ring/50 dark:border-background",
				className,
			)}
			data-slot="slider-thumb"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	Slider,
	SliderValue,
	SliderControl,
	SliderTrack,
	SliderIndicator,
	SliderThumb,
};
