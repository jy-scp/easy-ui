import { createPortal } from "react-dom";
import { useModalContext } from "./useModalContext";
import React from "react";

export const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useModalContext();
  if (!isOpen) return null;

  return createPortal(
    <div className="headless-modal-portal">{children}</div>,
    document.body
  );
};
