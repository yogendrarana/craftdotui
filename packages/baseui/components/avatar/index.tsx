"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Avatar Root                                                                       */
/* -------------------------------------------------------------------------- */

interface AvatarRootProps extends AvatarPrimitive.Root.Props {
	className?: string;
}

function Avatar({ className, ...props }: AvatarRootProps) {
	return (
		<AvatarPrimitive.Root
			className={cn(
				"relative inline-flex size-9 items-center justify-center overflow-hidden rounded-full bg-muted align-middle select-none",
				className,
			)}
			data-slot="avatar-root"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Avatar Image                                                                      */
/* -------------------------------------------------------------------------- */

interface AvatarImageProps extends AvatarPrimitive.Image.Props {
	className?: string;
}

function AvatarImage({ className, ...props }: AvatarImageProps) {
	return (
		<AvatarPrimitive.Image
			className={cn("size-full object-cover", className)}
			data-slot="avatar-image"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Avatar Fallback                                                                   */
/* -------------------------------------------------------------------------- */

function AvatarFallback({
	className,
	...props
}: AvatarPrimitive.Fallback.Props) {
	return (
		<AvatarPrimitive.Fallback
			className={cn(
				"flex size-full items-center justify-center text-sm font-medium text-muted-foreground",
				className,
			)}
			data-slot="avatar-fallback"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Export                                                           */
/* -------------------------------------------------------------------------- */

export { Avatar, AvatarImage, AvatarFallback };
