import React, { useState, useContext, createContext, useId } from "react";

// ─────────────────────────────────────────────
// 1. Root Context：管理整个 Collapse 的展开状态
// ─────────────────────────────────────────────

export interface CollapseProps {
  children: React.ReactNode;
  accordion?: boolean;
  defaultActiveKeys?: string[];
}

interface CollapseContextType {
  activeKeys: string[];
  toggleItem: (key: string) => void;
  accordion?: boolean;
}

const CollapseContext = createContext<CollapseContextType | null>(null);

function useCollapseContext() {
  const ctx = useContext(CollapseContext);
  if (!ctx)
    throw new Error("Collapse sub-components must be wrapped in <Collapse>");
  return ctx;
}

export const CollapseRoot: React.FC<CollapseProps> = ({
  children,
  accordion,
  defaultActiveKeys,
}) => {
  const [activeKeys, setActiveKeys] = useState<string[]>(
    defaultActiveKeys ?? [],
  );

  const toggleItem = (key: string) => {
    setActiveKeys((prev) => {
      const isOpen = prev.includes(key);
      if (accordion) return isOpen ? [] : [key];
      return isOpen ? prev.filter((k) => k !== key) : [...prev, key];
    });
  };

  return (
    <CollapseContext.Provider value={{ activeKeys, toggleItem, accordion }}>
      {children}
    </CollapseContext.Provider>
  );
};

// ─────────────────────────────────────────────
// 2. Panel Context：管理单个 Panel 的 key 和派生状态
// ─────────────────────────────────────────────

interface PanelContextType {
  itemKey: string;
  isOpen: boolean;
  toggle: () => void;
  /** trigger 与 content 通过同一个 id 关联，满足 ARIA 规范 */
  triggerId: string;
  contentId: string;
}

const PanelContext = createContext<PanelContextType | null>(null);

export function usePanelContext() {
  const ctx = useContext(PanelContext);
  if (!ctx)
    throw new Error(
      "Collapse.Trigger / Collapse.Content must be wrapped in <Collapse.Panel>",
    );
  return ctx;
}

// ─────────────────────────────────────────────
// 3. Collapse.Panel —— 纯容器，不渲染多余 DOM
// ─────────────────────────────────────────────

export interface CollapsePanelProps {
  itemKey: string;
  children: React.ReactNode;
}

export function CollapsePanel({ itemKey, children }: CollapsePanelProps) {
  const { activeKeys, toggleItem } = useCollapseContext();
  const isOpen = activeKeys.includes(itemKey);

  // useId 保证 SSR 安全的唯一 id，用于 ARIA 关联
  const uid = useId();
  const triggerId = `collapse-trigger-${uid}`;
  const contentId = `collapse-content-${uid}`;

  return (
    <PanelContext.Provider
      value={{
        itemKey,
        isOpen,
        toggle: () => toggleItem(itemKey),
        triggerId,
        contentId,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
}

// ─────────────────────────────────────────────
// 4. Collapse.Trigger —— 触发按钮，自动处理 ARIA
// ─────────────────────────────────────────────

export interface CollapseTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function CollapseTrigger({
  children,
  className,
  style,
  ...rest
}: CollapseTriggerProps) {
  const { isOpen, toggle, triggerId, contentId } = usePanelContext();

  return (
    <button
      id={triggerId}
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={toggle}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
}

// ─────────────────────────────────────────────
// 5. Collapse.Content —— 内容区，自动处理 ARIA + 显隐
// ─────────────────────────────────────────────

export interface CollapseContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CollapseContent({
  children,
  className,
  style,
  ...rest
}: CollapseContentProps) {
  const { isOpen, triggerId, contentId } = usePanelContext();

  if (!isOpen) return null;

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
