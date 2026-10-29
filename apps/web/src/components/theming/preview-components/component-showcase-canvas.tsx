"use client";

import { Preview01 } from "@/components/theming/preview-components/preview-01";
import { Preview02 } from "@/components/theming/preview-components/preview-02";
import { Preview03 } from "@/components/theming/preview-components/preview-03";
import { Preview04 } from "@/components/theming/preview-components/preview-04";
import { Preview05 } from "@/components/theming/preview-components/preview-05";
import { Preview06 } from "@/components/theming/preview-components/preview-06";
import { Preview07 } from "@/components/theming/preview-components/preview-07";
import { Preview08 } from "@/components/theming/preview-components/preview-08";
import { Preview09 } from "@/components/theming/preview-components/preview-09";
import { Preview10 } from "@/components/theming/preview-components/preview-10";

export function ComponentShowcaseCanvas() {
	return (
		<div className="w-[1240px] space-y-6">
			{/* Top Row: 4 Uncramped Feature Cards */}
			<div className="grid grid-cols-4 gap-6 items-start">
				<Preview01 />
				<Preview02 />
				<Preview03 />
				<Preview04 />
			</div>

			{/* Bottom Row: 3 Columns (1 + 1 + 2 span) */}
			<div className="grid grid-cols-4 gap-6 items-start">
				<div className="space-y-6">
					<Preview05 />
					<Preview06 />
				</div>

				<Preview07 />

				<div className="col-span-2 space-y-6">
					<Preview08 />
					<div className="grid grid-cols-2 gap-6">
						<Preview09 />
						<Preview10 />
					</div>
				</div>
			</div>
		</div>
	);
}
