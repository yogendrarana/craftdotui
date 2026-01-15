import { useState } from "react";
import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuPositioner,
	MenuPopup,
	MenuItem,
} from "@craftdotui/baseui/components/menu";
import {
	AlertDialog,
	AlertDialogPortal,
	AlertDialogViewport,
	AlertDialogPopup,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogClose,
} from "@craftdotui/baseui/components/alert-dialog";
import { Button } from "@craftdotui/baseui/components/button";

export function Particle() {
	const [openDialog, setOpenDialog] = useState(false);

	return (
		<>
			<MenuRoot>
				<MenuTrigger
					render={<Button variant="outline">Open Menu</Button>}
				/>
				<MenuPortal>
					<MenuPositioner>
						<MenuPopup>
							<MenuItem>Profile</MenuItem>
							<MenuItem>Billing</MenuItem>
							<MenuItem onClick={() => setOpenDialog(true)}>
								Delete account
							</MenuItem>
						</MenuPopup>
					</MenuPositioner>
				</MenuPortal>
			</MenuRoot>

			<AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
				<AlertDialogPortal>
					<AlertDialogViewport>
						<AlertDialogPopup>
							<AlertDialogTitle>Delete account</AlertDialogTitle>
							<AlertDialogDescription>
								Are you sure you want to delete your account?
							</AlertDialogDescription>

							<AlertDialogFooter>
								<AlertDialogClose
									render={<Button variant="ghost" />}
								>
									Cancel
								</AlertDialogClose>

								<AlertDialogClose
									render={<Button variant="outline" />}
								>
									Confirm
								</AlertDialogClose>
							</AlertDialogFooter>
						</AlertDialogPopup>
					</AlertDialogViewport>
				</AlertDialogPortal>
			</AlertDialog>
		</>
	);
}
