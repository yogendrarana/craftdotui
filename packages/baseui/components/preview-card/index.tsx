"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

import { cn } from "@craftdotui/lib/utils";
import { ARROW_STYLES, BaseArrow } from "@craftdotui/baseui/components/arrow";

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

function PreviewCardRoot(props: PreviewCardPrimitive.Root.Props) {
	return (
		<PreviewCardPrimitive.Root {...props} data-slot="preview-card-root" />
	);
}

/* -------------------------------------------------------------------------- */
/* Trigger                                                                    */
/* -------------------------------------------------------------------------- */

function PreviewCardTrigger({
	className,
	href,
	...props
}: PreviewCardPrimitive.Trigger.Props) {
	return (
		<PreviewCardPrimitive.Trigger
			href={href}
			className={cn(
				"underline font-medium cursor-default decoration-1 underline-offset-4",
				"focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800",
				"data-[popup-open]:underline data-[popup-open]:focus-visible:no-underline",
				href && "text-blue-500",
				className,
			)}
			data-slot="preview-card-trigger"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Portal                                                                     */
/* -------------------------------------------------------------------------- */

function PreviewCardPortal(props: PreviewCardPrimitive.Portal.Props) {
	return (
		<PreviewCardPrimitive.Portal
			{...props}
			data-slot="preview-card-portal"
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Positioner                                                                 */
/* -------------------------------------------------------------------------- */

function PreviewCardPositioner({
	className,
	sideOffset = 4,
	...props
}: PreviewCardPrimitive.Positioner.Props) {
	return (
		<PreviewCardPrimitive.Positioner
			sideOffset={sideOffset}
			className={cn("z-50", className)}
			data-slot="preview-card-positioner"
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Popup                                                                      */
/* -------------------------------------------------------------------------- */

function PreviewCardPopup({
	className,
	children,
	showPreviewCardArrow = true,
	...props
}: PreviewCardPrimitive.Popup.Props & { showPreviewCardArrow?: boolean }) {
	return (
		<PreviewCardPrimitive.Popup
			className={cn(
				"w-64 p-3 origin-[var(--transform-origin)]",
				"flex bg-popover text-popover-foreground text-sm rounded-lg border border-border shadow",
				"transition-[transform,scale,opacity]",
				"data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
				"data-[ending-style]:scale-90 data-[ending-style]:opacity-0",
				className,
			)}
			data-slot="preview-card-popup"
			{...props}
		>
			{showPreviewCardArrow && <PreviewCardArrow />}
			{children}
		</PreviewCardPrimitive.Popup>
	);
}

/* -------------------------------------------------------------------------- */
/* Arrow                                                                      */
/* -------------------------------------------------------------------------- */

function PreviewCardArrow({
	className,
	...props
}: PreviewCardPrimitive.Arrow.Props) {
	return (
		<PreviewCardPrimitive.Arrow
			className={cn(ARROW_STYLES, className)}
			data-slot="preview-card-arrow"
			{...props}
		>
			<BaseArrow title="PreviewCard Arrow" className="fill-background" />
		</PreviewCardPrimitive.Arrow>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
	PreviewCardRoot,
	PreviewCardTrigger,
	PreviewCardPortal,
	PreviewCardPositioner,
	PreviewCardPopup,
	PreviewCardArrow,
};
