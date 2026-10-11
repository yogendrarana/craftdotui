"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink, Settings, Trash2 } from "lucide-react";
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
			<MenuRoot>
				<MenuTrigger
					render={
						<Button variant="outline" className="gap-2">
							Project Settings
							<ChevronDown className="size-4 opacity-60" />
						</Button>
					}
				/>

				<MenuPortal>
					<MenuPositioner sideOffset={6} align="start">
						<MenuPopup className="w-52">
							<MenuItem className="gap-2">
								<Settings className="size-4 text-muted-foreground" />
								<span>General Settings</span>
							</MenuItem>
							<MenuItem className="gap-2">
								<ExternalLink className="size-4 text-muted-foreground" />
								<span>View Analytics</span>
							</MenuItem>
							<MenuSeparator />
							<MenuItem
								className="gap-2 text-destructive focus:text-destructive"
								onClick={() => setDialogOpen(true)}
							>
								<Trash2 className="size-4" />
								<span>Delete Project…</span>
							</MenuItem>
						</MenuPopup>
					</MenuPositioner>
				</MenuPortal>
			</MenuRoot>

			<AlertDialogRoot open={dialogOpen} onOpenChange={setDialogOpen}>
				<AlertDialogContent className="max-w-md">
					<AlertDialogHeader>
						<AlertDialogTitle>Delete Project</AlertDialogTitle>
						<AlertDialogDescription>
							Are you sure you want to delete this project? All
							associated deployments, custom domains, and
							environment variables will be permanently removed.
						</AlertDialogDescription>
					</AlertDialogHeader>

					<AlertDialogFooter>
						<AlertDialogClose render={<Button variant="outline" />}>
							Cancel
						</AlertDialogClose>
						<Button
							variant="destructive"
							onClick={() => setDialogOpen(false)}
						>
							Delete Project
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogRoot>
		</div>
	);
}

export default Particle;
