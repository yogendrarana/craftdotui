"use client";

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
import { Input } from "@craftdotui/baseui/components/input";

export function Particle() {
	return (
		<DialogRoot>
			<DialogTrigger
				render={<Button variant="outline">Edit Profile</Button>}
			/>

			<DialogContent showCloseButton>
				<DialogHeader>
					<DialogTitle>Edit Profile</DialogTitle>
					<DialogDescription>
						Make changes to your public profile here. Click save
						when done.
					</DialogDescription>
				</DialogHeader>

				<DialogPanel>
					<div className="flex flex-col gap-1.5">
						<label
							htmlFor="dialog-name"
							className="text-xs font-medium text-foreground"
						>
							Name
						</label>
						<Input
							id="dialog-name"
							defaultValue="Yogendra Rana"
							placeholder="Enter your name"
						/>
					</div>

					<div className="flex flex-col gap-1.5">
						<label
							htmlFor="dialog-username"
							className="text-xs font-medium text-foreground"
						>
							Username
						</label>
						<Input
							id="dialog-username"
							defaultValue="@yooogendrarana"
							placeholder="Enter your username"
						/>
					</div>
				</DialogPanel>

				<DialogFooter>
					<DialogClose
						render={<Button variant="ghost">Cancel</Button>}
					/>
					<Button>Save Changes</Button>
				</DialogFooter>
			</DialogContent>
		</DialogRoot>
	);
}

export default Particle;
