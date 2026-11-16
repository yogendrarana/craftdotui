import { useCallback, useEffect, useRef } from "react";

export interface ConfettiOptions {
	particleCount?: number;
	origin?:
		| "top"
		| "bottom"
		| "left"
		| "right"
		| "center"
		| "top-left"
		| "top-right"
		| "bottom-left"
		| "bottom-right";
	duration?: number;
	colors?: string[];
}

interface Particle {
	update: (dt: number) => void;
	render: (ctx: CanvasRenderingContext2D) => void;
	position: { x: number; y: number };
}

const gravityConfetti = 0.3;
const gravitySequins = 0.55;
const dragConfetti = 0.075;
const dragSequins = 0.02;
const terminalVelocity = 3;

const randomRange = (min: number, max: number) =>
	Math.random() * (max - min) + min;

const pickColor = (colors?: string[]) => {
	if (colors && colors.length > 0) {
		return colors[Math.floor(Math.random() * colors.length)] as string;
	}
	const hue = Math.floor(Math.random() * 360);
	return `hsl(${hue}, 90%, 60%)`;
};

const initConfettoVelocity = (
	xRange: [number, number],
	yRange: [number, number],
) => {
	const x = randomRange(xRange[0], xRange[1]);
	const range = yRange[1] - yRange[0] + 1;
	let y =
		yRange[1] -
		Math.abs(randomRange(0, range) + randomRange(0, range) - range);
	if (y >= yRange[1] - 1) {
		y += Math.random() < 0.25 ? randomRange(1, 3) : 0;
	}
	return { x, y: -y };
};

function calculateOrigin(
	viewportWidth: number,
	viewportHeight: number,
	origin?: ConfettiOptions["origin"],
) {
	const originMap = {
		center: {
			x: [viewportWidth / 2 - 50, viewportWidth / 2 + 50],
			y: [viewportHeight / 2 + 50, viewportHeight / 2 + 100],
		},
		top: {
			x: [viewportWidth / 2 - 50, viewportWidth / 2 + 50],
			y: [50, 100],
		},
		bottom: {
			x: [viewportWidth / 2 - 50, viewportWidth / 2 + 50],
			y: [viewportHeight - 100, viewportHeight - 50],
		},
		left: {
			x: [50, 100],
			y: [viewportHeight / 2 - 50, viewportHeight / 2 + 50],
		},
		right: {
			x: [viewportWidth - 100, viewportWidth - 50],
			y: [viewportHeight / 2 - 50, viewportHeight / 2 + 50],
		},
		"top-left": { x: [50, 100], y: [50, 100] },
		"top-right": {
			x: [viewportWidth - 100, viewportWidth - 50],
			y: [50, 100],
		},
		"bottom-left": {
			x: [50, 100],
			y: [viewportHeight - 100, viewportHeight - 50],
		},
		"bottom-right": {
			x: [viewportWidth - 100, viewportWidth - 50],
			y: [viewportHeight - 100, viewportHeight - 50],
		},
	};

	return originMap[origin || "center"];
}

function createConfetto(
	viewportWidth: number,
	viewportHeight: number,
	origin?: ConfettiOptions["origin"],
	colors?: string[],
): Particle {
	const originBounds = calculateOrigin(viewportWidth, viewportHeight, origin);
	const randomModifier = randomRange(0, 99);
	const color = { front: pickColor(colors), back: pickColor(colors) };

	const dimensions = { x: randomRange(5, 9), y: randomRange(8, 15) };
	const position = {
		x: randomRange(originBounds.x[0], originBounds.x[1]),
		y: randomRange(originBounds.y[0], originBounds.y[1]),
	};

	const rotation = randomRange(0, 2 * Math.PI);
	const scale = { x: 1, y: 1 };
	const velocity = initConfettoVelocity([-9, 9], [6, 11]);

	return {
		update(dt) {
			velocity.x -= velocity.x * dragConfetti * dt;
			velocity.y = Math.min(
				velocity.y + gravityConfetti * dt,
				terminalVelocity,
			);
			velocity.x +=
				(Math.random() > 0.5 ? Math.random() : -Math.random()) * dt;

			position.x += velocity.x * dt;
			position.y += velocity.y * dt;

			scale.y = Math.cos((position.y + randomModifier) * 0.09);
		},
		render(ctx) {
			const width = dimensions.x * scale.x;
			const height = dimensions.y * scale.y;

			ctx.save();
			ctx.translate(position.x, position.y);
			ctx.rotate(rotation);

			ctx.fillStyle = scale.y > 0 ? color.front : color.back;
			ctx.fillRect(-width / 2, -height / 2, width, height);

			ctx.restore();
		},
		position,
	};
}

function createSequin(
	viewportWidth: number,
	viewportHeight: number,
	origin?: ConfettiOptions["origin"],
	colors?: string[],
): Particle {
	const originBounds = calculateOrigin(viewportWidth, viewportHeight, origin);
	const color = pickColor(colors);
	const radius = randomRange(1, 2);

	const position = {
		x: randomRange(originBounds.x[0], originBounds.x[1]),
		y: randomRange(originBounds.y[0], originBounds.y[1]),
	};
	const velocity = { x: randomRange(-6, 6), y: randomRange(-8, -12) };

	return {
		update(dt) {
			velocity.x -= velocity.x * dragSequins * dt;
			velocity.y += gravitySequins * dt;

			position.x += velocity.x * dt;
			position.y += velocity.y * dt;
		},
		render(ctx) {
			ctx.save();
			ctx.translate(position.x, position.y);
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, 2 * Math.PI);
			ctx.fill();
			ctx.restore();
		},
		position,
	};
}

/* -------------------------------------------------- */
/*                     HOOK START                     */
/* -------------------------------------------------- */

export function useConfetti() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
	const particlesRef = useRef<Particle[]>([]);
	const frameRef = useRef<number | null>(null);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const lastTimeRef = useRef<number>(0);

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		const ctx = ctxRef.current;
		if (!canvas || !ctx) return;

		const dpr = window.devicePixelRatio || 1;
		canvas.width = window.innerWidth * dpr;
		canvas.height = window.innerHeight * dpr;
		canvas.style.width = "100vw";
		canvas.style.height = "100vh";
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	}, []);

	const removeCanvas = useCallback(() => {
		if (typeof window !== "undefined") {
			window.removeEventListener("resize", resizeCanvas);
		}

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}

		if (frameRef.current) {
			cancelAnimationFrame(frameRef.current);
			frameRef.current = null;
		}

		const canvas = canvasRef.current;
		if (canvas?.parentNode) {
			canvas.parentNode.removeChild(canvas);
		}

		canvasRef.current = null;
		ctxRef.current = null;
		particlesRef.current = [];
		lastTimeRef.current = 0;
	}, [resizeCanvas]);

	const createCanvas = useCallback(() => {
		if (typeof window === "undefined") return;

		const canvas = document.createElement("canvas");
		canvas.style.position = "fixed";
		canvas.style.top = "0";
		canvas.style.left = "0";
		canvas.style.pointerEvents = "none";
		canvas.style.zIndex = "9999";

		document.body.appendChild(canvas);
		canvasRef.current = canvas;
		ctxRef.current = canvas.getContext("2d");

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);
	}, [resizeCanvas]);

	const render = useCallback(
		(now: number) => {
			const canvas = canvasRef.current;
			const ctx = ctxRef.current;
			if (!canvas || !ctx) return;

			const dt = lastTimeRef.current
				? Math.min((now - lastTimeRef.current) / 16.667, 2)
				: 1;
			lastTimeRef.current = now;

			const viewportWidth = window.innerWidth;
			const viewportHeight = window.innerHeight;

			ctx.clearRect(0, 0, viewportWidth, viewportHeight);

			for (const p of particlesRef.current) {
				p.update(dt);
				p.render(ctx);
			}

			particlesRef.current = particlesRef.current.filter(
				(p) => p.position.y < viewportHeight,
			);

			if (particlesRef.current.length > 0) {
				frameRef.current = requestAnimationFrame(render);
			} else {
				removeCanvas();
			}
		},
		[removeCanvas],
	);

	const triggerConfetti = useCallback(
		(options: ConfettiOptions = {}) => {
			if (
				typeof window === "undefined" ||
				window.matchMedia("(prefers-reduced-motion: reduce)").matches
			) {
				return;
			}

			const {
				particleCount = 50,
				origin = "center",
				duration = 3000,
				colors,
			} = options;

			if (!canvasRef.current) createCanvas();
			if (!canvasRef.current || !ctxRef.current) return;

			const viewportWidth = window.innerWidth;
			const viewportHeight = window.innerHeight;

			const confettiCount = Math.floor(particleCount * 0.75);
			const sequinCount = Math.floor(particleCount * 0.25);

			const newConfetti = Array.from({ length: confettiCount }, () =>
				createConfetto(viewportWidth, viewportHeight, origin, colors),
			);
			const newSequins = Array.from({ length: sequinCount }, () =>
				createSequin(viewportWidth, viewportHeight, origin, colors),
			);

			particlesRef.current.push(...newConfetti, ...newSequins);

			if (!frameRef.current) {
				lastTimeRef.current = 0;
				frameRef.current = requestAnimationFrame(render);
			}

			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = setTimeout(() => {
				removeCanvas();
			}, duration);
		},
		[createCanvas, render, removeCanvas],
	);

	useEffect(() => {
		return () => removeCanvas();
	}, [removeCanvas]);

	return triggerConfetti;
}
