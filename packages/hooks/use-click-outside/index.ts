import { type RefObject, useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T | null>,
	handler: (event: PointerEvent) => void,
): void {
	const handlerRef = useRef(handler);
	handlerRef.current = handler;

	useEffect(() => {
		const listener = (event: PointerEvent) => {
			const el = ref.current;
			if (!el || el.contains(event.target as Node)) {
				return;
			}

			handlerRef.current(event);
		};

		document.addEventListener("pointerdown", listener);
		return () => {
			document.removeEventListener("pointerdown", listener);
		};
	}, [ref]);
}
