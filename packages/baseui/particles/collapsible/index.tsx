import {
	CollapsibleRoot,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@craftdotui/baseui/components/collapsible";

export default function Particle() {
	return (
		<CollapsibleRoot>
			<CollapsibleTrigger>Recovery Keys</CollapsibleTrigger>
			<CollapsiblePanel>
				<div className="flex flex-col gap-2 p-3 bg-muted rounded-md">
					<div>alien-bean-pasta</div>
					<div>wild-irish-burrito</div>
					<div>horse-battery-staple</div>
				</div>
			</CollapsiblePanel>
		</CollapsibleRoot>
	);
}
