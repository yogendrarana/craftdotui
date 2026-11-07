import { Button } from "@craftdotui/baseui/components/button";
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
				Bare Footer Sheet
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Delete Workspace</SheetTitle>
					<SheetDescription>
						This action will permanently remove all deployments,
						domains, and environment variables associated with this
						workspace.
					</SheetDescription>
				</SheetHeader>
				<SheetPanel>
					<div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-xs text-destructive">
						Warning: Once deleted, this workspace cannot be
						recovered.
					</div>
				</SheetPanel>
				<SheetFooter variant="bare" className="mt-auto">
					<SheetClose render={<Button variant="outline" />}>
						Cancel
					</SheetClose>
					<Button variant="destructive">Delete workspace</Button>
				</SheetFooter>
			</SheetContent>
		</SheetRoot>
	);
}
