import { Radio, RadioGroup } from "@craftdotui/baseui/components/radio";

const plans = [
	{
		id: "free",
		name: "Free",
		description: "Perfect for trying out our service",
		price: "$0/month",
	},
	{
		id: "pro",
		name: "Pro",
		description: "For professionals and small teams",
		price: "$19/month",
	},
	{
		id: "enterprise",
		name: "Enterprise",
		description: "Advanced features for large organizations",
		price: "$99/month",
	},
];

export function Particle() {
	return (
		<RadioGroup defaultValue="free" className="w-full max-w-md gap-3">
			{plans.map((plan) => (
				<label
					key={plan.id}
					htmlFor={plan.id}
					className="relative flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-colors hover:bg-muted has-checked:border-primary has-checked:bg-muted"
				>
					<Radio value={plan.id} id={plan.id} className="mt-0.5" />
					<div className="flex-1">
						<div className="flex items-center justify-between">
							<span className="font-medium">{plan.name}</span>
							<span className="text-sm font-semibold">
								{plan.price}
							</span>
						</div>
						<p className="text-sm text-muted-foreground">
							{plan.description}
						</p>
					</div>
				</label>
			))}
		</RadioGroup>
	);
}
