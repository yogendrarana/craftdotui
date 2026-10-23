import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@craftdotui/baseui/components/select";

export function Particle() {
	return (
		<div className="w-full max-w-50">
			<SelectRoot defaultValue="apple">
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>

				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>

					<SelectSeparator className="my-1" />
					<SelectItem value="orange">Orange</SelectItem>
					<SelectItem value="lemon">Lemon</SelectItem>

					<SelectSeparator className="my-1" />
					<SelectItem value="strawberry">Strawberry</SelectItem>
				</SelectContent>
			</SelectRoot>
		</div>
	);
}

export default Particle;
