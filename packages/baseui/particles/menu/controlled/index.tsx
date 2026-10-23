import { useState } from "react";
import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from "@craftdotui/baseui/components/menu";

export function Particle() {
	const [open, setOpen] = useState(false);

	return (
		<MenuRoot open={open} onOpenChange={setOpen}>
			<MenuTrigger
				render={<Button variant="outline">Open Menu</Button>}
			/>
			<MenuContent>
				<MenuItem onSelect={() => setOpen(false)}>Menu Item 1</MenuItem>
				<MenuItem onSelect={() => setOpen(false)}>Menu Item 2</MenuItem>
				<MenuItem onSelect={() => setOpen(false)}>Menu Item 3</MenuItem>
			</MenuContent>
		</MenuRoot>
	);
}

export default Particle;
