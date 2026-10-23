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
				render={<Button variant="outline">Open Menu</Button>}
			/>
			<MenuContent>
				<MenuItem closeOnClick>Profile</MenuItem>
				<MenuItem closeOnClick>Logout</MenuItem>
			</MenuContent>
		</MenuRoot>
	);
}

export default Particle;
