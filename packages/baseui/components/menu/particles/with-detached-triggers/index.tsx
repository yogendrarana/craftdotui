import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
	createHandle,
} from "@craftdotui/baseui/components/menu";

const demoMenu = createHandle();

export function Particle() {
	return (
		<div>
			<MenuTrigger
				handle={demoMenu}
				render={<Button variant="outline">Open Menu</Button>}
			/>

			<MenuRoot handle={demoMenu}>
				<MenuContent>
					<MenuItem>Edit</MenuItem>
					<MenuItem>Share</MenuItem>
					<MenuItem>Delete</MenuItem>
				</MenuContent>
			</MenuRoot>
		</div>
	);
}

export default Particle;
