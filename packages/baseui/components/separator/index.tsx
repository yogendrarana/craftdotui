"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Separator                                                                  */
/* -------------------------------------------------------------------------- */

function Separator({ className, ...props }: SeparatorPrimitive.Props) {
	return (
		<SeparatorPrimitive
			className={cn(
				"shrink-0 bg-border",
				"data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=horizontal]:my-4",
				"data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px data-[orientation=vertical]:mx-4",
				className,
			)}
			data-slot="separator"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Separator };
