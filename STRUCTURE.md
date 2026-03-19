# Easy-UI 项目结构指南

## 📁 项目结构

```
easy-ui/
├── packages/
│   ├── ui/                 # 核心组件库
│   │   ├── src/
│   │   │   ├── components/   # 组件源码
│   │   │   │   ├── Button/
│   │   │   │   ├── Modal/
│   │   │   │   ├── Collapse/
│   │   │   │   ├── Select/
│   │   │   │   └── Dropdown/
│   │   │   └── index.ts      # 导出入口
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsup.config.ts    # 打包配置
│   │
│   ├── playground/          # 开发测试场景
│   │   ├── cases/            # 每个组件的演示用例
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Collapse.tsx
│   │   │   ├── Select.tsx
│   │   │   └── Dropdown.tsx
│   │   ├── App.tsx           # 主应用组件（导航和展示）
│   │   ├── App.css           # 导航样式
│   │   ├── main.tsx          # 入口
│   │   ├── vite.config.mjs   # Vite 配置
│   │   └── package.json
│   │
│   └── docs/                # 用户文档（VitePress）
│       ├── .vitepress/      # VitePress 配置
│       │   └── config.ts
│       ├── components/      # 组件文档
│       │   ├── index.md
│       │   ├── button.md
│       │   └── modal.md
│       ├── guide/           # 使用指南
│       │   └── getting-started.md
│       ├── index.md         # 首页
│       ├── RESOURCES.md     # 资源链接
│       └── package.json
│
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── README.md
```

## 🚀 快速开始

### 安装依赖
```bash
pnpm install
```

### 开发 Playground
```bash
pnpm dev
```
访问 http://localhost:5173 查看所有组件演示。

### 开发文档
```bash
pnpm dev:docs
```
访问 http://localhost:5173 查看文档。

### 构建组件库
```bash
pnpm build
```

### 构建文档
```bash
pnpm build:docs
```

## 📚 各部分职责

### UI 包 (`packages/ui/`)
- **职责**：核心组件库的源代码
- **输入**：组件源代码
- **输出**：编译后的 ESM/CJS 包，发布到 NPM
- **特点**：
  - 使用 tsup 进行打包
  - 导出完整的 TypeScript 类型
  - 支持 Tree-shaking

### Playground (`packages/playground/`)
- **职责**：开发工具，用于快速测试和演示组件
- **受众**：贡献者、开发者
- **特点**：
  - 实时热更新
  - 所有组件的完整演示
  - 快速原型和调试
  - 不需要部署
- **结构**：
  - `cases/` - 每个组件的独立演示文件
  - `App.tsx` - 导航和展示框架
  - `App.css` - 统一的 UI 样式

### Docs (`packages/docs/`)
- **职责**：用户文档
- **受众**：用户、集成方
- **特点**：
  - 官方文档和 API 参考
  - 最佳实践指南
  - 可部署到网络
  - 版本化内容
- **结构**：
  - `guide/` - 使用指南
  - `components/` - 组件 API 文档

## 📖 工作流程

### 开发新组件
1. 在 `packages/ui/src/components/` 中创建新组件
2. 在 `packages/playground/cases/` 中创建演示文件
3. 运行 `pnpm dev` 在 Playground 中测试
4. 在 `packages/docs/components/` 中编写文档

### 更新文档
1. 编辑 `packages/docs/` 中的 Markdown 文件
2. 运行 `pnpm dev:docs` 查看效果
3. 构建后自动生成静态网站

### 发布流程
1. 更新 `packages/ui/` 中的组件
2. 在 Playground 中测试
3. 更新相应的文档
4. 运行 `pnpm build` 构建包
5. 发布到 NPM

## 🎯 最佳实践

### 组件开发
- ✅ 使用 Headless 设计模式
- ✅ 提供完整的 TypeScript 类型
- ✅ 创建相应的 Playground 演示
- ✅ 编写详细的 API 文档

### 文档
- ✅ 保持文档与代码同步
- ✅ 提供实际代码示例
- ✅ 编写最佳实践指南
- ✅ 链接到 Playground 演示

### Playground
- ✅ 展示所有变体和大小
- ✅ 展示禁用状态
- ✅ 提供交互示例
- ✅ 组织清晰的导航

## 🔗 资源链接

- 📖 [VitePress 文档](https://vitepress.dev)
- 🎨 [Class Variance Authority](https://cva.style)
- ⚡ [Vite](https://vitejs.dev)
- 📦 [tsup](https://tsup.egoist.dev)
