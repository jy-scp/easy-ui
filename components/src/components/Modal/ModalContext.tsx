import React, { createContext } from "react";

export interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);