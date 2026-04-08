# Easy-UI

一个基于 React 的轻量组件库 Monorepo，包含：

- `components/`：组件源码与打包（`@easy/ui`）
- `playground/`：本地演示与联调
- `docs/`：Rspress 文档站

## 快速开始

```bash
pnpm install
```

### 开发

```bash
pnpm dev       # 启动 playground
pnpm dev:docs  # 启动 docs
pnpm dev:all   # 同时启动 playground + docs
```

### 构建

```bash
pnpm build      # 构建 @easy/ui
pnpm build:docs # 构建文档站
```

## Roadmap

- [ ] Tailwind 支持
- [ ] Vitest 单元测试
- [ ] 多主题系统
- [ ] 按需打包导出组件
- [ ] 文档系统（支持导入组件）
