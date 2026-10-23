"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@craftdotui/baseui/components/button";
import {
	AlertDialogClose,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogRoot,
	AlertDialogTitle,
} from "@craftdotui/baseui/components/alert-dialog";
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from "@craftdotui/baseui/components/menu";

export function Particle() {
	const [openDialog, setOpenDialog] = useState(false);

	return (
		<>
			<MenuRoot>
				<MenuTrigger
					render={<Button variant="outline">Open Menu</Button>}
				/>
				<MenuContent>
					<MenuItem>Profile</MenuItem>
					<MenuItem>Billing</MenuItem>
					<MenuItem
						className="text-destructive focus:text-destructive"
						onClick={() => setOpenDialog(true)}
					>
						<Trash2 className="size-4" />
						Delete account
					</MenuItem>
				</MenuContent>
			</MenuRoot>

			<AlertDialogRoot open={openDialog} onOpenChange={setOpenDialog}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Delete account</AlertDialogTitle>
						<AlertDialogDescription>
							Are you sure you want to delete your account? This
							action cannot be undone.
						</AlertDialogDescription>
					</AlertDialogHeader>

					<AlertDialogFooter>
						<AlertDialogClose render={<Button variant="outline" />}>
							Cancel
						</AlertDialogClose>

						<AlertDialogClose
							render={<Button variant="destructive" />}
						>
							Confirm
						</AlertDialogClose>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogRoot>
		</>
	);
}

export default Particle;
