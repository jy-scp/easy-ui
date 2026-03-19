# Modal 组件

## 简介

Modal 是一个 Headless 模态对话框组件，提供了高度的定制性。它由多个子组件组成，允许你完全控制样式和行为。

## 基本用法

```tsx
import { Modal, useModalContext } from '@easy/ui'

const ModalContent = () => {
  const { setIsOpen } = useModalContext()
  
  return (
    <>
      <h2>标题</h2>
      <p>内容</p>
      <button onClick={() => setIsOpen(false)}>关闭</button>
    </>
  )
}

const OpenButton = () => {
  const { setIsOpen } = useModalContext()
  
  return <button onClick={() => setIsOpen(true)}>打开 Modal</button>
}

export default function Example() {
  return (
    <Modal defaultOpen={false}>
      <OpenButton />
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content>
          <ModalContent />
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  )
}
```

## API 参考

### Modal.Root

顶层容器，管理 Modal 的状态。内部所有组件都可以通过 `useModalContext` 钩子访问状态。

**Props：**

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `children` | `React.ReactNode` | - | Modal 内容 |
| `defaultOpen` | `boolean` | `false` | Modal 初始状态 |

### Modal.Portal

使用 React Portal 渲染 Modal，确保 z-index 正确。

### Modal.Overlay

背景遮罩层，点击时会关闭 Modal。

**Props：**
- 所有 HTMLDivElement 属性（如 `className`、`style` 等）

### Modal.Content

Modal 内容容器。

**Props：**
- 所有 HTMLDivElement 属性

### useModalContext

Hook，用于在 Modal 内部访问和控制 Modal 状态。

```tsx
const { isOpen, setIsOpen } = useModalContext()
```

**返回值：**

| 属性 | 类型 | 描述 |
|------|------|------|
| `isOpen` | `boolean` | Modal 当前状态 |
| `setIsOpen` | `(open: boolean) => void` | 设置 Modal 状态 |

## 高级用法

### 自定义样式

```tsx
import { cva } from 'class-variance-authority'

const overlayVariants = cva('fixed inset-0 bg-black/50 backdrop-blur-sm')
const contentVariants = cva('fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg rounded-lg', {
  variants: {
    size: {
      sm: 'w-80',
      lg: 'w-[600px]',
    }
  }
})

export default function Example() {
  return (
    <Modal defaultOpen={false}>
      <OpenButton />
      <Modal.Portal>
        <Modal.Overlay className={overlayVariants()} />
        <Modal.Content className={contentVariants({ size: 'lg' })}>
          <Content />
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  )
}
```

### 多个 Modal

```tsx
export default function MultipleModals() {
  return (
    <>
      <Modal defaultOpen={false}>
        <OpenButton label="Modal 1" />
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Content title="Modal 1" />
          </Modal.Content>
        </Modal.Portal>
      </Modal>

      <Modal defaultOpen={false}>
        <OpenButton label="Modal 2" />
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Content title="Modal 2" />
          </Modal.Content>
        </Modal.Portal>
      </Modal>
    </>
  )
}
```

## 最佳实践

- ✅ 在 `Modal.Root` 内部使用 `useModalContext` 访问和控制状态
- ✅ 使用 `Modal.Portal` 确保 z-index 和层级管理正确
- ✅ 通过 `Modal.Overlay` 点击关闭时，内部已自动处理
- ✅ `Modal.Content` 会自动处理 ESC 键关闭和 body overflow 隐藏
- ✅ 使用 CVA 或 Tailwind CSS 类为 `Overlay` 和 `Content` 添加样式
- ✅ 将打开按钮和内容放在 `Modal.Root` 内，它们都可以访问 context
- ✅ 可以嵌套多个 `Modal.Root` 实现多个独立的 modal
- ✅ 始终提供明确的关闭按钮供用户交互
