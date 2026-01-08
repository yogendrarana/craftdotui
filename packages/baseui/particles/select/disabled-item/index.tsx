import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectPortal,
	SelectPositioner,
	SelectPopup,
	SelectItem,
	SelectItemList,
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
								<SelectItem value="banana" disabled>
									Banana (Unavailable)
								</SelectItem>
								<SelectItem value="orange">Orange</SelectItem>
							</SelectItemList>
						</SelectPopup>
					</SelectPositioner>
				</SelectPortal>
			</Select>
		</div>
	);
}
