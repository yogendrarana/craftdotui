"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Progress                                                                   */
/* -------------------------------------------------------------------------- */

function Progress({ className, ...props }: ProgressPrimitive.Root.Props) {
	return (
		<ProgressPrimitive.Root
			className={cn("w-full", "flex flex-col gap-2", className)}
			data-slot="progress"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Progress Label                                                             */
/* -------------------------------------------------------------------------- */

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
	return (
		<ProgressPrimitive.Label
			className={cn("text-sm font-medium text-foreground", className)}
			data-slot="progress-label"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Progress Track                                                             */
/* -------------------------------------------------------------------------- */

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
	return (
		<ProgressPrimitive.Track
			className={cn(
				"h-2 w-full",
				"flex items-center",
				"overflow-hidden rounded-full bg-muted",
				className,
			)}
			data-slot="progress-track"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Progress Indicator                                                         */
/* -------------------------------------------------------------------------- */

function ProgressIndicator({
	className,
	...props
}: ProgressPrimitive.Indicator.Props) {
	return (
		<ProgressPrimitive.Indicator
			className={cn(
				"h-full w-0",
				"transition-[width] duration-300 ease-out",
				"bg-primary",
				className,
			)}
			data-slot="progress-indicator"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Progress Value                                                             */
/* -------------------------------------------------------------------------- */

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
	return (
		<ProgressPrimitive.Value
			className={cn("text-xs text-muted-foreground", className)}
			data-slot="progress-value"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	Progress,
	ProgressLabel,
	ProgressTrack,
	ProgressIndicator,
	ProgressValue,
};
