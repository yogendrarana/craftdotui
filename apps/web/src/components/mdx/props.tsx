"use client";

import type { HTMLAttributes } from "react";
import {
	Accordion,
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
				"w-full rounded-md border overflow-hidden",
				className,
			)}
			{...props}
		>
			<div className="flex flex-col">
				<div className="flex items-center px-5 py-3 bg-muted/50 text-xs font-bold uppercase text-muted-foreground border-b border-dashed">
					<div className="flex-1 flex items-center">
						<div className="flex-1 min-w-[140px]">Prop</div>
						<div className="flex-1 min-w-[140px]">Type</div>
						<div className="flex-1 min-w-[140px] text-left">Default</div>
					</div>
					<div className="size-4 shrink-0" />
				</div>

				<Accordion multiple className="w-full">
					{data.map((item) => (
						<AccordionItem
							key={item.prop}
							value={item.prop}
							className="group overflow-hidden"
						>
							<AccordionTrigger className="px-5 hover:no-underline">
								<div className="flex-1 flex items-center text-left">
									<div className="flex-1 min-w-[140px] font-semibold text-primary text-sm">
										{item.prop}
										{item.required && (
											<span className="ml-1 text-destructive font-sans">
												*
											</span>
										)}
									</div>
									<div className="flex-1 min-w-[140px] text-[13px] text-muted-foreground/80">
										{item.type}
									</div>
									<div className="flex-1 min-w-[140px] text-left text-[13px] text-muted-foreground/70 italic">
										{item.default || "-"}
									</div>
								</div>
							</AccordionTrigger>
							<AccordionPanel className="bg-muted px-5 border-t">
								<div className="pt-3">{item.description}</div>
							</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
}
