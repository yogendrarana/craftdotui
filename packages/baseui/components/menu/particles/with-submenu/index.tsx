import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuSubmenuRoot,
	MenuSubmenuTrigger,
	MenuTrigger,
} from "@craftdotui/baseui/components/menu";

export function Particle() {
	return (
		<MenuRoot>
			<MenuTrigger
				render={<Button variant="outline">Open Menu</Button>}
			/>
			<MenuContent>
				<MenuItem>Edit</MenuItem>

				<MenuSubmenuRoot>
					<MenuSubmenuTrigger>More</MenuSubmenuTrigger>
					<MenuContent>
						<MenuItem>Duplicate</MenuItem>
						<MenuItem>Archive</MenuItem>
					</MenuContent>
				</MenuSubmenuRoot>
			</MenuContent>
		</MenuRoot>
	);
}

export default Particle;
