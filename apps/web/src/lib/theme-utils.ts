// Color space conversion and contrast utilities for the Craft UI Theming Engine
// Supports OKLCH, HEX, RGB, HSL with seamless bidirectional conversion and WCAG contrast calculation.

export type ColorFormat = "oklch" | "hex" | "rgb" | "hsl";

export interface OklchColor {
	l: number; // 0 to 1
	c: number; // 0 to ~0.4
	h: number; // 0 to 360
	alpha?: number; // 0 to 1
}

export interface RgbColor {
	r: number; // 0 to 255
	g: number; // 0 to 255
	b: number; // 0 to 255
	alpha?: number; // 0 to 1
}

function clamp(val: number, min: number, max: number): number {
	return Math.min(Math.max(val, min), max);
}

function round(val: number, decimals = 3): number {
	const factor = 10 ** decimals;
	return Math.round(val * factor) / factor;
}

function srgbToLinear(c: number): number {
	const v = c / 255;
	return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
}

function linearToSrgb(c: number): number {
	const v = clamp(c, 0, 1);
	const s = v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055;
	return Math.round(clamp(s * 255, 0, 255));
}

export function oklchToRgb(oklch: OklchColor): RgbColor {
	const { l, c, h, alpha } = oklch;
	const hRad = (h * Math.PI) / 180;
	const a = c * Math.cos(hRad);
	const b = c * Math.sin(hRad);

	const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
	const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
	const s_ = l - 0.0894841775 * a - 1.291485548 * b;

	const lCube = l_ * l_ * l_;
	const mCube = m_ * m_ * m_;
	const sCube = s_ * s_ * s_;

	const rLin =
		4.0767416621 * lCube - 3.3077115913 * mCube + 0.2309699292 * sCube;
	const gLin =
		-1.2684380046 * lCube + 2.6097574011 * mCube - 0.3413193965 * sCube;
	const bLin =
		-0.0041960863 * lCube - 0.7034186147 * mCube + 1.707614701 * sCube;

	return {
		r: linearToSrgb(rLin),
		g: linearToSrgb(gLin),
		b: linearToSrgb(bLin),
		alpha,
	};
}

export function rgbToOklch(rgb: RgbColor): OklchColor {
	const r = srgbToLinear(rgb.r);
	const g = srgbToLinear(rgb.g);
	const b = srgbToLinear(rgb.b);

	const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
	const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
	const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

	const l_ = Math.cbrt(l);
	const m_ = Math.cbrt(m);
	const s_ = Math.cbrt(s);

	const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
	const A = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
	const B = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

	const C = Math.sqrt(A * A + B * B);
	let H = (Math.atan2(B, A) * 180) / Math.PI;
	if (H < 0) H += 360;

	return {
		l: round(clamp(L, 0, 1), 3),
		c: C < 0.0004 ? 0 : round(C, 3),
		h: C < 0.0004 ? 0 : round(H, 2),
		alpha: rgb.alpha,
	};
}

export function parseOklchString(str: string): OklchColor | null {
	const match = str
		.trim()
		.match(
			/^oklch\(\s*([0-9.]+%?)\s+([0-9.]+)\s+([0-9.]+)(?:deg)?(?:\s*\/\s*([0-9.]+%?))?\s*\)$/i,
		);
	if (!match) return null;

	let l = Number.parseFloat(match[1]);
	if (match[1].endsWith("%")) l /= 100;
	const c = Number.parseFloat(match[2]);
	const h = Number.parseFloat(match[3]);

	let alpha: number | undefined;
	if (match[4] !== undefined) {
		alpha = Number.parseFloat(match[4]);
		if (match[4].endsWith("%")) alpha /= 100;
	}

	if (Number.isNaN(l) || Number.isNaN(c) || Number.isNaN(h)) return null;
	return {
		l: clamp(l, 0, 1),
		c: Math.max(0, c),
		h: ((h % 360) + 360) % 360,
		alpha,
	};
}

export function parseHexString(str: string): RgbColor | null {
	const clean = str.trim().replace(/^#/, "");
	if (!/^[0-9a-fA-F]{3,8}$/.test(clean)) return null;

	if (clean.length === 3 || clean.length === 4) {
		const r = Number.parseInt(clean[0] + clean[0], 16);
		const g = Number.parseInt(clean[1] + clean[1], 16);
		const b = Number.parseInt(clean[2] + clean[2], 16);
		const alpha =
			clean.length === 4
				? round(Number.parseInt(clean[3] + clean[3], 16) / 255, 2)
				: undefined;
		return { r, g, b, alpha };
	}

	if (clean.length === 6 || clean.length === 8) {
		const r = Number.parseInt(clean.slice(0, 2), 16);
		const g = Number.parseInt(clean.slice(2, 4), 16);
		const b = Number.parseInt(clean.slice(4, 6), 16);
		const alpha =
			clean.length === 8
				? round(Number.parseInt(clean.slice(6, 8), 16) / 255, 2)
				: undefined;
		return { r, g, b, alpha };
	}

	return null;
}

export function parseRgbString(str: string): RgbColor | null {
	const match = str
		.trim()
		.match(
			/^rgba?\(\s*([0-9.]+)\s*[,\s]\s*([0-9.]+)\s*[,\s]\s*([0-9.]+)(?:\s*[,/]\s*([0-9.]+%?))?\s*\)$/i,
		);
	if (!match) return null;

	const r = clamp(Math.round(Number.parseFloat(match[1])), 0, 255);
	const g = clamp(Math.round(Number.parseFloat(match[2])), 0, 255);
	const b = clamp(Math.round(Number.parseFloat(match[3])), 0, 255);
	let alpha: number | undefined;
	if (match[4] !== undefined) {
		alpha = Number.parseFloat(match[4]);
		if (match[4].endsWith("%")) alpha /= 100;
		alpha = clamp(alpha, 0, 1);
	}
	return { r, g, b, alpha };
}

export function parseHslString(str: string): RgbColor | null {
	const match = str
		.trim()
		.match(
			/^hsla?\(\s*([0-9.]+)(?:deg)?\s*[,\s]\s*([0-9.]+)%\s*[,\s]\s*([0-9.]+)%(?:\s*[,/]\s*([0-9.]+%?))?\s*\)$/i,
		);
	if (!match) return null;

	const h = ((Number.parseFloat(match[1]) % 360) + 360) % 360;
	const s = clamp(Number.parseFloat(match[2]) / 100, 0, 1);
	const l = clamp(Number.parseFloat(match[3]) / 100, 0, 1);
	let alpha: number | undefined;
	if (match[4] !== undefined) {
		alpha = Number.parseFloat(match[4]);
		if (match[4].endsWith("%")) alpha /= 100;
		alpha = clamp(alpha, 0, 1);
	}

	const c = (1 - Math.abs(2 * l - 1)) * s;
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = l - c / 2;
	let r1 = 0;
	let g1 = 0;
	let b1 = 0;

	if (h < 60) [r1, g1, b1] = [c, x, 0];
	else if (h < 120) [r1, g1, b1] = [x, c, 0];
	else if (h < 180) [r1, g1, b1] = [0, c, x];
	else if (h < 240) [r1, g1, b1] = [0, x, c];
	else if (h < 300) [r1, g1, b1] = [x, 0, c];
	else [r1, g1, b1] = [c, 0, x];

	return {
		r: Math.round((r1 + m) * 255),
		g: Math.round((g1 + m) * 255),
		b: Math.round((b1 + m) * 255),
		alpha,
	};
}

export function parseAnyColorToRgb(value: string): RgbColor | null {
	if (!value) return null;
	const trimmed = value.trim();
	if (trimmed.startsWith("oklch")) {
		const parsed = parseOklchString(trimmed);
		return parsed ? oklchToRgb(parsed) : null;
	}
	if (trimmed.startsWith("#")) {
		return parseHexString(trimmed);
	}
	if (trimmed.startsWith("rgb")) {
		return parseRgbString(trimmed);
	}
	if (trimmed.startsWith("hsl")) {
		return parseHslString(trimmed);
	}
	if (/^[0-9a-fA-F]{6}$/.test(trimmed)) {
		return parseHexString(`#${trimmed}`);
	}
	return null;
}

export function parseAnyColorToOklch(value: string): OklchColor | null {
	if (!value) return null;
	const trimmed = value.trim();
	if (trimmed.startsWith("oklch")) {
		return parseOklchString(trimmed);
	}
	const rgb = parseAnyColorToRgb(trimmed);
	return rgb ? rgbToOklch(rgb) : null;
}

export function rgbToHex(rgb: RgbColor): string {
	const toHex = (n: number) =>
		clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0");
	const base = `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
	if (rgb.alpha !== undefined && rgb.alpha < 1) {
		return `${base}${toHex(Math.round(rgb.alpha * 255))}`;
	}
	return base;
}

export function rgbToHslString(rgb: RgbColor): string {
	const r = rgb.r / 255;
	const g = rgb.g / 255;
	const b = rgb.b / 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (max !== min) {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	const hDeg = Math.round(h * 360);
	const sPct = Math.round(s * 100);
	const lPct = Math.round(l * 100);

	if (rgb.alpha !== undefined && rgb.alpha < 1) {
		return `hsl(${hDeg} ${sPct}% ${lPct}% / ${round(rgb.alpha, 2)})`;
	}
	return `hsl(${hDeg} ${sPct}% ${lPct}%)`;
}

export function formatOklch(oklch: OklchColor): string {
	const l = round(oklch.l, 3);
	const c = round(oklch.c, 3);
	const h = round(oklch.h, 2);
	if (oklch.alpha !== undefined && oklch.alpha < 1) {
		return `oklch(${l} ${c} ${h} / ${round(oklch.alpha, 2)})`;
	}
	return `oklch(${l} ${c} ${h})`;
}

export function formatColor(value: string, format: ColorFormat): string {
	if (!value) return value;
	if (format === "oklch") {
		const oklch = parseAnyColorToOklch(value);
		return oklch ? formatOklch(oklch) : value;
	}
	const rgb = parseAnyColorToRgb(value);
	if (!rgb) return value;

	if (format === "hex") {
		return rgbToHex(rgb);
	}
	if (format === "rgb") {
		if (rgb.alpha !== undefined && rgb.alpha < 1) {
			return `rgb(${rgb.r} ${rgb.g} ${rgb.b} / ${round(rgb.alpha, 2)})`;
		}
		return `rgb(${rgb.r} ${rgb.g} ${rgb.b})`;
	}
	if (format === "hsl") {
		return rgbToHslString(rgb);
	}
	return value;
}

export function colorToHexForPicker(value: string): string {
	const rgb = parseAnyColorToRgb(value);
	if (!rgb) return "#000000";
	const toHex = (n: number) =>
		clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0");
	return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

// Relative luminance per WCAG 2.1
export function getRelativeLuminance(rgb: RgbColor): number {
	const R = srgbToLinear(rgb.r);
	const G = srgbToLinear(rgb.g);
	const B = srgbToLinear(rgb.b);
	return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

export function getContrastRatio(
	colorA: string,
	colorB: string,
): number | null {
	const rgbA = parseAnyColorToRgb(colorA);
	const rgbB = parseAnyColorToRgb(colorB);
	if (!rgbA || !rgbB) return null;

	const lumA = getRelativeLuminance(rgbA);
	const lumB = getRelativeLuminance(rgbB);
	const brightest = Math.max(lumA, lumB);
	const darkest = Math.min(lumA, lumB);

	return round((brightest + 0.05) / (darkest + 0.05), 2);
}

export function getIdealForegroundColor(bgColor: string): string {
	const oklch = parseAnyColorToOklch(bgColor);
	if (!oklch) return "oklch(0.985 0 0)";
	return oklch.l > 0.64 ? "oklch(0.145 0 0)" : "oklch(0.985 0 0)";
}
