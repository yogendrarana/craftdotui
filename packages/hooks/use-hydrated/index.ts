import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Hook to safely handle client-side only code and prevent hydration mismatches
 * @returns boolean indicating if the component has hydrated
 */
export function useHydrated(): boolean {
	return useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	);
}
