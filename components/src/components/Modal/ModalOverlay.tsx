import React from "react";
import { useModalContext } from "./useModalContext";

export const ModalOverlay = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
  const { setIsOpen } = useModalContext();
  return (
    <div
      className={className}
      style={style}
      onClick={() => setIsOpen(false)}
      aria-hidden="true"
    />
  );
};
