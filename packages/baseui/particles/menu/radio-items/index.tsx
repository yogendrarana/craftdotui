import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuRadioGroup,
	MenuRadioItem,
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
						<MenuRadioGroup defaultValue="system">
							<MenuRadioItem value="light">Light</MenuRadioItem>
							<MenuRadioItem value="dark">Dark</MenuRadioItem>
							<MenuRadioItem value="system">System</MenuRadioItem>
						</MenuRadioGroup>
					</MenuPopup>
				</MenuPositioner>
			</MenuPortal>
		</MenuRoot>
	);
}
