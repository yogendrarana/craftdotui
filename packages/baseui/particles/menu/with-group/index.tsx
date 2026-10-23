import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuContent,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuRoot,
	MenuSeparator,
	MenuTrigger,
} from "@craftdotui/baseui/components/menu";

export function Particle() {
	return (
		<MenuRoot>
			<MenuTrigger
				render={<Button variant="outline">Open Menu</Button>}
			/>
			<MenuContent>
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
			</MenuContent>
		</MenuRoot>
	);
}

export default Particle;
