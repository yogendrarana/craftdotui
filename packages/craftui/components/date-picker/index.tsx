"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "cn";
import { Button, type ButtonProps } from "@craftdotui/baseui/components/button";
import {
	PopoverContent,
	PopoverRoot,
	PopoverTrigger,
} from "@craftdotui/baseui/components/popover";
import {
	Calendar,
	type CalendarProps,
	type DateRange,
} from "@craftdotui/craftui/components/calendar";

/* -------------------------------------------------------------------------- */
/* Date Picker (Single)                                                       */
/* -------------------------------------------------------------------------- */

export interface DatePickerProps {
	value?: Date;
	defaultValue?: Date;
	onValueChange?: (date: Date | undefined) => void;
	placeholder?: string;
	formatStr?: string;
	closeOnSelect?: boolean;
	disabled?: boolean;
	align?: "start" | "center" | "end";
	className?: string;
	contentClassName?: string;
	buttonProps?: Omit<ButtonProps, "value" | "defaultValue">;
	calendarProps?: Omit<
		Extract<CalendarProps, { mode?: "single" }>,
		"mode" | "selected" | "onSelect"
	>;
	children?: React.ReactNode;
}

function DatePickerRoot({
	value: controlledValue,
	defaultValue,
	onValueChange,
	placeholder = "Pick a date",
	formatStr = "PPP",
	closeOnSelect = true,
	disabled = false,
	align = "start",
	className,
	contentClassName,
	buttonProps,
	calendarProps,
	children,
}: DatePickerProps): React.ReactElement {
	const [open, setOpen] = React.useState(false);
	const [uncontrolledValue, setUncontrolledValue] = React.useState<
		Date | undefined
	>(defaultValue);

	const isControlled = controlledValue !== undefined;
	const selectedDate = isControlled ? controlledValue : uncontrolledValue;

	const handleSelect = (date: Date | undefined) => {
		if (!isControlled) {
			setUncontrolledValue(date);
		}
		onValueChange?.(date);
		if (closeOnSelect && date) {
			setOpen(false);
		}
	};

	return (
		<PopoverRoot open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				disabled={disabled}
				render={
					<Button
						variant="outline"
						disabled={disabled}
						data-slot="date-picker-trigger"
						data-empty={!selectedDate || undefined}
						className={cn(
							"w-64 justify-start text-left font-normal",
							!selectedDate && "text-muted-foreground",
							className,
						)}
						{...buttonProps}
					/>
				}
			>
				<CalendarIcon className="size-4 text-muted-foreground" />
				{selectedDate ? (
					<span>{format(selectedDate, formatStr)}</span>
				) : (
					<span>{placeholder}</span>
				)}
			</PopoverTrigger>
			<PopoverContent
				data-slot="date-picker-content"
				hasArrow={false}
				positionerProps={{ align, sideOffset: 6 }}
				className={cn("w-auto p-0", contentClassName)}
			>
				{children}
				<Calendar
					mode="single"
					selected={selectedDate}
					onSelect={handleSelect}
					defaultMonth={selectedDate}
					{...calendarProps}
				/>
			</PopoverContent>
		</PopoverRoot>
	);
}

/* -------------------------------------------------------------------------- */
/* Date Range Picker                                                          */
/* -------------------------------------------------------------------------- */

export interface DateRangePickerProps {
	value?: DateRange;
	defaultValue?: DateRange;
	onValueChange?: (range: DateRange | undefined) => void;
	placeholder?: string;
	formatStr?: string;
	numberOfMonths?: number;
	disabled?: boolean;
	align?: "start" | "center" | "end";
	className?: string;
	contentClassName?: string;
	buttonProps?: Omit<ButtonProps, "value" | "defaultValue">;
	calendarProps?: Omit<
		Extract<CalendarProps, { mode: "range" }>,
		"mode" | "selected" | "onSelect"
	>;
	children?: React.ReactNode;
}

function DateRangePicker({
	value: controlledValue,
	defaultValue,
	onValueChange,
	placeholder = "Pick a date range",
	formatStr = "LLL dd, y",
	numberOfMonths = 2,
	disabled = false,
	align = "start",
	className,
	contentClassName,
	buttonProps,
	calendarProps,
	children,
}: DateRangePickerProps): React.ReactElement {
	const [open, setOpen] = React.useState(false);
	const [uncontrolledValue, setUncontrolledValue] = React.useState<
		DateRange | undefined
	>(defaultValue);

	const isControlled = controlledValue !== undefined;
	const selectedRange = isControlled ? controlledValue : uncontrolledValue;

	const handleSelect = (range: DateRange | undefined) => {
		if (!isControlled) {
			setUncontrolledValue(range);
		}
		onValueChange?.(range);
	};

	return (
		<PopoverRoot open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				disabled={disabled}
				render={
					<Button
						variant="outline"
						disabled={disabled}
						data-slot="date-range-picker-trigger"
						data-empty={!selectedRange?.from || undefined}
						className={cn(
							"w-72 justify-start text-left font-normal",
							!selectedRange?.from && "text-muted-foreground",
							className,
						)}
						{...buttonProps}
					/>
				}
			>
				<CalendarIcon className="size-4 text-muted-foreground" />
				{selectedRange?.from ? (
					selectedRange.to ? (
						<span>
							{format(selectedRange.from, formatStr)} –{" "}
							{format(selectedRange.to, formatStr)}
						</span>
					) : (
						<span>{format(selectedRange.from, formatStr)}</span>
					)
				) : (
					<span>{placeholder}</span>
				)}
			</PopoverTrigger>
			<PopoverContent
				data-slot="date-range-picker-content"
				hasArrow={false}
				positionerProps={{ align, sideOffset: 6 }}
				className={cn("w-auto p-0", contentClassName)}
			>
				{children}
				<Calendar
					mode="range"
					defaultMonth={selectedRange?.from}
					selected={selectedRange}
					onSelect={handleSelect}
					numberOfMonths={numberOfMonths}
					{...calendarProps}
				/>
			</PopoverContent>
		</PopoverRoot>
	);
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const DatePicker = Object.assign(DatePickerRoot, {
	Root: DatePickerRoot,
	Range: DateRangePicker,
});

export { DatePickerRoot, DateRangePicker, type DateRange };
