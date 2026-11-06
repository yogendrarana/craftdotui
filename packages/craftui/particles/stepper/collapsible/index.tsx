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
		title: "Create API key",
		description: "Generate a scoped token for your environment.",
		details:
			"Copy your secret key and store it safely in your .env.local file. You won't be able to view it again after leaving this step.",
	},
	{
		step: 2,
		title: "Install SDK",
		description: "Add the client package to your project.",
		details:
			"Run bun add @craftdotui/sdk in your project root and initialize the client with your environment key.",
	},
	{
		step: 3,
		title: "Send test event",
		description: "Verify your integration is receiving events.",
		details:
			"Trigger a test event from your application to confirm real-time telemetry is connected.",
	},
];

export function Particle() {
	return (
		<StepperRoot
			defaultValue={1}
			orientation="vertical"
			className="mx-auto w-full max-w-md"
		>
			<StepperList>
				{steps.map(({ step, title, description, details }, index) => (
					<StepperItem key={step} step={step} className="w-full">
						<StepperTrigger className="items-start">
							<StepperIndicator />
							<div className="flex flex-col gap-0.5">
								<StepperTitle>{title}</StepperTitle>
								<StepperDescription>
									{description}
								</StepperDescription>
							</div>
						</StepperTrigger>
						{index < steps.length - 1 && <StepperSeparator />}

						<StepperContent className="mt-3 pl-10">
							<div className="flex flex-col gap-3 rounded-lg border border-border bg-muted/30 p-3.5 text-xs/relaxed text-muted-foreground">
								<p>{details}</p>
								<div className="flex items-center gap-2">
									{index < steps.length - 1 ? (
										<StepperNext
											render={<Button size="xs" />}
										>
											Continue
										</StepperNext>
									) : (
										<Button size="xs">Finish setup</Button>
									)}
									{index > 0 && (
										<StepperPrev
											render={
												<Button
													variant="ghost"
													size="xs"
												/>
											}
										>
											Back
										</StepperPrev>
									)}
								</div>
							</div>
						</StepperContent>
					</StepperItem>
				))}
			</StepperList>
		</StepperRoot>
	);
}

export default Particle;
