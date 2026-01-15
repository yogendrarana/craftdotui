import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuSeparator,
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
						<MenuGroup>
							<MenuGroupLabel>Account</MenuGroupLabel>
							<MenuItem>Profile</MenuItem>
							<MenuItem>Settings</MenuItem>
						</MenuGroup>

						<MenuSeparator />

						<MenuGroup>
							<MenuGroupLabel>Danger</MenuGroupLabel>
							<MenuItem>Logout</MenuItem>
						</MenuGroup>
					</MenuPopup>
				</MenuPositioner>
			</MenuPortal>
		</MenuRoot>
	);
}
