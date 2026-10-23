import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuContent,
	MenuRadioGroup,
	MenuRadioItem,
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
				<MenuRadioGroup defaultValue="system">
					<MenuRadioItem value="light">Light</MenuRadioItem>
					<MenuRadioItem value="dark">Dark</MenuRadioItem>
					<MenuRadioItem value="system">System</MenuRadioItem>
				</MenuRadioGroup>
			</MenuContent>
		</MenuRoot>
	);
}

export default Particle;
