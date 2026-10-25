"use client";

import type { HTMLAttributes } from "react";
import {
	AccordionRoot,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@craftdotui/baseui/components/accordion";
import { cn } from "@/lib/utils";

export interface PropDef {
	prop: string;
	type: string;
	default?: string;
	description?: string;
	required?: boolean;
}

interface PropsTableProps extends HTMLAttributes<HTMLDivElement> {
	data: PropDef[];
	title?: string;
}

export function PropsTable({
	data,
	title,
	className,
	...props
}: PropsTableProps) {
	return (
		<div
			className={cn(
				"my-4 w-full rounded-md border border-border overflow-hidden bg-background",
				className,
			)}
			{...props}
		>
			<div className="flex flex-col">
				<div className="flex items-center px-5 py-3 bg-muted/40 text-[11px] font-mono uppercase tracking-wider text-muted-foreground border-b border-border">
					<div className="flex-1 flex items-center">
						<div className="flex-1 min-w-[140px]">Prop</div>
						<div className="flex-1 min-w-[140px]">Type</div>
						<div className="flex-1 min-w-[140px] text-left">
							Default
						</div>
					</div>
					<div className="size-4 shrink-0" />
				</div>

				<AccordionRoot multiple className="w-full divide-y divide-border">
					{data.map((item) => (
						<AccordionItem
							key={item.prop}
							value={item.prop}
							className="group overflow-hidden border-0"
						>
							<AccordionTrigger className="px-5 hover:bg-muted/40 hover:no-underline">
								<div className="flex-1 flex items-center text-left">
									<div className="flex-1 min-w-[140px] font-semibold text-primary text-sm">
										{item.prop}
										{item.required && (
											<span className="ml-1 text-destructive font-sans">
												*
											</span>
										)}
									</div>
									<div className="flex-1 min-w-[140px] text-[13px] font-mono text-muted-foreground">
										{item.type}
									</div>
									<div className="flex-1 min-w-[140px] text-left text-[13px] font-mono text-muted-foreground italic">
										{item.default || "-"}
									</div>
								</div>
							</AccordionTrigger>
							<AccordionPanel className="bg-muted/40 px-5 border-t border-border">
								<div className="pt-3">{item.description}</div>
							</AccordionPanel>
						</AccordionItem>
					))}
				</AccordionRoot>
			</div>
		</div>
	);
}
