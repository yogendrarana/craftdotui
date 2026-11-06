import {
	SelectContent,
	SelectGroup,
	SelectGroupLabel,
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

				<SelectContent alignItemWithTrigger={false}>
					<SelectGroup>
						<SelectGroupLabel>Fruits</SelectGroupLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectGroupLabel>Vegetables</SelectGroupLabel>
						<SelectItem value="broccoli">Broccoli</SelectItem>
						<SelectItem value="carrot">Carrot</SelectItem>
						<SelectItem value="courgette">Courgette</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectGroupLabel>Meat</SelectGroupLabel>
						<SelectItem value="chicken">Chicken</SelectItem>
						<SelectItem value="lamb">Lamb</SelectItem>
						<SelectItem value="pork">Pork</SelectItem>
					</SelectGroup>
				</SelectContent>
			</SelectRoot>
		</div>
	);
}

export default Particle;
