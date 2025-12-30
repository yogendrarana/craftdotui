import { Separator } from "@craftdotui/baseui/components/separator";

export function Particle() {
	return (
		<div>
			<div className="space-y-1">
				<h4 className="text-sm font-medium leading-none">Craft UI</h4>
				<p className="text-sm text-muted-foreground">
					A collection of react and tailwind components.
				</p>
			</div>
			<Separator />
			<div className="flex h-5 items-center text-sm">
				<div>Blog</div>
				<Separator orientation="vertical" />
				<div>Docs</div>
				<Separator orientation="vertical" />
				<div>Source</div>
			</div>
		</div>
	);
}
