import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRoot,
	TableRow,
} from "@craftdotui/craftui/components/table";

const logs = [
	{
		timestamp: "2026-11-07 09:42:11",
		method: "POST",
		path: "/api/v1/auth/session",
		status: 200,
		latency: "24ms",
	},
	{
		timestamp: "2026-11-07 09:41:58",
		method: "GET",
		path: "/api/v1/projects",
		status: 200,
		latency: "18ms",
	},
	{
		timestamp: "2026-11-07 09:41:02",
		method: "PATCH",
		path: "/api/v1/projects/prj_92a",
		status: 204,
		latency: "41ms",
	},
	{
		timestamp: "2026-11-07 09:39:45",
		method: "DELETE",
		path: "/api/v1/tokens/tok_18c",
		status: 403,
		latency: "9ms",
	},
	{
		timestamp: "2026-11-07 09:38:12",
		method: "GET",
		path: "/api/v1/members",
		status: 200,
		latency: "15ms",
	},
];

export default function Particle() {
	return (
		<div className="w-full max-w-2xl">
			<TableRoot>
				<TableHeader>
					<TableRow>
						<TableHead>Timestamp</TableHead>
						<TableHead>Method</TableHead>
						<TableHead>Path</TableHead>
						<TableHead>Status</TableHead>
						<TableHead className="text-right">Latency</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{logs.map((log) => (
						<TableRow
							key={log.timestamp}
							className="border-0 odd:bg-muted/40 hover:odd:bg-muted/60"
						>
							<TableCell className="font-mono text-xs text-muted-foreground">
								{log.timestamp}
							</TableCell>
							<TableCell className="font-mono text-xs font-medium">
								{log.method}
							</TableCell>
							<TableCell className="font-mono text-xs">
								{log.path}
							</TableCell>
							<TableCell className="font-mono text-xs">
								{log.status}
							</TableCell>
							<TableCell className="text-right font-mono text-xs text-muted-foreground">
								{log.latency}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</TableRoot>
		</div>
	);
}
