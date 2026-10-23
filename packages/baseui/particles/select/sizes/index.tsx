import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValue,
} from "@craftdotui/baseui/components/select";

export function Particle() {
	return (
		<div className="flex flex-col gap-4 w-full max-w-50">
			<div className="flex flex-col gap-2">
				<span className="text-xs font-medium text-muted-foreground">
					Small (sm)
				</span>
				<SelectRoot defaultValue="apple">
					<SelectTrigger size="sm">
						<SelectValue />
					</SelectTrigger>

					<SelectContent>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
					</SelectContent>
				</SelectRoot>
			</div>

			<div className="flex flex-col gap-2">
				<span className="text-xs font-medium text-muted-foreground">
					Medium (md)
				</span>
				<SelectRoot defaultValue="apple">
					<SelectTrigger size="md">
						<SelectValue />
					</SelectTrigger>

					<SelectContent>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
					</SelectContent>
				</SelectRoot>
			</div>

			<div className="flex flex-col gap-2">
				<span className="text-xs font-medium text-muted-foreground">
					Large (lg)
				</span>
				<SelectRoot defaultValue="apple">
					<SelectTrigger size="lg">
						<SelectValue />
					</SelectTrigger>

					<SelectContent>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
					</SelectContent>
				</SelectRoot>
			</div>
		</div>
	);
}

export default Particle;
