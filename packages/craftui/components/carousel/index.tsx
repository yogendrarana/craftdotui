"use client";

import * as React from "react";
import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { Button, type ButtonProps } from "@craftdotui/baseui/components/button";

/* -------------------------------------------------------------------------- */
/* Types & Context                                                            */
/* -------------------------------------------------------------------------- */

export type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];
export type CarouselOrientation = "horizontal" | "vertical";

export interface CarouselProps {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin;
	orientation?: CarouselOrientation;
	setApi?: (api: CarouselApi) => void;
}

interface CarouselContextValue extends CarouselProps {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	orientation: CarouselOrientation;
	scrollPrev: () => void;
	scrollNext: () => void;
	scrollTo: (index: number) => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
	selectedIndex: number;
	scrollSnapList: number[];
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function useCarousel() {
	const context = React.useContext(CarouselContext);
	if (!context) {
		throw new Error("useCarousel must be used within a <CarouselRoot />");
	}
	return context;
}

/* -------------------------------------------------------------------------- */
/* Carousel Root                                                              */
/* -------------------------------------------------------------------------- */

export interface CarouselRootProps
	extends useRender.ComponentProps<"div">,
		CarouselProps {}

function CarouselRoot({
	orientation = "horizontal",
	opts,
	setApi,
	plugins,
	className,
	render,
	...props
}: CarouselRootProps) {
	const resolvedOrientation: CarouselOrientation =
		orientation || (opts?.axis === "y" ? "vertical" : "horizontal");

	const [carouselRef, api] = useEmblaCarousel(
		{
			...opts,
			axis: resolvedOrientation === "horizontal" ? "x" : "y",
		},
		plugins,
	);

	const [canScrollPrev, setCanScrollPrev] = React.useState(false);
	const [canScrollNext, setCanScrollNext] = React.useState(false);
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const [scrollSnapList, setScrollSnapList] = React.useState<number[]>([]);

	const onSelect = React.useCallback((emblaApi: CarouselApi) => {
		if (!emblaApi) return;
		setCanScrollPrev(emblaApi.canScrollPrev());
		setCanScrollNext(emblaApi.canScrollNext());
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	const onInit = React.useCallback((emblaApi: CarouselApi) => {
		if (!emblaApi) return;
		setScrollSnapList(emblaApi.scrollSnapList());
	}, []);

	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev();
	}, [api]);

	const scrollNext = React.useCallback(() => {
		api?.scrollNext();
	}, [api]);

	const scrollTo = React.useCallback(
		(index: number) => {
			api?.scrollTo(index);
		},
		[api],
	);

	const handleKeyDown = React.useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (resolvedOrientation === "horizontal") {
				if (event.key === "ArrowLeft") {
					event.preventDefault();
					scrollPrev();
				} else if (event.key === "ArrowRight") {
					event.preventDefault();
					scrollNext();
				}
			} else {
				if (event.key === "ArrowUp") {
					event.preventDefault();
					scrollPrev();
				} else if (event.key === "ArrowDown") {
					event.preventDefault();
					scrollNext();
				}
			}
		},
		[resolvedOrientation, scrollPrev, scrollNext],
	);

	React.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);

	React.useEffect(() => {
		if (!api) return;
		onInit(api);
		onSelect(api);
		api.on("reInit", onInit);
		api.on("reInit", onSelect);
		api.on("select", onSelect);

		return () => {
			api.off("reInit", onInit);
			api.off("reInit", onSelect);
			api.off("select", onSelect);
		};
	}, [api, onInit, onSelect]);

	const contextValue = React.useMemo<CarouselContextValue>(
		() => ({
			carouselRef,
			api,
			opts,
			plugins,
			orientation: resolvedOrientation,
			scrollPrev,
			scrollNext,
			scrollTo,
			canScrollPrev,
			canScrollNext,
			selectedIndex,
			scrollSnapList,
		}),
		[
			carouselRef,
			api,
			opts,
			plugins,
			resolvedOrientation,
			scrollPrev,
			scrollNext,
			scrollTo,
			canScrollPrev,
			canScrollNext,
			selectedIndex,
			scrollSnapList,
		],
	);

	const defaultProps = {
		role: "region",
		"aria-roledescription": "carousel",
		"data-slot": "carousel",
		"data-orientation": resolvedOrientation,
		onKeyDownCapture: handleKeyDown,
		className: cn("relative", className),
	};

	const element = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});

	return (
		<CarouselContext.Provider value={contextValue}>
			{element}
		</CarouselContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Carousel Content                                                           */
/* -------------------------------------------------------------------------- */

export interface CarouselContentProps extends useRender.ComponentProps<"div"> {
	viewportClassName?: string;
}

function CarouselContent({
	className,
	viewportClassName,
	render,
	...props
}: CarouselContentProps) {
	const { carouselRef, orientation } = useCarousel();

	const defaultProps = {
		"data-slot": "carousel-content",
		"data-orientation": orientation,
		className: cn(
			"flex",
			orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
			className,
		),
	};

	const track = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});

	return (
		<div
			ref={carouselRef}
			data-slot="carousel-viewport"
			className={cn("overflow-hidden", viewportClassName)}
		>
			{track}
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* Carousel Item                                                              */
/* -------------------------------------------------------------------------- */

export interface CarouselItemProps extends useRender.ComponentProps<"div"> {}

function CarouselItem({ className, render, ...props }: CarouselItemProps) {
	const { orientation } = useCarousel();

	const defaultProps = {
		role: "group",
		"aria-roledescription": "slide",
		"data-slot": "carousel-item",
		"data-orientation": orientation,
		className: cn(
			"min-w-0 shrink-0 grow-0 basis-full",
			orientation === "horizontal" ? "pl-4" : "pt-4",
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
/* Carousel Previous                                                          */
/* -------------------------------------------------------------------------- */

export interface CarouselPreviousProps extends ButtonProps {}

function CarouselPrevious({
	className,
	variant = "outline",
	size = "icon",
	children,
	...props
}: CarouselPreviousProps) {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();

	return (
		<Button
			data-slot="carousel-previous"
			variant={variant}
			size={size}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			className={cn(
				"absolute rounded-full",
				orientation === "horizontal"
					? "top-1/2 -left-12 -translate-y-1/2"
					: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
				className,
			)}
			{...props}
		>
			{children ?? (
				<>
					<ArrowLeftIcon className="size-4" />
					<span className="sr-only">Previous slide</span>
				</>
			)}
		</Button>
	);
}

/* -------------------------------------------------------------------------- */
/* Carousel Next                                                              */
/* -------------------------------------------------------------------------- */

export interface CarouselNextProps extends ButtonProps {}

function CarouselNext({
	className,
	variant = "outline",
	size = "icon",
	children,
	...props
}: CarouselNextProps) {
	const { orientation, scrollNext, canScrollNext } = useCarousel();

	return (
		<Button
			data-slot="carousel-next"
			variant={variant}
			size={size}
			disabled={!canScrollNext}
			onClick={scrollNext}
			className={cn(
				"absolute rounded-full",
				orientation === "horizontal"
					? "top-1/2 -right-12 -translate-y-1/2"
					: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
				className,
			)}
			{...props}
		>
			{children ?? (
				<>
					<ArrowRightIcon className="size-4" />
					<span className="sr-only">Next slide</span>
				</>
			)}
		</Button>
	);
}

/* -------------------------------------------------------------------------- */
/* Carousel Dots                                                              */
/* -------------------------------------------------------------------------- */

export interface CarouselDotsProps extends useRender.ComponentProps<"div"> {
	dotClassName?: string;
}

function CarouselDots({
	className,
	dotClassName,
	render,
	...props
}: CarouselDotsProps) {
	const { scrollSnapList, selectedIndex, scrollTo, orientation } =
		useCarousel();

	const defaultProps = {
		role: "tablist",
		"aria-label": "Slide navigation",
		"data-slot": "carousel-dots",
		"data-orientation": orientation,
		className: cn(
			"flex items-center justify-center gap-1.5 pt-3",
			className,
		),
		children: scrollSnapList.map((_, index) => {
			const isActive = index === selectedIndex;
			return (
				<button
					key={index}
					type="button"
					role="tab"
					aria-selected={isActive}
					aria-label={`Go to slide ${index + 1}`}
					data-slot="carousel-dot"
					data-active={isActive || undefined}
					onClick={() => scrollTo(index)}
					className={cn(
						"h-2 rounded-full transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring",
						isActive
							? "w-5 bg-primary"
							: "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
						dotClassName,
					)}
				/>
			);
		}),
	};

	const element = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});

	if (scrollSnapList.length <= 1) return null;

	return element;
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Carousel = Object.assign(CarouselRoot, {
	Root: CarouselRoot,
	Content: CarouselContent,
	Item: CarouselItem,
	Previous: CarouselPrevious,
	Next: CarouselNext,
	Dots: CarouselDots,
});

export {
	CarouselRoot,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
	CarouselDots,
	useCarousel,
};
