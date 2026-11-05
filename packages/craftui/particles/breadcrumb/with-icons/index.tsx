import { FileCode, Folder, Home } from "lucide-react";
import {
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbRoot,
	BreadcrumbSeparator,
} from "@craftdotui/craftui/components/breadcrumb";

export function Particle() {
	return (
		<BreadcrumbRoot>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#home">
						<Home className="size-3.5" />
						<span>Workspace</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="#packages">
						<Folder className="size-3.5" />
						<span>packages</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>
						<FileCode className="size-3.5 text-muted-foreground" />
						<span>breadcrumb.tsx</span>
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</BreadcrumbRoot>
	);
}

export default Particle;
