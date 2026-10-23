"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cn } from "cn";

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
/* Switch                                                                     */
/* -------------------------------------------------------------------------- */

function SwitchRoot({
	className,
	children,
	...props
}: SwitchPrimitive.Root.Props) {
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
			{children || <SwitchThumb />}
		</SwitchPrimitive.Root>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

const Switch = Object.assign(SwitchRoot, {
	Root: SwitchRoot,
	Thumb: SwitchThumb,
});

export { Switch, SwitchRoot, SwitchThumb };
