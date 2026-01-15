import { useState } from "react";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuItem,
} from "@craftdotui/baseui/components/menu";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	const [open, setOpen] = useState(false);

	return (
		<MenuRoot open={open} onOpenChange={setOpen}>
			<MenuTrigger
				render={<Button variant="outline">Open Menu</Button>}
			/>
			<MenuPortal>
				<MenuPositioner>
					<MenuPopup>
						<MenuItem onSelect={() => setOpen(false)}>
							Menu Item 1
						</MenuItem>
						<MenuItem onSelect={() => setOpen(false)}>
							Menu Item 2
						</MenuItem>
						<MenuItem onSelect={() => setOpen(false)}>
							Menu Item 3
						</MenuItem>
					</MenuPopup>
				</MenuPositioner>
			</MenuPortal>
		</MenuRoot>
	);
}
