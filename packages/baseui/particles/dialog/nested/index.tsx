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

export function Particle() {
	const [childOpen, setChildOpen] = useState(false);
	const [parentOpen, setParentOpen] = useState(false);

	const handleDeleteConfirm = () => {
		setChildOpen(false);
		setParentOpen(false);
	};

	return (
		<div className="flex justify-center">
			{/* Parent Dialog */}
			<DialogRoot open={parentOpen} onOpenChange={setParentOpen}>
				<DialogTrigger
					render={
						<Button variant="outline">Open Settings Dialog</Button>
					}
				/>

				<DialogContent showCloseButton>
					<DialogHeader>
						<DialogTitle>Project Settings</DialogTitle>
						<DialogDescription>
							Manage workspace configuration and danger zone
							options.
						</DialogDescription>
					</DialogHeader>

					<DialogPanel>
						<div className="rounded-md border border-destructive/20 bg-destructive/5 p-4 flex flex-col gap-2">
							<p className="text-xs font-semibold text-destructive">
								Danger Zone
							</p>
							<p className="text-xs text-muted-foreground">
								Deleting this project removes all data
								permanently. This action cannot be reversed once
								confirmed.
							</p>
						</div>
					</DialogPanel>

					<DialogFooter variant="default">
						<DialogClose render={<Button variant="outline" />}>
							Cancel
						</DialogClose>

						{/* Nested Dialog Trigger */}
						<DialogRoot
							open={childOpen}
							onOpenChange={setChildOpen}
						>
							<DialogTrigger
								render={
									<Button variant="destructive">
										Delete Project
									</Button>
								}
							/>

							{/* Child Nested Dialog */}
							<DialogContent showCloseButton className="max-w-md">
								<DialogHeader>
									<DialogTitle className="text-destructive">
										Confirm Deletion
									</DialogTitle>
									<DialogDescription>
										This action cannot be undone. Are you
										sure you want to permanently delete this
										project?
									</DialogDescription>
								</DialogHeader>

								<DialogFooter variant="default">
									<DialogClose
										render={
											<Button variant="ghost">
												Cancel
											</Button>
										}
									/>
									<Button
										variant="destructive"
										onClick={handleDeleteConfirm}
									>
										Yes, Delete
									</Button>
								</DialogFooter>
							</DialogContent>
						</DialogRoot>
					</DialogFooter>
				</DialogContent>
			</DialogRoot>
		</div>
	);
}

export default Particle;
