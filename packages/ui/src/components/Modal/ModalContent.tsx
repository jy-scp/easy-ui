import React, { useEffect } from "react";
import { useModalContext } from "./useModalContext";

export const ModalContent = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) => {
  const { setIsOpen } = useModalContext();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [setIsOpen]);

  return (
    <div role="dialog" aria-modal="true" className={className}>
      {children}
    </div>
  );
};
