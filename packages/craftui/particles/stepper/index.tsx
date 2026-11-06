import { Button } from "@craftdotui/baseui/components/button";
import {
	StepperContent,
	StepperDescription,
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
	{
		step: 1,
		title: "Account",
		description: "Create your account",
		content:
			"Set up your credentials and verify your email address to get started.",
	},
	{
		step: 2,
		title: "Workspace",
		description: "Configure team settings",
		content:
			"Choose a workspace name, invite collaborators, and configure default roles.",
	},
	{
		step: 3,
		title: "Review",
		description: "Confirm and launch",
		content:
			"Everything looks good! Review your configuration and launch your workspace.",
	},
];

export function Particle() {
	return (
		<StepperRoot defaultValue={1} className="mx-auto w-full max-w-xl">
			<StepperList>
				{steps.map(({ step, title, description }, index) => (
					<StepperItem key={step} step={step}>
						<StepperTrigger>
							<StepperIndicator />
							<div className="flex flex-col gap-0.5">
								<StepperTitle>{title}</StepperTitle>
								<StepperDescription className="max-sm:hidden">
									{description}
								</StepperDescription>
							</div>
						</StepperTrigger>
						{index < steps.length - 1 && <StepperSeparator />}
					</StepperItem>
				))}
			</StepperList>

			{steps.map(({ step, content }) => (
				<StepperContent
					key={step}
					step={step}
					className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground"
				>
					{content}
				</StepperContent>
			))}

			<div className="flex items-center justify-between">
				<StepperPrev render={<Button variant="outline" size="sm" />}>
					Previous
				</StepperPrev>
				<StepperNext render={<Button size="sm" />}>Next</StepperNext>
			</div>
		</StepperRoot>
	);
}

export default Particle;
