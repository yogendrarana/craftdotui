"use client";

import { cn } from "@/lib/utils";
import { Registry } from "@/__registry__";
import { RotateCw } from "lucide-react";
import React, { useState } from "react";

type ComponentPreviewProps = {
	component?: React.ReactElement;
	name?: string;
	hasReTrigger?: boolean;
	className?: string;
};

export function ComponentPreview({
	hasReTrigger = false,
	className,
	name,
}: ComponentPreviewProps) {
	const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now());

	const reTrigger = () => {
		setReTriggerKey(Date.now());
	};

	const renderComponent = () => {
		if (name) {
			const registryItem = Registry[name];

			if (registryItem?.component) {
				const Component = registryItem.component;
				return (
					<React.Suspense
						fallback={
							<div className="flex items-center justify-center text-sm text-muted-foreground">
								Loading...
							</div>
						}
					>
						{hasReTrigger ? (
							<Component key={reTriggerKey} />
						) : (
							<Component />
						)}
					</React.Suspense>
				);
			}
		}

		return (
			<p className="text-sm text-muted-foreground">
				Component{" "}
				<code className="relative rounded-sm bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
					{name}
				</code>{" "}
				not found in registry.
			</p>
		);
	};

	return (
		<div
			className={cn(
				"relative w-full flex items-center justify-center rounded-md h-full",
				className,
			)}
		>
			{hasReTrigger && (
				<button
					type="button"
					className="absolute right-4 top-3 cursor-pointer rounded-md p-1 hover:bg-muted/40 transition-colors"
					onClick={reTrigger}
					aria-label="Reload preview"
				>
					<RotateCw className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
				</button>
			)}
			{renderComponent()}
		</div>
	);
}
