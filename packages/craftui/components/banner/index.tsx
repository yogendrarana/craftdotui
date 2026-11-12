"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

const bannerVariants = cva(
	"relative flex w-full items-center justify-between gap-3 text-sm transition-all duration-200 ease-out will-change-transform data-starting-style:opacity-0 data-[state=closed]:opacity-0",
	{
		variants: {
			variant: {
				default:
					"bg-muted/70 text-foreground border-border [&_[data-slot=banner-icon]]:text-muted-foreground *:data-[slot=banner-description]:text-muted-foreground",
				info: "bg-info/10 text-info border-info/30 [&_[data-slot=banner-icon]]:text-info *:data-[slot=banner-description]:text-info/90 dark:bg-info/15",
				success:
					"bg-success/10 text-success border-success/30 [&_[data-slot=banner-icon]]:text-success *:data-[slot=banner-description]:text-success/90 dark:bg-success/15",
				warning:
					"bg-warning/10 text-warning border-warning/30 [&_[data-slot=banner-icon]]:text-warning *:data-[slot=banner-description]:text-warning/90 dark:bg-warning/15",
				destructive:
					"bg-destructive/10 text-destructive border-destructive/30 [&_[data-slot=banner-icon]]:text-destructive *:data-[slot=banner-description]:text-destructive/90 dark:bg-destructive/15",
				promotional:
					"bg-primary text-primary-foreground border-primary [&_[data-slot=banner-icon]]:text-primary-foreground *:data-[slot=banner-description]:text-primary-foreground/90 [&_[data-slot=banner-close]]:text-primary-foreground/80 [&_[data-slot=banner-close]:hover]:text-primary-foreground [&_[data-slot=banner-close]:hover]:bg-primary-foreground/10",
			},
			appearance: {
				full: "border-b px-4 py-2.5 data-starting-style:-translate-y-2 data-[state=closed]:-translate-y-2",
				inset: "rounded-lg border px-4 py-3 shadow-xs data-starting-style:scale-98 data-[state=closed]:scale-98",
				floating:
					"fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl rounded-full border px-4 py-2.5 shadow-lg backdrop-blur-md data-starting-style:-translate-y-4 data-starting-style:-translate-x-1/2 data-[state=closed]:-translate-y-4 data-[state=closed]:-translate-x-1/2",
				sticky: "sticky top-0 z-40 border-b backdrop-blur-md px-4 py-2.5 shadow-xs data-starting-style:-translate-y-2 data-[state=closed]:-translate-y-2",
			},
		},
		defaultVariants: {
			variant: "default",
			appearance: "full",
		},
	},
);

export type BannerVariant = VariantProps<typeof bannerVariants>["variant"];
export type BannerAppearance = VariantProps<
	typeof bannerVariants
>["appearance"];

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export interface BannerContextValue {
	open: boolean;
	setOpen: (open: boolean) => void;
	variant?: BannerVariant;
	appearance?: BannerAppearance;
	dismissible?: boolean;
}

const BannerContext = React.createContext<BannerContextValue | null>(null);

export function useBanner(): BannerContextValue {
	const context = React.useContext(BannerContext);
	if (!context) {
		throw new Error("useBanner must be used within a Banner component");
	}
	return context;
}

/* -------------------------------------------------------------------------- */
/* Banner Root                                                                */
/* -------------------------------------------------------------------------- */

export interface BannerRootProps
	extends useRender.ComponentProps<"div">,
		VariantProps<typeof bannerVariants> {
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	dismissible?: boolean;
}

function BannerRoot({
	className,
	variant = "default",
	appearance = "full",
	open: controlledOpen,
	defaultOpen = true,
	onOpenChange,
	dismissible = true,
	render,
	...props
}: BannerRootProps) {
	const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
	const isControlled = controlledOpen !== undefined;
	const open = isControlled ? controlledOpen : uncontrolledOpen;

	const [isMounted, setIsMounted] = React.useState(open);
	const [isClosing, setIsClosing] = React.useState(false);

	const handleOpenChange = React.useCallback(
		(nextOpen: boolean) => {
			if (!isControlled) {
				setUncontrolledOpen(nextOpen);
			}
			onOpenChange?.(nextOpen);
		},
		[isControlled, onOpenChange],
	);

	React.useEffect(() => {
		if (open) {
			setIsMounted(true);
			setIsClosing(false);
		} else if (isMounted) {
			setIsClosing(true);
			const timer = setTimeout(() => {
				setIsMounted(false);
				setIsClosing(false);
			}, 200);
			return () => clearTimeout(timer);
		}
	}, [open, isMounted]);

	const contextValue = React.useMemo<BannerContextValue>(
		() => ({
			open,
			setOpen: handleOpenChange,
			variant,
			appearance,
			dismissible,
		}),
		[open, handleOpenChange, variant, appearance, dismissible],
	);

	const role = props.role ?? "region";
	const ariaLabel =
		role === "status" ? undefined : (props["aria-label"] ?? "Announcement");
	const ariaLive: "polite" | "assertive" | "off" | undefined =
		role === "status" ? "polite" : props["aria-live"];

	const defaultProps = {
		role,
		"aria-label": ariaLabel,
		"aria-live": ariaLive,
		"data-slot": "banner",
		"data-state": isClosing || !open ? "closed" : "open",
		"data-variant": variant ?? undefined,
		"data-appearance": appearance ?? undefined,
		className: cn(bannerVariants({ variant, appearance }), className),
	};

	const rendered = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});

	if (!isMounted && !open) {
		return null;
	}

	return (
		<BannerContext.Provider value={contextValue}>
			{rendered}
		</BannerContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Banner Content                                                             */
/* -------------------------------------------------------------------------- */

export interface BannerContentProps extends useRender.ComponentProps<"div"> {
	centered?: boolean;
}

function BannerContent({
	className,
	centered = false,
	render,
	...props
}: BannerContentProps) {
	const defaultProps = {
		"data-slot": "banner-content",
		className: cn(
			"flex flex-1 items-center gap-2 sm:gap-3 min-w-0 text-sm",
			centered && "justify-center text-center",
			className,
		),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Banner Icon                                                                */
/* -------------------------------------------------------------------------- */

export interface BannerIconProps extends useRender.ComponentProps<"span"> {}

function BannerIcon({ className, render, ...props }: BannerIconProps) {
	const defaultProps = {
		"data-slot": "banner-icon",
		"aria-hidden": "true" as const,
		className: cn(
			"shrink-0 inline-flex items-center justify-center [&>svg]:size-4",
			className,
		),
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Banner Title                                                               */
/* -------------------------------------------------------------------------- */

export interface BannerTitleProps extends useRender.ComponentProps<"span"> {}

function BannerTitle({ className, render, ...props }: BannerTitleProps) {
	const defaultProps = {
		"data-slot": "banner-title",
		className: cn(
			"font-semibold leading-none shrink-0 inline-flex items-center gap-1.5",
			className,
		),
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Banner Description                                                         */
/* -------------------------------------------------------------------------- */

export interface BannerDescriptionProps
	extends useRender.ComponentProps<"span"> {}

function BannerDescription({
	className,
	render,
	...props
}: BannerDescriptionProps) {
	const defaultProps = {
		"data-slot": "banner-description",
		className: cn(
			"text-sm leading-relaxed text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:font-medium hover:[&_a]:opacity-80",
			className,
		),
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Banner Action                                                              */
/* -------------------------------------------------------------------------- */

export interface BannerActionProps extends useRender.ComponentProps<"div"> {}

function BannerAction({ className, render, ...props }: BannerActionProps) {
	const defaultProps = {
		"data-slot": "banner-action",
		className: cn(
			"shrink-0 flex items-center gap-2 text-sm font-medium",
			className,
		),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Banner Close                                                               */
/* -------------------------------------------------------------------------- */

export interface BannerCloseProps extends useRender.ComponentProps<"button"> {}

function BannerClose({
	className,
	children,
	render,
	onClick,
	...props
}: BannerCloseProps) {
	const context = React.useContext(BannerContext);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onClick?.(event);
		if (!event.defaultPrevented) {
			context?.setOpen(false);
		}
	};

	const defaultProps = {
		type: "button" as const,
		"aria-label": "Dismiss banner",
		"data-slot": "banner-close",
		className: cn(
			"inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md p-1 text-current/70 transition-colors hover:bg-black/5 hover:text-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-white/10",
			className,
		),
		onClick: handleClick,
		children: children ?? <X className="size-4" />,
	};

	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Banner = Object.assign(BannerRoot, {
	Root: BannerRoot,
	Content: BannerContent,
	Icon: BannerIcon,
	Title: BannerTitle,
	Description: BannerDescription,
	Action: BannerAction,
	Close: BannerClose,
});

export const Notice = Banner;

export {
	BannerRoot,
	BannerContent,
	BannerIcon,
	BannerTitle,
	BannerDescription,
	BannerAction,
	BannerClose,
	bannerVariants,
};
