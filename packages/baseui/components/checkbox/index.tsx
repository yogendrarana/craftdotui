"use client";

import type * as React from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Checkbox Root                                                              */
/* -------------------------------------------------------------------------- */

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
	return (
		<CheckboxPrimitive.Root
			className={cn(
				"inline-flex size-4 items-center justify-center rounded-sm border border-input cursor-pointer",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground",
				"data-unchecked:bg-background",
				className,
			)}
			data-slot="checkbox-root"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Checkbox Indicator                                                         */
/* -------------------------------------------------------------------------- */

function CheckboxIndicator({
	className,
	keepMounted,
	...props
}: CheckboxPrimitive.Indicator.Props) {
	return (
		<CheckboxPrimitive.Indicator
			className={cn(
				"flex items-center justify-center text-current",
				"data-unchecked:hidden",
				className,
			)}
			data-slot="checkbox-indicator"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Default Check Icon                                                         */
/* -------------------------------------------------------------------------- */

interface CheckIconProps extends React.ComponentProps<"svg"> {}

function CheckIcon({ className, ...props }: CheckIconProps) {
	return (
		<svg
			fill="currentcolor"
			width="10"
			height="10"
			viewBox="0 0 10 10"
			{...props}
		>
			<title>Check Icon</title>
			<path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
		</svg>
	);
}

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export { Checkbox, CheckboxIndicator, CheckIcon };
