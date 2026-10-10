"use client";

import { useState } from "react";
import { Button } from "@craftdotui/baseui/components/button";
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPanel,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from "@craftdotui/baseui/components/dialog";
import {
	AlertDialogClose,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogPopup,
	AlertDialogRoot,
	AlertDialogTitle,
} from "@craftdotui/baseui/components/alert-dialog";

export function Particle() {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [note, setNote] = useState("");

	const handleOpenChange = (nextOpen: boolean) => {
		if (!nextOpen && note.trim().length > 0) {
			// Prevent dismiss and open confirmation prompt
			setConfirmOpen(true);
		} else {
			setDialogOpen(nextOpen);
			if (!nextOpen) setNote("");
		}
	};

	const handleDiscard = () => {
		setConfirmOpen(false);
		setDialogOpen(false);
		setNote("");
	};

	return (
		<div className="flex justify-center">
			<DialogRoot open={dialogOpen} onOpenChange={handleOpenChange}>
				<DialogTrigger
					render={<Button variant="outline">Write Note</Button>}
				/>

				<DialogContent showCloseButton>
					<DialogHeader>
						<DialogTitle>Quick Note</DialogTitle>
						<DialogDescription>
							Type something below. Closing while dirty will
							prompt for confirmation.
						</DialogDescription>
					</DialogHeader>

					<DialogPanel>
						<textarea
							value={note}
							onChange={(e) => setNote(e.target.value)}
							placeholder="Draft your note here… (type here to test close guard)"
							className="min-h-24 w-full rounded-md border border-border bg-background p-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
						/>
					</DialogPanel>

					<DialogFooter variant="default">
						<DialogClose render={<Button variant="ghost" />}>
							Cancel
						</DialogClose>
						<Button
							variant="default"
							onClick={() => {
								setDialogOpen(false);
								setNote("");
							}}
						>
							Save Note
						</Button>
					</DialogFooter>
				</DialogContent>
			</DialogRoot>

			{/* Confirmation Alert Dialog */}
			<AlertDialogRoot open={confirmOpen} onOpenChange={setConfirmOpen}>
				<AlertDialogPopup className="max-w-sm">
					<AlertDialogHeader>
						<AlertDialogTitle className="text-destructive">
							Discard Unsaved Changes?
						</AlertDialogTitle>
						<AlertDialogDescription>
							You have unsaved changes in your note. Are you sure
							you want to discard them?
						</AlertDialogDescription>
					</AlertDialogHeader>

					<AlertDialogFooter>
						<AlertDialogClose
							render={
								<Button variant="ghost">Keep Editing</Button>
							}
						/>
						<Button variant="destructive" onClick={handleDiscard}>
							Discard
						</Button>
					</AlertDialogFooter>
				</AlertDialogPopup>
			</AlertDialogRoot>
		</div>
	);
}

export default Particle;
