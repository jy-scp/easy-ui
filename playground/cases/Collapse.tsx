import { Collapse } from '@easy/ui'

export default function CollapseShowcase() {
  return (
    <div>
      <Collapse accordion>
        <Collapse.Panel itemKey="1">
          {({ isOpen, toggle }) => (
            <div style={{ border: '1px solid #ccc' }}>
              {/* 用户自己决定样式，组件只提供逻辑注入 */}
              <div style={{ background: '#eee', padding: 10 }} onClick={toggle}>
                {isOpen ? '🔽' : '▶️'} 点击展开面板 1
              </div>
              {!isOpen ? null : (
                <div style={{ padding: 10 }}>
                  这是面板 1 的内容，你可以随意加动画！
                </div>
              )}
            </div>
          )}
        </Collapse.Panel>
        <Collapse.Panel itemKey="2">
          {({ isOpen, toggle }) => (
            <div style={{ border: '1px solid #ccc', marginBottom: 8 }}>
              {/* 用户自己决定样式，组件只提供逻辑注入 */}
              <div style={{ background: '#eee', padding: 10 }} onClick={toggle}>
                {isOpen ? '🔽' : '▶️'} 点击展开面板 2
              </div>
              {!isOpen ? null : (
                <div style={{ padding: 10 }}>
                  这是面板 2 的内容，你可以随意加动画！
                </div>
              )}
            </div>
          )}
        </Collapse.Panel>
      </Collapse>
    </div>

  )
}
