"use client";

import { useState } from "react";
import { Archive, ChevronDown, ExternalLink, Info } from "lucide-react";
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
} from "@craftdotui/baseui/components/dialog";
import {
	MenuItem,
	MenuPopup,
	MenuPortal,
	MenuPositioner,
	MenuRoot,
	MenuSeparator,
	MenuTrigger,
} from "@craftdotui/baseui/components/menu";

export function Particle() {
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<div className="flex justify-center">
			{/* Menu triggering Dialog */}
			<MenuRoot>
				<MenuTrigger
					render={
						<Button variant="outline" className="gap-2">
							Repository Options
							<ChevronDown className="size-4 opacity-60" />
						</Button>
					}
				/>

				<MenuPortal>
					<MenuPositioner sideOffset={6} align="start">
						<MenuPopup className="w-52">
							<MenuItem className="gap-2">
								<ExternalLink className="size-4 text-muted-foreground" />
								<span>View on GitHub</span>
							</MenuItem>
							<MenuItem className="gap-2">
								<Info className="size-4 text-muted-foreground" />
								<span>Repository Details</span>
							</MenuItem>
							<MenuSeparator />
							<MenuItem
								className="gap-2 text-destructive focus:text-destructive"
								onClick={() => setDialogOpen(true)}
							>
								<Archive className="size-4" />
								<span>Archive Repository…</span>
							</MenuItem>
						</MenuPopup>
					</MenuPositioner>
				</MenuPortal>
			</MenuRoot>

			{/* Controlled Dialog */}
			<DialogRoot open={dialogOpen} onOpenChange={setDialogOpen}>
				<DialogContent showCloseButton className="max-w-md">
					<DialogHeader>
						<DialogTitle>Archive Repository</DialogTitle>
						<DialogDescription>
							Are you sure you want to archive craftdotui?
						</DialogDescription>
					</DialogHeader>

					<DialogPanel className="text-sm">
						<p className="text-muted-foreground leading-relaxed">
							Archiving this repository will make it read-only.
							Issues, pull requests, and releases can still be
							viewed, but no new commits or changes can be pushed.
						</p>
					</DialogPanel>

					<DialogFooter variant="default">
						<DialogClose render={<Button variant="outline" />}>
							Cancel
						</DialogClose>
						<Button
							variant="destructive"
							onClick={() => setDialogOpen(false)}
						>
							Archive Repository
						</Button>
					</DialogFooter>
				</DialogContent>
			</DialogRoot>
		</div>
	);
}

export default Particle;
