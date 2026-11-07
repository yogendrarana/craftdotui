import {
	PaginationContent,
	PaginationEllipsis,
	PaginationFirst,
	PaginationItem,
	PaginationLast,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	PaginationRoot,
} from "@craftdotui/craftui/components/pagination";

export default function Particle() {
	return (
		<PaginationRoot>
			<PaginationContent>
				<PaginationItem>
					<PaginationFirst href="#page-1" />
				</PaginationItem>
				<PaginationItem>
					<PaginationPrevious href="#page-3" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#page-3">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#page-4" isActive>
						4
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#page-5">5</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#page-5" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLast href="#page-20" />
				</PaginationItem>
			</PaginationContent>
		</PaginationRoot>
	);
}
