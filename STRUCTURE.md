# Easy-UI 项目结构指南

## 📁 项目结构

```text
easy-ui/
├── components/               # 核心组件库（可发布包 @easy/ui）
│   ├── src/
│   │   ├── components/       # 组件源码
│   │   │   ├── Button/
│   │   │   ├── Modal/
│   │   │   ├── Collapse/
│   │   │   ├── Select/
│   │   │   └── Dropdown/
│   │   ├── index.ts          # 组件导出入口
│   │   └── index.css         # 全局样式入口
│   ├── package.json
│   ├── tsconfig.json
│   └── tsup.config.ts        # 组件库打包配置
│
├── playground/               # 本地开发演示环境（Vite + React）
│   ├── cases/                # 各组件演示用例
│   ├── App.tsx               # 演示主页面
│   ├── main.tsx              # 入口
│   ├── vite.config.mjs
│   └── package.json
│
├── docs/                     # 文档站点（Rspress）
│   ├── docs/
│   │   ├── index.md
│   │   ├── guide/
│   │   └── components/
│   ├── rspress.config.ts
│   └── package.json
│
├── package.json              # 根脚本（开发/构建编排）
├── pnpm-workspace.yaml       # workspace 包管理
├── pnpm-lock.yaml
└── README.md
```

## 🚀 常用命令

### 安装依赖
```bash
pnpm install
```

### 启动 Playground
```bash
pnpm dev
```

### 启动文档站
```bash
pnpm dev:docs
```

### 同时启动 Playground + Docs
```bash
pnpm dev:all
```

### 构建组件库
```bash
pnpm build
```

### 构建文档
```bash
pnpm build:docs
```

## 📚 各部分职责

### components/
- 核心 React 组件开发与打包
- 输出 ESM/CJS + 类型声明
- 包名：`@easy/ui`

### playground/
- 用于本地联调、交互测试与视觉验证
- 直接消费 workspace 中的 `@easy/ui`

### docs/
- 面向使用者的文档站
- 提供入门指南、组件说明与示例

## 📖 建议工作流

1. 在 `components/src/components/` 开发或修改组件。
2. 在 `playground/cases/` 增加或更新演示案例。
3. 在 `docs/docs/components/` 同步文档。
4. 运行 `pnpm build` 与 `pnpm build:docs` 验证产物。
