"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import { cn } from "@craftdotui/lib/utils";

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
			className={cn(
				"data-[side=bottom]:top-[-8px]",
				"data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180",
				"data-[side=left]:right-[-13px] data-[side=left]:rotate-90",
				"data-[side=right]:left-[-13px] data-[side=right]:-rotate-90",
				className,
			)}
			data-slot="preview-card-arrow"
			{...props}
		>
			<svg width="12" height="6" viewBox="0 0 12 6">
				<title>PreviewCard Arrow</title>
				<path d="M0 6L6 0L12 6Z" className="fill-background" />
				<path d="M0 6L6 0L12 6Z" className="fill-none stroke-border" />
			</svg>
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
