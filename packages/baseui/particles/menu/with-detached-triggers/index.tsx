import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuItem,
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
				<MenuPortal>
					<MenuPositioner>
						<MenuPopup>
							<MenuItem>Edit</MenuItem>
							<MenuItem>Share</MenuItem>
							<MenuItem>Delete</MenuItem>
						</MenuPopup>
					</MenuPositioner>
				</MenuPortal>
			</MenuRoot>
		</div>
	);
}
