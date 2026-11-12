/**
 * Zero-dependency pure TypeScript color conversion utilities.
 * Supports HSV, HSL, RGB, RGBA, and HEX color spaces with full alpha channel support.
 */

export interface HsvColor {
	h: number; // 0 - 360
	s: number; // 0 - 1
	v: number; // 0 - 1
	a: number; // 0 - 1
}

export interface HslColor {
	h: number; // 0 - 360
	s: number; // 0 - 1
	l: number; // 0 - 1
	a: number; // 0 - 1
}

export interface RgbColor {
	r: number; // 0 - 255
	g: number; // 0 - 255
	b: number; // 0 - 255
	a: number; // 0 - 1
}

export type ColorFormat = "hex" | "rgb" | "hsl" | "hsv";

/* -------------------------------------------------------------------------- */
/* Math & Clamping Helpers                                                    */
/* -------------------------------------------------------------------------- */

export function clamp(value: number, min: number, max: number): number {
	if (Number.isNaN(value)) return min;
	return Math.min(Math.max(value, min), max);
}

export function round(value: number, decimals = 0): number {
	const factor = 10 ** decimals;
	return Math.round(value * factor) / factor;
}

/* -------------------------------------------------------------------------- */
/* Conversions: HSV <-> RGB                                                    */
/* -------------------------------------------------------------------------- */

export function hsvToRgb(hsv: HsvColor): RgbColor {
	const h = ((hsv.h % 360) + 360) % 360;
	const s = clamp(hsv.s, 0, 1);
	const v = clamp(hsv.v, 0, 1);
	const a = clamp(hsv.a ?? 1, 0, 1);

	const c = v * s;
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = v - c;

	let rPrime = 0;
	let gPrime = 0;
	let bPrime = 0;

	if (h >= 0 && h < 60) {
		rPrime = c;
		gPrime = x;
		bPrime = 0;
	} else if (h >= 60 && h < 120) {
		rPrime = x;
		gPrime = c;
		bPrime = 0;
	} else if (h >= 120 && h < 180) {
		rPrime = 0;
		gPrime = c;
		bPrime = x;
	} else if (h >= 180 && h < 240) {
		rPrime = 0;
		gPrime = x;
		bPrime = c;
	} else if (h >= 240 && h < 300) {
		rPrime = x;
		gPrime = 0;
		bPrime = c;
	} else {
		rPrime = c;
		gPrime = 0;
		bPrime = x;
	}

	return {
		r: Math.round((rPrime + m) * 255),
		g: Math.round((gPrime + m) * 255),
		b: Math.round((bPrime + m) * 255),
		a,
	};
}

export function rgbToHsv(rgb: RgbColor): HsvColor {
	const r = clamp(rgb.r, 0, 255) / 255;
	const g = clamp(rgb.g, 0, 255) / 255;
	const b = clamp(rgb.b, 0, 255) / 255;
	const a = clamp(rgb.a ?? 1, 0, 1);

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const d = max - min;

	let h = 0;
	if (d !== 0) {
		if (max === r) {
			h = ((g - b) / d) % 6;
		} else if (max === g) {
			h = (b - r) / d + 2;
		} else {
			h = (r - g) / d + 4;
		}
		h = round(h * 60, 2);
		if (h < 0) h += 360;
	}

	const s = max === 0 ? 0 : d / max;
	const v = max;

	return {
		h,
		s: round(s, 4),
		v: round(v, 4),
		a,
	};
}

/* -------------------------------------------------------------------------- */
/* Conversions: HSV <-> HSL                                                    */
/* -------------------------------------------------------------------------- */

export function hsvToHsl(hsv: HsvColor): HslColor {
	const h = ((hsv.h % 360) + 360) % 360;
	const s = clamp(hsv.s, 0, 1);
	const v = clamp(hsv.v, 0, 1);
	const a = clamp(hsv.a ?? 1, 0, 1);

	const l = v * (1 - s / 2);
	const sHsl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);

	return {
		h,
		s: round(sHsl, 4),
		l: round(l, 4),
		a,
	};
}

export function hslToHsv(hsl: HslColor): HsvColor {
	const h = ((hsl.h % 360) + 360) % 360;
	const s = clamp(hsl.s, 0, 1);
	const l = clamp(hsl.l, 0, 1);
	const a = clamp(hsl.a ?? 1, 0, 1);

	const v = l + s * Math.min(l, 1 - l);
	const sHsv = v === 0 ? 0 : 2 * (1 - l / v);

	return {
		h,
		s: round(sHsv, 4),
		v: round(v, 4),
		a,
	};
}

/* -------------------------------------------------------------------------- */
/* Conversions: RGB <-> HSL                                                    */
/* -------------------------------------------------------------------------- */

export function rgbToHsl(rgb: RgbColor): HslColor {
	return hsvToHsl(rgbToHsv(rgb));
}

export function hslToRgb(hsl: HslColor): RgbColor {
	return hsvToRgb(hslToHsv(hsl));
}

/* -------------------------------------------------------------------------- */
/* Conversions: RGB <-> HEX                                                    */
/* -------------------------------------------------------------------------- */

export function rgbToHex(rgb: RgbColor, includeAlpha = false): string {
	const r = clamp(Math.round(rgb.r), 0, 255).toString(16).padStart(2, "0");
	const g = clamp(Math.round(rgb.g), 0, 255).toString(16).padStart(2, "0");
	const b = clamp(Math.round(rgb.b), 0, 255).toString(16).padStart(2, "0");

	const alpha = clamp(rgb.a ?? 1, 0, 1);
	if (includeAlpha || alpha < 1) {
		const a = Math.round(alpha * 255)
			.toString(16)
			.padStart(2, "0");
		return `#${r}${g}${b}${a}`;
	}

	return `#${r}${g}${b}`;
}

export function hexToRgb(hex: string): RgbColor | null {
	const clean = hex.trim().replace(/^#/, "");
	if (!/^[0-9a-fA-F]+$/.test(clean)) return null;

	let r = 0;
	let g = 0;
	let b = 0;
	let a = 1;

	if (clean.length === 3) {
		r = Number.parseInt(clean[0] + clean[0], 16);
		g = Number.parseInt(clean[1] + clean[1], 16);
		b = Number.parseInt(clean[2] + clean[2], 16);
	} else if (clean.length === 4) {
		r = Number.parseInt(clean[0] + clean[0], 16);
		g = Number.parseInt(clean[1] + clean[1], 16);
		b = Number.parseInt(clean[2] + clean[2], 16);
		a = Number.parseInt(clean[3] + clean[3], 16) / 255;
	} else if (clean.length === 6) {
		r = Number.parseInt(clean.slice(0, 2), 16);
		g = Number.parseInt(clean.slice(2, 4), 16);
		b = Number.parseInt(clean.slice(4, 6), 16);
	} else if (clean.length === 8) {
		r = Number.parseInt(clean.slice(0, 2), 16);
		g = Number.parseInt(clean.slice(2, 4), 16);
		b = Number.parseInt(clean.slice(4, 6), 16);
		a = Number.parseInt(clean.slice(6, 8), 16) / 255;
	} else {
		return null;
	}

	return {
		r,
		g,
		b,
		a: round(a, 4),
	};
}

export function hsvToHex(hsv: HsvColor, includeAlpha = false): string {
	return rgbToHex(hsvToRgb(hsv), includeAlpha);
}

export function hexToHsv(hex: string): HsvColor | null {
	const rgb = hexToRgb(hex);
	return rgb ? rgbToHsv(rgb) : null;
}

/* -------------------------------------------------------------------------- */
/* Color Formatting                                                           */
/* -------------------------------------------------------------------------- */

export function formatColor(hsv: HsvColor, format: ColorFormat): string {
	const a = clamp(hsv.a ?? 1, 0, 1);
	const hasAlpha = a < 1;

	switch (format) {
		case "hex": {
			return hsvToHex(hsv, hasAlpha);
		}
		case "rgb": {
			const rgb = hsvToRgb(hsv);
			if (hasAlpha) {
				return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${round(a, 2)})`;
			}
			return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
		}
		case "hsl": {
			const hsl = hsvToHsl(hsv);
			const h = Math.round(hsl.h);
			const s = Math.round(hsl.s * 100);
			const l = Math.round(hsl.l * 100);
			if (hasAlpha) {
				return `hsla(${h}, ${s}%, ${l}%, ${round(a, 2)})`;
			}
			return `hsl(${h}, ${s}%, ${l}%)`;
		}
		case "hsv": {
			const h = Math.round(hsv.h);
			const s = Math.round(hsv.s * 100);
			const v = Math.round(hsv.v * 100);
			if (hasAlpha) {
				return `hsva(${h}, ${s}%, ${v}%, ${round(a, 2)})`;
			}
			return `hsv(${h}, ${s}%, ${v}%)`;
		}
		default:
			return hsvToHex(hsv, false);
	}
}

/* -------------------------------------------------------------------------- */
/* Named Colors Map                                                           */
/* -------------------------------------------------------------------------- */

const NAMED_COLORS: Record<string, string> = {
	transparent: "#00000000",
	black: "#000000",
	white: "#ffffff",
	red: "#ff0000",
	green: "#008000",
	blue: "#0000ff",
	yellow: "#ffff00",
	cyan: "#00ffff",
	magenta: "#ff00ff",
	gray: "#808080",
	grey: "#808080",
	orange: "#ffa500",
	purple: "#800080",
	pink: "#ffc0cb",
	lime: "#00ff00",
	teal: "#008080",
	navy: "#000080",
	maroon: "#800000",
	olive: "#808000",
	silver: "#c0c0c0",
	gold: "#ffd700",
	indigo: "#4b0082",
	violet: "#ee82ee",
	coral: "#ff7f50",
	salmon: "#fa8072",
	khaki: "#f0e68c",
	plum: "#dda0dd",
	brown: "#a52a2a",
};

/* -------------------------------------------------------------------------- */
/* Color Parsing                                                              */
/* -------------------------------------------------------------------------- */

function parseAlpha(value: string | undefined): number {
	if (value === undefined) return 1;
	const trimmed = value.trim();
	if (trimmed.endsWith("%")) {
		return clamp(Number.parseFloat(trimmed) / 100, 0, 1);
	}
	return clamp(Number.parseFloat(trimmed), 0, 1);
}

function parseAngle(value: string): number {
	const trimmed = value.trim().toLowerCase();
	if (trimmed.endsWith("deg")) {
		return Number.parseFloat(trimmed);
	}
	if (trimmed.endsWith("rad")) {
		return (Number.parseFloat(trimmed) * 180) / Math.PI;
	}
	if (trimmed.endsWith("turn")) {
		return Number.parseFloat(trimmed) * 360;
	}
	return Number.parseFloat(trimmed);
}

function parsePercentageOrNumber(value: string, max = 255): number {
	const trimmed = value.trim();
	if (trimmed.endsWith("%")) {
		return (clamp(Number.parseFloat(trimmed), 0, 100) / 100) * max;
	}
	return clamp(Number.parseFloat(trimmed), 0, max);
}

/**
 * Robust color parser accepting HEX, RGB(A), HSL(A), HSV(A), or named colors.
 * Returns normalized HSV color object.
 */
export function parseColor(input: string, fallback?: HsvColor): HsvColor {
	const defaultFallback: HsvColor = fallback ?? { h: 0, s: 1, v: 1, a: 1 };
	if (!input || typeof input !== "string") return defaultFallback;

	const trimmed = input.trim().toLowerCase();

	// Check named color
	if (NAMED_COLORS[trimmed]) {
		const parsed = hexToHsv(NAMED_COLORS[trimmed]);
		if (parsed) return parsed;
	}

	// Check HEX
	if (trimmed.startsWith("#") || /^[0-9a-f]{3,8}$/i.test(trimmed)) {
		const parsed = hexToHsv(trimmed);
		if (parsed) return parsed;
	}

	// Check RGB/RGBA
	// Match both legacy comma syntax and modern CSS Color 4 space/slash syntax
	const rgbMatch = trimmed.match(
		/^rgba?\(\s*([0-9.]+%?)[,\s]+([0-9.]+%?)[,\s]+([0-9.]+%?)(?:[,\s/]+([0-9.]+%?))?\s*\)$/i,
	);
	if (rgbMatch) {
		const r = parsePercentageOrNumber(rgbMatch[1], 255);
		const g = parsePercentageOrNumber(rgbMatch[2], 255);
		const b = parsePercentageOrNumber(rgbMatch[3], 255);
		const a = parseAlpha(rgbMatch[4]);
		return rgbToHsv({ r, g, b, a });
	}

	// Check HSL/HSLA
	const hslMatch = trimmed.match(
		/^hsla?\(\s*([+-]?[0-9.]+(?:deg|rad|turn)?)[,\s]+([0-9.]+%?)[,\s]+([0-9.]+%?)(?:[,\s/]+([0-9.]+%?))?\s*\)$/i,
	);
	if (hslMatch) {
		const h = ((parseAngle(hslMatch[1]) % 360) + 360) % 360;
		const s = parsePercentageOrNumber(hslMatch[2], 100) / 100;
		const l = parsePercentageOrNumber(hslMatch[3], 100) / 100;
		const a = parseAlpha(hslMatch[4]);
		return hslToHsv({ h, s, l, a });
	}

	// Check HSV/HSVA
	const hsvMatch = trimmed.match(
		/^hsva?\(\s*([+-]?[0-9.]+(?:deg|rad|turn)?)[,\s]+([0-9.]+%?)[,\s]+([0-9.]+%?)(?:[,\s/]+([0-9.]+%?))?\s*\)$/i,
	);
	if (hsvMatch) {
		const h = ((parseAngle(hsvMatch[1]) % 360) + 360) % 360;
		const s = parsePercentageOrNumber(hsvMatch[2], 100) / 100;
		const v = parsePercentageOrNumber(hsvMatch[3], 100) / 100;
		const a = parseAlpha(hsvMatch[4]);
		return { h, s, v, a };
	}

	return defaultFallback;
}

export function isValidColor(input: string): boolean {
	if (!input || typeof input !== "string") return false;
	const trimmed = input.trim().toLowerCase();

	if (NAMED_COLORS[trimmed]) return true;
	if (hexToRgb(trimmed) !== null) return true;

	const rgbMatch = trimmed.match(
		/^rgba?\(\s*([0-9.]+%?)[,\s]+([0-9.]+%?)[,\s]+([0-9.]+%?)(?:[,\s/]+([0-9.]+%?))?\s*\)$/i,
	);
	if (rgbMatch) return true;

	const hslMatch = trimmed.match(
		/^hsla?\(\s*([+-]?[0-9.]+(?:deg|rad|turn)?)[,\s]+([0-9.]+%?)[,\s]+([0-9.]+%?)(?:[,\s/]+([0-9.]+%?))?\s*\)$/i,
	);
	if (hslMatch) return true;

	const hsvMatch = trimmed.match(
		/^hsva?\(\s*([+-]?[0-9.]+(?:deg|rad|turn)?)[,\s]+([0-9.]+%?)[,\s]+([0-9.]+%?)(?:[,\s/]+([0-9.]+%?))?\s*\)$/i,
	);
	if (hsvMatch) return true;

	return false;
}

export function getContrastColor(hsv: HsvColor): "#000000" | "#ffffff" {
	const rgb = hsvToRgb(hsv);
	// Standard relative luminance formula
	const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
	return luminance > 0.55 ? "#000000" : "#ffffff";
}

export function isEqualColor(a: HsvColor, b: HsvColor): boolean {
	const aAlpha = Math.round((a.a ?? 1) * 100);
	const bAlpha = Math.round((b.a ?? 1) * 100);
	if (aAlpha !== bAlpha) return false;

	const aV = Math.round(a.v * 100);
	const bV = Math.round(b.v * 100);
	if (aV !== bV) return false;
	if (aV === 0) return true; // Both black

	const aS = Math.round(a.s * 100);
	const bS = Math.round(b.s * 100);
	if (aS !== bS) return false;
	if (aS === 0) return true; // Both grayscale / white

	return (
		((Math.round(a.h) % 360) + 360) % 360 ===
		((Math.round(b.h) % 360) + 360) % 360
	);
}
