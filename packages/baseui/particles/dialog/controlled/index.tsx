import { useState } from "react";
import {
	Dialog,
	DialogTrigger,
	DialogPortal,
	DialogBackdrop,
	DialogViewport,
	DialogPopup,
	DialogTitle,
	DialogDescription,
	DialogClose,
	DialogFooter,
} from "@craftdotui/baseui/components/dialog";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger
				render={<Button variant={"outline"}>Open Dialog</Button>}
			/>

			<DialogPortal>
				<DialogBackdrop />
				<DialogViewport>
					<DialogPopup>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile and save them.
						</DialogDescription>

						<DialogFooter>
							<DialogClose render={<Button variant="ghost" />}>
								Cancel
							</DialogClose>

							<DialogClose render={<Button variant="outline" />}>
								Confirm
							</DialogClose>
						</DialogFooter>
					</DialogPopup>
				</DialogViewport>
			</DialogPortal>
		</Dialog>
	);
}
