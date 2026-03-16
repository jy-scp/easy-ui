import { useModalContext } from "./useModalContext";

export const ModalOverlay = ({ className }: { className?: string }) => {
  const { setIsOpen } = useModalContext();
  return (
    <div 
      className={className} 
      onClick={() => setIsOpen(false)}
      aria-hidden="true"
    />
  );
};
