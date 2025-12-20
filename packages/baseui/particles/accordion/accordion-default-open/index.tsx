import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@craftdotui/baseui/components/accordion";

export default function Particle() {
	const items = [
		{
			content:
				"React: Created by Jordan Walke at Facebook (Meta) in 2013.",
			id: "1",
			title: "Who created React?",
		},
		{
			content: "Vue: Created by Evan You in 2014.",
			id: "2",
			title: "Who created Vue?",
		},
		{
			content: "Svelte: Created by Rich Harris in 2016.",
			id: "3",
			title: "Who created Svelte?",
		},
	];

	return (
		<Accordion className="w-full md:w-125" defaultValue={["1"]}>
			{items.map((item) => (
				<AccordionItem key={item.id} value={item.id}>
					<AccordionTrigger>{item.title}</AccordionTrigger>
					<AccordionPanel>{item.content}</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	);
}
