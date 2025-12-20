"use client";

import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogPopup,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogClose,
} from "@craftdotui/baseui/components/alert-dialog";
import { Button } from "@craftdotui/baseui/components/button";

function DeleteAlert() {
	return (
		<AlertDialog>
			<AlertDialogTrigger render={<Button variant="destructive" />}>
				Delete
			</AlertDialogTrigger>

			<AlertDialogPopup>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Are you absolutely sure?
					</AlertDialogTitle>

					<AlertDialogDescription>
						This action cannot be undone. This will permanently
						delete your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogClose render={<Button variant="ghost" />}>
						Cancel
					</AlertDialogClose>

					<AlertDialogClose render={<Button variant="outline" />}>
						Confirm
					</AlertDialogClose>
				</AlertDialogFooter>
			</AlertDialogPopup>
		</AlertDialog>
	);
}

export { DeleteAlert };
