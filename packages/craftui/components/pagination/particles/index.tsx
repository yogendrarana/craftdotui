import {
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
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
					<PaginationPrevious href="#page-1" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#page-1">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#page-2" isActive>
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#page-3">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#page-10">10</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#page-3" />
				</PaginationItem>
			</PaginationContent>
		</PaginationRoot>
	);
}
