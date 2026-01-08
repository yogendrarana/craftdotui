import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectPortal,
	SelectItem,
	SelectItemList,
	SelectPositioner,
	SelectPopup,
} from "@craftdotui/baseui/components/select";

export default function FrontendFrameworksSelect() {
	return (
		<div className="w-full max-w-50">
			<Select defaultValue="react">
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectPortal>
					<SelectPositioner alignItemWithTrigger={false}>
						<SelectPopup>
							<SelectItemList>
								<SelectItem value="react">React</SelectItem>
								<SelectItem value="vue">Vue.js</SelectItem>
								<SelectItem value="svelte">Svelte</SelectItem>
							</SelectItemList>
						</SelectPopup>
					</SelectPositioner>
				</SelectPortal>
			</Select>
		</div>
	);
}
