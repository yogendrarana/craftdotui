import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRoot,
	TableRow,
} from "@craftdotui/craftui/components/table";

const specs = [
	{
		property: "Architecture",
		value: "ARM64 (8-core)",
		tier: "Pro",
	},
	{
		property: "Memory",
		value: "32 GB LPDDR5",
		tier: "Pro",
	},
	{
		property: "Storage",
		value: "512 GB NVMe SSD",
		tier: "Standard",
	},
	{
		property: "Network Bandwidth",
		value: "10 Gbps Dedicated",
		tier: "Enterprise",
	},
];

export default function Particle() {
	return (
		<div className="w-full max-w-2xl overflow-hidden border border-border">
			<TableRoot className="[&_td:not(:last-child)]:border-r [&_td]:border-border [&_th:not(:last-child)]:border-r [&_th]:border-border">
				<TableHeader className="bg-muted/50">
					<TableRow className="hover:bg-transparent">
						<TableHead>Specification</TableHead>
						<TableHead>Configuration</TableHead>
						<TableHead>Tier</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{specs.map((spec) => (
						<TableRow key={spec.property}>
							<TableCell className="font-medium">
								{spec.property}
							</TableCell>
							<TableCell className="text-muted-foreground">
								{spec.value}
							</TableCell>
							<TableCell>{spec.tier}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</TableRoot>
		</div>
	);
}
