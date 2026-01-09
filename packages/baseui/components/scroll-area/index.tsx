"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { cn } from "@craftdotui/lib/utils";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

function ScrollAreaRoot({
	className,
	...props
}: ScrollAreaPrimitive.Root.Props) {
	return (
		<ScrollAreaPrimitive.Root
			className={cn("border border-border rounded-md", className)}
			data-slot="scroll-area"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Viewport                                                                   */
/* -------------------------------------------------------------------------- */

function ScrollAreaViewport({
	className,
	...props
}: ScrollAreaPrimitive.Viewport.Props) {
	return (
		<ScrollAreaPrimitive.Viewport
			className={cn(
				"h-full rounded-[inherit] outline-none transition-shadows",
				"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
				"data-has-overflow-x:overscroll-x-contain",
				className,
			)}
			data-slot="scroll-area-viewport"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

function ScrollAreaContent({
	className,
	...props
}: ScrollAreaPrimitive.Content.Props) {
	return (
		<ScrollAreaPrimitive.Content
			className={cn("h-full w-full p-2", className)}
			data-slot="scroll-area-content"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Scrollbar                                                                  */
/* -------------------------------------------------------------------------- */

function ScrollAreaScrollbar({
	className,
	...props
}: ScrollAreaPrimitive.Scrollbar.Props) {
	return (
		<ScrollAreaPrimitive.Scrollbar
			className={cn(
				"m-1.25 flex select-none touch-none",
				"opacity-0 transition-opacity pointer-events-none duration-150",
				"data-visible:opacity-100 data-visible:pointer-events-auto data-visible:delay-0",
				"data-hovering:opacity-100 data-hovering:pointer-events-auto data-hovering:delay-0",
				"data-scrolling:opacity-100 data-scrolling:pointer-events-auto data-scrolling:duration-0",

				// orientation
				"data-[orientation=vertical]:w-1.25",
				"data-[orientation=horizontal]:h-1.25",
				className,
			)}
			data-slot="scroll-area-scrollbar"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Thumb                                                                      */
/* -------------------------------------------------------------------------- */

function ScrollAreaThumb({
	className,
	...props
}: ScrollAreaPrimitive.Thumb.Props) {
	return (
		<ScrollAreaPrimitive.Thumb
			className={cn(
				"relative rounded-full bg-foreground/20 hover:bg-foreground/30 transition-colors",
				"data-[orientation=vertical]:w-full",
				"data-[orientation=horizontal]:h-full",
				className,
			)}
			data-slot="scroll-area-thumb"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Corner                                                                     */
/* -------------------------------------------------------------------------- */

function ScrollAreaCorner({
	className,
	...props
}: ScrollAreaPrimitive.Corner.Props) {
	return (
		<ScrollAreaPrimitive.Corner
			className={cn("", className)}
			data-slot="scroll-area-corner"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Composed ScrollArea                                                        */
/* -------------------------------------------------------------------------- */

function ScrollArea({
	className,
	children,
	...props
}: ScrollAreaPrimitive.Root.Props) {
	return (
		<ScrollAreaRoot className={className} {...props}>
			<ScrollAreaViewport>
				<ScrollAreaContent>{children}</ScrollAreaContent>
			</ScrollAreaViewport>

			<ScrollAreaScrollbar>
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>

			<ScrollAreaScrollbar orientation="horizontal">
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>

			<ScrollAreaCorner />
		</ScrollAreaRoot>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	ScrollAreaRoot,
	ScrollArea,
	ScrollAreaViewport,
	ScrollAreaContent,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaCorner,
};
