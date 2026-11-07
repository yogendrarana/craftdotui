import {
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
	PaginationRoot,
} from "@craftdotui/craftui/components/pagination";

export default function Particle() {
	return (
		<PaginationRoot>
			<PaginationContent className="gap-4">
				<PaginationItem>
					<PaginationPrevious
						href="#page-1"
						variant="outline"
						size="sm"
					/>
				</PaginationItem>
				<PaginationItem>
					<span className="text-sm text-muted-foreground">
						Page{" "}
						<strong className="font-medium text-foreground">
							2
						</strong>{" "}
						of{" "}
						<strong className="font-medium text-foreground">
							12
						</strong>
					</span>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext
						href="#page-3"
						variant="outline"
						size="sm"
					/>
				</PaginationItem>
			</PaginationContent>
		</PaginationRoot>
	);
}
