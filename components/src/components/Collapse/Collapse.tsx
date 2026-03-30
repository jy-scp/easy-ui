import React, { useState, ReactNode, useContext } from 'react';

export interface CollapseProps {
  children: ReactNode;
  accordion?: boolean;
  defaultActiveKeys?: string[];
}

interface CollapseContextType {
  activeKeys: string[];
  toggleItem: (key: string) => void;
  accordion?: boolean;
}

const CollapseContext = React.createContext<CollapseContextType>({
  activeKeys: [],
  toggleItem: () => { },
  accordion: false
});

export const CollapseRoot: React.FC<CollapseProps> = ({ children, accordion, defaultActiveKeys }) => {
  const [activeKeys, setActiveKeys] = useState(defaultActiveKeys || []);

  const toggleItem = (key: string) => {
    setActiveKeys((prev) => {
      const isOpen = prev.includes(key);
      if (accordion) return isOpen ? [] : [key]; // 手风琴模式
      return isOpen ? prev.filter((k) => k !== key) : [...prev, key];
    });
  };

  return (
    <CollapseContext.Provider value={{ activeKeys, toggleItem, accordion }}>
      {children}
    </CollapseContext.Provider>
  );
};

export interface CollapsePanelProps {
  itemKey: string;
  children: (props: { isOpen: boolean; toggle: () => void; getButtonProps: () => Record<string, any> }) => ReactNode;
}

export function CollapsePanel({ itemKey, children }: CollapsePanelProps) {
  const { activeKeys, toggleItem } = useContext(CollapseContext);
  const isOpen = activeKeys.includes(itemKey);

  // 这里的 children 可以是 Render Prop，让用户决定样式
  return children({
    isOpen,
    toggle: () => toggleItem(itemKey),
    getButtonProps: () => ({
      'aria-expanded': isOpen,
      onClick: () => toggleItem(itemKey)
    })
  });
}
