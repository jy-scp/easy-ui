import { ModalRoot } from "./ModalRoot";
import { ModalPortal } from "./ModalPortal";
import { ModalOverlay } from "./ModalOverlay";
import { ModalContent } from "./ModalContent";

export const Modal = Object.assign(ModalRoot, {
  Portal: ModalPortal,
  Overlay: ModalOverlay,
  Content: ModalContent,
});
