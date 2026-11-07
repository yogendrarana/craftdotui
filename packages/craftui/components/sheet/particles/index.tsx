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
				Open Sheet
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit Profile</SheetTitle>
					<SheetDescription>
						Make changes to your public profile here. Click save
						when you are done.
					</SheetDescription>
				</SheetHeader>
				<SheetPanel className="gap-4">
					<div className="flex flex-col gap-2">
						<Label htmlFor="sheet-name">Full name</Label>
						<Input id="sheet-name" defaultValue="Yogendra Rana" />
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="sheet-username">Username</Label>
						<Input
							id="sheet-username"
							defaultValue="@yooogendra_rana"
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
