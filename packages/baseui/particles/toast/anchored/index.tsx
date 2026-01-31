"use client";

import React from "react";
import { Button } from "@craftdotui/baseui/components/button";
import { anchoredToastManager } from "@craftdotui/baseui/components/toast";
import { CheckIcon, CopyIcon } from "lucide-react";

export default function Particle() {
	const ref1 = React.useRef<HTMLButtonElement>(null);
	const ref2 = React.useRef<HTMLButtonElement>(null);
	const [isCopied, setIsCopied] = React.useState(false);
	const [isClicked, setIsClicked] = React.useState(false);

	return (
		<div className="flex gap-2">
			<Button
				variant="outline"
				size="icon"
				ref={ref1}
				disabled={isCopied}
				onClick={() => {
					setIsCopied(true);
					anchoredToastManager.add({
						title: "Toast title",
						description: "Toast description",
						positionerProps: {
							anchor: ref1.current,
						},
						data: {
							showAsTooltip: true,
						},
						timeout: 1000,
						onClose: () => {
							setIsCopied(false);
						},
					});
				}}
			>
				{isCopied ? <CheckIcon /> : <CopyIcon />}
			</Button>

			<Button
				variant="outline"
				ref={ref2}
				disabled={isClicked}
				onClick={() => {
					anchoredToastManager.add({
						title: "Toast title",
						description: "Toast description",
						positionerProps: {
							anchor: ref2.current,
						},
						timeout: 1000,
						onClose: () => {
							setIsClicked(false);
						},
					});
					setIsClicked(true);
				}}
			>
				Anchored As Toast
			</Button>
		</div>
	);
}
