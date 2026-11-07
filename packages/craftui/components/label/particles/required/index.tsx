import { Input } from "@craftdotui/baseui/components/input";
import { Label } from "@craftdotui/craftui/components/label";

export default function Particle() {
	return (
		<div className="flex w-full max-w-xs flex-col gap-2">
			<Label htmlFor="label-required-name" className="gap-1">
				Project name
				<span aria-hidden="true" className="text-destructive">
					*
				</span>
			</Label>
			<Input
				id="label-required-name"
				required
				placeholder="craft-design-system"
			/>
		</div>
	);
}
