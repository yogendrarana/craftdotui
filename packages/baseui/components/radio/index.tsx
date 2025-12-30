"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Radio Group                                                                */
/* -------------------------------------------------------------------------- */

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
	return (
		<RadioGroupPrimitive
			className={cn("flex flex-col gap-2", className)}
			data-slot="radio-group"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Radio Indicator                                                            */
/* -------------------------------------------------------------------------- */

function RadioIndicator({
	className,
	...props
}: RadioPrimitive.Indicator.Props) {
	return (
		<RadioPrimitive.Indicator
			className={cn(
				"flex items-center justify-center",
				"data-[state=checked]:after:block after:h-2 after:w-2 after:rounded-full after:bg-primary after:content-['']",
				className,
			)}
			data-slot="radio-indicator"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Radio                                                                      */
/* -------------------------------------------------------------------------- */

function Radio({ className, ...props }: RadioPrimitive.Root.Props) {
	return (
		<RadioPrimitive.Root
			className={cn(
				"aspect-square h-4 w-4",
				"flex items-center justify-center",
				"rounded-full border border-border bg-background transition-colors",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-offset-1",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"data-checked:border-primary",
				className,
			)}
			data-slot="radio"
			{...props}
		>
			<RadioIndicator />
		</RadioPrimitive.Root>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { RadioGroup, Radio };
