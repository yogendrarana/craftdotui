import { Button } from "@craftdotui/baseui/components/button";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuItem,
	MenuSeparator,
	MenuShortcut,
	MenuSubmenuRoot,
	MenuSubmenuTrigger,
	MenuCheckboxItem,
	MenuGroup,
	MenuGroupLabel,
	MenuRadioGroup,
	MenuRadioItem,
} from "@craftdotui/baseui/components/menu";

export default function Particle() {
	return (
		<MenuRoot>
			<MenuTrigger
				render={<Button variant="outline">Open Menu</Button>}
			/>

			<MenuPortal>
				<MenuPositioner>
					<MenuPopup className="w-56">
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

							<MenuPortal>
								<MenuPositioner>
									<MenuPopup className="w-48">
										<MenuItem>Cut</MenuItem>
										<MenuItem>Copy</MenuItem>
										<MenuItem>Paste</MenuItem>
										<MenuSeparator />
										<MenuItem>Find & Replace</MenuItem>
										<MenuSeparator />
										<MenuItem>Clear All</MenuItem>
									</MenuPopup>
								</MenuPositioner>
							</MenuPortal>
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
					</MenuPopup>
				</MenuPositioner>
			</MenuPortal>
		</MenuRoot>
	);
}
