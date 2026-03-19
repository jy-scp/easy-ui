# Button 组件

## 简介

Button 是基础按钮组件，提供了多种变体和大小选项。

## 基本用法

```tsx
import { Button } from '@easy/ui'

export default function Example() {
  return <Button>点击我</Button>
}
```

## 变体

### Default

默认样式的按钮，通常用于主要操作。

```tsx
<Button variant="default">Default Button</Button>
```

### Outline

轮廓样式的按钮，用于次要操作。

```tsx
<Button variant="outline">Outline Button</Button>
```

### Ghost

幽灵样式的按钮，用于不太重要的操作。

```tsx
<Button variant="ghost">Ghost Button</Button>
```

## 大小

支持三种预设大小：

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

## 禁用状态

使用 `disabled` 属性禁用按钮：

```tsx
<Button disabled>Disabled Button</Button>
```

## API 参考

### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `variant` | `'default' \| 'outline' \| 'ghost'` | `'default'` | 按钮样式变体 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 按钮大小 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `onClick` | `(e: React.MouseEvent) => void` | - | 点击回调 |
| `className` | `string` | - | 自定义样式类 |

所有标准 HTMLButtonElement 属性都支持。

## 最佳实践

- 用 **default** 变体表示主要操作（如"提交"、"保存"）
- 用 **outline** 变体表示次要操作（如"取消"、"返回"）
- 用 **ghost** 变体表示最不重要的操作（如"更多选项"）
- 始终在需要时提供禁用状态反馈
- 使用合适的大小以确保可访问性
