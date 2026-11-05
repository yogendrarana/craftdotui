import {
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbRoot,
	BreadcrumbSeparator,
} from "@craftdotui/craftui/components/breadcrumb";
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from "@craftdotui/baseui/components/menu";

export function Particle() {
	return (
		<BreadcrumbRoot>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#home">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<MenuRoot>
						<MenuTrigger className="flex items-center gap-1 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer">
							<BreadcrumbEllipsis />
						</MenuTrigger>
						<MenuContent positionerProps={{ align: "start" }}>
							<MenuItem>Documentation</MenuItem>
							<MenuItem>Themes</MenuItem>
							<MenuItem>GitHub</MenuItem>
						</MenuContent>
					</MenuRoot>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="#components">
						Components
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
