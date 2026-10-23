import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuCheckboxItem,
	MenuContent,
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
				<MenuCheckboxItem defaultChecked>
					Show line numbers
				</MenuCheckboxItem>
				<MenuCheckboxItem>Enable autosave</MenuCheckboxItem>
			</MenuContent>
		</MenuRoot>
	);
}

export default Particle;
