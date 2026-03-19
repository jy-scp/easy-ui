# 快速开始

## 安装

```sh
npm install @easy/ui
# 或
pnpm add @easy/ui
# 或
yarn add @easy/ui
```

## 基本使用

### 导入组件

```tsx
import { Button, Modal, Select } from '@easy/ui'
```

### 使用 Button

```tsx
import { Button } from '@easy/ui'

export default function App() {
  return (
    <div>
      <Button variant="default">Default Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
    </div>
  )
}
```

## 组件列表

EasyUI 提供以下组件：

| 组件 | 描述 |
|------|------|
| **Button** | 基础按钮组件，支持多种变体和大小 |
| **Modal** | Headless Modal 组件，完全可定制 |
| **Collapse** | 可折叠内容组件 |
| **Select** | 下拉选择器 |
| **Dropdown** | 下拉菜单组件 |

## 样式配置

EasyUI 使用 Tailwind CSS 作为样式基础。确保在你的项目中配置了 Tailwind CSS：

```js
// tailwind.config.js
export default {
  content: [
    "./node_modules/@easy/ui/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 下一步

- 查看 [Button 组件文档](/components/button)
- 探索 [所有组件](/components/)
- 查看 [API 参考](/api-reference)
