import { Button } from "@craftdotui/baseui/components/button";
import { Input } from "@craftdotui/baseui/components/input";
import { Label } from "@craftdotui/craftui/components/label";
import {
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetPanel,
	SheetRoot,
	SheetTitle,
	SheetTrigger,
} from "@craftdotui/craftui/components/sheet";

export default function Particle() {
	return (
		<SheetRoot>
			<SheetTrigger render={<Button variant="outline" />}>
				Open Inset Sheet
			</SheetTrigger>
			<SheetContent variant="inset">
				<SheetHeader>
					<SheetTitle>Workspace Settings</SheetTitle>
					<SheetDescription>
						Floating inset sheet separated from the browser viewport
						edges with rounded corners.
					</SheetDescription>
				</SheetHeader>
				<SheetPanel className="gap-4">
					<div className="flex flex-col gap-2">
						<Label htmlFor="inset-workspace-name">
							Workspace name
						</Label>
						<Input
							id="inset-workspace-name"
							defaultValue="Craft UI"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="inset-workspace-slug">
							Workspace URL
						</Label>
						<Input
							id="inset-workspace-slug"
							defaultValue="craftdotui"
						/>
					</div>
				</SheetPanel>
				<SheetFooter>
					<SheetClose render={<Button variant="ghost" />}>
						Cancel
					</SheetClose>
					<Button>Save changes</Button>
				</SheetFooter>
			</SheetContent>
		</SheetRoot>
	);
}
