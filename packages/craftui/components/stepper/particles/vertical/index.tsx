import { Button } from "@craftdotui/baseui/components/button";
import {
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
		title: "Connect repository",
		description: "Link your GitHub or GitLab repository to import code.",
	},
	{
		step: 2,
		title: "Configure build settings",
		description:
			"Set root directory, build command, and environment variables.",
	},
	{
		step: 3,
		title: "Deploy to production",
		description: "Trigger your first build and assign a custom domain.",
	},
];

export function Particle() {
	return (
		<StepperRoot
			defaultValue={2}
			orientation="vertical"
			className="mx-auto w-full max-w-sm"
		>
			<StepperList>
				{steps.map(({ step, title, description }, index) => (
					<StepperItem key={step} step={step}>
						<StepperTrigger className="items-start">
							<StepperIndicator />
							<div className="flex flex-col gap-1">
								<StepperTitle>{title}</StepperTitle>
								<StepperDescription>
									{description}
								</StepperDescription>
							</div>
						</StepperTrigger>
						{index < steps.length - 1 && <StepperSeparator />}
					</StepperItem>
				))}
			</StepperList>

			<div className="flex items-center gap-2">
				<StepperPrev render={<Button variant="outline" size="sm" />}>
					Previous
				</StepperPrev>
				<StepperNext render={<Button size="sm" />}>Next</StepperNext>
			</div>
		</StepperRoot>
	);
}

export default Particle;
