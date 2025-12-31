import { Switch } from "@craftdotui/baseui/components/switch";

export function Particle() {
	return (
		<div className="flex items-start space-x-2">
			<Switch id="marketing-emails" defaultChecked />
			<div className="grid gap-1.5 leading-none">
				<label
					htmlFor="marketing-emails"
					className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Marketing emails
				</label>
				<p className="text-xs text-muted-foreground">
					Receive emails about new products, features, and more.
				</p>
			</div>
		</div>
	);
}
