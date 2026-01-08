import { Apple, Banana, Citrus, Grape, Cherry } from "lucide-react";
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
								<SelectItem value="apple">
									<div className="flex items-center gap-2">
										<Apple className="size-4 text-red-500" />
										<span>Apple</span>
									</div>
								</SelectItem>
								<SelectItem value="banana">
									<div className="flex items-center gap-2">
										<Banana className="size-4 text-yellow-500" />
										<span>Banana</span>
									</div>
								</SelectItem>
								<SelectItem value="orange">
									<div className="flex items-center gap-2">
										<Citrus className="size-4 text-orange-500" />
										<span>Orange</span>
									</div>
								</SelectItem>
								<SelectItem value="grape">
									<div className="flex items-center gap-2">
										<Grape className="size-4 text-purple-500" />
										<span>Grape</span>
									</div>
								</SelectItem>
								<SelectItem value="cherry">
									<div className="flex items-center gap-2">
										<Cherry className="size-4 text-pink-500" />
										<span>Cherry</span>
									</div>
								</SelectItem>
							</SelectItemList>
						</SelectPopup>
					</SelectPositioner>
				</SelectPortal>
			</Select>
		</div>
	);
}
