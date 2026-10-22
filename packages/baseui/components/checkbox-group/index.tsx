"use client";

import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";
import { cn } from "cn";

/* -------------------------------------------------------------------------- */
/* Checkbox Group                                                             */
/* -------------------------------------------------------------------------- */

interface CheckboxGroupProps extends CheckboxGroupPrimitive.Props {}

function CheckboxGroup({ className, ...props }: CheckboxGroupProps) {
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

export { CheckboxGroup };
export type { CheckboxGroupProps };
