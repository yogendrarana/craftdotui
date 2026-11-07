"use client";

import { useState } from "react";

import {
	PaginationContent,
	PaginationFirst,
	PaginationItem,
	PaginationLast,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	PaginationRoot,
} from "@craftdotui/craftui/components/pagination";

const TOTAL_PAGES = 5;

export default function Particle() {
	const [page, setPage] = useState(2);

	return (
		<PaginationRoot>
			<PaginationContent>
				<PaginationItem>
					<PaginationFirst
						disabled={page === 1}
						onClick={() => setPage(1)}
						render={<button type="button" />}
					/>
				</PaginationItem>
				<PaginationItem>
					<PaginationPrevious
						disabled={page === 1}
						onClick={() => setPage((p) => Math.max(1, p - 1))}
						render={<button type="button" />}
					/>
				</PaginationItem>

				{Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(
					(pageNumber) => (
						<PaginationItem key={pageNumber}>
							<PaginationLink
								isActive={page === pageNumber}
								onClick={() => setPage(pageNumber)}
								render={<button type="button" />}
							>
								{pageNumber}
							</PaginationLink>
						</PaginationItem>
					),
				)}

				<PaginationItem>
					<PaginationNext
						disabled={page === TOTAL_PAGES}
						onClick={() =>
							setPage((p) => Math.min(TOTAL_PAGES, p + 1))
						}
						render={<button type="button" />}
					/>
				</PaginationItem>
				<PaginationItem>
					<PaginationLast
						disabled={page === TOTAL_PAGES}
						onClick={() => setPage(TOTAL_PAGES)}
						render={<button type="button" />}
					/>
				</PaginationItem>
			</PaginationContent>
		</PaginationRoot>
	);
}
