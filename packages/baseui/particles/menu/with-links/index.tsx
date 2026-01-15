import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuItem,
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
						<MenuItem render={<a href="/">Home</a>} />
						<MenuItem
							render={
								<a href="/docs/getting-started/introduction">
									Docs
								</a>
							}
						/>
					</MenuPopup>
				</MenuPositioner>
			</MenuPortal>
		</MenuRoot>
	);
}
