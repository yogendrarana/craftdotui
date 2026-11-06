"use client";

import * as React from "react";
import { Lock } from "lucide-react";
import {
	AccordionHeader,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AccordionRoot,
	AccordionTrigger,
} from "@craftdotui/baseui/components/accordion";
import { Button } from "@craftdotui/baseui/components/button";
import {
	FieldControl,
	FieldDescription,
	FieldLabel,
	FieldRoot,
} from "@craftdotui/baseui/components/field";
import {
	StepperIndicator,
	StepperItem,
	StepperNext,
	StepperPrev,
	StepperRoot,
	StepperTitle,
} from "@craftdotui/craftui/components/stepper";

export function Particle() {
	const totalSteps = 4;
	const [activeStep, setActiveStep] = React.useState(1);
	const [unlockedStep, setUnlockedStep] = React.useState(1);
	const [openItems, setOpenItems] = React.useState<string[]>(["step-1"]);
	const [formData, setFormData] = React.useState({
		fullName: "Yogendra Rana",
		email: "yogendra@example.com",
		workspaceName: "Acme Labs",
		subdomain: "acme-labs",
		role: "Full-Stack Engineer",
		teamSize: "5-20 members",
	});

	const handleStepChange = (nextStep: number) => {
		setActiveStep(nextStep);
		setUnlockedStep((prev) => Math.max(prev, nextStep));
		setOpenItems([`step-${nextStep}`]);
	};

	const handleAccordionChange = (value: string[]) => {
		// Only allow opening unlocked steps
		const validItems = value.filter((val) => {
			const stepNum = Number(val.replace("step-", ""));
			return stepNum <= unlockedStep;
		});
		setOpenItems(validItems);
		if (validItems.length > 0) {
			const lastOpened = Number(
				validItems[validItems.length - 1].replace("step-", ""),
			);
			setActiveStep(lastOpened);
		}
	};

	const completedCount = Math.max(0, Math.min(unlockedStep - 1, totalSteps));

	return (
		<div className="mx-auto w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card shadow-xs">
			<StepperRoot
				value={activeStep}
				onValueChange={handleStepChange}
				orientation="vertical"
				className="gap-0"
			>
				<AccordionRoot
					value={openItems}
					onValueChange={handleAccordionChange}
					className="divide-y divide-border"
				>
					{/* Step 1: Applicant Profile */}
					<AccordionItem value="step-1" className="border-b-0">
						<StepperItem step={1} className="w-full pb-0">
							<AccordionHeader className="w-full">
								<AccordionTrigger
									disabled={unlockedStep < 1}
									showAccordionIcon={false}
									className="w-full p-4 hover:no-underline"
								>
									<div className="flex items-center gap-3">
										<StepperIndicator />
										<div className="flex flex-col text-left">
											<StepperTitle>
												Applicant profile
											</StepperTitle>
											<span className="text-xs text-muted-foreground">
												Contact name and login details
											</span>
										</div>
									</div>
									<AccordionIcon />
								</AccordionTrigger>
							</AccordionHeader>

							<AccordionPanel
								className="w-full"
								innerClassName="px-4 pb-4 pt-0"
							>
								<div className="flex flex-col gap-4 pl-10">
									<FieldRoot>
										<FieldLabel>Full name</FieldLabel>
										<FieldControl
											placeholder="Jane Doe"
											value={formData.fullName}
											onChange={(e) =>
												setFormData((prev) => ({
													...prev,
													fullName: e.target.value,
												}))
											}
										/>
									</FieldRoot>

									<FieldRoot>
										<FieldLabel>Contact email</FieldLabel>
										<FieldControl
											type="email"
											placeholder="jane@company.com"
											value={formData.email}
											onChange={(e) =>
												setFormData((prev) => ({
													...prev,
													email: e.target.value,
												}))
											}
										/>
									</FieldRoot>

									<div className="flex justify-end pt-2">
										<StepperNext
											render={<Button size="sm" />}
										>
											Continue
										</StepperNext>
									</div>
								</div>
							</AccordionPanel>
						</StepperItem>
					</AccordionItem>

					{/* Step 2: Workspace Setup */}
					<AccordionItem value="step-2" className="border-b-0">
						<StepperItem
							step={2}
							disabled={unlockedStep < 2}
							className="w-full pb-0"
						>
							<AccordionHeader className="w-full">
								<AccordionTrigger
									disabled={unlockedStep < 2}
									showAccordionIcon={false}
									className="w-full p-4 hover:no-underline"
								>
									<div className="flex items-center gap-3">
										<StepperIndicator>
											{unlockedStep < 2 ? (
												<Lock />
											) : undefined}
										</StepperIndicator>
										<div className="flex flex-col text-left">
											<StepperTitle>
												Workspace setup
											</StepperTitle>
											<span className="text-xs text-muted-foreground">
												{unlockedStep < 2
													? "Opens after Applicant profile"
													: "Define company name and custom URL"}
											</span>
										</div>
									</div>
									<AccordionIcon />
								</AccordionTrigger>
							</AccordionHeader>

							<AccordionPanel
								className="w-full"
								innerClassName="px-4 pb-4 pt-0"
							>
								<div className="flex flex-col gap-4 pl-10">
									<FieldRoot>
										<FieldLabel>Workspace name</FieldLabel>
										<FieldControl
											placeholder="Acme Corp"
											value={formData.workspaceName}
											onChange={(e) =>
												setFormData((prev) => ({
													...prev,
													workspaceName:
														e.target.value,
												}))
											}
										/>
									</FieldRoot>

									<FieldRoot>
										<FieldLabel>Domain prefix</FieldLabel>
										<FieldControl
											placeholder="acme"
											value={formData.subdomain}
											onChange={(e) =>
												setFormData((prev) => ({
													...prev,
													subdomain: e.target.value,
												}))
											}
										/>
										<FieldDescription>
											https://
											{formData.subdomain || "acme"}
											.craftdotui.com
										</FieldDescription>
									</FieldRoot>

									<div className="flex items-center justify-end gap-2 pt-2">
										<StepperPrev
											render={
												<Button
													variant="outline"
													size="sm"
												/>
											}
										>
											Back
										</StepperPrev>
										<StepperNext
											render={<Button size="sm" />}
										>
											Continue
										</StepperNext>
									</div>
								</div>
							</AccordionPanel>
						</StepperItem>
					</AccordionItem>

					{/* Step 3: Role & Scope */}
					<AccordionItem value="step-3" className="border-b-0">
						<StepperItem
							step={3}
							disabled={unlockedStep < 3}
							className="w-full pb-0"
						>
							<AccordionHeader className="w-full">
								<AccordionTrigger
									disabled={unlockedStep < 3}
									showAccordionIcon={false}
									className="w-full p-4 hover:no-underline"
								>
									<div className="flex items-center gap-3">
										<StepperIndicator>
											{unlockedStep < 3 ? (
												<Lock />
											) : undefined}
										</StepperIndicator>
										<div className="flex flex-col text-left">
											<StepperTitle>
												Role & team scope
											</StepperTitle>
											<span className="text-xs text-muted-foreground">
												{unlockedStep < 3
													? "Opens after Workspace setup"
													: "Team size and primary responsibilities"}
											</span>
										</div>
									</div>
									<AccordionIcon />
								</AccordionTrigger>
							</AccordionHeader>

							<AccordionPanel
								className="w-full"
								innerClassName="px-4 pb-4 pt-0"
							>
								<div className="flex flex-col gap-4 pl-10">
									<FieldRoot>
										<FieldLabel>Primary role</FieldLabel>
										<FieldControl
											placeholder="Engineering Lead"
											value={formData.role}
											onChange={(e) =>
												setFormData((prev) => ({
													...prev,
													role: e.target.value,
												}))
											}
										/>
									</FieldRoot>

									<FieldRoot>
										<FieldLabel>Team size</FieldLabel>
										<FieldControl
											placeholder="e.g. 5-20 members"
											value={formData.teamSize}
											onChange={(e) =>
												setFormData((prev) => ({
													...prev,
													teamSize: e.target.value,
												}))
											}
										/>
									</FieldRoot>

									<div className="flex items-center justify-end gap-2 pt-2">
										<StepperPrev
											render={
												<Button
													variant="outline"
													size="sm"
												/>
											}
										>
											Back
										</StepperPrev>
										<StepperNext
											render={<Button size="sm" />}
										>
											Continue
										</StepperNext>
									</div>
								</div>
							</AccordionPanel>
						</StepperItem>
					</AccordionItem>

					{/* Step 4: Review & Confirm */}
					<AccordionItem value="step-4" className="border-b-0">
						<StepperItem
							step={4}
							disabled={unlockedStep < 4}
							className="w-full pb-0"
						>
							<AccordionHeader className="w-full">
								<AccordionTrigger
									disabled={unlockedStep < 4}
									showAccordionIcon={false}
									className="w-full p-4 hover:no-underline"
								>
									<div className="flex items-center gap-3">
										<StepperIndicator>
											{unlockedStep < 4 ? (
												<Lock />
											) : undefined}
										</StepperIndicator>
										<div className="flex flex-col text-left">
											<StepperTitle>
												Review & confirmation
											</StepperTitle>
											<span className="text-xs text-muted-foreground">
												{unlockedStep < 4
													? "Opens after Role & team scope"
													: "Verify details and submit onboarding"}
											</span>
										</div>
									</div>
									<AccordionIcon />
								</AccordionTrigger>
							</AccordionHeader>

							<AccordionPanel
								className="w-full"
								innerClassName="px-4 pb-4 pt-0"
							>
								<div className="flex flex-col gap-4 pl-10">
									<div className="flex flex-col gap-2 rounded-lg border border-border bg-muted/30 p-3.5 text-xs">
										<div className="flex justify-between">
											<span className="text-muted-foreground">
												Applicant
											</span>
											<span className="font-medium text-foreground">
												{formData.fullName} (
												{formData.email})
											</span>
										</div>
										<div className="flex justify-between">
											<span className="text-muted-foreground">
												Workspace
											</span>
											<span className="font-medium text-foreground">
												{formData.workspaceName} (
												{formData.subdomain}
												.craftdotui.com)
											</span>
										</div>
										<div className="flex justify-between">
											<span className="text-muted-foreground">
												Role & Team
											</span>
											<span className="font-medium text-foreground">
												{formData.role} •{" "}
												{formData.teamSize}
											</span>
										</div>
									</div>

									<div className="flex items-center justify-end gap-2 pt-2">
										<StepperPrev
											render={
												<Button
													variant="outline"
													size="sm"
												/>
											}
										>
											Back
										</StepperPrev>
										<Button
											size="sm"
											onClick={() => {
												setActiveStep(5);
												setUnlockedStep(5);
												setOpenItems([]);
											}}
										>
											Submit onboarding
										</Button>
									</div>
								</div>
							</AccordionPanel>
						</StepperItem>
					</AccordionItem>
				</AccordionRoot>
			</StepperRoot>

			{/* Bottom footer status */}
			<div className="flex items-center justify-between border-t border-border bg-muted/40 px-4 py-2.5 text-xs text-muted-foreground">
				<span>
					{completedCount >= totalSteps
						? "All sections successfully completed!"
						: `Section ${Math.min(activeStep, totalSteps)} of ${totalSteps} active`}
				</span>
				<span className="font-medium text-foreground">
					{completedCount} of {totalSteps} done
				</span>
			</div>
		</div>
	);
}

export default Particle;
