"use client";

import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Fieldset Root                                                              */
/* -------------------------------------------------------------------------- */

function Fieldset({ className, ...props }: FieldsetPrimitive.Root.Props) {
	return (
		<FieldsetPrimitive.Root
			className={cn(
				"p-4 flex flex-col gap-4 rounded-lg border border-border",
				className,
			)}
			data-slot="fieldset-root"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Fieldset Legend                                                            */
/* -------------------------------------------------------------------------- */

function FieldsetLegend({
	className,
	...props
}: FieldsetPrimitive.Legend.Props) {
	return (
		<FieldsetPrimitive.Legend
			className={cn("text-sm font-medium text-foreground", className)}
			data-slot="fieldset-legend"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Fieldset, FieldsetLegend };
