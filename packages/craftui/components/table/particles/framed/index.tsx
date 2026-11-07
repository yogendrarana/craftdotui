import { Badge } from "@craftdotui/craftui/components/badge";
import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRoot,
	TableRow,
} from "@craftdotui/craftui/components/table";

const deployments = [
	{
		id: "dpl_8f92a1c",
		branch: "main",
		environment: "Production",
		status: "Ready",
		statusVariant: "success" as const,
		duration: "42s",
	},
	{
		id: "dpl_3b41e9d",
		branch: "feat/table-primitive",
		environment: "Preview",
		status: "Building",
		statusVariant: "warning" as const,
		duration: "18s",
	},
	{
		id: "dpl_7c19f0a",
		branch: "fix/card-footer",
		environment: "Preview",
		status: "Ready",
		statusVariant: "success" as const,
		duration: "38s",
	},
	{
		id: "dpl_1e55b2b",
		branch: "chore/deps",
		environment: "Preview",
		status: "Failed",
		statusVariant: "destructive" as const,
		duration: "12s",
	},
];

export default function Particle() {
	return (
		<div className="w-full max-w-2xl overflow-hidden border border-border">
			<TableRoot>
				<TableHeader className="bg-muted/50">
					<TableRow className="hover:bg-transparent">
						<TableHead>Deployment</TableHead>
						<TableHead>Branch</TableHead>
						<TableHead>Environment</TableHead>
						<TableHead>Status</TableHead>
						<TableHead className="text-right">Duration</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{deployments.map((item) => (
						<TableRow key={item.id}>
							<TableCell className="font-mono text-xs font-medium">
								{item.id}
							</TableCell>
							<TableCell className="font-mono text-xs text-muted-foreground">
								{item.branch}
							</TableCell>
							<TableCell>{item.environment}</TableCell>
							<TableCell>
								<Badge variant={item.statusVariant} size="sm">
									{item.status}
								</Badge>
							</TableCell>
							<TableCell className="text-right text-muted-foreground">
								{item.duration}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</TableRoot>
		</div>
	);
}
