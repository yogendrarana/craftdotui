import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuItem,
} from "@craftdotui/baseui/components/menu";

export function Particle() {
	return (
		<MenuRoot>
			<MenuTrigger
				openOnHover
				render={<Button variant="outline">Open Menu</Button>}
			/>

			<MenuPortal>
				<MenuPositioner>
					<MenuPopup>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Settings</MenuItem>
						<MenuItem>Logout</MenuItem>
					</MenuPopup>
				</MenuPositioner>
			</MenuPortal>
		</MenuRoot>
	);
}
