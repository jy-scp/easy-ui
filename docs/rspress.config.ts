import { defineConfig } from 'rspress/config'

export default defineConfig({
  root: 'docs',
  title: 'EasyUI',
  description: '高性能 React UI 组件库',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/button' },
    ],
    sidebar: {
      '/guide/': [
        { text: '快速开始', link: '/guide/getting-started' },
      ],
      '/components/': [
        { text: 'Button', link: '/components/button' },
        { text: 'Modal', link: '/components/modal' },
        { text: 'Collapse', link: '/components/collapse' },
      ],
    },
  },
})
