"use client";

import { useRef } from "react";
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
	const initialFocusRef = useRef<HTMLInputElement | null>(null);
	const returnFocusRef = useRef<HTMLButtonElement | null>(null);

	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex items-center gap-3">
				<DialogRoot>
					<DialogTrigger
						render={
							<Button variant="outline">Open Quick Search</Button>
						}
					/>

					<DialogContent
						showCloseButton
						initialFocus={initialFocusRef}
						finalFocus={returnFocusRef}
					>
						<DialogHeader>
							<DialogTitle>Quick Navigation</DialogTitle>
							<DialogDescription>
								Focus is automatically placed directly into the
								search input on mount.
							</DialogDescription>
						</DialogHeader>

						<DialogPanel>
							<div className="flex flex-col gap-1.5">
								<label
									htmlFor="quick-search-input"
									className="text-xs font-medium text-foreground"
								>
									Query
								</label>
								<Input
									ref={initialFocusRef}
									id="quick-search-input"
									placeholder="Search documentation, components, or recipes…"
								/>
							</div>
						</DialogPanel>

						<DialogFooter variant="default">
							<DialogClose render={<Button variant="ghost" />}>
								Cancel
							</DialogClose>
							<DialogClose render={<Button variant="default" />}>
								Search
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</DialogRoot>

				{/* Element targeted by finalFocus */}
				<Button ref={returnFocusRef} variant="outline">
					Return Target
				</Button>
			</div>

			<p className="text-xs text-muted-foreground text-center max-w-sm">
				When the dialog opens, it auto-focuses the input instead of the
				first button. On dismiss, focus returns specifically to the
				Return Target button.
			</p>
		</div>
	);
}

export default Particle;
