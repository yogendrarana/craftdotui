"use client";

import {
	AlertDialogClose,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogRoot,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@craftdotui/baseui/components/alert-dialog";
import { Button } from "@craftdotui/baseui/components/button";

function DeleteAlert() {
	return (
		<AlertDialogRoot>
			<AlertDialogTrigger render={<Button variant="destructive" />}>
				Delete Account
			</AlertDialogTrigger>

			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Are you absolutely sure?
					</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently
						delete your account and remove your data from our
						servers.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogClose render={<Button variant="outline" />}>
						Cancel
					</AlertDialogClose>

					<AlertDialogClose render={<Button variant="destructive" />}>
						Confirm
					</AlertDialogClose>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialogRoot>
	);
}

export { DeleteAlert };
export default DeleteAlert;
