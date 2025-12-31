"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Switch                                                                     */
/* -------------------------------------------------------------------------- */

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
	return (
		<SwitchPrimitive.Root
			className={cn(
				"h-5 w-9 p-0.5",
				"inline-flex items-center rounded-full",
				"bg-input transition-colors",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-offset-1",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"data-checked:bg-primary",
				className,
			)}
			data-slot="switch"
			{...props}
		>
			<SwitchThumb />
		</SwitchPrimitive.Root>
	);
}

/* -------------------------------------------------------------------------- */
/* Switch Thumb                                                               */
/* -------------------------------------------------------------------------- */

function SwitchThumb({ className, ...props }: SwitchPrimitive.Thumb.Props) {
	return (
		<SwitchPrimitive.Thumb
			className={cn(
				"h-4 w-4",
				"block rounded-full bg-background shadow-xs transition-transform",
				"data-checked:translate-x-4",
				className,
			)}
			data-slot="switch-thumb"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Switch };
