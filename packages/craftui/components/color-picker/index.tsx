"use client";

import * as React from "react";
import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";
import {
	Check,
	ChevronDown,
	ChevronsUpDown,
	Copy,
	Pipette,
} from "lucide-react";
import {
	PopoverContent,
	PopoverRoot,
	PopoverTrigger,
} from "@craftdotui/baseui/components/popover";
import {
	clamp,
	formatColor,
	getContrastColor,
	hexToHsv,
	hslToHsv,
	hsvToHsl,
	hsvToRgb,
	isEqualColor,
	parseColor,
	round,
	rgbToHsv,
	type ColorFormat,
	type HslColor,
	type HsvColor,
	type RgbColor,
} from "./color-utils";

/* -------------------------------------------------------------------------- */
/* Constants & Helpers                                                        */
/* -------------------------------------------------------------------------- */

export const DEFAULT_COLOR_SWATCHES = [
	"#ef4444", // red
	"#f97316", // orange
	"#f59e0b", // amber
	"#84cc16", // lime
	"#10b981", // emerald
	"#06b6d4", // cyan
	"#3b82f6", // blue
	"#6366f1", // indigo
	"#8b5cf6", // violet
	"#d946ef", // fuchsia
	"#ec4899", // pink
	"#f43f5e", // rose
	"#ffffff", // white
	"#94a3b8", // slate-400
	"#475569", // slate-600
	"#000000", // black
];

const CHECKERBOARD_STYLE: React.CSSProperties = {
	backgroundImage:
		"repeating-conic-gradient(rgba(128, 128, 128, 0.25) 0% 25%, transparent 0% 50%)",
	backgroundSize: "8px 8px",
};

interface EyeDropperInstance {
	open: (options?: { signal?: AbortSignal }) => Promise<{ sRGBHex: string }>;
}

type EyeDropperConstructor = new () => EyeDropperInstance;

/* -------------------------------------------------------------------------- */
/* Context                                                                    */
/* -------------------------------------------------------------------------- */

interface ColorPickerContextValue {
	hsv: HsvColor;
	setHsv: (hsv: HsvColor) => void;
	format: ColorFormat;
	setFormat: (format: ColorFormat) => void;
	colorString: string;
	disabled: boolean;
	openEyeDropper: () => Promise<void>;
	eyeDropperSupported: boolean;
	updateColor: (newHsv: HsvColor) => void;
	isInline: boolean;
	popoverOpen: boolean;
	setPopoverOpen: (open: boolean) => void;
	showAlpha: boolean;
}

const ColorPickerContext = React.createContext<ColorPickerContextValue | null>(
	null,
);

function useColorPicker() {
	const context = React.useContext(ColorPickerContext);
	if (!context) {
		throw new Error(
			"ColorPicker subcomponents must be used within a ColorPickerRoot",
		);
	}
	return context;
}

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

export const colorPickerVariants = cva("relative flex flex-col gap-3", {
	variants: {
		size: {
			sm: "w-56 text-xs",
			default: "w-64 text-sm",
			lg: "w-72 text-base",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

/* -------------------------------------------------------------------------- */
/* ColorPicker Root                                                           */
/* -------------------------------------------------------------------------- */

export interface ColorPickerRootProps
	extends Omit<
			useRender.ComponentProps<"div">,
			"value" | "defaultValue" | "onChange"
		>,
		VariantProps<typeof colorPickerVariants> {
	value?: string;
	defaultValue?: string;
	onValueChange?: (color: string) => void;
	onChange?: (color: string) => void;
	format?: ColorFormat;
	defaultFormat?: ColorFormat;
	onFormatChange?: (format: ColorFormat) => void;
	disabled?: boolean;
	inline?: boolean;
	swatches?: string[];
	showEyeDropper?: boolean;
	showFormatSelector?: boolean;
	showAlpha?: boolean;
	showSwatches?: boolean;
	showPreview?: boolean;
	children?: React.ReactNode;
}

interface ColorPickerInlineRootProps extends useRender.ComponentProps<"div"> {
	defaultContent: React.ReactNode;
	children?: React.ReactNode;
}

function ColorPickerInlineRoot({
	className,
	render,
	children,
	defaultContent,
	...props
}: ColorPickerInlineRootProps) {
	const defaultProps = {
		"data-slot": "color-picker",
		className: cn(colorPickerVariants(), className),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render: (renderProps) => (
			<div {...renderProps}>
				{children || (
					<ColorPickerContent className="border-0 p-0 shadow-none">
						{defaultContent}
					</ColorPickerContent>
				)}
			</div>
		),
	});
}

function ColorPickerPopoverRoot({
	children,
	defaultContent,
}: {
	children?: React.ReactNode;
	defaultContent: React.ReactNode;
}) {
	const { popoverOpen, setPopoverOpen } = useColorPicker();

	return (
		<PopoverRoot open={popoverOpen} onOpenChange={setPopoverOpen}>
			{children || (
				<>
					<ColorPickerTrigger />
					<ColorPickerContent>{defaultContent}</ColorPickerContent>
				</>
			)}
		</PopoverRoot>
	);
}

function ColorPickerRoot({
	value: controlledValue,
	defaultValue = "#3b82f6",
	onValueChange,
	onChange,
	format: controlledFormat,
	defaultFormat = "hex",
	onFormatChange,
	disabled = false,
	inline = true,
	swatches = DEFAULT_COLOR_SWATCHES,
	showEyeDropper = true,
	showFormatSelector = true,
	showAlpha = true,
	showSwatches = true,
	showPreview = true,
	className,
	render,
	children,
	...props
}: ColorPickerRootProps) {
	const [uncontrolledHsv, setUncontrolledHsv] = React.useState<HsvColor>(() =>
		parseColor(controlledValue ?? defaultValue),
	);
	const [uncontrolledFormat, setUncontrolledFormat] =
		React.useState<ColorFormat>(defaultFormat);
	const [popoverOpen, setPopoverOpen] = React.useState(false);

	const isFormatControlled = controlledFormat !== undefined;
	const activeFormat = isFormatControlled
		? controlledFormat
		: uncontrolledFormat;

	const isControlled = controlledValue !== undefined;
	const currentHsv = isControlled
		? parseColor(controlledValue)
		: uncontrolledHsv;

	const colorString = formatColor(currentHsv, activeFormat);

	// Synchronize format change
	const handleFormatChange = React.useCallback(
		(newFormat: ColorFormat) => {
			if (!isFormatControlled) {
				setUncontrolledFormat(newFormat);
			}
			onFormatChange?.(newFormat);
		},
		[isFormatControlled, onFormatChange],
	);

	// Synchronize color change
	const updateColor = React.useCallback(
		(newHsv: HsvColor) => {
			if (disabled) return;
			if (!isControlled) {
				setUncontrolledHsv(newHsv);
			}
			const formatted = formatColor(newHsv, activeFormat);
			onValueChange?.(formatted);
			onChange?.(formatted);
		},
		[disabled, isControlled, activeFormat, onValueChange, onChange],
	);

	// EyeDropper API Detection & Handler
	const [eyeDropperSupported, setEyeDropperSupported] = React.useState(false);

	React.useEffect(() => {
		if (
			typeof window !== "undefined" &&
			"EyeDropper" in window &&
			typeof (window as unknown as { EyeDropper?: EyeDropperConstructor })
				.EyeDropper === "function"
		) {
			setEyeDropperSupported(true);
		}
	}, []);

	const openEyeDropper = React.useCallback(async () => {
		if (!eyeDropperSupported || disabled) return;
		try {
			const EyeDropperClass = (
				window as unknown as { EyeDropper: EyeDropperConstructor }
			).EyeDropper;
			const dropper = new EyeDropperClass();
			const result = await dropper.open();
			if (result?.sRGBHex) {
				const parsed = parseColor(result.sRGBHex);
				updateColor({ ...parsed, a: currentHsv.a });
			}
		} catch {
			// User canceled selection or abort
		}
	}, [eyeDropperSupported, disabled, currentHsv.a, updateColor]);

	const contextValue = React.useMemo<ColorPickerContextValue>(
		() => ({
			hsv: currentHsv,
			setHsv: updateColor,
			format: activeFormat,
			setFormat: handleFormatChange,
			colorString,
			disabled,
			openEyeDropper,
			eyeDropperSupported,
			updateColor,
			isInline: inline,
			popoverOpen,
			setPopoverOpen,
			showAlpha,
		}),
		[
			currentHsv,
			updateColor,
			activeFormat,
			handleFormatChange,
			colorString,
			disabled,
			openEyeDropper,
			eyeDropperSupported,
			inline,
			popoverOpen,
			showAlpha,
		],
	);

	// Default compound composition when no children passed
	const defaultContent = (
		<>
			<ColorPickerCanvas />
			<div className="flex items-center gap-2">
				{showEyeDropper && <ColorPickerEyeDropper />}
				<div className="flex flex-1 flex-col gap-2">
					<ColorPickerHueSlider />
					{showAlpha && <ColorPickerAlphaSlider />}
				</div>
				{showPreview && <ColorPickerPreview />}
			</div>
			{showFormatSelector && (
				<ColorPickerInputs
					showFormatSelector={showFormatSelector}
					showAlpha={showAlpha}
				/>
			)}
			{showSwatches && (
				<ColorPickerSwatches
					swatches={swatches}
					onSelect={(c) => {
						const parsed = parseColor(c);
						updateColor(parsed);
					}}
				/>
			)}
		</>
	);

	return (
		<ColorPickerContext.Provider value={contextValue}>
			{inline ? (
				<ColorPickerInlineRoot
					defaultContent={defaultContent}
					className={className}
					render={render}
					{...props}
				>
					{children}
				</ColorPickerInlineRoot>
			) : (
				<ColorPickerPopoverRoot defaultContent={defaultContent}>
					{children}
				</ColorPickerPopoverRoot>
			)}
		</ColorPickerContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* ColorPicker Trigger (Popover Mode)                                         */
/* -------------------------------------------------------------------------- */

export interface ColorPickerTriggerProps
	extends useRender.ComponentProps<"button"> {
	showValue?: boolean;
	placeholder?: string;
}

function ColorPickerTrigger({
	showValue = true,
	placeholder = "Select color",
	className,
	render,
	...props
}: ColorPickerTriggerProps) {
	const { colorString, disabled } = useColorPicker();

	const defaultProps = {
		type: "button" as const,
		"data-slot": "color-picker-trigger",
		disabled,
		className: cn(
			"inline-flex h-8 items-center gap-2 rounded-md border border-input bg-background px-2.5 text-xs font-medium text-foreground shadow-xs transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
			className,
		),
	};

	return (
		<PopoverTrigger
			disabled={disabled}
			render={useRender({
				defaultTagName: "button",
				props: mergeProps<"button">(defaultProps, props),
				render,
			})}
		>
			<span
				className="relative size-4 shrink-0 rounded border border-border overflow-hidden"
				style={CHECKERBOARD_STYLE}
			>
				<span
					className="absolute inset-0"
					style={{ backgroundColor: colorString }}
				/>
			</span>
			{showValue ? (
				<span className="font-mono text-xs">{colorString}</span>
			) : (
				<span>{placeholder}</span>
			)}
			<ChevronDown className="ml-auto size-3.5 text-muted-foreground" />
		</PopoverTrigger>
	);
}

/* -------------------------------------------------------------------------- */
/* ColorPicker Content                                                        */
/* -------------------------------------------------------------------------- */

export interface ColorPickerContentProps
	extends useRender.ComponentProps<"div"> {
	align?: "start" | "center" | "end";
	sideOffset?: number;
	children?: React.ReactNode;
}

function ColorPickerPopoverContent({
	align = "start",
	sideOffset = 8,
	className,
	children,
	...props
}: ColorPickerContentProps) {
	return (
		<PopoverContent
			data-slot="color-picker-content"
			hasArrow={false}
			positionerProps={{ align, sideOffset }}
			className={cn("w-64 space-y-3 p-3", className)}
			{...props}
		>
			{children}
		</PopoverContent>
	);
}

function ColorPickerInlineContent({
	className,
	render,
	children,
	...props
}: ColorPickerContentProps) {
	const defaultProps = {
		"data-slot": "color-picker-content",
		className: cn(
			"w-64 space-y-3 rounded-lg border border-border bg-card p-3 text-card-foreground shadow-xs",
			className,
		),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render: (renderProps) => <div {...renderProps}>{children}</div>,
	});
}

function ColorPickerContent(props: ColorPickerContentProps) {
	const { isInline } = useColorPicker();

	if (!isInline) {
		return <ColorPickerPopoverContent {...props} />;
	}
	return <ColorPickerInlineContent {...props} />;
}

/* -------------------------------------------------------------------------- */
/* ColorPicker 2D Canvas Area                                                 */
/* -------------------------------------------------------------------------- */

export interface ColorPickerCanvasProps
	extends useRender.ComponentProps<"div"> {}

function ColorPickerCanvas({
	className,
	render,
	...props
}: ColorPickerCanvasProps) {
	const { hsv, updateColor, disabled } = useColorPicker();
	const containerRef = React.useRef<HTMLDivElement>(null);

	const handlePointer = React.useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			if (disabled || !containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const s = clamp((e.clientX - rect.left) / rect.width, 0, 1);
			const v = clamp(1 - (e.clientY - rect.top) / rect.height, 0, 1);
			updateColor({ ...hsv, s: round(s, 4), v: round(v, 4) });
		},
		[disabled, hsv, updateColor],
	);

	const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		if (disabled) return;
		e.currentTarget.setPointerCapture(e.pointerId);
		handlePointer(e);
	};

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (e.buttons === 0) return;
		handlePointer(e);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (disabled) return;
		const step = e.shiftKey ? 0.1 : 0.01;
		let handled = false;
		let s = hsv.s;
		let v = hsv.v;

		switch (e.key) {
			case "ArrowLeft":
				s = clamp(s - step, 0, 1);
				handled = true;
				break;
			case "ArrowRight":
				s = clamp(s + step, 0, 1);
				handled = true;
				break;
			case "ArrowDown":
				v = clamp(v - step, 0, 1);
				handled = true;
				break;
			case "ArrowUp":
				v = clamp(v + step, 0, 1);
				handled = true;
				break;
			case "Home":
				s = 0;
				handled = true;
				break;
			case "End":
				s = 1;
				handled = true;
				break;
			case "PageUp":
				v = 1;
				handled = true;
				break;
			case "PageDown":
				v = 0;
				handled = true;
				break;
		}

		if (handled) {
			e.preventDefault();
			updateColor({ ...hsv, s: round(s, 4), v: round(v, 4) });
		}
	};

	const defaultProps = {
		ref: containerRef,
		role: "slider",
		tabIndex: disabled ? -1 : 0,
		"aria-label": "Saturation and Brightness",
		"aria-valuetext": `Saturation ${Math.round(hsv.s * 100)}%, Brightness ${Math.round(hsv.v * 100)}%`,
		"data-slot": "color-picker-canvas",
		onPointerDown: handlePointerDown,
		onPointerMove: handlePointerMove,
		onKeyDown: handleKeyDown,
		style: {
			backgroundColor: `hsl(${hsv.h}, 100%, 50%)`,
			backgroundImage:
				"linear-gradient(to top, #000000, transparent), linear-gradient(to right, #ffffff, transparent)",
		},
		className: cn(
			"relative h-36 w-full cursor-crosshair rounded-md border border-border select-none touch-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
			disabled && "cursor-not-allowed opacity-50",
			className,
		),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render: (renderProps) => (
			<div {...renderProps}>
				{/* Draggable thumb */}
				<div
					data-slot="color-picker-canvas-thumb"
					style={{
						left: `${hsv.s * 100}%`,
						top: `${(1 - hsv.v) * 100}%`,
					}}
					className="pointer-events-none absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md ring-1 ring-black/40"
				/>
			</div>
		),
	});
}

/* -------------------------------------------------------------------------- */
/* ColorPicker 1D Hue Slider                                                  */
/* -------------------------------------------------------------------------- */

export interface ColorPickerHueSliderProps
	extends useRender.ComponentProps<"div"> {}

function ColorPickerHueSlider({
	className,
	render,
	...props
}: ColorPickerHueSliderProps) {
	const { hsv, updateColor, disabled } = useColorPicker();
	const containerRef = React.useRef<HTMLDivElement>(null);

	const handlePointer = React.useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			if (disabled || !containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const h = clamp((e.clientX - rect.left) / rect.width, 0, 1) * 360;
			updateColor({ ...hsv, h: round(h, 1) });
		},
		[disabled, hsv, updateColor],
	);

	const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		if (disabled) return;
		e.currentTarget.setPointerCapture(e.pointerId);
		handlePointer(e);
	};

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (e.buttons === 0) return;
		handlePointer(e);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (disabled) return;
		const step = e.shiftKey ? 10 : 1;
		let handled = false;
		let h = hsv.h;

		switch (e.key) {
			case "ArrowLeft":
			case "ArrowDown":
				h = (h - step + 360) % 360;
				handled = true;
				break;
			case "ArrowRight":
			case "ArrowUp":
				h = (h + step) % 360;
				handled = true;
				break;
			case "Home":
				h = 0;
				handled = true;
				break;
			case "End":
				h = 360;
				handled = true;
				break;
		}

		if (handled) {
			e.preventDefault();
			updateColor({ ...hsv, h: round(h, 1) });
		}
	};

	const defaultProps = {
		ref: containerRef,
		role: "slider",
		tabIndex: disabled ? -1 : 0,
		"aria-label": "Hue",
		"aria-valuemin": 0,
		"aria-valuemax": 360,
		"aria-valuenow": Math.round(hsv.h),
		"aria-valuetext": `${Math.round(hsv.h)} degrees`,
		"data-slot": "color-picker-hue-slider",
		onPointerDown: handlePointerDown,
		onPointerMove: handlePointerMove,
		onKeyDown: handleKeyDown,
		style: {
			background:
				"linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)",
		},
		className: cn(
			"relative h-3 w-full cursor-pointer rounded-full border border-border/50 select-none touch-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
			disabled && "cursor-not-allowed opacity-50",
			className,
		),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render: (renderProps) => (
			<div {...renderProps}>
				<div
					data-slot="color-picker-hue-slider-thumb"
					style={{
						left: `${(hsv.h / 360) * 100}%`,
						backgroundColor: `hsl(${hsv.h}, 100%, 50%)`,
					}}
					className="pointer-events-none absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md ring-1 ring-black/40"
				/>
			</div>
		),
	});
}

/* -------------------------------------------------------------------------- */
/* ColorPicker 1D Alpha Transparency Slider                                   */
/* -------------------------------------------------------------------------- */

export interface ColorPickerAlphaSliderProps
	extends useRender.ComponentProps<"div"> {}

function ColorPickerAlphaSlider({
	className,
	render,
	...props
}: ColorPickerAlphaSliderProps) {
	const { hsv, updateColor, disabled } = useColorPicker();
	const containerRef = React.useRef<HTMLDivElement>(null);

	const rgb = hsvToRgb(hsv);
	const rgbOpaque = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
	const alphaPercent = Math.round(hsv.a * 100);

	const handlePointer = React.useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			if (disabled || !containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const a = clamp((e.clientX - rect.left) / rect.width, 0, 1);
			updateColor({ ...hsv, a: round(a, 3) });
		},
		[disabled, hsv, updateColor],
	);

	const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		if (disabled) return;
		e.currentTarget.setPointerCapture(e.pointerId);
		handlePointer(e);
	};

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (e.buttons === 0) return;
		handlePointer(e);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (disabled) return;
		const step = e.shiftKey ? 0.1 : 0.01;
		let handled = false;
		let a = hsv.a;

		switch (e.key) {
			case "ArrowLeft":
			case "ArrowDown":
				a = clamp(a - step, 0, 1);
				handled = true;
				break;
			case "ArrowRight":
			case "ArrowUp":
				a = clamp(a + step, 0, 1);
				handled = true;
				break;
			case "Home":
				a = 0;
				handled = true;
				break;
			case "End":
				a = 1;
				handled = true;
				break;
		}

		if (handled) {
			e.preventDefault();
			updateColor({ ...hsv, a: round(a, 3) });
		}
	};

	const defaultProps = {
		ref: containerRef,
		role: "slider",
		tabIndex: disabled ? -1 : 0,
		"aria-label": "Alpha transparency",
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-valuenow": alphaPercent,
		"aria-valuetext": `${alphaPercent}%`,
		"data-slot": "color-picker-alpha-slider",
		onPointerDown: handlePointerDown,
		onPointerMove: handlePointerMove,
		onKeyDown: handleKeyDown,
		style: {
			backgroundImage: `
				linear-gradient(to right, transparent, ${rgbOpaque}),
				repeating-conic-gradient(rgba(128, 128, 128, 0.25) 0% 25%, transparent 0% 50%)
			`,
			backgroundSize: "100% 100%, 8px 8px",
		},
		className: cn(
			"relative h-3 w-full cursor-pointer rounded-full border border-border/50 select-none touch-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
			disabled && "cursor-not-allowed opacity-50",
			className,
		),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render: (renderProps) => (
			<div {...renderProps}>
				<div
					data-slot="color-picker-alpha-slider-thumb"
					style={{
						left: `${hsv.a * 100}%`,
						backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${hsv.a})`,
					}}
					className="pointer-events-none absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md ring-1 ring-black/40"
				/>
			</div>
		),
	});
}

/* -------------------------------------------------------------------------- */
/* ColorPicker Eyedropper Button                                              */
/* -------------------------------------------------------------------------- */

export interface ColorPickerEyeDropperProps
	extends useRender.ComponentProps<"button"> {}

function ColorPickerEyeDropper({
	className,
	render,
	...props
}: ColorPickerEyeDropperProps) {
	const { openEyeDropper, eyeDropperSupported, disabled } = useColorPicker();

	const defaultProps = {
		type: "button" as const,
		disabled: disabled || !eyeDropperSupported,
		"data-slot": "color-picker-eyedropper",
		"aria-label": "Sample color with eyedropper",
		title: eyeDropperSupported
			? "Pick color from screen"
			: "EyeDropper not supported in this browser",
		onClick: () => {
			openEyeDropper();
		},
		className: cn(
			"inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-input bg-background text-foreground shadow-xs transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40",
			className,
		),
	};

	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(defaultProps, props),
		render: (renderProps) => (
			<button {...renderProps}>
				<Pipette className="size-4" />
			</button>
		),
	});
}

/* -------------------------------------------------------------------------- */
/* ColorPicker Preview                                                        */
/* -------------------------------------------------------------------------- */

export interface ColorPickerPreviewProps
	extends useRender.ComponentProps<"div"> {
	copyable?: boolean;
}

function ColorPickerPreview({
	copyable = true,
	className,
	render,
	...props
}: ColorPickerPreviewProps) {
	const { colorString } = useColorPicker();
	const [copied, setCopied] = React.useState(false);

	const handleCopy = async () => {
		if (!copyable || typeof navigator === "undefined") return;
		try {
			await navigator.clipboard.writeText(colorString);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {
			// Clipboard write failed
		}
	};

	const defaultProps = {
		"data-slot": "color-picker-preview",
		title: copyable ? "Click to copy color value" : undefined,
		role: copyable ? "button" : undefined,
		tabIndex: copyable ? 0 : undefined,
		onClick: copyable ? handleCopy : undefined,
		onKeyDown: copyable
			? (e: React.KeyboardEvent<HTMLDivElement>) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						handleCopy();
					}
				}
			: undefined,
		style: CHECKERBOARD_STYLE,
		className: cn(
			"relative size-8 shrink-0 cursor-pointer overflow-hidden rounded-md border border-border shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
			!copyable && "cursor-default",
			className,
		),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render: (renderProps) => (
			<div {...renderProps}>
				<div
					className="absolute inset-0"
					style={{ backgroundColor: colorString }}
				/>
				{copyable && (
					<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100 bg-black/30 text-white">
						{copied ? (
							<Check className="size-3.5" />
						) : (
							<Copy className="size-3.5" />
						)}
					</div>
				)}
			</div>
		),
	});
}

/* -------------------------------------------------------------------------- */
/* ColorPicker Format Switcher & Channel Inputs                               */
/* -------------------------------------------------------------------------- */

export interface ColorPickerInputsProps
	extends useRender.ComponentProps<"div"> {
	showFormatSelector?: boolean;
	showAlpha?: boolean;
}

const FORMAT_CYCLE: Record<ColorFormat, ColorFormat> = {
	hex: "rgb",
	rgb: "hsl",
	hsl: "hsv",
	hsv: "hex",
};

function ColorPickerInputs({
	showFormatSelector = true,
	showAlpha = true,
	className,
	render,
	...props
}: ColorPickerInputsProps) {
	const { hsv, updateColor, format, setFormat, disabled } = useColorPicker();

	// Local input states for smooth typing
	const [hexInput, setHexInput] = React.useState(() =>
		formatColor(hsv, "hex"),
	);

	React.useEffect(() => {
		setHexInput(formatColor(hsv, "hex"));
	}, [hsv]);

	const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const raw = e.target.value;
		setHexInput(raw);
		const parsed = hexToHsv(raw);
		if (parsed) {
			updateColor({ ...parsed, a: hsv.a });
		}
	};

	const handleHexBlur = () => {
		setHexInput(formatColor(hsv, "hex"));
	};

	const rgb = hsvToRgb(hsv);
	const hsl = hsvToHsl(hsv);

	const defaultProps = {
		"data-slot": "color-picker-inputs",
		className: cn("flex items-center gap-1.5", className),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render: (renderProps) => (
			<div {...renderProps}>
				{showFormatSelector && (
					<button
						type="button"
						disabled={disabled}
						onClick={() => setFormat(FORMAT_CYCLE[format])}
						className="inline-flex h-8 items-center gap-0.5 rounded-md border border-input bg-background px-1.5 font-mono text-[11px] font-semibold uppercase text-muted-foreground shadow-xs hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
						title="Switch color format"
					>
						<span>{format}</span>
						<ChevronsUpDown className="size-3 opacity-60" />
					</button>
				)}

				{format === "hex" && (
					<div className="flex-1">
						<input
							type="text"
							disabled={disabled}
							value={hexInput}
							onChange={handleHexChange}
							onBlur={handleHexBlur}
							spellCheck={false}
							className="h-8 w-full rounded-md border border-input bg-background px-2 font-mono text-xs uppercase text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
						/>
					</div>
				)}

				{format === "rgb" && (
					<div className="grid flex-1 grid-cols-4 gap-1">
						<div className="flex flex-col items-center gap-0.5">
							<input
								type="number"
								min={0}
								max={255}
								disabled={disabled}
								value={rgb.r}
								onChange={(e) => {
									const val = clamp(
										Number.parseInt(e.target.value, 10) ||
											0,
										0,
										255,
									);
									const newHsv = rgbToHsv({
										...rgb,
										r: val,
									});
									updateColor(newHsv);
								}}
								className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
							/>
							<span className="text-[10px] text-muted-foreground">
								R
							</span>
						</div>
						<div className="flex flex-col items-center gap-0.5">
							<input
								type="number"
								min={0}
								max={255}
								disabled={disabled}
								value={rgb.g}
								onChange={(e) => {
									const val = clamp(
										Number.parseInt(e.target.value, 10) ||
											0,
										0,
										255,
									);
									const newHsv = rgbToHsv({
										...rgb,
										g: val,
									});
									updateColor(newHsv);
								}}
								className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
							/>
							<span className="text-[10px] text-muted-foreground">
								G
							</span>
						</div>
						<div className="flex flex-col items-center gap-0.5">
							<input
								type="number"
								min={0}
								max={255}
								disabled={disabled}
								value={rgb.b}
								onChange={(e) => {
									const val = clamp(
										Number.parseInt(e.target.value, 10) ||
											0,
										0,
										255,
									);
									const newHsv = rgbToHsv({
										...rgb,
										b: val,
									});
									updateColor(newHsv);
								}}
								className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
							/>
							<span className="text-[10px] text-muted-foreground">
								B
							</span>
						</div>
						{showAlpha && (
							<div className="flex flex-col items-center gap-0.5">
								<input
									type="number"
									min={0}
									max={100}
									disabled={disabled}
									value={Math.round(hsv.a * 100)}
									onChange={(e) => {
										const val = clamp(
											Number.parseInt(
												e.target.value,
												10,
											) || 0,
											0,
											100,
										);
										updateColor({ ...hsv, a: val / 100 });
									}}
									className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
								/>
								<span className="text-[10px] text-muted-foreground">
									A
								</span>
							</div>
						)}
					</div>
				)}

				{format === "hsl" && (
					<div className="grid flex-1 grid-cols-4 gap-1">
						<div className="flex flex-col items-center gap-0.5">
							<input
								type="number"
								min={0}
								max={360}
								disabled={disabled}
								value={Math.round(hsl.h)}
								onChange={(e) => {
									const val = clamp(
										Number.parseInt(e.target.value, 10) ||
											0,
										0,
										360,
									);
									const newHsv = hslToHsv({
										...hsl,
										h: val,
									});
									updateColor(newHsv);
								}}
								className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
							/>
							<span className="text-[10px] text-muted-foreground">
								H
							</span>
						</div>
						<div className="flex flex-col items-center gap-0.5">
							<input
								type="number"
								min={0}
								max={100}
								disabled={disabled}
								value={Math.round(hsl.s * 100)}
								onChange={(e) => {
									const val = clamp(
										Number.parseInt(e.target.value, 10) ||
											0,
										0,
										100,
									);
									const newHsv = hslToHsv({
										...hsl,
										s: val / 100,
									});
									updateColor(newHsv);
								}}
								className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
							/>
							<span className="text-[10px] text-muted-foreground">
								S
							</span>
						</div>
						<div className="flex flex-col items-center gap-0.5">
							<input
								type="number"
								min={0}
								max={100}
								disabled={disabled}
								value={Math.round(hsl.l * 100)}
								onChange={(e) => {
									const val = clamp(
										Number.parseInt(e.target.value, 10) ||
											0,
										0,
										100,
									);
									const newHsv = hslToHsv({
										...hsl,
										l: val / 100,
									});
									updateColor(newHsv);
								}}
								className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
							/>
							<span className="text-[10px] text-muted-foreground">
								L
							</span>
						</div>
						{showAlpha && (
							<div className="flex flex-col items-center gap-0.5">
								<input
									type="number"
									min={0}
									max={100}
									disabled={disabled}
									value={Math.round(hsv.a * 100)}
									onChange={(e) => {
										const val = clamp(
											Number.parseInt(
												e.target.value,
												10,
											) || 0,
											0,
											100,
										);
										updateColor({ ...hsv, a: val / 100 });
									}}
									className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
								/>
								<span className="text-[10px] text-muted-foreground">
									A
								</span>
							</div>
						)}
					</div>
				)}

				{format === "hsv" && (
					<div className="grid flex-1 grid-cols-4 gap-1">
						<div className="flex flex-col items-center gap-0.5">
							<input
								type="number"
								min={0}
								max={360}
								disabled={disabled}
								value={Math.round(hsv.h)}
								onChange={(e) => {
									const val = clamp(
										Number.parseInt(e.target.value, 10) ||
											0,
										0,
										360,
									);
									updateColor({ ...hsv, h: val });
								}}
								className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
							/>
							<span className="text-[10px] text-muted-foreground">
								H
							</span>
						</div>
						<div className="flex flex-col items-center gap-0.5">
							<input
								type="number"
								min={0}
								max={100}
								disabled={disabled}
								value={Math.round(hsv.s * 100)}
								onChange={(e) => {
									const val = clamp(
										Number.parseInt(e.target.value, 10) ||
											0,
										0,
										100,
									);
									updateColor({ ...hsv, s: val / 100 });
								}}
								className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
							/>
							<span className="text-[10px] text-muted-foreground">
								S
							</span>
						</div>
						<div className="flex flex-col items-center gap-0.5">
							<input
								type="number"
								min={0}
								max={100}
								disabled={disabled}
								value={Math.round(hsv.v * 100)}
								onChange={(e) => {
									const val = clamp(
										Number.parseInt(e.target.value, 10) ||
											0,
										0,
										100,
									);
									updateColor({ ...hsv, v: val / 100 });
								}}
								className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
							/>
							<span className="text-[10px] text-muted-foreground">
								V
							</span>
						</div>
						{showAlpha && (
							<div className="flex flex-col items-center gap-0.5">
								<input
									type="number"
									min={0}
									max={100}
									disabled={disabled}
									value={Math.round(hsv.a * 100)}
									onChange={(e) => {
										const val = clamp(
											Number.parseInt(
												e.target.value,
												10,
											) || 0,
											0,
											100,
										);
										updateColor({ ...hsv, a: val / 100 });
									}}
									className="h-8 w-full rounded-md border border-input bg-background px-1 text-center font-mono text-xs text-foreground shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
								/>
								<span className="text-[10px] text-muted-foreground">
									A
								</span>
							</div>
						)}
					</div>
				)}
			</div>
		),
	});
}

/* -------------------------------------------------------------------------- */
/* ColorPicker Swatches                                                       */
/* -------------------------------------------------------------------------- */

export interface ColorPickerSwatchesProps
	extends Omit<useRender.ComponentProps<"div">, "onSelect"> {
	swatches?: string[];
	onSelect?: (color: string) => void;
}

function ColorPickerSwatches({
	swatches = DEFAULT_COLOR_SWATCHES,
	onSelect,
	className,
	render,
	...props
}: ColorPickerSwatchesProps) {
	const { hsv, updateColor, disabled } = useColorPicker();

	const defaultProps = {
		"data-slot": "color-picker-swatches",
		className: cn("grid grid-cols-8 gap-1.5 pt-1", className),
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render: (renderProps) => (
			<div {...renderProps}>
				{swatches.map((color) => {
					const swatchHsv = parseColor(color);
					const isSelected = isEqualColor(hsv, swatchHsv);
					const contrastColor = getContrastColor(swatchHsv);

					return (
						<button
							key={color}
							type="button"
							data-slot="color-picker-swatch"
							disabled={disabled}
							title={color}
							onClick={() => {
								if (disabled) return;
								updateColor(swatchHsv);
								onSelect?.(color);
							}}
							style={{ backgroundColor: color }}
							className={cn(
								"relative flex size-6 items-center justify-center rounded border border-border/60 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
								isSelected &&
									"ring-2 ring-ring ring-offset-1 ring-offset-background",
							)}
						>
							{isSelected && (
								<Check
									className="size-3.5 stroke-[2.5]"
									style={{ color: contrastColor }}
								/>
							)}
						</button>
					);
				})}
			</div>
		),
	});
}

/* -------------------------------------------------------------------------- */
/* Compound & Standalone Exports                                              */
/* -------------------------------------------------------------------------- */

export const ColorPicker = Object.assign(ColorPickerRoot, {
	Root: ColorPickerRoot,
	Trigger: ColorPickerTrigger,
	Content: ColorPickerContent,
	Canvas: ColorPickerCanvas,
	Area: ColorPickerCanvas,
	HueSlider: ColorPickerHueSlider,
	AlphaSlider: ColorPickerAlphaSlider,
	EyeDropper: ColorPickerEyeDropper,
	Preview: ColorPickerPreview,
	Inputs: ColorPickerInputs,
	Swatches: ColorPickerSwatches,
});

export {
	ColorPickerRoot,
	ColorPickerTrigger,
	ColorPickerContent,
	ColorPickerCanvas,
	ColorPickerCanvas as ColorPickerArea,
	ColorPickerHueSlider,
	ColorPickerAlphaSlider,
	ColorPickerEyeDropper,
	ColorPickerPreview,
	ColorPickerInputs,
	ColorPickerSwatches,
	useColorPicker,
};

export type { ColorFormat, HsvColor, HslColor, RgbColor };
