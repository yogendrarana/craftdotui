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
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogRoot,
	AlertDialogTitle,
} from "@craftdotui/baseui/components/alert-dialog";

export function Particle() {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [text, setText] = useState("");

	const handleOpenChange = (nextOpen: boolean) => {
		if (!nextOpen && text.trim().length > 0) {
			setConfirmOpen(true);
		} else {
			setDialogOpen(nextOpen);
			if (!nextOpen) setText("");
		}
	};

	const handleDiscard = () => {
		setConfirmOpen(false);
		setDialogOpen(false);
		setText("");
	};

	return (
		<div className="flex justify-center">
			<DialogRoot open={dialogOpen} onOpenChange={handleOpenChange}>
				<DialogTrigger
					render={<Button variant="outline">Compose Feedback</Button>}
				/>

				<DialogContent showCloseButton>
					<DialogHeader>
						<DialogTitle>Feedback & Suggestions</DialogTitle>
						<DialogDescription>
							Share your thoughts with our team. Unsaved drafts
							will prompt for confirmation when closing.
						</DialogDescription>
					</DialogHeader>

					<DialogPanel>
						<textarea
							value={text}
							onChange={(e) => setText(e.target.value)}
							placeholder="Type your message here… (type here to test close guard)"
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
								setText("");
							}}
						>
							Send Feedback
						</Button>
					</DialogFooter>
				</DialogContent>
			</DialogRoot>

			{/* Nested Confirmation Alert Dialog with automatic parent scaling */}
			<AlertDialogRoot open={confirmOpen} onOpenChange={setConfirmOpen}>
				<AlertDialogContent className="max-w-sm">
					<AlertDialogHeader>
						<AlertDialogTitle className="text-destructive">
							Discard Feedback Draft?
						</AlertDialogTitle>
						<AlertDialogDescription>
							You have unsaved changes. If you discard now, your
							draft will be lost permanently.
						</AlertDialogDescription>
					</AlertDialogHeader>

					<AlertDialogFooter variant="bare">
						<AlertDialogClose
							render={
								<Button variant="ghost">Keep Editing</Button>
							}
						/>
						<Button variant="destructive" onClick={handleDiscard}>
							Discard Draft
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogRoot>
		</div>
	);
}

export default Particle;
