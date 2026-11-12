"use client";

import * as React from "react";
import { ChevronRight, File, Folder, FolderOpen, Loader2 } from "lucide-react";
import { cn } from "cn";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";

/* -------------------------------------------------------------------------- */
/* Types & Context                                                            */
/* -------------------------------------------------------------------------- */

export interface TreeNodeData {
	id: string;
	label: string;
	icon?: React.ReactNode;
	children?: TreeNodeData[];
	disabled?: boolean;
	isLoading?: boolean;
	isLeaf?: boolean;
	data?: Record<string, unknown>;
}

export type TreeSelectionMode = "single" | "multiple" | "none";

export interface TreeItemRegistration {
	id: string;
	label?: string;
	parentId: string | null;
	depth: number;
	isLeaf: boolean;
}

interface TreeContextValue {
	value: string[];
	selectNode: (id: string, options?: { toggle?: boolean }) => void;
	expanded: string[];
	toggleExpand: (id: string) => void;
	expandNode: (id: string) => void;
	collapseNode: (id: string) => void;
	expandAll: () => void;
	collapseAll: () => void;
	activeId: string | null;
	setActiveId: (id: string) => void;
	selectionMode: TreeSelectionMode;
	disabled: boolean;
	indent: number;
	searchQuery: string;
	loadingKeys: Set<string>;
	loadNodeChildren: (id: string) => Promise<void>;
	registerItem: (item: TreeItemRegistration) => () => void;
	rootRef: React.RefObject<HTMLDivElement | null>;
	getItem: (id: string) => TreeItemRegistration | undefined;
	getSiblings: (id: string) => TreeItemRegistration[];
}

const TreeContext = React.createContext<TreeContextValue | undefined>(
	undefined,
);

export function useTree() {
	const context = React.useContext(TreeContext);
	if (!context) {
		throw new Error("useTree must be used within a TreeRoot");
	}
	return context;
}

interface TreeItemContextValue {
	id: string;
	label?: string;
	depth: number;
	isExpanded: boolean;
	isSelected: boolean;
	isDisabled: boolean;
	isLoading: boolean;
	isLeaf: boolean;
	hasChildren: boolean;
	setHasChildren: (has: boolean) => void;
	parentId: string | null;
}

const TreeItemContext = React.createContext<TreeItemContextValue | undefined>(
	undefined,
);

export function useTreeItem() {
	const context = React.useContext(TreeItemContext);
	if (!context) {
		throw new Error("useTreeItem must be used within a TreeItem");
	}
	return context;
}

/* -------------------------------------------------------------------------- */
/* Variants                                                                   */
/* -------------------------------------------------------------------------- */

export const treeVariants = cva(
	"relative flex w-full flex-col gap-0.5 select-none text-sm font-normal",
	{
		variants: {
			size: {
				default:
					"[&_[data-slot=tree-item-trigger]]:py-1.5 [&_[data-slot=tree-item-trigger]]:text-sm",
				sm: "[&_[data-slot=tree-item-trigger]]:py-1 [&_[data-slot=tree-item-trigger]]:text-xs",
				lg: "[&_[data-slot=tree-item-trigger]]:py-2 [&_[data-slot=tree-item-trigger]]:text-base",
			},
			variant: {
				default: "",
				bordered:
					"rounded-lg border border-border bg-card p-2 shadow-xs",
				ghost: "",
			},
		},
		defaultVariants: {
			size: "default",
			variant: "default",
		},
	},
);

export const treeItemVariants = cva(
	cn(
		"group/tree-item relative flex w-full items-center gap-1.5 rounded-md px-2 text-sm font-medium transition-colors cursor-pointer select-none",
		"hover:bg-accent/50 hover:text-accent-foreground",
		"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
		"data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[selected=true]:font-medium",
		"data-[disabled=true]:opacity-50 data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed",
	),
	{
		variants: {
			variant: {
				default: "",
				muted: "text-muted-foreground hover:text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

/* -------------------------------------------------------------------------- */
/* Tree Root                                                                  */
/* -------------------------------------------------------------------------- */

export interface TreeRootProps
	extends Omit<
			useRender.ComponentProps<"div">,
			"value" | "defaultValue" | "onChange"
		>,
		VariantProps<typeof treeVariants> {
	value?: string | string[];
	defaultValue?: string | string[];
	onValueChange?: (value: string | string[]) => void;
	expanded?: string[];
	defaultExpanded?: string[];
	onExpandedChange?: (expanded: string[]) => void;
	selectionMode?: TreeSelectionMode;
	defaultExpandAll?: boolean;
	indent?: number;
	search?: string;
	disabled?: boolean;
	data?: TreeNodeData[];
	renderItem?: (node: TreeNodeData) => React.ReactNode;
	onLoadChildren?: (id: string) => Promise<void> | void;
}

function collectAllNodeIds(
	nodes: TreeNodeData[],
	visited = new Set<string>(),
): string[] {
	const ids: string[] = [];
	for (const node of nodes) {
		if (!node || visited.has(node.id)) continue;
		visited.add(node.id);
		if (node.children && node.children.length > 0) {
			ids.push(node.id);
			ids.push(...collectAllNodeIds(node.children, visited));
		}
	}
	return ids;
}

function filterTreeData(
	nodes: TreeNodeData[],
	query: string,
): { filtered: TreeNodeData[]; matchedAncestorIds: string[] } {
	const q = query.trim().toLowerCase();
	if (!q) return { filtered: nodes, matchedAncestorIds: [] };

	const matchedAncestorIds: string[] = [];
	const visited = new Set<string>();

	function processNodes(
		items: TreeNodeData[],
		parentIds: string[],
	): TreeNodeData[] {
		const result: TreeNodeData[] = [];
		for (const item of items) {
			if (!item || visited.has(item.id)) continue;
			visited.add(item.id);

			const itemLabel = item.label
				? String(item.label).toLowerCase()
				: "";
			const isSelfMatch = itemLabel.includes(q);
			const currentAncestors = [...parentIds, item.id];
			const childResult = item.children
				? processNodes(item.children, currentAncestors)
				: [];

			if (isSelfMatch || childResult.length > 0) {
				if (childResult.length > 0) {
					matchedAncestorIds.push(...parentIds, item.id);
				} else if (isSelfMatch) {
					matchedAncestorIds.push(...parentIds);
				}
				result.push({
					...item,
					children:
						childResult.length > 0 ? childResult : item.children,
				});
			}
		}
		return result;
	}

	const filtered = processNodes(nodes, []);
	return {
		filtered,
		matchedAncestorIds: Array.from(new Set(matchedAncestorIds)),
	};
}

function TreeRoot({
	value: controlledValue,
	defaultValue = [],
	onValueChange,
	expanded: controlledExpanded,
	defaultExpanded = [],
	onExpandedChange,
	selectionMode = "single",
	defaultExpandAll = false,
	indent = 16,
	search = "",
	disabled = false,
	data,
	renderItem,
	onLoadChildren,
	className,
	size,
	variant,
	render,
	children,
	...props
}: TreeRootProps) {
	const rootRef = React.useRef<HTMLDivElement | null>(null);
	const itemsMapRef = React.useRef<Map<string, TreeItemRegistration>>(
		new Map(),
	);
	const loadedNodesRef = React.useRef<Set<string>>(new Set());

	// Uncontrolled selected value state
	const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>(
		() => {
			if (Array.isArray(defaultValue)) return defaultValue;
			return defaultValue ? [defaultValue] : [];
		},
	);

	const isValueControlled = controlledValue !== undefined;
	const selectedKeys = React.useMemo<string[]>(() => {
		if (isValueControlled) {
			if (Array.isArray(controlledValue)) return controlledValue;
			return controlledValue ? [controlledValue] : [];
		}
		return uncontrolledValue;
	}, [isValueControlled, controlledValue, uncontrolledValue]);

	// Uncontrolled expanded state
	const [uncontrolledExpanded, setUncontrolledExpanded] = React.useState<
		string[]
	>(() => {
		if (defaultExpandAll && data) {
			return collectAllNodeIds(data);
		}
		return defaultExpanded;
	});

	const isExpandedControlled = controlledExpanded !== undefined;
	const expandedKeys = isExpandedControlled
		? controlledExpanded
		: uncontrolledExpanded;

	// Active focused item for roving tabindex
	const [activeId, setActiveId] = React.useState<string | null>(() => {
		if (selectedKeys[0]) return selectedKeys[0];
		if (data && data.length > 0) {
			const firstNonDisabled = data.find((n) => !n.disabled);
			if (firstNonDisabled) return firstNonDisabled.id;
		}
		return null;
	});

	// Loading state for async branches
	const [loadingKeys, setLoadingKeys] = React.useState<Set<string>>(
		new Set(),
	);

	// Register items from children
	const registerItem = React.useCallback(
		(registration: TreeItemRegistration) => {
			itemsMapRef.current.set(registration.id, registration);
			return () => {
				itemsMapRef.current.delete(registration.id);
			};
		},
		[],
	);

	const getItem = React.useCallback((id: string) => {
		return itemsMapRef.current.get(id);
	}, []);

	const getSiblings = React.useCallback((id: string) => {
		const target = itemsMapRef.current.get(id);
		if (!target) return [];
		return Array.from(itemsMapRef.current.values()).filter(
			(item) => item.parentId === target.parentId,
		);
	}, []);

	// Handle selection change
	const selectNode = React.useCallback(
		(id: string, options?: { toggle?: boolean }) => {
			if (disabled || selectionMode === "none") return;

			let nextKeys: string[] = [];
			if (selectionMode === "single") {
				if (options?.toggle && selectedKeys.includes(id)) {
					nextKeys = [];
				} else {
					nextKeys = [id];
				}
			} else if (selectionMode === "multiple") {
				if (selectedKeys.includes(id)) {
					nextKeys = selectedKeys.filter((key) => key !== id);
				} else {
					nextKeys = [...selectedKeys, id];
				}
			}

			if (!isValueControlled) {
				setUncontrolledValue(nextKeys);
			}

			if (onValueChange) {
				if (selectionMode === "single") {
					onValueChange(nextKeys[0] ?? "");
				} else {
					onValueChange(nextKeys);
				}
			}
		},
		[
			disabled,
			selectionMode,
			selectedKeys,
			isValueControlled,
			onValueChange,
		],
	);

	// Handle async loading
	const loadNodeChildren = React.useCallback(
		async (id: string) => {
			if (!onLoadChildren || loadedNodesRef.current.has(id)) return;

			setLoadingKeys((prev) => new Set(prev).add(id));
			try {
				await onLoadChildren(id);
				loadedNodesRef.current.add(id);
			} finally {
				setLoadingKeys((prev) => {
					const next = new Set(prev);
					next.delete(id);
					return next;
				});
			}
		},
		[onLoadChildren],
	);

	// Handle expansion change
	const setExpanded = React.useCallback(
		(next: string[]) => {
			if (!isExpandedControlled) {
				setUncontrolledExpanded(next);
			}
			onExpandedChange?.(next);
		},
		[isExpandedControlled, onExpandedChange],
	);

	const expandNode = React.useCallback(
		(id: string) => {
			if (expandedKeys.includes(id)) return;
			const next = [...expandedKeys, id];
			setExpanded(next);
			if (onLoadChildren && !loadedNodesRef.current.has(id)) {
				void loadNodeChildren(id);
			}
		},
		[expandedKeys, setExpanded, onLoadChildren, loadNodeChildren],
	);

	const collapseNode = React.useCallback(
		(id: string) => {
			if (!expandedKeys.includes(id)) return;
			const next = expandedKeys.filter((k) => k !== id);
			setExpanded(next);
		},
		[expandedKeys, setExpanded],
	);

	const toggleExpand = React.useCallback(
		(id: string) => {
			if (expandedKeys.includes(id)) {
				collapseNode(id);
			} else {
				expandNode(id);
			}
		},
		[expandedKeys, collapseNode, expandNode],
	);

	const expandAll = React.useCallback(() => {
		let allIds: string[] = [];
		if (data) {
			allIds = collectAllNodeIds(data);
		} else {
			allIds = Array.from(itemsMapRef.current.values())
				.filter((item) => !item.isLeaf)
				.map((item) => item.id);
		}
		setExpanded(Array.from(new Set([...expandedKeys, ...allIds])));
	}, [data, expandedKeys, setExpanded]);

	const collapseAll = React.useCallback(() => {
		setExpanded([]);
	}, [setExpanded]);

	// Auto-expand ancestors when search query matches
	const { filtered: processedData, matchedAncestorIds } =
		React.useMemo(() => {
			if (!data) return { filtered: undefined, matchedAncestorIds: [] };
			if (!search.trim())
				return { filtered: data, matchedAncestorIds: [] };
			return filterTreeData(data, search);
		}, [data, search]);

	React.useEffect(() => {
		if (matchedAncestorIds.length > 0) {
			const hasUnexpandedAncestors = matchedAncestorIds.some(
				(id) => !expandedKeys.includes(id),
			);
			if (hasUnexpandedAncestors) {
				const combined = Array.from(
					new Set([...expandedKeys, ...matchedAncestorIds]),
				);
				setExpanded(combined);
			}
		}
	}, [matchedAncestorIds, expandedKeys, setExpanded]);

	// Ensure keyboard users can Tab into the tree even when initially unselected
	React.useEffect(() => {
		if (!rootRef.current) return;
		const triggers = Array.from(
			rootRef.current.querySelectorAll<HTMLElement>(
				'[data-slot="tree-item-trigger"]:not([data-disabled="true"])',
			),
		);
		if (triggers.length === 0) return;

		const activeStillVisible = activeId
			? triggers.some((el) => el.getAttribute("data-id") === activeId)
			: false;

		if (!activeStillVisible) {
			const firstId = triggers[0]?.getAttribute("data-id");
			if (firstId && firstId !== activeId) {
				setActiveId(firstId);
			}
		}
	}, [activeId]);

	// WAI-ARIA 1.2 Tree Keyboard Navigation
	const handleKeyDown = React.useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (disabled) return;
			const root = rootRef.current;
			if (!root) return;

			// Gather all visible, non-disabled item triggers
			const visibleTriggers = Array.from(
				root.querySelectorAll<HTMLElement>(
					'[data-slot="tree-item-trigger"]',
				),
			).filter((el) => {
				return (
					el.offsetParent !== null &&
					el.getAttribute("data-disabled") !== "true"
				);
			});

			if (visibleTriggers.length === 0) return;

			const activeEl = document.activeElement as HTMLElement | null;
			let currentIndex = visibleTriggers.findIndex(
				(el) =>
					el === activeEl || el.getAttribute("data-id") === activeId,
			);

			if (currentIndex === -1) currentIndex = 0;

			const currentTrigger = visibleTriggers[currentIndex];
			const currentId = currentTrigger?.getAttribute("data-id") ?? "";
			const isExpanded =
				currentTrigger?.getAttribute("data-expanded") === "true";
			const isLeaf = currentTrigger?.getAttribute("data-leaf") === "true";

			switch (event.key) {
				case "ArrowDown": {
					event.preventDefault();
					const nextIndex = Math.min(
						currentIndex + 1,
						visibleTriggers.length - 1,
					);
					const nextEl = visibleTriggers[nextIndex];
					nextEl?.focus();
					const nextId = nextEl?.getAttribute("data-id");
					if (nextId) setActiveId(nextId);
					break;
				}

				case "ArrowUp": {
					event.preventDefault();
					const prevIndex = Math.max(currentIndex - 1, 0);
					const prevEl = visibleTriggers[prevIndex];
					prevEl?.focus();
					const prevId = prevEl?.getAttribute("data-id");
					if (prevId) setActiveId(prevId);
					break;
				}

				case "ArrowRight": {
					event.preventDefault();
					if (!isLeaf) {
						if (!isExpanded) {
							expandNode(currentId);
						} else {
							// Move focus to first child
							if (currentIndex < visibleTriggers.length - 1) {
								const childEl =
									visibleTriggers[currentIndex + 1];
								childEl?.focus();
								const childId =
									childEl?.getAttribute("data-id");
								if (childId) setActiveId(childId);
							}
						}
					}
					break;
				}

				case "ArrowLeft": {
					event.preventDefault();
					if (!isLeaf && isExpanded) {
						collapseNode(currentId);
					} else {
						// Move to parent node
						const parentId =
							currentTrigger?.getAttribute("data-parent-id");
						if (parentId) {
							const parentEl = visibleTriggers.find(
								(el) => el.getAttribute("data-id") === parentId,
							);
							if (parentEl) {
								parentEl.focus();
								setActiveId(parentId);
							}
						}
					}
					break;
				}

				case "Home": {
					event.preventDefault();
					const firstEl = visibleTriggers[0];
					firstEl?.focus();
					const firstId = firstEl?.getAttribute("data-id");
					if (firstId) setActiveId(firstId);
					break;
				}

				case "End": {
					event.preventDefault();
					const lastEl = visibleTriggers[visibleTriggers.length - 1];
					lastEl?.focus();
					const lastId = lastEl?.getAttribute("data-id");
					if (lastId) setActiveId(lastId);
					break;
				}

				case "Enter": {
					event.preventDefault();
					if (currentId) {
						selectNode(currentId);
						if (!isLeaf) {
							toggleExpand(currentId);
						}
					}
					break;
				}

				case " ": // Space
				case "Spacebar": {
					event.preventDefault();
					if (currentId) {
						selectNode(currentId, { toggle: true });
					}
					break;
				}

				case "*": {
					event.preventDefault();
					const parentId =
						currentTrigger?.getAttribute("data-parent-id");
					const siblings = visibleTriggers.filter(
						(el) =>
							el.getAttribute("data-parent-id") === parentId &&
							el.getAttribute("data-leaf") !== "true",
					);
					const toExpand = siblings
						.map((el) => el.getAttribute("data-id"))
						.filter((id): id is string => Boolean(id));
					setExpanded(
						Array.from(new Set([...expandedKeys, ...toExpand])),
					);
					break;
				}

				default: {
					// Type-ahead jump to node starting with character
					if (
						event.key.length === 1 &&
						!event.ctrlKey &&
						!event.metaKey &&
						!event.altKey
					) {
						const char = event.key.toLowerCase();
						const reordered = [
							...visibleTriggers.slice(currentIndex + 1),
							...visibleTriggers.slice(0, currentIndex + 1),
						];
						const match = reordered.find((el) => {
							const label =
								el.getAttribute("data-label")?.toLowerCase() ||
								el.textContent?.trim().toLowerCase() ||
								"";
							return label.startsWith(char);
						});
						if (match) {
							event.preventDefault();
							match.focus();
							const matchId = match.getAttribute("data-id");
							if (matchId) setActiveId(matchId);
						}
					}
					break;
				}
			}
		},
		[
			disabled,
			activeId,
			expandNode,
			collapseNode,
			selectNode,
			toggleExpand,
			expandedKeys,
			setExpanded,
		],
	);

	const contextValue = React.useMemo<TreeContextValue>(
		() => ({
			value: selectedKeys,
			selectNode,
			expanded: expandedKeys,
			toggleExpand,
			expandNode,
			collapseNode,
			expandAll,
			collapseAll,
			activeId,
			setActiveId,
			selectionMode,
			disabled,
			indent,
			searchQuery: search,
			loadingKeys,
			loadNodeChildren,
			registerItem,
			rootRef,
			getItem,
			getSiblings,
		}),
		[
			selectedKeys,
			selectNode,
			expandedKeys,
			toggleExpand,
			expandNode,
			collapseNode,
			expandAll,
			collapseAll,
			activeId,
			selectionMode,
			disabled,
			indent,
			search,
			loadingKeys,
			loadNodeChildren,
			registerItem,
			getItem,
			getSiblings,
		],
	);

	// Helper to render tree nodes from data prop
	const renderedContent = React.useMemo(() => {
		if (processedData) {
			return renderTreeNodes(processedData, renderItem);
		}
		return children;
	}, [processedData, renderItem, children]);

	const defaultProps = {
		ref: rootRef,
		role: "tree" as const,
		"data-slot": "tree-root",
		"data-selection-mode": selectionMode,
		"aria-multiselectable": selectionMode === "multiple" ? true : undefined,
		"aria-disabled": disabled ? true : undefined,
		onKeyDown: handleKeyDown,
		className: cn(treeVariants({ size, variant }), className),
		children: renderedContent,
	};

	const element = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});

	return (
		<TreeContext.Provider value={contextValue}>
			{element}
		</TreeContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Recursive Node Renderer (Data-Driven Mode)                                 */
/* -------------------------------------------------------------------------- */

function renderTreeNodes(
	nodes: TreeNodeData[],
	renderItem?: (node: TreeNodeData) => React.ReactNode,
	visited = new Set<string>(),
): React.ReactNode {
	return nodes
		.filter((node) => {
			if (!node || visited.has(node.id)) return false;
			visited.add(node.id);
			return true;
		})
		.map((node) => {
			if (renderItem) {
				return renderItem(node);
			}
			const hasChildren = Boolean(
				node.children && node.children.length > 0,
			);
			const isLeaf =
				node.isLeaf !== undefined ? node.isLeaf : !hasChildren;

			return (
				<TreeItem
					key={node.id}
					value={node.id}
					label={node.label ?? ""}
					disabled={node.disabled}
					isLoading={node.isLoading}
					isLeaf={isLeaf}
				>
					<TreeItemTrigger>
						<TreeItemChevron />
						{node.icon ? (
							<TreeItemIcon>{node.icon}</TreeItemIcon>
						) : (
							<TreeItemIcon />
						)}
						<TreeItemSpinner />
						<TreeItemLabel>{node.label ?? ""}</TreeItemLabel>
					</TreeItemTrigger>
					{hasChildren && node.children && (
						<TreeItemContent>
							{renderTreeNodes(
								node.children,
								renderItem,
								visited,
							)}
						</TreeItemContent>
					)}
				</TreeItem>
			);
		});
}

/* -------------------------------------------------------------------------- */
/* Tree Item                                                                  */
/* -------------------------------------------------------------------------- */

export interface TreeItemProps extends useRender.ComponentProps<"div"> {
	value: string;
	label?: string;
	disabled?: boolean;
	isLoading?: boolean;
	isLeaf?: boolean;
}

function TreeItem({
	value,
	label,
	disabled = false,
	isLoading: controlledLoading = false,
	isLeaf: explicitIsLeaf,
	className,
	render,
	children,
	...props
}: TreeItemProps) {
	const {
		expanded,
		value: selectedKeys,
		disabled: rootDisabled,
		loadingKeys,
		registerItem,
	} = useTree();

	const parentItem = React.useContext(TreeItemContext);
	const [hasChildren, setHasChildren] = React.useState(false);

	const depth = parentItem ? parentItem.depth + 1 : 1;
	const parentId = parentItem ? parentItem.id : null;

	const isLeaf = explicitIsLeaf !== undefined ? explicitIsLeaf : !hasChildren;
	const isExpanded = expanded.includes(value);
	const isSelected = selectedKeys.includes(value);
	const isDisabled = disabled || rootDisabled;
	const isLoading = controlledLoading || loadingKeys.has(value);

	React.useEffect(() => {
		return registerItem({
			id: value,
			label,
			parentId,
			depth,
			isLeaf,
		});
	}, [registerItem, value, label, parentId, depth, isLeaf]);

	// Notify parent that it has children
	React.useEffect(() => {
		if (parentItem) {
			parentItem.setHasChildren(true);
		}
	}, [parentItem]);

	const itemContext = React.useMemo<TreeItemContextValue>(
		() => ({
			id: value,
			label,
			depth,
			isExpanded,
			isSelected,
			isDisabled,
			isLoading,
			isLeaf,
			hasChildren,
			setHasChildren,
			parentId,
		}),
		[
			value,
			label,
			depth,
			isExpanded,
			isSelected,
			isDisabled,
			isLoading,
			isLeaf,
			hasChildren,
			parentId,
		],
	);

	const defaultProps = {
		role: "none" as const,
		"data-slot": "tree-item",
		"data-value": value,
		"data-depth": depth,
		"data-expanded": isExpanded ? "true" : "false",
		"data-selected": isSelected ? "true" : "false",
		"data-disabled": isDisabled ? "true" : undefined,
		"data-loading": isLoading ? "true" : undefined,
		"data-leaf": isLeaf ? "true" : "false",
		className: cn("relative flex flex-col gap-0.5 select-none", className),
		children,
	};

	const element = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});

	return (
		<TreeItemContext.Provider value={itemContext}>
			{element}
		</TreeItemContext.Provider>
	);
}

/* -------------------------------------------------------------------------- */
/* Tree Item Trigger                                                          */
/* -------------------------------------------------------------------------- */

export interface TreeItemTriggerProps
	extends useRender.ComponentProps<"div">,
		VariantProps<typeof treeItemVariants> {}

function TreeItemTrigger({
	className,
	variant,
	render,
	children,
	onClick,
	onFocus,
	...props
}: TreeItemTriggerProps) {
	const {
		id,
		label,
		depth,
		isExpanded,
		isSelected,
		isDisabled,
		isLeaf,
		parentId,
	} = useTreeItem();

	const {
		selectNode,
		toggleExpand,
		activeId,
		setActiveId,
		indent,
		selectionMode,
	} = useTree();

	const isRovingFocused = activeId === id;

	const defaultProps = {
		role: "treeitem" as const,
		tabIndex: isRovingFocused ? 0 : -1,
		"data-slot": "tree-item-trigger",
		"data-id": id,
		"data-label": label,
		"data-depth": depth,
		"data-parent-id": parentId ?? undefined,
		"data-leaf": isLeaf ? "true" : "false",
		"data-expanded": isExpanded ? "true" : "false",
		"data-selected": isSelected ? "true" : "false",
		"data-disabled": isDisabled ? "true" : undefined,
		"aria-expanded": !isLeaf ? isExpanded : undefined,
		"aria-selected": selectionMode !== "none" ? isSelected : undefined,
		"aria-disabled": isDisabled ? true : undefined,
		"aria-level": depth,
		style: {
			paddingLeft: `${(depth - 1) * indent + 8}px`,
		},
		className: cn(treeItemVariants({ variant }), className),
		onClick: (e: React.MouseEvent<HTMLDivElement>) => {
			if (isDisabled) return;
			setActiveId(id);
			selectNode(id, { toggle: selectionMode === "multiple" });
			if (!isLeaf) {
				toggleExpand(id);
			}
			onClick?.(e);
		},
		onFocus: (e: React.FocusEvent<HTMLDivElement>) => {
			if (!isDisabled) {
				setActiveId(id);
			}
			onFocus?.(e);
		},
		children,
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Tree Item Content                                                          */
/* -------------------------------------------------------------------------- */

export interface TreeItemContentProps extends useRender.ComponentProps<"div"> {}

function TreeItemContent({
	className,
	render,
	children,
	...props
}: TreeItemContentProps) {
	const { isExpanded, setHasChildren } = useTreeItem();

	React.useEffect(() => {
		setHasChildren(true);
		return () => {
			setHasChildren(false);
		};
	}, [setHasChildren]);

	const defaultProps = {
		role: "group" as const,
		"data-slot": "tree-item-content",
		"data-expanded": isExpanded ? "true" : "false",
		className: cn(
			"flex flex-col gap-0.5 transition-all duration-200 overflow-hidden",
			!isExpanded && "hidden",
			className,
		),
		children,
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Tree Item Chevron                                                          */
/* -------------------------------------------------------------------------- */

export interface TreeItemChevronProps
	extends useRender.ComponentProps<"span"> {}

function TreeItemChevron({
	className,
	children,
	render,
	...props
}: TreeItemChevronProps) {
	const { id, isExpanded, isLeaf, isLoading } = useTreeItem();
	const { toggleExpand } = useTree();

	const defaultProps = {
		"data-slot": isLeaf ? "tree-item-chevron-spacer" : "tree-item-chevron",
		"aria-hidden": true,
		className: isLeaf
			? cn("size-4 shrink-0 pointer-events-none", className)
			: cn(
					"size-4 shrink-0 inline-flex items-center justify-center transition-transform duration-200 cursor-pointer text-muted-foreground hover:text-foreground",
					isExpanded && "rotate-90",
					isLoading && "opacity-0",
					className,
				),
		onClick: isLeaf
			? undefined
			: (e: React.MouseEvent) => {
					e.stopPropagation();
					toggleExpand(id);
				},
		children: isLeaf
			? null
			: (children ?? <ChevronRight className="size-3.5" />),
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Tree Item Icon                                                             */
/* -------------------------------------------------------------------------- */

export interface TreeItemIconProps extends useRender.ComponentProps<"span"> {
	fileIcon?: React.ReactNode;
	folderIcon?: React.ReactNode;
	folderOpenIcon?: React.ReactNode;
}

function TreeItemIcon({
	className,
	fileIcon,
	folderIcon,
	folderOpenIcon,
	children,
	render,
	...props
}: TreeItemIconProps) {
	const { isLeaf, isExpanded } = useTreeItem();

	const defaultIcon = isLeaf
		? (fileIcon ?? (
				<File className="size-4 shrink-0 text-muted-foreground" />
			))
		: isExpanded
			? (folderOpenIcon ?? (
					<FolderOpen className="size-4 shrink-0 text-primary" />
				))
			: (folderIcon ?? (
					<Folder className="size-4 shrink-0 text-muted-foreground" />
				));

	const defaultProps = {
		"data-slot": "tree-item-icon",
		"aria-hidden": true,
		className: cn(
			"size-4 shrink-0 inline-flex items-center justify-center text-muted-foreground",
			className,
		),
		children: children ?? defaultIcon,
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Tree Item Label                                                            */
/* -------------------------------------------------------------------------- */

export interface TreeItemLabelProps extends useRender.ComponentProps<"span"> {}

function TreeItemLabel({
	className,
	render,
	children,
	...props
}: TreeItemLabelProps) {
	const defaultProps = {
		"data-slot": "tree-item-label",
		className: cn("truncate flex-1 text-left select-none", className),
		children,
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Tree Item Spinner                                                          */
/* -------------------------------------------------------------------------- */

export interface TreeItemSpinnerProps
	extends useRender.ComponentProps<"span"> {}

function TreeItemSpinner({
	className,
	children,
	render,
	...props
}: TreeItemSpinnerProps) {
	const { isLoading } = useTreeItem();

	const defaultProps = {
		"data-slot": "tree-item-spinner",
		"aria-hidden": true,
		className: cn(
			"size-4 shrink-0 inline-flex items-center justify-center text-muted-foreground animate-spin",
			!isLoading && "hidden",
			className,
		),
		children: children ?? <Loader2 className="size-3.5" />,
	};

	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Tree Item Actions                                                          */
/* -------------------------------------------------------------------------- */

export interface TreeItemActionsProps extends useRender.ComponentProps<"div"> {}

function TreeItemActions({
	className,
	render,
	children,
	...props
}: TreeItemActionsProps) {
	const defaultProps = {
		"data-slot": "tree-item-actions",
		className: cn(
			"ml-auto flex items-center gap-1 opacity-0 transition-opacity",
			"group-hover/tree-item:opacity-100 group-focus-within/tree-item:opacity-100",
			className,
		),
		onClick: (e: React.MouseEvent) => {
			e.stopPropagation();
		},
		children,
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

/* -------------------------------------------------------------------------- */
/* Tree View (Data-Driven Alias Component)                                    */
/* -------------------------------------------------------------------------- */

export interface TreeViewProps extends TreeRootProps {
	data: TreeNodeData[];
}

function TreeView({ data, ...props }: TreeViewProps) {
	return <TreeRoot data={data} {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const Tree = Object.assign(TreeRoot, {
	Root: TreeRoot,
	Item: TreeItem,
	Trigger: TreeItemTrigger,
	Content: TreeItemContent,
	Label: TreeItemLabel,
	Icon: TreeItemIcon,
	Chevron: TreeItemChevron,
	Spinner: TreeItemSpinner,
	Actions: TreeItemActions,
	View: TreeView,
});

export {
	TreeRoot,
	TreeItem,
	TreeItemTrigger,
	TreeItemContent,
	TreeItemLabel,
	TreeItemIcon,
	TreeItemChevron,
	TreeItemSpinner,
	TreeItemActions,
	TreeView,
};
