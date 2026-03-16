import React, { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalRoot = ({ 
  children, 
  defaultOpen = false 
}: { 
  children: React.ReactNode
  defaultOpen?: boolean 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
