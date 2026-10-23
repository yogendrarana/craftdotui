import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from "@craftdotui/baseui/components/menu";

export function Particle() {
	return (
		<MenuRoot>
			<MenuTrigger
				openOnHover
				render={<Button variant="outline">Open Menu</Button>}
			/>
			<MenuContent>
				<MenuItem>Profile</MenuItem>
				<MenuItem>Settings</MenuItem>
				<MenuItem>Logout</MenuItem>
			</MenuContent>
		</MenuRoot>
	);
}

export default Particle;
