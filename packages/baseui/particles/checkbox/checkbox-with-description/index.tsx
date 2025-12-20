import {
	Checkbox,
	CheckboxIndicator,
	CheckIcon,
} from "@craftdotui/baseui/components/checkbox";

export default function Particle() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-start gap-2">
				<Checkbox id="terms" className="mt-0.5">
					<CheckboxIndicator>
						<CheckIcon />
					</CheckboxIndicator>
				</Checkbox>
				<div className="flex flex-col gap-1">
					<label
						htmlFor="terms"
						className="text-sm font-medium cursor-pointer"
					>
						Accept terms and conditions
					</label>
					<p className="text-xs text-muted-foreground">
						You agree to our Terms of Service and Privacy Policy.
					</p>
				</div>
			</div>

			<div className="flex items-start gap-2">
				<Checkbox id="marketing" className="mt-0.5">
					<CheckboxIndicator>
						<CheckIcon />
					</CheckboxIndicator>
				</Checkbox>
				<div className="flex flex-col gap-1">
					<label
						htmlFor="marketing"
						className="text-sm font-medium cursor-pointer"
					>
						Marketing emails
					</label>
					<p className="text-xs text-muted-foreground">
						Receive emails about new products, features, and more.
					</p>
				</div>
			</div>
		</div>
	);
}
