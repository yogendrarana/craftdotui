"use client";

import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Checkbox Group                                                             */
/* -------------------------------------------------------------------------- */

function CheckboxGroupRoot({
	className,
	...props
}: CheckboxGroupPrimitive.Props) {
	return (
		<CheckboxGroupPrimitive
			className={cn("flex flex-col items-start gap-3", className)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const CheckboxGroup = {
	Root: CheckboxGroupRoot,
};

export { CheckboxGroupRoot };
