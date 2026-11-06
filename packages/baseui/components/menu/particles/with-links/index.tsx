import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuContent,
	MenuItem,
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
				<MenuItem render={<a href="/">Home</a>} />
				<MenuItem
					render={
						<a href="/docs/getting-started/introduction">Docs</a>
					}
				/>
			</MenuContent>
		</MenuRoot>
	);
}

export default Particle;
