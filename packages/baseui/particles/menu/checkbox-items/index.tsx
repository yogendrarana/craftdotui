import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuCheckboxItem,
} from "@craftdotui/baseui/components/menu";

export function Particle() {
	return (
		<MenuRoot>
			<MenuTrigger
				render={<Button variant="outline">Open Menu</Button>}
			/>
			<MenuPortal>
				<MenuPositioner>
					<MenuPopup>
						<MenuCheckboxItem defaultChecked>
							Show line numbers
						</MenuCheckboxItem>
						<MenuCheckboxItem>Enable autosave</MenuCheckboxItem>
					</MenuPopup>
				</MenuPositioner>
			</MenuPortal>
		</MenuRoot>
	);
}
