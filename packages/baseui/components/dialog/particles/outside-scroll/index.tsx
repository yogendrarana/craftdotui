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

const FAQ_ITEMS = [
	{
		q: "What is an outside scroll dialog?",
		a: "In an outside scroll dialog, the viewport container itself scrolls rather than the popup body. This gives a natural document-like scrolling feel where the entire modal moves along the viewport.",
	},
	{
		q: "When should I prefer outside scrolling over inside scrolling?",
		a: "Use outside scrolling for long forms, multi-step wizards, or legal agreements where you want natural page scrolling mechanics and comfortable vertical margins at the top and bottom.",
	},
	{
		q: "How does it handle backdrop clicks?",
		a: "Clicking anywhere in the viewport outside the popup bubble still triggers close, preserving the modal dismissal UX.",
	},
	{
		q: "Does this affect mobile accessibility?",
		a: "On mobile viewports, outside scrolling lets users pan naturally using the native browser gesture engine without getting trapped in internal scroll boundaries.",
	},
	{
		q: "Can I combine this with sticky buttons?",
		a: "Yes! You can choose to keep the popup completely native or anchor headers/footers depending on your interface requirements.",
	},
	{
		q: "How do keyboard navigation and focus trapping work?",
		a: "Focus remains strictly trapped within the dialog element. Navigating with keyboard arrows, Page Up/Down, or the Space bar naturally scrolls the outer viewport container.",
	},
	{
		q: "Can I customize the scrollbar appearance?",
		a: "Absolutely. The scrollbar uses the Base UI Scroll Area primitive under the hood, allowing full Tailwind customization for thumb colors, rail widths, and fade transitions.",
	},
	{
		q: "How does outside scroll prevent background page scrolling?",
		a: "Base UI automatically manages document scroll lock when the dialog opens, preventing unwanted double-scrollbar scrolling on the body element.",
	},
	{
		q: "What happens on small or low-height screens?",
		a: "The outer scroll container guarantees that users on small laptops or mobile screens can scroll to reveal both the top header and bottom confirmation actions without clipping.",
	},
	{
		q: "Can I mix interactive form controls with outside scroll?",
		a: "Yes. Text inputs, selects, and checkboxes maintain their natural focus states and scroll into view automatically when tabbed through.",
	},
	{
		q: "How do animations perform with outside scrolling?",
		a: "Entry and exit animations operate smoothly via data attributes on the popup, while the scroll container remains responsive without causing layout reflows.",
	},
];

export function Particle() {
	return (
		<DialogRoot scroll="outside">
			<DialogTrigger
				render={<Button variant="outline">Open FAQ</Button>}
			/>

			<DialogContent showCloseButton className="max-w-xl">
				<DialogHeader>
					<DialogTitle>Frequently Asked Questions</DialogTitle>
					<DialogDescription>
						Scroll the viewport outside the dialog to read all
						questions.
					</DialogDescription>
				</DialogHeader>

				<DialogPanel className="gap-4 text-sm">
					{FAQ_ITEMS.map((item) => (
						<div
							key={item.q}
							className="rounded-lg border border-border/60 bg-muted/30 p-4 space-y-1.5"
						>
							<h4 className="font-semibold text-foreground">
								{item.q}
							</h4>
							<p className="text-muted-foreground leading-relaxed">
								{item.a}
							</p>
						</div>
					))}
				</DialogPanel>

				<DialogFooter variant="default">
					<DialogClose render={<Button variant="default" />}>
						Got it
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</DialogRoot>
	);
}

export default Particle;
