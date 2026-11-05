import Link from "next/link";
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
					<BreadcrumbLink render={<Link href="/" />}>
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink
						render={
							<Link href="/docs/getting-started/introduction" />
						}
					>
						Docs
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</BreadcrumbRoot>
	);
}

export default Particle;
