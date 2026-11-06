import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValue,
} from "@craftdotui/baseui/components/select";

export function Particle() {
	return (
		<div className="w-full max-w-50">
			<SelectRoot defaultValue="react">
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectContent alignItemWithTrigger={false}>
					<SelectItem value="react">React</SelectItem>
					<SelectItem value="vue">Vue.js</SelectItem>
					<SelectItem value="svelte">Svelte</SelectItem>
				</SelectContent>
			</SelectRoot>
		</div>
	);
}

export default Particle;
