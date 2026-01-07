"use client";

import React from "react";
import type { VariantProps } from "class-variance-authority";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import {
	type toggleVariants,
	Toggle as BaseuiToggle,
	type ToggleProps,
} from "@craftdotui/baseui/components/toggle";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Toggle Group Context                                                       */
/* -------------------------------------------------------------------------- */

const ToggleGroupContextValue = React.createContext<
	VariantProps<typeof toggleVariants>
>({
	size: "md",
	variant: "default",
});

/* -------------------------------------------------------------------------- */
/* Toggle Group                                                               */
/* -------------------------------------------------------------------------- */

function ToggleGroup({
	className,
	children,
	variant = "default",
	size = "md",
	...props
}: ToggleGroupPrimitive.Props & VariantProps<typeof toggleVariants>) {
	return (
		<ToggleGroupContextValue.Provider value={{ variant, size }}>
			<ToggleGroupPrimitive
				className={cn(
					"flex items-center justify-center gap-1",
					"data-[orientation=vertical]:flex-col",
					variant === "outline" && [
						"gap-0",
						"[&>[data-slot=toggle-group-item]]:rounded-none",
						"data-[orientation=horizontal]:[&>[data-slot=toggle-group-item]:first-child]:rounded-l-md",
						"data-[orientation=horizontal]:[&>[data-slot=toggle-group-item]:last-child]:rounded-r-md",
						"data-[orientation=vertical]:[&>[data-slot=toggle-group-item]:first-child]:rounded-t-md",
						"data-[orientation=vertical]:[&>[data-slot=toggle-group-item]:last-child]:rounded-b-md",
						"data-[orientation=horizontal]:-space-x-px",
						"data-[orientation=vertical]:-space-y-px",
					],
					className,
				)}
				data-slot="toggle-group"
				{...props}
			>
				{children}
			</ToggleGroupPrimitive>
		</ToggleGroupContextValue.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Toggle Group Item                                                          */
/* -------------------------------------------------------------------------- */

function ToggleGroupItem({
	className,
	variant = "default",
	size = "icon",
	...props
}: ToggleProps & VariantProps<typeof toggleVariants>) {
	const context = React.useContext(ToggleGroupContextValue);
	const effectiveVariant = variant || context.variant;
	const effectiveSize = size || context.size;

	return (
		<BaseuiToggle
			className={className}
			data-slot="toggle-group-item"
			variant={effectiveVariant}
			size={effectiveSize}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { ToggleGroup, ToggleGroupItem };
