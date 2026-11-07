"use client";

import type * as React from "react";
import {
	DayPicker,
	type DateRange,
	type DayPickerProps,
} from "@daypicker/react";
import { format } from "date-fns";
import {
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronUpIcon,
} from "lucide-react";
import { cn } from "cn";
import { buttonVariants } from "@craftdotui/baseui/components/button";

/* -------------------------------------------------------------------------- */
/* Calendar Root                                                              */
/* -------------------------------------------------------------------------- */

export type CalendarProps = DayPickerProps & {
	buttonVariant?: "ghost" | "outline";
};

function CalendarRoot({
	className,
	classNames,
	showOutsideDays = true,
	buttonVariant = "ghost",
	components,
	formatters,
	...props
}: CalendarProps): React.ReactElement {
	return (
		<DayPicker
			data-slot="calendar"
			showOutsideDays={showOutsideDays}
			className={cn("bg-background p-3 w-fit", className)}
			formatters={{
				formatMonthDropdown: (month, dateLib) =>
					dateLib
						? dateLib.format(month, "LLL")
						: format(month, "LLL"),
				...formatters,
			}}
			classNames={{
				root: "relative",
				months: "relative flex flex-col sm:flex-row gap-4",
				month: "flex flex-col gap-4 w-full",
				month_caption:
					"relative flex h-7 items-center justify-center px-8",
				caption_label: cn(
					"inline-flex items-center gap-1 text-sm font-medium select-none",
					props.captionLayout?.startsWith("dropdown") &&
						"rounded-md border border-border bg-background px-2 py-1 text-xs h-7",
				),
				dropdowns:
					"flex items-center justify-center gap-1.5 text-sm font-medium",
				dropdown_root:
					"relative inline-flex items-center has-focus:ring-2 has-focus:ring-ring rounded-md",
				dropdown: "absolute inset-0 w-full opacity-0 cursor-pointer",
				nav: "absolute inset-x-0 top-0 flex h-7 items-center justify-between pointer-events-none z-10",
				button_previous: cn(
					buttonVariants({ variant: buttonVariant, size: "icon-xs" }),
					"size-7 p-0 pointer-events-auto text-muted-foreground hover:text-foreground aria-disabled:opacity-40 aria-disabled:pointer-events-none",
				),
				button_next: cn(
					buttonVariants({ variant: buttonVariant, size: "icon-xs" }),
					"size-7 p-0 pointer-events-auto text-muted-foreground hover:text-foreground aria-disabled:opacity-40 aria-disabled:pointer-events-none",
				),
				month_grid: "w-full border-collapse",
				weekdays: "flex",
				weekday:
					"w-8 font-normal text-[0.8rem] text-muted-foreground rounded-md select-none text-center",
				week: "mt-1.5 flex w-full",
				week_number_header:
					"w-8 font-normal text-[0.8rem] text-muted-foreground select-none text-center",
				week_number:
					"w-8 text-[0.75rem] text-muted-foreground select-none flex items-center justify-center",
				day: cn(
					"group/day relative p-0 text-center text-sm select-none focus-within:relative focus-within:z-20",
					"[&:has([aria-selected])]:bg-accent",
					props.mode === "range"
						? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
						: "[&:has([aria-selected])]:rounded-md",
				),
				day_button: cn(
					buttonVariants({ variant: "ghost", size: "icon-md" }),
					"size-8 p-0 font-normal transition-none aria-selected:opacity-100",
					"group-data-[today=true]/day:bg-accent group-data-[today=true]/day:text-accent-foreground",
					"group-data-[selected=true]/day:bg-primary group-data-[selected=true]/day:text-primary-foreground group-data-[selected=true]/day:hover:bg-primary group-data-[selected=true]/day:hover:text-primary-foreground",
					"group-[.day-range-middle]/day:bg-transparent group-[.day-range-middle]/day:text-accent-foreground group-[.day-range-middle]/day:hover:bg-accent group-[.day-range-middle]/day:rounded-none",
				),
				range_start: "day-range-start rounded-l-md bg-accent",
				range_end: "day-range-end rounded-r-md bg-accent",
				range_middle:
					"day-range-middle bg-accent text-accent-foreground rounded-none",
				selected: "day-selected",
				today: "day-today",
				outside:
					"day-outside text-muted-foreground opacity-50 aria-selected:text-muted-foreground",
				disabled: "text-muted-foreground opacity-40 cursor-not-allowed",
				hidden: "invisible",
				footer: "pt-3 text-xs text-muted-foreground",
				...classNames,
			}}
			components={{
				Chevron: ({ className: chevronClassName, orientation }) => {
					const Icon =
						orientation === "left"
							? ChevronLeftIcon
							: orientation === "right"
								? ChevronRightIcon
								: orientation === "up"
									? ChevronUpIcon
									: ChevronDownIcon;
					return (
						<Icon
							className={cn(
								"size-4 shrink-0 text-muted-foreground",
								chevronClassName,
							)}
						/>
					);
				},
				...components,
			}}
			{...props}
		/>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Calendar = Object.assign(CalendarRoot, {
	Root: CalendarRoot,
});

export { CalendarRoot, type DateRange };
