"use client";

import * as React from "react";
import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";

/* -------------------------------------------------------------------------- */
/* Types & Context                                                            */
/* -------------------------------------------------------------------------- */

export type EditableOrientation = "horizontal" | "vertical";
export type EditableActivationMode = "click" | "dblclick" | "focus" | "none";
export type EditableSubmitMode = "both" | "enter" | "blur" | "none";
export type EditableSize = "sm" | "md" | "lg";

interface EditableContextValue {
	value: string;
	draftValue: string;
	setDraftValue: (value: string) => void;
	editing: boolean;
	isEmpty: boolean;
	disabled: boolean;
	readOnly: boolean;
	required: boolean;
	invalid: boolean;
	placeholder?: string;
	orientation: EditableOrientation;
	activationMode: EditableActivationMode;
	submitMode: EditableSubmitMode;
	selectOnFocus: boolean;
	maxLength?: number;
	inputId: string;
	labelId: string;
	inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
	startEditing: () => void;
	submit: () => void;
	cancel: () => void;
}

const EditableContext = React.createContext<EditableContextValue | undefined>(
	undefined,
);

function useEditable() {
	const context = React.useContext(EditableContext);
	if (!context) {
		throw new Error("useEditable must be used within an EditableRoot");
	}
	return context;
}

function mergeRefs<T>(
	...refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> {
	return (node) => {
		for (const ref of refs) {
			if (typeof ref === "function") {
				ref(node);
			} else if (ref && typeof ref === "object") {
				(ref as React.RefObject<T | null>).current = node;
			}
		}
	};
}

/* -------------------------------------------------------------------------- */
/* Editable Root                                                              */
/* -------------------------------------------------------------------------- */

export interface EditableRootProps
	extends Omit<useRender.ComponentProps<"div">, "defaultValue" | "onChange"> {
	/**
	 * The controlled committed value.
	 */
	value?: string;
	/**
	 * The initial committed value when uncontrolled.
	 */
	defaultValue?: string;
	/**
	 * Callback fired when the value is committed.
	 */
	onValueChange?: (value: string) => void;
	/**
	 * Callback fired when the draft value changes while editing.
	 */
	onDraftChange?: (value: string) => void;
	/**
	 * Callback fired when editing is cancelled.
	 */
	onCancel?: (value: string) => void;
	/**
	 * The controlled editing state.
	 */
	editing?: boolean;
	/**
	 * The initial editing state when uncontrolled.
	 */
	defaultEditing?: boolean;
	/**
	 * Callback fired when editing state changes.
	 */
	onEditingChange?: (editing: boolean) => void;
	/**
	 * Placeholder text shown when the value is empty.
	 */
	placeholder?: string;
	/**
	 * Layout orientation of the editable root.
	 */
	orientation?: EditableOrientation;
	/**
	 * How edit mode is activated from the preview.
	 */
	activationMode?: EditableActivationMode;
	/**
	 * How edits are submitted from the input.
	 */
	submitMode?: EditableSubmitMode;
	/**
	 * Whether to select all text when entering edit mode.
	 */
	selectOnFocus?: boolean;
	/**
	 * Whether the editable is disabled.
	 */
	disabled?: boolean;
	/**
	 * Whether the editable is read-only.
	 */
	readOnly?: boolean;
	/**
	 * Whether the editable is required.
	 */
	required?: boolean;
	/**
	 * Whether the editable is in an invalid state.
	 */
	invalid?: boolean;
	/**
	 * Maximum character length for the input.
	 */
	maxLength?: number;
	/**
	 * Optional form field name for submitting the committed value.
	 */
	name?: string;
}

function EditableRoot({
	value: controlledValue,
	defaultValue = "",
	onValueChange,
	onDraftChange,
	onCancel,
	editing: controlledEditing,
	defaultEditing = false,
	onEditingChange,
	placeholder,
	orientation = "horizontal",
	activationMode = "click",
	submitMode = "both",
	selectOnFocus = true,
	disabled = false,
	readOnly = false,
	required = false,
	invalid = false,
	maxLength,
	name,
	className,
	render,
	children,
	...props
}: EditableRootProps) {
	const [uncontrolledValue, setUncontrolledValue] =
		React.useState(defaultValue);
	const [uncontrolledEditing, setUncontrolledEditing] =
		React.useState(defaultEditing);

	const isValueControlled = controlledValue !== undefined;
	const value = isValueControlled ? controlledValue : uncontrolledValue;

	const isEditingControlled = controlledEditing !== undefined;
	const editing = isEditingControlled
		? controlledEditing
		: uncontrolledEditing;

	const [draftValue, setDraftValueState] = React.useState(value);

	const inputId = React.useId();
	const labelId = React.useId();
	const inputRef = React.useRef<
		HTMLInputElement | HTMLTextAreaElement | null
	>(null);

	React.useEffect(() => {
		if (!editing) {
			setDraftValueState(value);
		}
	}, [value, editing]);

	const setEditing = React.useCallback(
		(next: boolean) => {
			if (!isEditingControlled) {
				setUncontrolledEditing(next);
			}
			onEditingChange?.(next);
		},
		[isEditingControlled, onEditingChange],
	);

	const setDraftValue = React.useCallback(
		(next: string) => {
			setDraftValueState(next);
			onDraftChange?.(next);
		},
		[onDraftChange],
	);

	const startEditing = React.useCallback(() => {
		if (disabled || readOnly || editing) return;
		setDraftValueState(value);
		setEditing(true);
	}, [disabled, readOnly, editing, value, setEditing]);

	const submit = React.useCallback(() => {
		if (disabled || readOnly) return;
		if (!isValueControlled) {
			setUncontrolledValue(draftValue);
		}
		onValueChange?.(draftValue);
		setEditing(false);
	}, [
		disabled,
		readOnly,
		isValueControlled,
		draftValue,
		onValueChange,
		setEditing,
	]);

	const cancel = React.useCallback(() => {
		setDraftValueState(value);
		onCancel?.(value);
		setEditing(false);
	}, [value, onCancel, setEditing]);

	React.useEffect(() => {
		if (!editing) return;
		const el = inputRef.current;
		if (!el) return;
		el.focus();
		if (selectOnFocus) {
			el.select();
		}
	}, [editing, selectOnFocus]);

	const isEmpty = value.length === 0;

	const contextValue = React.useMemo<EditableContextValue>(
		() => ({
			value,
			draftValue,
			setDraftValue,
			editing,
			isEmpty,
			disabled,
			readOnly,
			required,
			invalid,
			placeholder,
			orientation,
			activationMode,
			submitMode,
			selectOnFocus,
			maxLength,
			inputId,
			labelId,
			inputRef,
			startEditing,
			submit,
			cancel,
		}),
		[
			value,
			draftValue,
			setDraftValue,
			editing,
			isEmpty,
			disabled,
			readOnly,
			required,
			invalid,
			placeholder,
			orientation,
			activationMode,
			submitMode,
			selectOnFocus,
			maxLength,
			inputId,
			labelId,
			startEditing,
			submit,
			cancel,
		],
	);

	const defaultProps: useRender.ElementProps<"div"> &
		Record<string, unknown> = {
		"data-slot": "editable",
		"data-orientation": orientation,
		"data-editing": editing ? "" : undefined,
		"data-disabled": disabled ? "" : undefined,
		"data-readonly": readOnly ? "" : undefined,
		"data-invalid": invalid ? "" : undefined,
		"data-placeholder-shown": isEmpty ? "" : undefined,
		className: cn(
			"group/editable flex w-full min-w-0 items-center gap-1.5",
			"data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
			className,
		),
		children: (
			<>
				{children}
				{name ? (
					<input type="hidden" name={name} value={value} />
				) : null}
			</>
		),
	};

	const element = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});

	return (
		<EditableContext.Provider value={contextValue}>
			{element}
		</EditableContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Editable Label                                                             */
/* -------------------------------------------------------------------------- */

export interface EditableLabelProps extends useRender.ComponentProps<"label"> {}

function EditableLabel({ className, render, ...props }: EditableLabelProps) {
	const { labelId, inputId, disabled, invalid, required } = useEditable();

	const defaultProps: useRender.ElementProps<"label"> &
		Record<string, unknown> = {
		id: labelId,
		htmlFor: inputId,
		"data-slot": "editable-label",
		"data-disabled": disabled ? "" : undefined,
		"data-invalid": invalid ? "" : undefined,
		"data-required": required ? "" : undefined,
		className: cn(
			"text-sm font-medium text-foreground select-none",
			"data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
			className,
		),
	};

	return useRender({
		defaultTagName: "label",
		props: mergeProps<"label">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Editable Area                                                              */
/* -------------------------------------------------------------------------- */

export interface EditableAreaProps extends useRender.ComponentProps<"div"> {}

function EditableArea({ className, render, ...props }: EditableAreaProps) {
	const { editing, disabled, readOnly, invalid, isEmpty } = useEditable();

	const defaultProps: useRender.ElementProps<"div"> &
		Record<string, unknown> = {
		"data-slot": "editable-area",
		"data-editing": editing ? "" : undefined,
		"data-disabled": disabled ? "" : undefined,
		"data-readonly": readOnly ? "" : undefined,
		"data-invalid": invalid ? "" : undefined,
		"data-placeholder-shown": isEmpty ? "" : undefined,
		className: cn("relative min-w-0 flex-1", className),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Editable Preview                                                           */
/* -------------------------------------------------------------------------- */

const sizeClasses: Record<EditableSize, string> = {
	sm: "min-h-7 px-2.5 text-xs",
	md: "min-h-8 px-3 text-sm",
	lg: "min-h-9 px-3.5 text-sm",
};

export interface EditablePreviewProps extends useRender.ComponentProps<"span"> {
	/**
	 * Visual size of the preview.
	 */
	size?: EditableSize;
}

function EditablePreview({
	size = "md",
	className,
	render,
	children,
	onClick,
	onDoubleClick,
	onFocus,
	onKeyDown,
	...props
}: EditablePreviewProps) {
	const {
		value,
		editing,
		isEmpty,
		disabled,
		readOnly,
		placeholder,
		activationMode,
		startEditing,
	} = useEditable();

	const canActivate = !disabled && !readOnly && activationMode !== "none";

	const handleClick: React.MouseEventHandler<HTMLSpanElement> = (e) => {
		onClick?.(e);
		if (e.defaultPrevented) return;
		if (activationMode === "click") {
			startEditing();
		}
	};

	const handleDoubleClick: React.MouseEventHandler<HTMLSpanElement> = (e) => {
		onDoubleClick?.(e);
		if (e.defaultPrevented) return;
		if (activationMode === "dblclick") {
			startEditing();
		}
	};

	const handleFocus: React.FocusEventHandler<HTMLSpanElement> = (e) => {
		onFocus?.(e);
		if (e.defaultPrevented) return;
		if (activationMode === "focus") {
			startEditing();
		}
	};

	const handleKeyDown: React.KeyboardEventHandler<HTMLSpanElement> = (e) => {
		onKeyDown?.(e);
		if (e.defaultPrevented || !canActivate) return;
		if (e.key === "Enter" || e.key === " " || e.key === "F2") {
			e.preventDefault();
			startEditing();
		}
	};

	const defaultProps: useRender.ElementProps<"span"> &
		Record<string, unknown> = {
		hidden: editing,
		tabIndex: canActivate ? 0 : undefined,
		role: canActivate ? "button" : undefined,
		"aria-disabled": disabled || undefined,
		"aria-readonly": readOnly || undefined,
		"data-slot": "editable-preview",
		"data-size": size,
		"data-placeholder-shown": isEmpty ? "" : undefined,
		"data-disabled": disabled ? "" : undefined,
		"data-readonly": readOnly ? "" : undefined,
		onClick: handleClick,
		onDoubleClick: handleDoubleClick,
		onFocus: handleFocus,
		onKeyDown: handleKeyDown,
		className: cn(
			"flex w-full min-w-0 items-center rounded-md border border-transparent bg-transparent py-1 text-foreground transition-colors outline-none",
			"focus-visible:ring-2 focus-visible:ring-ring/50",
			canActivate && "cursor-text hover:border-input hover:bg-muted/40",
			"data-[placeholder-shown]:text-muted-foreground",
			"data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
			"data-[readonly]:cursor-default",
			"group-data-[orientation=vertical]/editable:items-start group-data-[orientation=vertical]/editable:min-h-16 group-data-[orientation=vertical]/editable:py-2",
			"[[hidden]]:hidden!",
			sizeClasses[size],
			className,
		),
		children: children ?? (isEmpty ? placeholder : value),
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Editable Input                                                             */
/* -------------------------------------------------------------------------- */

export interface EditableInputProps
	extends Omit<useRender.ComponentProps<"input">, "size"> {
	/**
	 * Visual size of the input.
	 */
	size?: EditableSize;
	/**
	 * Render as a multiline textarea by default.
	 */
	multiline?: boolean;
	/**
	 * Number of visible text lines when `multiline` is true.
	 */
	rows?: number;
}

function EditableInput({
	size = "md",
	multiline = false,
	className,
	render,
	ref,
	onChange,
	onKeyDown,
	onBlur,
	"aria-label": ariaLabel,
	"aria-labelledby": ariaLabelledBy,
	...props
}: EditableInputProps) {
	const {
		draftValue,
		setDraftValue,
		editing,
		disabled,
		readOnly,
		required,
		invalid,
		placeholder,
		submitMode,
		maxLength,
		inputId,
		labelId,
		inputRef,
		submit,
		cancel,
	} = useEditable();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		onChange?.(e as React.ChangeEvent<HTMLInputElement>);
		if (e.defaultPrevented) return;
		setDraftValue(e.target.value);
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		onKeyDown?.(e as React.KeyboardEvent<HTMLInputElement>);
		if (e.defaultPrevented) return;

		if (e.key === "Escape") {
			e.preventDefault();
			cancel();
			return;
		}

		const isTextarea =
			multiline || e.currentTarget.tagName.toLowerCase() === "textarea";
		const shouldSubmitOnEnter =
			submitMode === "enter" || submitMode === "both";

		if (
			e.key === "Enter" &&
			shouldSubmitOnEnter &&
			(!isTextarea || e.metaKey || e.ctrlKey)
		) {
			e.preventDefault();
			submit();
		}
	};

	const handleBlur = (
		e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		onBlur?.(e as React.FocusEvent<HTMLInputElement>);
		if (e.defaultPrevented) return;

		if (submitMode === "blur" || submitMode === "both") {
			submit();
		}
	};

	const ariaProps =
		ariaLabel === undefined && ariaLabelledBy === undefined
			? { "aria-labelledby": labelId }
			: { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy };

	const defaultProps: useRender.ElementProps<"input"> &
		Record<string, unknown> = {
		id: inputId,
		ref: mergeRefs(inputRef, ref),
		hidden: !editing,
		value: draftValue,
		disabled,
		readOnly,
		required,
		maxLength,
		placeholder,
		autoCapitalize: "off",
		autoComplete: "off",
		autoCorrect: "off",
		spellCheck: false,
		"aria-invalid": invalid || undefined,
		"data-slot": "editable-input",
		"data-size": size,
		onChange: handleChange,
		onKeyDown: handleKeyDown,
		onBlur: handleBlur,
		...ariaProps,
		className: cn(
			"flex w-full min-w-0 rounded-md border border-input bg-background py-1 text-foreground shadow-xs transition-[color,box-shadow] outline-none",
			"placeholder:text-muted-foreground",
			"focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50",
			"aria-invalid:border-destructive aria-invalid:ring-destructive/20",
			"disabled:cursor-not-allowed disabled:opacity-50",
			"group-data-[orientation=vertical]/editable:min-h-16 group-data-[orientation=vertical]/editable:py-2",
			"[[hidden]]:hidden!",
			sizeClasses[size],
			className,
		),
	};

	return useRender({
		defaultTagName: multiline ? ("textarea" as "input") : "input",
		props: mergeProps<"input">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Editable Control & Triggers                                                */
/* -------------------------------------------------------------------------- */

export interface EditableControlProps extends useRender.ComponentProps<"div"> {}

function EditableControl({
	className,
	render,
	...props
}: EditableControlProps) {
	const { editing } = useEditable();

	const defaultProps: useRender.ElementProps<"div"> &
		Record<string, unknown> = {
		"data-slot": "editable-control",
		"data-editing": editing ? "" : undefined,
		className: cn(
			"flex shrink-0 items-center gap-1",
			"group-data-[orientation=vertical]/editable:self-end",
			className,
		),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

export interface EditableEditTriggerProps
	extends useRender.ComponentProps<"button"> {}

function EditableEditTrigger({
	className,
	render,
	onClick,
	disabled: propDisabled,
	...props
}: EditableEditTriggerProps) {
	const { editing, disabled, readOnly, startEditing } = useEditable();

	const defaultProps: useRender.ElementProps<"button"> &
		Record<string, unknown> = {
		type: "button",
		hidden: editing,
		disabled: propDisabled ?? (disabled || readOnly),
		"data-slot": "editable-edit-trigger",
		onClick: (e) => {
			onClick?.(e);
			if (!e.defaultPrevented) {
				startEditing();
			}
		},
		className: cn("[[hidden]]:hidden!", className),
	};

	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(defaultProps, props),
		render,
	});
}

export interface EditableSubmitTriggerProps
	extends useRender.ComponentProps<"button"> {}

function EditableSubmitTrigger({
	className,
	render,
	onClick,
	onMouseDown,
	disabled: propDisabled,
	...props
}: EditableSubmitTriggerProps) {
	const { editing, disabled, readOnly, submit } = useEditable();

	const defaultProps: useRender.ElementProps<"button"> &
		Record<string, unknown> = {
		type: "button",
		hidden: !editing,
		disabled: propDisabled ?? (disabled || readOnly),
		"data-slot": "editable-submit-trigger",
		// Prevent input blur from firing before click
		onMouseDown: (e) => {
			e.preventDefault();
			onMouseDown?.(e);
		},
		onClick: (e) => {
			onClick?.(e);
			if (!e.defaultPrevented) {
				submit();
			}
		},
		className: cn("[[hidden]]:hidden!", className),
	};

	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(defaultProps, props),
		render,
	});
}

export interface EditableCancelTriggerProps
	extends useRender.ComponentProps<"button"> {}

function EditableCancelTrigger({
	className,
	render,
	onClick,
	onMouseDown,
	disabled: propDisabled,
	...props
}: EditableCancelTriggerProps) {
	const { editing, disabled, cancel } = useEditable();

	const defaultProps: useRender.ElementProps<"button"> &
		Record<string, unknown> = {
		type: "button",
		hidden: !editing,
		disabled: propDisabled ?? disabled,
		"data-slot": "editable-cancel-trigger",
		// Prevent input blur from firing before click
		onMouseDown: (e) => {
			e.preventDefault();
			onMouseDown?.(e);
		},
		onClick: (e) => {
			onClick?.(e);
			if (!e.defaultPrevented) {
				cancel();
			}
		},
		className: cn("[[hidden]]:hidden!", className),
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

export const Editable = Object.assign(EditableRoot, {
	Root: EditableRoot,
	Label: EditableLabel,
	Area: EditableArea,
	Preview: EditablePreview,
	Input: EditableInput,
	Control: EditableControl,
	EditTrigger: EditableEditTrigger,
	SubmitTrigger: EditableSubmitTrigger,
	CancelTrigger: EditableCancelTrigger,
});

export type EditableProps = EditableRootProps;

export {
	EditableRoot,
	EditableLabel,
	EditableArea,
	EditablePreview,
	EditableInput,
	EditableControl,
	EditableEditTrigger,
	EditableSubmitTrigger,
	EditableCancelTrigger,
	useEditable,
};
