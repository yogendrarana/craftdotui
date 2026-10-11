import { Plus } from "lucide-react";
import {
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AccordionRoot,
	AccordionTrigger,
} from "@craftdotui/baseui/components/accordion";

export default function Particle() {
	return (
		<div className="flex w-full justify-center p-4">
			<AccordionRoot
				defaultValue={["item-1"]}
				className="w-full max-w-md"
			>
				<AccordionItem value="item-1">
					<AccordionTrigger>
						<span>What is Base UI?</span>
						<AccordionIcon>
							<Plus />
						</AccordionIcon>
					</AccordionTrigger>
					<AccordionPanel>
						Base UI is an unstyled, accessible React component
						library designed for building modern design systems and
						interactive web apps with maximum styling flexibility.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>
						<span>How do I customize the animations?</span>
						<AccordionIcon>
							<Plus />
						</AccordionIcon>
					</AccordionTrigger>
					<AccordionPanel>
						Panels export CSS variables such as{" "}
						<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">
							--accordion-panel-height
						</code>{" "}
						and transition states like{" "}
						<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">
							data-starting-style
						</code>
						, allowing pure CSS height keyframes.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>
						<span>Can I use it with Tailwind CSS v4?</span>
						<AccordionIcon>
							<Plus />
						</AccordionIcon>
					</AccordionTrigger>
					<AccordionPanel>
						Yes! Craft Dot UI components use standard Tailwind CSS
						classes and modern CSS variables, working out of the box
						with zero extra setup.
					</AccordionPanel>
				</AccordionItem>
			</AccordionRoot>
		</div>
	);
}
