"use client";

import { useState } from "react";
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

export function Particle() {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex flex-col items-center gap-3">
			<Button variant="destructive" onClick={() => setOpen(true)}>
				Delete Environment
			</Button>

			<AlertDialogRoot open={open} onOpenChange={setOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>
							Delete Staging Environment?
						</AlertDialogTitle>
						<AlertDialogDescription>
							This will terminate all running services, drop
							temporary databases, and purge active deployment
							previews. This action cannot be undone.
						</AlertDialogDescription>
					</AlertDialogHeader>

					<AlertDialogFooter>
						<AlertDialogClose render={<Button variant="outline" />}>
							Cancel
						</AlertDialogClose>
						<Button
							variant="destructive"
							onClick={() => setOpen(false)}
						>
							Confirm Deletion
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogRoot>
		</div>
	);
}

export default Particle;
