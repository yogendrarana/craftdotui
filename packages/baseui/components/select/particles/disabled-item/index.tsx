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
			<SelectRoot defaultValue="apple">
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>

				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana" disabled>
						Banana (Unavailable)
					</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectContent>
			</SelectRoot>
		</div>
	);
}

export default Particle;
