import * as React from "react";

type QueryParams = Record<string, string | number | boolean | null | undefined>;

export function useQueryString(searchParams: URLSearchParams) {
	const createQueryString = React.useCallback(
		(params: QueryParams) => {
			const newSearchParams = new URLSearchParams(
				searchParams?.toString(),
			);

			for (const [key, value] of Object.entries(params)) {
				if (value === null || value === undefined) {
					newSearchParams.delete(key);
				} else {
					newSearchParams.set(key, String(value));
				}
			}

			return newSearchParams.toString();
		},
		[searchParams],
	);

	return { createQueryString };
}
