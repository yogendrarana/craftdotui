"use client";

import * as React from "react";
import { Check, Loader2 } from "lucide-react";
import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";

/* -------------------------------------------------------------------------- */
/* Types & Context                                                            */
/* -------------------------------------------------------------------------- */

export type StepperOrientation = "horizontal" | "vertical";
export type StepperItemState = "completed" | "active" | "inactive";

interface StepperContextValue {
	value: number;
	setValue: (step: number) => void;
	orientation: StepperOrientation;
	disabled: boolean;
	totalSteps: number;
	isFirstStep: boolean;
	isLastStep: boolean;
	nextStep: () => void;
	prevStep: () => void;
	registerStep: (step: number) => () => void;
}

const StepperContext = React.createContext<StepperContextValue | undefined>(
	undefined,
);

function useStepper() {
	const context = React.useContext(StepperContext);
	if (!context) {
		throw new Error("useStepper must be used within a StepperRoot");
	}
	return context;
}

interface StepperItemContextValue {
	step: number;
	state: StepperItemState;
	disabled: boolean;
	loading: boolean;
}

const StepperItemContext = React.createContext<
	StepperItemContextValue | undefined
>(undefined);

function useStepperItem() {
	const context = React.useContext(StepperItemContext);
	if (!context) {
		throw new Error("useStepperItem must be used within a StepperItem");
	}
	return context;
}

/* -------------------------------------------------------------------------- */
/* Stepper Root                                                               */
/* -------------------------------------------------------------------------- */

export interface StepperRootProps
	extends Omit<useRender.ComponentProps<"div">, "defaultValue"> {
	value?: number;
	defaultValue?: number;
	onValueChange?: (value: number) => void;
	orientation?: StepperOrientation;
	disabled?: boolean;
}

function StepperRoot({
	value: controlledValue,
	defaultValue = 1,
	onValueChange,
	orientation = "horizontal",
	disabled = false,
	className,
	render,
	...props
}: StepperRootProps) {
	const [uncontrolledValue, setUncontrolledValue] =
		React.useState(defaultValue);
	const [registeredSteps, setRegisteredSteps] = React.useState<number[]>([]);

	const isControlled = controlledValue !== undefined;
	const value = isControlled ? controlledValue : uncontrolledValue;

	const setValue = React.useCallback(
		(next: number) => {
			if (disabled) return;
			if (!isControlled) {
				setUncontrolledValue(next);
			}
			onValueChange?.(next);
		},
		[disabled, isControlled, onValueChange],
	);

	const registerStep = React.useCallback((step: number) => {
		setRegisteredSteps((prev) =>
			prev.includes(step) ? prev : [...prev, step].sort((a, b) => a - b),
		);
		return () => {
			setRegisteredSteps((prev) => prev.filter((s) => s !== step));
		};
	}, []);

	const totalSteps = registeredSteps.length;
	const firstStep = registeredSteps[0] ?? 1;
	const lastStep =
		registeredSteps[registeredSteps.length - 1] ?? Math.max(1, totalSteps);

	const isFirstStep = value <= firstStep;
	const isLastStep = totalSteps > 0 ? value >= lastStep : false;

	const nextStep = React.useCallback(() => {
		if (registeredSteps.length > 0) {
			const idx = registeredSteps.indexOf(value);
			if (idx !== -1 && idx < registeredSteps.length - 1) {
				setValue(registeredSteps[idx + 1]);
				return;
			}
		}
		setValue(value + 1);
	}, [registeredSteps, setValue, value]);

	const prevStep = React.useCallback(() => {
		if (registeredSteps.length > 0) {
			const idx = registeredSteps.indexOf(value);
			if (idx > 0) {
				setValue(registeredSteps[idx - 1]);
				return;
			}
		}
		setValue(Math.max(1, value - 1));
	}, [registeredSteps, setValue, value]);

	const contextValue = React.useMemo<StepperContextValue>(
		() => ({
			value,
			setValue,
			orientation,
			disabled,
			totalSteps,
			isFirstStep,
			isLastStep,
			nextStep,
			prevStep,
			registerStep,
		}),
		[
			value,
			setValue,
			orientation,
			disabled,
			totalSteps,
			isFirstStep,
			isLastStep,
			nextStep,
			prevStep,
			registerStep,
		],
	);

	const defaultProps = {
		"data-slot": "stepper",
		"data-orientation": orientation,
		className: cn("flex w-full flex-col gap-6", className),
	};

	const element = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});

	return (
		<StepperContext.Provider value={contextValue}>
			{element}
		</StepperContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Stepper List                                                               */
/* -------------------------------------------------------------------------- */

export interface StepperListProps extends useRender.ComponentProps<"div"> {}

function StepperList({ className, render, ...props }: StepperListProps) {
	const { orientation } = useStepper();

	const defaultProps = {
		role: "tablist",
		"aria-orientation": orientation,
		"data-slot": "stepper-list",
		"data-orientation": orientation,
		className: cn(
			"flex w-full",
			orientation === "horizontal"
				? "flex-row items-center"
				: "flex-col items-start",
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
/* Stepper Item                                                               */
/* -------------------------------------------------------------------------- */

export interface StepperItemProps extends useRender.ComponentProps<"div"> {
	step: number;
	completed?: boolean;
	disabled?: boolean;
	loading?: boolean;
}

function StepperItem({
	step,
	completed,
	disabled = false,
	loading = false,
	className,
	render,
	...props
}: StepperItemProps) {
	const {
		value,
		orientation,
		disabled: rootDisabled,
		registerStep,
	} = useStepper();

	React.useEffect(() => {
		return registerStep(step);
	}, [registerStep, step]);

	const state: StepperItemState = completed
		? "completed"
		: step < value
			? "completed"
			: step === value
				? "active"
				: "inactive";

	const isDisabled = disabled || rootDisabled;

	const itemContext = React.useMemo<StepperItemContextValue>(
		() => ({
			step,
			state,
			disabled: isDisabled,
			loading,
		}),
		[step, state, isDisabled, loading],
	);

	const defaultProps = {
		"data-slot": "stepper-item",
		"data-state": state,
		"data-orientation": orientation,
		"data-disabled": isDisabled ? "" : undefined,
		"data-loading": loading ? "" : undefined,
		className: cn(
			"group/stepper-item relative flex",
			orientation === "horizontal"
				? "items-center not-last:flex-1"
				: "flex-col items-start not-last:pb-8",
			className,
		),
	};

	const element = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});

	return (
		<StepperItemContext.Provider value={itemContext}>
			{element}
		</StepperItemContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Stepper Trigger                                                            */
/* -------------------------------------------------------------------------- */

export interface StepperTriggerProps
	extends useRender.ComponentProps<"button"> {}

function StepperTrigger({
	className,
	onClick,
	render,
	...props
}: StepperTriggerProps) {
	const { setValue, orientation } = useStepper();
	const { step, state, disabled, loading } = useStepperItem();

	const defaultProps = {
		type: "button" as const,
		role: "tab",
		"aria-selected": state === "active",
		"aria-current": state === "active" ? ("step" as const) : undefined,
		disabled,
		"data-slot": "stepper-trigger",
		"data-state": state,
		"data-orientation": orientation,
		"data-loading": loading ? "" : undefined,
		className: cn(
			"inline-flex items-center gap-3 rounded-md text-left transition-colors outline-none",
			"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
			"disabled:pointer-events-none disabled:opacity-50",
			className,
		),
		onClick: () => {
			if (!disabled) {
				setValue(step);
			}
		},
	};

	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(defaultProps, { onClick, ...props }),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Stepper Indicator                                                          */
/* -------------------------------------------------------------------------- */

export interface StepperIndicatorProps
	extends useRender.ComponentProps<"span"> {}

function StepperIndicator({
	className,
	children,
	render,
	...props
}: StepperIndicatorProps) {
	const { step, state, loading } = useStepperItem();

	const content = loading ? (
		<Loader2 className="animate-spin" />
	) : children ? (
		children
	) : state === "completed" ? (
		<Check />
	) : (
		step
	);

	const defaultProps = {
		"data-slot": "stepper-indicator",
		"data-state": state,
		"data-loading": loading ? "" : undefined,
		className: cn(
			"relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors",
			"[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
			state === "inactive" &&
				"border-border bg-background text-muted-foreground",
			(state === "active" || state === "completed") &&
				"border-primary bg-primary text-primary-foreground",
			className,
		),
		children: content,
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Stepper Separator                                                          */
/* -------------------------------------------------------------------------- */

export interface StepperSeparatorProps
	extends useRender.ComponentProps<"div"> {}

function StepperSeparator({
	className,
	render,
	...props
}: StepperSeparatorProps) {
	const { orientation } = useStepper();
	const itemContext = React.useContext(StepperItemContext);
	const state = itemContext?.state ?? "inactive";

	const defaultProps = {
		"aria-hidden": true,
		"data-slot": "stepper-separator",
		"data-state": state,
		"data-orientation": orientation,
		className: cn(
			"bg-border transition-colors data-[state=completed]:bg-primary",
			orientation === "horizontal"
				? "mx-3 h-px flex-1"
				: "absolute top-7 bottom-0 left-3.5 w-px -translate-x-1/2",
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
/* Stepper Title                                                              */
/* -------------------------------------------------------------------------- */

export interface StepperTitleProps extends useRender.ComponentProps<"div"> {}

function StepperTitle({ className, render, ...props }: StepperTitleProps) {
	const itemContext = React.useContext(StepperItemContext);
	const state = itemContext?.state;

	const defaultProps = {
		"data-slot": "stepper-title",
		"data-state": state,
		className: cn(
			"text-sm font-medium leading-snug text-foreground transition-colors",
			state === "inactive" && "text-muted-foreground",
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
/* Stepper Description                                                        */
/* -------------------------------------------------------------------------- */

export interface StepperDescriptionProps
	extends useRender.ComponentProps<"p"> {}

function StepperDescription({
	className,
	render,
	...props
}: StepperDescriptionProps) {
	const itemContext = React.useContext(StepperItemContext);
	const state = itemContext?.state;

	const defaultProps = {
		"data-slot": "stepper-description",
		"data-state": state,
		className: cn("text-xs text-muted-foreground", className),
	};

	return useRender({
		defaultTagName: "p",
		props: mergeProps<"p">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Stepper Content                                                            */
/* -------------------------------------------------------------------------- */

export interface StepperContentProps extends useRender.ComponentProps<"div"> {
	step?: number;
	forceMount?: boolean;
}

function StepperContent({
	step: stepProp,
	forceMount = false,
	className,
	render,
	...props
}: StepperContentProps) {
	const { value, registerStep } = useStepper();
	const itemContext = React.useContext(StepperItemContext);
	const resolvedStep = stepProp ?? itemContext?.step;

	React.useEffect(() => {
		if (resolvedStep !== undefined) {
			return registerStep(resolvedStep);
		}
	}, [registerStep, resolvedStep]);

	const isActive = resolvedStep === undefined || resolvedStep === value;

	const defaultProps = {
		role: "tabpanel",
		"data-slot": "stepper-content",
		"data-state": isActive ? "active" : "inactive",
		hidden: !isActive && !forceMount ? true : undefined,
		className: cn("w-full outline-none", className),
	};

	const element = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});

	if (!isActive && !forceMount) {
		return null;
	}

	return element;
}

/* -------------------------------------------------------------------------- */
/* Stepper Prev                                                               */
/* -------------------------------------------------------------------------- */

export interface StepperPrevProps extends useRender.ComponentProps<"button"> {}

function StepperPrev({
	className,
	disabled,
	onClick,
	render,
	...props
}: StepperPrevProps) {
	const { prevStep, isFirstStep, disabled: rootDisabled } = useStepper();
	const isDisabled = disabled ?? (rootDisabled || isFirstStep);

	const defaultProps = {
		type: "button" as const,
		disabled: isDisabled,
		"data-slot": "stepper-prev",
		className: cn(className),
		onClick: () => {
			if (!isDisabled) {
				prevStep();
			}
		},
	};

	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(defaultProps, { onClick, ...props }),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Stepper Next                                                               */
/* -------------------------------------------------------------------------- */

export interface StepperNextProps extends useRender.ComponentProps<"button"> {}

function StepperNext({
	className,
	disabled,
	onClick,
	render,
	...props
}: StepperNextProps) {
	const { nextStep, isLastStep, disabled: rootDisabled } = useStepper();
	const isDisabled = disabled ?? (rootDisabled || isLastStep);

	const defaultProps = {
		type: "button" as const,
		disabled: isDisabled,
		"data-slot": "stepper-next",
		className: cn(className),
		onClick: () => {
			if (!isDisabled) {
				nextStep();
			}
		},
	};

	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(defaultProps, { onClick, ...props }),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Stepper = Object.assign(StepperRoot, {
	Root: StepperRoot,
	List: StepperList,
	Item: StepperItem,
	Trigger: StepperTrigger,
	Indicator: StepperIndicator,
	Separator: StepperSeparator,
	Title: StepperTitle,
	Description: StepperDescription,
	Content: StepperContent,
	Prev: StepperPrev,
	Next: StepperNext,
});

export type StepperProps = StepperRootProps;

export {
	StepperRoot,
	StepperList,
	StepperItem,
	StepperTrigger,
	StepperIndicator,
	StepperSeparator,
	StepperTitle,
	StepperDescription,
	StepperContent,
	StepperPrev,
	StepperNext,
	useStepper,
	useStepperItem,
};
