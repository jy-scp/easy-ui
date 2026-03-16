import { cva } from "class-variance-authority";
import { Modal } from "@easy/ui"; // 你刚才写的

// 用户定义样式
const overlayVariants = cva("fixed inset-0 bg-black/50 backdrop-blur-sm");
const contentVariants = cva("fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-xl rounded-lg", {
  variants: {
    size: {
      sm: "w-80",
      lg: "w-[600px]",
    }
  }
});

// 用户自由组合
export const MyStyledModal = () => (
  <Modal.Root>
    <Modal.Portal>
      <Modal.Overlay className={overlayVariants()} />
      <Modal.Content className={contentVariants({ size: "lg" })}>
        <h2>我是 Headless Modal!</h2>
        <button onClick={() => {/* ... */}}>确定</button>
      </Modal.Content>
    </Modal.Portal>
  </Modal.Root>
);
