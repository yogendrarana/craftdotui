import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectPortal,
	SelectPositioner,
	SelectPopup,
	SelectItem,
	SelectItemList,
	SelectSeparator,
} from "@craftdotui/baseui/components/select";

export default function Particle() {
	return (
		<div className="w-full max-w-50">
			<Select defaultValue="apple">
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>

				<SelectPortal>
					<SelectPositioner>
						<SelectPopup>
							<SelectItemList>
								<SelectItem value="apple">Apple</SelectItem>
								<SelectItem value="banana">Banana</SelectItem>

								<SelectSeparator className="my-1" />
								<SelectItem value="orange">Orange</SelectItem>
								<SelectItem value="lemon">Lemon</SelectItem>

								<SelectSeparator className="my-1" />
								<SelectItem value="strawberry">
									Strawberry
								</SelectItem>
							</SelectItemList>
						</SelectPopup>
					</SelectPositioner>
				</SelectPortal>
			</Select>
		</div>
	);
}
