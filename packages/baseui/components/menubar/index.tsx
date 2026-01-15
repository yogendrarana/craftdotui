"use client";

import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Menubar Root                                                               */
/* -------------------------------------------------------------------------- */

function Menubar({ className, ...props }: MenubarPrimitive.Props) {
	return (
		<MenubarPrimitive
			data-slot="menubar-root"
			className={cn(
				"p-1 flex items-center gap-1 rounded-md border border-border bg-muted",
				className,
			)}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export { Menubar };
