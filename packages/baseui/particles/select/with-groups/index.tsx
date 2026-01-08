import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectPortal,
	SelectPositioner,
	SelectPopup,
	SelectItem,
	SelectItemList,
	SelectGroup,
	SelectGroupLabel,
} from "@craftdotui/baseui/components/select";

export default function Particle() {
	return (
		<div className="w-full max-w-50">
			<Select defaultValue="apple">
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>

				<SelectPortal>
					<SelectPositioner alignItemWithTrigger={false}>
						<SelectPopup>
							<SelectGroup>
								<SelectGroupLabel>Fruits</SelectGroupLabel>
								<SelectItemList>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">
										Banana
									</SelectItem>
									<SelectItem value="grapes">
										Grapes
									</SelectItem>
								</SelectItemList>
							</SelectGroup>
							<SelectGroup>
								<SelectGroupLabel>Vegetables</SelectGroupLabel>
								<SelectItemList>
									<SelectItem value="broccoli">
										Broccoli
									</SelectItem>
									<SelectItem value="carrot">
										Carrot
									</SelectItem>
									<SelectItem value="courgette">
										Courgette
									</SelectItem>
								</SelectItemList>
							</SelectGroup>
							<SelectGroup>
								<SelectGroupLabel>Meat</SelectGroupLabel>
								<SelectItemList>
									<SelectItem value="chicken">
										Chicken
									</SelectItem>
									<SelectItem value="lamb">Lamb</SelectItem>
									<SelectItem value="pork">Pork</SelectItem>
								</SelectItemList>
							</SelectGroup>
						</SelectPopup>
					</SelectPositioner>
				</SelectPortal>
			</Select>
		</div>
	);
}
