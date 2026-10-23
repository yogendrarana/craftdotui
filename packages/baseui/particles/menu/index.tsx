import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuCheckboxItem,
	MenuContent,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuRadioGroup,
	MenuRadioItem,
	MenuRoot,
	MenuSeparator,
	MenuShortcut,
	MenuSubmenuRoot,
	MenuSubmenuTrigger,
	MenuTrigger,
} from "@craftdotui/baseui/components/menu";

export default function Particle() {
	return (
		<MenuRoot>
			<MenuTrigger
				render={<Button variant="outline">Open Menu</Button>}
			/>

			<MenuContent className="w-56">
				<MenuItem inset>
					New File
					<MenuShortcut>⌘N</MenuShortcut>
				</MenuItem>

				<MenuItem inset>
					Open File
					<MenuShortcut>⌘O</MenuShortcut>
				</MenuItem>

				<MenuItem inset disabled>
					Save
					<MenuShortcut>⌘S</MenuShortcut>
				</MenuItem>

				<MenuSubmenuRoot>
					<MenuSubmenuTrigger inset>Edit</MenuSubmenuTrigger>

					<MenuContent className="w-48">
						<MenuItem>Cut</MenuItem>
						<MenuItem>Copy</MenuItem>
						<MenuItem>Paste</MenuItem>
						<MenuSeparator />
						<MenuItem>Find & Replace</MenuItem>
						<MenuSeparator />
						<MenuItem>Clear All</MenuItem>
					</MenuContent>
				</MenuSubmenuRoot>

				<MenuSeparator />

				<MenuCheckboxItem inset defaultChecked>
					Show Line Numbers
				</MenuCheckboxItem>

				<MenuCheckboxItem inset>Word Wrap</MenuCheckboxItem>

				<MenuSeparator />

				<MenuGroup>
					<MenuRadioGroup defaultValue="dark">
						<MenuGroupLabel inset>Themes</MenuGroupLabel>

						<MenuRadioItem inset value="light">
							Light Theme
						</MenuRadioItem>

						<MenuRadioItem inset value="dark">
							Dark Theme
						</MenuRadioItem>

						<MenuRadioItem inset value="auto">
							Auto Theme
						</MenuRadioItem>
					</MenuRadioGroup>
				</MenuGroup>
			</MenuContent>
		</MenuRoot>
	);
}
