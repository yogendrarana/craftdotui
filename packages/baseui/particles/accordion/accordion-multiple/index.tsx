"use client";

import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionPanel,
} from "@craftdotui/baseui/components/accordion";

export default function Particle() {
	return (
		<Accordion multiple className="w-full max-w-md">
			<AccordionItem value="item-1">
				<AccordionTrigger>What is your refund policy?</AccordionTrigger>
				<AccordionPanel>
					We offer a 30-day money-back guarantee for all purchases. If
					you're not satisfied with your product, contact our support
					team for a full refund.
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem value="item-2">
				<AccordionTrigger>How do I track my order?</AccordionTrigger>
				<AccordionPanel>
					Once your order ships, you'll receive a tracking number via
					email. You can use this number on our website or the
					carrier's site to monitor your delivery.
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem value="item-3">
				<AccordionTrigger>
					Do you ship internationally?
				</AccordionTrigger>
				<AccordionPanel>
					Yes! We ship to over 100 countries worldwide. Shipping costs
					and delivery times vary by location.
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
}
