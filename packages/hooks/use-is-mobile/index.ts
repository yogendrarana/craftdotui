import { useCallback, useSyncExternalStore } from "react";

const DEFAULT_MOBILE_BREAKPOINT = 768;

export function useIsMobile(breakpoint = DEFAULT_MOBILE_BREAKPOINT): boolean {
	const query = `(max-width: ${breakpoint - 1}px)`;

	const subscribe = useCallback(
		(onStoreChange: () => void) => {
			const mql = window.matchMedia(query);
			mql.addEventListener("change", onStoreChange);
			return () => mql.removeEventListener("change", onStoreChange);
		},
		[query],
	);

	const getSnapshot = useCallback(
		() => window.matchMedia(query).matches,
		[query],
	);

	return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
