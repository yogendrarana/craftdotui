"use client";

import React from "react";
import {
	Tab,
	TabsList,
	TabsPanel,
	TabsRoot,
} from "@craftdotui/baseui/components/tabs";
import { cn } from "@/lib/utils";
import { CodeRenderer } from "./code-renderer";

const STORAGE_KEY = "craftdotui-anatomy-tab";
const STORAGE_EVENT = "craftdotui-anatomy-tab-change";

export interface AnatomyTabItem {
	label: string;
	value: string;
	code: string;
}

interface AnatomyTabsProps {
	components?: string;
	primitives?: string;
	items?: AnatomyTabItem[];
	defaultValue?: string;
	className?: string;
}

function normalizeItems({
	components,
	primitives,
	items,
}: Pick<
	AnatomyTabsProps,
	"components" | "primitives" | "items"
>): AnatomyTabItem[] {
	if (items && items.length > 0) {
		return items.map((item) => ({
			...item,
			code: item.code.trim(),
		}));
	}

	const result: AnatomyTabItem[] = [];
	if (components) {
		result.push({
			label: "Components",
			value: "components",
			code: components.trim(),
		});
	}
	if (primitives) {
		result.push({
			label: "Primitives (Base UI)",
			value: "primitives",
			code: primitives.trim(),
		});
	}
	return result;
}

export function AnatomyTabs({
	components,
	primitives,
	items,
	defaultValue,
	className,
}: AnatomyTabsProps) {
	const tabItems = React.useMemo(
		() => normalizeItems({ components, primitives, items }),
		[components, primitives, items],
	);

	const fallbackValue = defaultValue ?? tabItems[0]?.value ?? "components";
	const [activeTab, setActiveTab] = React.useState<string>(fallbackValue);

	React.useEffect(() => {
		const validValues = new Set(tabItems.map((item) => item.value));

		const syncFromStorage = () => {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved && validValues.has(saved)) {
				setActiveTab(saved);
			}
		};

		syncFromStorage();
		window.addEventListener("storage", syncFromStorage);
		window.addEventListener(STORAGE_EVENT, syncFromStorage);
		return () => {
			window.removeEventListener("storage", syncFromStorage);
			window.removeEventListener(STORAGE_EVENT, syncFromStorage);
		};
	}, [tabItems]);

	if (tabItems.length === 0) {
		return null;
	}

	const handleValueChange = (value: string) => {
		setActiveTab(value);
		localStorage.setItem(STORAGE_KEY, value);
		window.dispatchEvent(new Event(STORAGE_EVENT));
	};

	return (
		<TabsRoot
			value={activeTab}
			onValueChange={handleValueChange}
			className={cn("my-4 w-full flex flex-col gap-3", className)}
		>
			<TabsList variant="outlined">
				{tabItems.map((item) => (
					<Tab key={item.value} value={item.value}>
						{item.label}
					</Tab>
				))}
			</TabsList>

			{tabItems.map((item) => (
				<TabsPanel key={item.value} value={item.value}>
					<div className="border border-border rounded-md overflow-hidden bg-muted/40">
						<CodeRenderer code={item.code} />
					</div>
				</TabsPanel>
			))}
		</TabsRoot>
	);
}
