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
} from "@craftdotui/baseui/components/dialog";
import { Input } from "@craftdotui/baseui/components/input";

export function Particle() {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex flex-col items-center gap-3">
			<Button variant="outline" onClick={() => setOpen(true)}>
				Open Controlled Dialog
			</Button>

			<DialogRoot open={open} onOpenChange={setOpen}>
				<DialogContent showCloseButton>
					<DialogHeader>
						<DialogTitle>Controlled Server Config</DialogTitle>
						<DialogDescription>
							This dialog’s open state is controlled externally
							via React state.
						</DialogDescription>
					</DialogHeader>

					<DialogPanel>
						<div className="flex flex-col gap-1.5">
							<label
								htmlFor="server-name"
								className="text-xs font-medium text-foreground"
							>
								Server Environment
							</label>
							<Input
								id="server-name"
								defaultValue="Production US-East"
							/>
						</div>
					</DialogPanel>

					<DialogFooter variant="default">
						<DialogClose render={<Button variant="ghost" />}>
							Cancel
						</DialogClose>
						<Button
							variant="default"
							onClick={() => {
								setOpen(false);
							}}
						>
							Apply Changes
						</Button>
					</DialogFooter>
				</DialogContent>
			</DialogRoot>
		</div>
	);
}

export default Particle;
