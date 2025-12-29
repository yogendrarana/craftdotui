"use client";

import { Meter as MeterPrimitive } from "@base-ui/react/meter";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Meter                                                                      */
/* -------------------------------------------------------------------------- */

function Meter({ className, ...props }: MeterPrimitive.Root.Props) {
	return (
		<MeterPrimitive.Root
			className={cn("w-full", "flex flex-col gap-2", className)}
			data-slot="meter"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Meter Label                                                                */
/* -------------------------------------------------------------------------- */

function MeterLabel({ className, ...props }: MeterPrimitive.Label.Props) {
	return (
		<MeterPrimitive.Label
			className={cn("text-sm font-medium text-foreground", className)}
			data-slot="meter-label"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Meter Track                                                                */
/* -------------------------------------------------------------------------- */

function MeterTrack({ className, ...props }: MeterPrimitive.Track.Props) {
	return (
		<MeterPrimitive.Track
			className={cn(
				"h-2 w-full",
				"flex items-center",
				"overflow-hidden rounded-full bg-muted",
				className,
			)}
			data-slot="meter-track"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Meter Indicator                                                            */
/* -------------------------------------------------------------------------- */

function MeterIndicator({
	className,
	...props
}: MeterPrimitive.Indicator.Props) {
	return (
		<MeterPrimitive.Indicator
			className={cn(
				"h-full w-full",
				"transition-[width] duration-300 ease-out",
				"bg-primary",
				className,
			)}
			data-slot="meter-indicator"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Meter Value                                                                */
/* -------------------------------------------------------------------------- */

function MeterValue({ className, ...props }: MeterPrimitive.Value.Props) {
	return (
		<MeterPrimitive.Value
			className={cn("text-xs text-muted-foreground", className)}
			data-slot="meter-value"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Meter, MeterLabel, MeterTrack, MeterIndicator, MeterValue };
