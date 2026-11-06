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
} from "@craftdotui/baseui/components/dialog";

const TERMS_SECTIONS = [
	{
		title: "1. Overview & Acceptance",
		body: "By creating an account or accessing craftdotui, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these terms, do not use our services.",
	},
	{
		title: "2. User Accounts and Security",
		body: "You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.",
	},
	{
		title: "3. Intellectual Property Rights",
		body: "All materials, software, and documentation provided remain the intellectual property of their respective authors. You receive a limited, revocable license to use components in your applications.",
	},
	{
		title: "4. Permitted Use & Restrictions",
		body: "You may not reverse-engineer, distribute malicious payloads, or attempt to disrupt the integrity or security of the hosted registries or API endpoints.",
	},
	{
		title: "5. Termination & Suspension",
		body: "We reserve the right to suspend or terminate accounts that violate our code of conduct or breach these Terms without prior notice.",
	},
	{
		title: "6. Limitation of Liability",
		body: "To the maximum extent permitted by applicable law, craftdotui is provided 'as is' without warranty of any kind, express or implied.",
	},
	{
		title: "7. Privacy and Data Handling",
		body: "We process personal data in accordance with our Privacy Policy. By utilizing our tools, you acknowledge and agree that certain telemetry and anonymous usage metrics may be gathered to improve reliability.",
	},
	{
		title: "8. Modifications to Terms",
		body: "We may revise these Terms periodically to reflect evolving regulatory frameworks or platform enhancements. Continued access after updates constitutes binding consent to the revised terms.",
	},
	{
		title: "9. Governing Law & Jurisdiction",
		body: "These Terms and any disputes arising out of or related to them shall be governed by and construed under the laws of the applicable jurisdiction, without regard to conflict of law principles.",
	},
	{
		title: "10. Contact & Support",
		body: "If you have questions, inquiries, or security disclosures regarding these Terms, please reach out to our legal and support team at legal@craftdotui.com.",
	},
];

export function Particle() {
	return (
		<DialogRoot>
			<DialogTrigger
				render={
					<Button variant="outline">View Terms of Service</Button>
				}
			/>

			<DialogContent showCloseButton>
				<DialogHeader className="border-b border-border pb-4">
					<DialogTitle>Terms of Service</DialogTitle>
					<DialogDescription>
						Scroll inside the popup to read the full agreement.
					</DialogDescription>
				</DialogHeader>

				<DialogPanel className="space-y-4 text-sm text-muted-foreground">
					{TERMS_SECTIONS.map((section) => (
						<div key={section.title} className="space-y-1">
							<h4 className="font-semibold text-foreground text-sm">
								{section.title}
							</h4>
							<p className="leading-relaxed">{section.body}</p>
						</div>
					))}
				</DialogPanel>

				<DialogFooter variant="default">
					<DialogClose render={<Button variant="ghost" />}>
						Decline
					</DialogClose>
					<DialogClose render={<Button variant="default" />}>
						I Accept
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</DialogRoot>
	);
}

export default Particle;
