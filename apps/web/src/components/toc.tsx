"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import Link from "next/link";

interface TocItem {
	title: string;
	url: string;
	items?: TocItem[];
}

interface TableOfContentsProps {
	toc: TocItem[];
}

function normalizeId(id: string | null | undefined): string {
	if (!id) return "";
	return id.toLowerCase().replace(/-+/g, "-");
}

function isItemActive(
	url: string,
	activeId: string | null | undefined,
): boolean {
	if (!activeId) return false;
	const id = url.split("#")[1];
	if (!id) return false;
	if (id === activeId) return true;
	return normalizeId(id) === normalizeId(activeId);
}

export function TableOfContent({ toc }: TableOfContentsProps) {
	const itemIds = React.useMemo(() => {
		if (!toc) return [];
		const ids: string[] = [];
		const extract = (items: TocItem[]) => {
			for (const item of items) {
				if (item.url) {
					const id = item.url.split("#")[1];
					if (id) ids.push(id);
				}
				if (item.items?.length) {
					extract(item.items);
				}
			}
		};
		extract(toc);
		return ids;
	}, [toc]);

	const { activeId, setActiveManually } = useActiveItem(itemIds);
	const mounted = useMounted();

	if (!toc || !mounted) {
		return null;
	}

	const handleItemClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		url: string,
	) => {
		e.preventDefault();
		const rawId = url.split("#")[1];
		if (!rawId) return;

		setActiveManually(rawId);
		window.history.pushState(null, "", url);

		const element =
			document.getElementById(rawId) ||
			document.getElementById(decodeURIComponent(rawId)) ||
			document.getElementById(rawId.replace(/-+/g, "-")) ||
			document.getElementById(rawId.replace(/-/g, "--")) ||
			document.querySelector(`[id="${rawId}"]`);

		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		} else {
			window.location.hash = url;
		}
	};

	return (
		<div className="h-full">
			<div className="border-b border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
				On this page
			</div>
			<div className="px-4 py-3">
				<Tree
					tree={toc}
					activeItem={activeId}
					onItemClick={handleItemClick}
				/>
			</div>
		</div>
	);
}

function useActiveItem(itemIds: string[]) {
	const [activeId, setActiveId] = React.useState<string | null>(null);
	const isManualClickRef = React.useRef(false);
	const manualClickTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

	// Sync with initial window.location.hash
	React.useEffect(() => {
		const updateFromHash = () => {
			if (typeof window !== "undefined" && window.location.hash) {
				const hashId = window.location.hash.replace(/^#/, "");
				if (hashId) {
					setActiveId(hashId);
				}
			}
		};

		updateFromHash();
		window.addEventListener("hashchange", updateFromHash);
		return () => {
			window.removeEventListener("hashchange", updateFromHash);
		};
	}, []);

	// Handle scrolling to bottom of document so the last item is always active
	React.useEffect(() => {
		if (!itemIds || itemIds.length === 0) return;

		const handleScroll = () => {
			if (isManualClickRef.current) return;

			const scrollHeight = document.documentElement.scrollHeight;
			const scrollTop =
				window.scrollY || document.documentElement.scrollTop;
			const clientHeight = window.innerHeight;
			const isAtBottom = scrollTop + clientHeight >= scrollHeight - 80;

			if (isAtBottom) {
				const lastId = itemIds[itemIds.length - 1];
				if (lastId) {
					setActiveId(lastId);
				}
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [itemIds]);

	// Observe heading elements as they intersect the viewport
	React.useEffect(() => {
		if (!itemIds || itemIds.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (isManualClickRef.current) return;

				const scrollHeight = document.documentElement.scrollHeight;
				const scrollTop =
					window.scrollY || document.documentElement.scrollTop;
				const clientHeight = window.innerHeight;
				if (scrollTop + clientHeight >= scrollHeight - 80) {
					const lastId = itemIds[itemIds.length - 1];
					if (lastId) {
						setActiveId(lastId);
						return;
					}
				}

				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				}
			},
			{ rootMargin: "0% 0% -60% 0%" },
		);

		itemIds.forEach((id) => {
			const element =
				document.getElementById(id) ||
				document.getElementById(decodeURIComponent(id)) ||
				document.getElementById(id.replace(/-+/g, "-")) ||
				document.getElementById(id.replace(/-/g, "--"));
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, [itemIds]);

	const setActiveManually = React.useCallback((id: string) => {
		setActiveId(id);
		isManualClickRef.current = true;
		if (manualClickTimeoutRef.current) {
			clearTimeout(manualClickTimeoutRef.current);
		}
		manualClickTimeoutRef.current = setTimeout(() => {
			isManualClickRef.current = false;
		}, 1000);
	}, []);

	return { activeId, setActiveManually };
}

interface TreeProps {
	tree: TocItem[];
	level?: number;
	activeItem?: string | null;
	onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
}

function Tree({ tree, level = 1, activeItem, onItemClick }: TreeProps) {
	return tree?.length && level < 4 ? (
		<ul
			className={cn("m-0 list-none space-y-2", {
				"mt-2 pl-3": level !== 1,
			})}
		>
			{tree.map((item, index) => {
				const active = isItemActive(item.url, activeItem);
				return (
					<li key={index}>
						<Link
							href={item.url}
							onClick={(e) => onItemClick(e, item.url)}
							className={cn(
								"inline-block text-sm no-underline transition-colors hover:text-foreground",
								active
									? "font-medium text-foreground"
									: "text-muted-foreground",
							)}
						>
							{item.title}
						</Link>
						{item.items?.length ? (
							<Tree
								tree={item.items}
								level={level + 1}
								activeItem={activeItem}
								onItemClick={onItemClick}
							/>
						) : null}
					</li>
				);
			})}
		</ul>
	) : null;
}
