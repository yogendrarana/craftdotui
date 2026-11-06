"use client";

import * as React from "react";
import { Button } from "@craftdotui/baseui/components/button";
import {
	FieldControl,
	FieldDescription,
	FieldLabel,
	FieldRoot,
} from "@craftdotui/baseui/components/field";
import {
	StepperContent,
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

export function Particle() {
	const [step, setStep] = React.useState(1);
	const [formData, setFormData] = React.useState({
		name: "Yogendra Rana",
		email: "yogendra@craftdotui.com",
		workspace: "Craft UI",
		slug: "craft-ui",
	});

	return (
		<StepperRoot
			value={step}
			onValueChange={setStep}
			className="mx-auto w-full max-w-lg rounded-lg border border-border bg-card p-5"
		>
			<StepperList>
				<StepperItem step={1}>
					<StepperTrigger>
						<StepperIndicator />
						<StepperTitle>Profile</StepperTitle>
					</StepperTrigger>
					<StepperSeparator />
				</StepperItem>

				<StepperItem step={2}>
					<StepperTrigger>
						<StepperIndicator />
						<StepperTitle>Workspace</StepperTitle>
					</StepperTrigger>
					<StepperSeparator />
				</StepperItem>

				<StepperItem step={3}>
					<StepperTrigger>
						<StepperIndicator />
						<StepperTitle>Review</StepperTitle>
					</StepperTrigger>
				</StepperItem>
			</StepperList>

			<StepperContent step={1} className="flex flex-col gap-3">
				<FieldRoot>
					<FieldLabel>Full Name</FieldLabel>
					<FieldControl
						placeholder="Enter your name"
						value={formData.name}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								name: e.target.value,
							}))
						}
					/>
				</FieldRoot>
				<FieldRoot>
					<FieldLabel>Email Address</FieldLabel>
					<FieldControl
						type="email"
						placeholder="you@example.com"
						value={formData.email}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								email: e.target.value,
							}))
						}
					/>
				</FieldRoot>
			</StepperContent>

			<StepperContent step={2} className="flex flex-col gap-3">
				<FieldRoot>
					<FieldLabel>Workspace Name</FieldLabel>
					<FieldControl
						placeholder="Acme Inc."
						value={formData.workspace}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								workspace: e.target.value,
							}))
						}
					/>
				</FieldRoot>
				<FieldRoot>
					<FieldLabel>Workspace URL</FieldLabel>
					<FieldControl
						placeholder="acme"
						value={formData.slug}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								slug: e.target.value,
							}))
						}
					/>
					<FieldDescription>
						craftdotui.com/{formData.slug || "workspace"}
					</FieldDescription>
				</FieldRoot>
			</StepperContent>

			<StepperContent step={3}>
				<div className="flex flex-col gap-2 rounded-md border border-border bg-muted/30 p-3.5 text-sm">
					<div className="flex justify-between">
						<span className="text-muted-foreground">Name</span>
						<span className="font-medium text-foreground">
							{formData.name}
						</span>
					</div>
					<div className="flex justify-between">
						<span className="text-muted-foreground">Email</span>
						<span className="font-medium text-foreground">
							{formData.email}
						</span>
					</div>
					<div className="flex justify-between">
						<span className="text-muted-foreground">Workspace</span>
						<span className="font-medium text-foreground">
							{formData.workspace} ({formData.slug})
						</span>
					</div>
				</div>
			</StepperContent>

			<div className="flex items-center justify-end gap-2 border-t border-border pt-4">
				<StepperPrev render={<Button variant="outline" size="sm" />}>
					Back
				</StepperPrev>
				{step < 3 ? (
					<StepperNext render={<Button size="sm" />}>
						Continue
					</StepperNext>
				) : (
					<Button size="sm" onClick={() => setStep(1)}>
						Create Workspace
					</Button>
				)}
			</div>
		</StepperRoot>
	);
}

export default Particle;
