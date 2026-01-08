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
		<div className="flex flex-col gap-4 w-full max-w-50">
			<div className="flex flex-col gap-2">
				<span className="text-xs font-medium text-muted-foreground">
					Small (sm)
				</span>
				<Select defaultValue="apple">
					<SelectTrigger size="sm">
						<SelectValue />
					</SelectTrigger>

					<SelectPortal>
						<SelectPositioner>
							<SelectPopup>
								<SelectItemList>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">
										Banana
									</SelectItem>
								</SelectItemList>
							</SelectPopup>
						</SelectPositioner>
					</SelectPortal>
				</Select>
			</div>

			<div className="flex flex-col gap-2">
				<span className="text-xs font-medium text-muted-foreground">
					Medium (md)
				</span>
				<Select defaultValue="apple">
					<SelectTrigger size="md">
						<SelectValue />
					</SelectTrigger>

					<SelectPortal>
						<SelectPositioner>
							<SelectPopup>
								<SelectItemList>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">
										Banana
									</SelectItem>
								</SelectItemList>
							</SelectPopup>
						</SelectPositioner>
					</SelectPortal>
				</Select>
			</div>

			<div className="flex flex-col gap-2">
				<span className="text-xs font-medium text-muted-foreground">
					Large (lg)
				</span>
				<Select defaultValue="apple">
					<SelectTrigger size="lg">
						<SelectValue />
					</SelectTrigger>

					<SelectPortal>
						<SelectPositioner>
							<SelectPopup>
								<SelectItemList>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">
										Banana
									</SelectItem>
								</SelectItemList>
							</SelectPopup>
						</SelectPositioner>
					</SelectPortal>
				</Select>
			</div>
		</div>
	);
}
