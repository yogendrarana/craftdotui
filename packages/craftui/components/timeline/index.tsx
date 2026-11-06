"use client";

import * as React from "react";
import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

export type TimelineOrientation = "vertical" | "horizontal";

interface TimelineContextValue {
	orientation: TimelineOrientation;
}

const TimelineContext = React.createContext<TimelineContextValue>({
	orientation: "vertical",
});

function useTimeline() {
	return React.useContext(TimelineContext);
}

/* -------------------------------------------------------------------------- */
/* Timeline Root                                                              */
/* -------------------------------------------------------------------------- */

export interface TimelineRootProps extends useRender.ComponentProps<"ol"> {
	orientation?: TimelineOrientation;
}

function TimelineRoot({
	className,
	orientation = "vertical",
	render,
	...props
}: TimelineRootProps) {
	const defaultProps = {
		"aria-label": "Timeline",
		"data-slot": "timeline",
		"data-orientation": orientation,
		className: cn(
			"relative flex",
			orientation === "vertical" ? "flex-col" : "flex-row items-start",
			className,
		),
	};

	const element = useRender({
		defaultTagName: "ol",
		props: mergeProps<"ol">(defaultProps, props),
		render,
	});

	return (
		<TimelineContext.Provider value={{ orientation }}>
			{element}
		</TimelineContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Timeline Item                                                              */
/* -------------------------------------------------------------------------- */

export interface TimelineItemProps extends useRender.ComponentProps<"li"> {}

function TimelineItem({ className, render, ...props }: TimelineItemProps) {
	const { orientation } = useTimeline();

	const defaultProps = {
		"data-slot": "timeline-item",
		"data-orientation": orientation,
		className: cn(
			"group/timeline-item relative flex items-start",
			orientation === "vertical"
				? "not-last:pb-8"
				: "flex-1 flex-col not-last:pr-8",
			className,
		),
	};

	return useRender({
		defaultTagName: "li",
		props: mergeProps<"li">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Timeline Connector                                                         */
/* -------------------------------------------------------------------------- */

export interface TimelineConnectorProps
	extends useRender.ComponentProps<"div"> {}

function TimelineConnector({
	className,
	render,
	...props
}: TimelineConnectorProps) {
	const { orientation } = useTimeline();

	const defaultProps = {
		"aria-hidden": true,
		"data-slot": "timeline-connector",
		"data-orientation": orientation,
		className: cn(
			"absolute bg-border",
			orientation === "vertical"
				? "top-2.5 left-1.5 h-full w-px -translate-x-1/2"
				: "top-1.5 left-1.5 h-px w-full -translate-y-1/2",
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
/* Timeline Marker                                                            */
/* -------------------------------------------------------------------------- */

export interface TimelineMarkerProps extends useRender.ComponentProps<"div"> {}

function TimelineMarker({ className, render, ...props }: TimelineMarkerProps) {
	const { orientation } = useTimeline();

	const defaultProps = {
		"aria-hidden": true,
		"data-slot": "timeline-marker",
		"data-orientation": orientation,
		className: cn(
			"relative z-10 flex size-3 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors",
			"has-[>svg]:size-6 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3",
			orientation === "vertical"
				? "mt-1 has-[>svg]:-mt-0.5 has-[>svg]:-ml-1.5"
				: "has-[>svg]:-mt-1.5 has-[>svg]:-ml-1.5",
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
/* Timeline Content                                                           */
/* -------------------------------------------------------------------------- */

export interface TimelineContentProps extends useRender.ComponentProps<"div"> {}

function TimelineContent({
	className,
	render,
	...props
}: TimelineContentProps) {
	const { orientation } = useTimeline();

	const defaultProps = {
		"data-slot": "timeline-content",
		"data-orientation": orientation,
		className: cn(
			"relative z-10 flex flex-col gap-1",
			orientation === "vertical" ? "ml-4" : "mt-3",
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
/* Timeline Title                                                             */
/* -------------------------------------------------------------------------- */

export interface TimelineTitleProps extends useRender.ComponentProps<"div"> {}

function TimelineTitle({ className, render, ...props }: TimelineTitleProps) {
	const defaultProps = {
		"data-slot": "timeline-title",
		className: cn(
			"text-sm font-medium leading-snug text-foreground",
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
/* Timeline Description                                                       */
/* -------------------------------------------------------------------------- */

export interface TimelineDescriptionProps
	extends useRender.ComponentProps<"p"> {}

function TimelineDescription({
	className,
	render,
	...props
}: TimelineDescriptionProps) {
	const defaultProps = {
		"data-slot": "timeline-description",
		className: cn("text-sm/relaxed text-muted-foreground", className),
	};

	return useRender({
		defaultTagName: "p",
		props: mergeProps<"p">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Timeline Time                                                              */
/* -------------------------------------------------------------------------- */

export interface TimelineTimeProps extends useRender.ComponentProps<"time"> {}

function TimelineTime({ className, render, ...props }: TimelineTimeProps) {
	const defaultProps = {
		"data-slot": "timeline-time",
		className: cn("text-xs font-medium text-muted-foreground", className),
	};

	return useRender({
		defaultTagName: "time",
		props: mergeProps<"time">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Timeline = Object.assign(TimelineRoot, {
	Root: TimelineRoot,
	Item: TimelineItem,
	Connector: TimelineConnector,
	Marker: TimelineMarker,
	Content: TimelineContent,
	Title: TimelineTitle,
	Description: TimelineDescription,
	Time: TimelineTime,
});

export type TimelineProps = TimelineRootProps;

export {
	TimelineRoot,
	TimelineItem,
	TimelineConnector,
	TimelineMarker,
	TimelineContent,
	TimelineTitle,
	TimelineDescription,
	TimelineTime,
};
