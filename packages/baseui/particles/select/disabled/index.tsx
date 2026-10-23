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
			<SelectRoot defaultValue="apple" disabled>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>

				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectContent>
			</SelectRoot>
		</div>
	);
}

export default Particle;
