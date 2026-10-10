"use client";

import { Button } from "@craftdotui/baseui/components/button";
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPanel,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
	createHandle,
} from "@craftdotui/baseui/components/dialog";

interface PlanPayload {
	name: string;
	price: string;
	features: string[];
}

const planDialogHandle = createHandle<PlanPayload>();

const PLANS: PlanPayload[] = [
	{
		name: "Starter Plan",
		price: "$19/mo",
		features: ["Up to 5 projects", "Basic analytics", "Community support"],
	},
	{
		name: "Pro Plan",
		price: "$49/mo",
		features: [
			"Unlimited projects",
			"Real-time analytics",
			"Priority support",
			"Custom domains",
		],
	},
	{
		name: "Enterprise Plan",
		price: "$199/mo",
		features: [
			"Dedicated SLA",
			"SSO / SAML login",
			"24/7 Phone support",
			"Custom contracts",
		],
	},
];

export function Particle() {
	return (
		<div className="flex flex-col items-center gap-6">
			<div className="flex flex-wrap items-center justify-center gap-3">
				{PLANS.map((plan) => (
					<DialogTrigger
						key={plan.name}
						handle={planDialogHandle}
						payload={plan}
						render={
							<Button
								variant="outline"
								className="flex flex-col h-auto py-2 px-4 items-start text-left"
							>
								<span className="font-semibold text-sm">
									{plan.name}
								</span>
								<span className=" text-muted-foreground">
									{plan.price}
								</span>
							</Button>
						}
					/>
				))}
			</div>

			{/* Dialog Root linked via handle */}
			<DialogRoot handle={planDialogHandle}>
				{({ payload }) => {
					const plan = payload as PlanPayload | undefined;

					return (
						<DialogContent showCloseButton>
							<DialogHeader>
								<DialogTitle>
									Upgrade to {plan?.name ?? "Selected Plan"}
								</DialogTitle>
								<DialogDescription>
									Selected tier price:{" "}
									<strong className="text-foreground">
										{plan?.price}
									</strong>
								</DialogDescription>
							</DialogHeader>

							<DialogPanel>
								<p className="text-xs font-medium text-foreground">
									Included features:
								</p>
								<ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
									{plan?.features.map((feature) => (
										<li key={feature}>{feature}</li>
									))}
								</ul>
							</DialogPanel>

							<DialogFooter variant="default">
								<DialogClose
									render={<Button variant="ghost" />}
								>
									Cancel
								</DialogClose>
								<DialogClose
									render={<Button variant="default" />}
								>
									Confirm Subscription
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					);
				}}
			</DialogRoot>
		</div>
	);
}

export default Particle;
