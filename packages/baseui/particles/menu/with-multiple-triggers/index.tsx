import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from "@craftdotui/baseui/components/menu";
import { EllipsisVertical } from "lucide-react";

export function Particle() {
	return (
		<MenuRoot>
			<div className="flex items-center gap-1">
				<MenuTrigger
					render={<Button variant="outline">Open Menu</Button>}
				/>
				<MenuTrigger
					render={
						<Button variant="outline" size="icon">
							<EllipsisVertical />
						</Button>
					}
				/>
			</div>

			<MenuContent>
				<MenuItem>Edit</MenuItem>
				<MenuItem>Delete</MenuItem>
			</MenuContent>
		</MenuRoot>
	);
}

export default Particle;
