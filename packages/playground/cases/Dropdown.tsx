import { Dropdown } from '@easy/ui'

export default function DropdownShowcase() {
  return (
    <>
      <div className="showcase-section">
        <h2>Basic Dropdown</h2>
        <div className="showcase-example">
          <Dropdown trigger="Dropdown Menu">
            <div style={{ padding: '10px', minWidth: '150px' }}>
              <div style={{ padding: '8px', cursor: 'pointer', color: '#666' }}>Menu Item 1</div>
              <div style={{ padding: '8px', cursor: 'pointer', color: '#666' }}>Menu Item 2</div>
              <div style={{ padding: '8px', cursor: 'pointer', color: '#666' }}>Menu Item 3</div>
            </div>
          </Dropdown>
        </div>
      </div>

      <div className="showcase-section">
        <h2>Multiple Dropdowns</h2>
        <div className="showcase-example">
          <div style={{ display: 'flex', gap: '20px' }}>
            <Dropdown trigger="File">
              <div style={{ padding: '10px', minWidth: '150px' }}>
                <div style={{ padding: '8px', cursor: 'pointer', color: '#666' }}>New</div>
                <div style={{ padding: '8px', cursor: 'pointer', color: '#666' }}>Open</div>
                <div style={{ padding: '8px', cursor: 'pointer', color: '#d32f2f' }}>Exit</div>
              </div>
            </Dropdown>
            <Dropdown trigger="Edit">
              <div style={{ padding: '10px', minWidth: '150px' }}>
                <div style={{ padding: '8px', cursor: 'pointer', color: '#666' }}>Cut</div>
                <div style={{ padding: '8px', cursor: 'pointer', color: '#666' }}>Copy</div>
                <div style={{ padding: '8px', cursor: 'pointer', color: '#666' }}>Paste</div>
              </div>
            </Dropdown>
            <Dropdown trigger="Help">
              <div style={{ padding: '10px', minWidth: '150px' }}>
                <div style={{ padding: '8px', cursor: 'pointer', color: '#666' }}>Documentation</div>
                <div style={{ padding: '8px', cursor: 'pointer', color: '#666' }}>About</div>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  )
}
