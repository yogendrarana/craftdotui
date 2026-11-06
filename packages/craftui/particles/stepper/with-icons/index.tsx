import { CreditCard, PackageCheck, ShieldCheck, User } from "lucide-react";
import { Button } from "@craftdotui/baseui/components/button";
import {
	StepperIndicator,
	StepperItem,
	StepperList,
	StepperNext,
	StepperPrev,
	StepperRoot,
	StepperSeparator,
	StepperTitle,
	StepperTrigger,
} from "@craftdotui/craftui/components/stepper";

const steps = [
	{ step: 1, title: "Identity", icon: User },
	{ step: 2, title: "Billing", icon: CreditCard },
	{ step: 3, title: "Security", icon: ShieldCheck },
	{ step: 4, title: "Ready", icon: PackageCheck },
];

export function Particle() {
	return (
		<StepperRoot defaultValue={2} className="mx-auto w-full max-w-xl">
			<StepperList>
				{steps.map(({ step, title, icon: Icon }, index) => (
					<StepperItem key={step} step={step}>
						<StepperTrigger className="flex-col gap-1.5 text-center">
							<StepperIndicator className="size-8">
								<Icon />
							</StepperIndicator>
							<StepperTitle className="text-xs">
								{title}
							</StepperTitle>
						</StepperTrigger>
						{index < steps.length - 1 && (
							<StepperSeparator className="-mt-4" />
						)}
					</StepperItem>
				))}
			</StepperList>

			<div className="flex items-center justify-center gap-2">
				<StepperPrev render={<Button variant="outline" size="sm" />}>
					Previous
				</StepperPrev>
				<StepperNext render={<Button size="sm" />}>Next</StepperNext>
			</div>
		</StepperRoot>
	);
}

export default Particle;
