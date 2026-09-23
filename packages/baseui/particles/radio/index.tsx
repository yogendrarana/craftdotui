import { RadioGroupRoot, RadioRoot } from "@craftdotui/baseui/components/radio";

export function Particle() {
	return (
		<RadioGroupRoot defaultValue="default">
			<div className="flex items-center gap-2">
				<RadioRoot value="default" id="r1" />
				<label
					htmlFor="r1"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Default
				</label>
			</div>
			<div className="flex items-center gap-2">
				<RadioRoot value="comfortable" id="r2" />
				<label
					htmlFor="r2"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Comfortable
				</label>
			</div>
			<div className="flex items-center gap-2">
				<RadioRoot value="compact" id="r3" />
				<label
					htmlFor="r3"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Compact
				</label>
			</div>
		</RadioGroupRoot>
	);
}
