import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuItem,
	MenuSubmenuRoot,
	MenuSubmenuTrigger,
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
						<MenuItem>Edit</MenuItem>

						<MenuSubmenuRoot>
							<MenuSubmenuTrigger>More</MenuSubmenuTrigger>
							<MenuPortal>
								<MenuPositioner>
									<MenuPopup>
										<MenuItem>Duplicate</MenuItem>
										<MenuItem>Archive</MenuItem>
									</MenuPopup>
								</MenuPositioner>
							</MenuPortal>
						</MenuSubmenuRoot>
					</MenuPopup>
				</MenuPositioner>
			</MenuPortal>
		</MenuRoot>
	);
}
