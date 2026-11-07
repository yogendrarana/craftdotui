import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

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
					<PaginationPrevious
						href="#page-1"
						size="icon"
						className="px-0 sm:pl-0"
					>
						<ChevronLeftIcon className="size-4" />
					</PaginationPrevious>
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
					<PaginationLink href="#page-8">8</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext
						href="#page-3"
						size="icon"
						className="px-0 sm:pr-0"
					>
						<ChevronRightIcon className="size-4" />
					</PaginationNext>
				</PaginationItem>
			</PaginationContent>
		</PaginationRoot>
	);
}
