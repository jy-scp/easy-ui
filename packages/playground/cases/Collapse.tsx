import { Collapse } from '@easy/ui'

export default function CollapseShowcase() {
  return (
    <>
      <div className="showcase-section">
        <h2>Basic Collapse</h2>
        <div className="showcase-example">
          <Collapse title="Section 1">
            <p style={{ margin: 0, color: '#666' }}>
              This is the content for section 1. You can add any content here.
            </p>
          </Collapse>
          <Collapse title="Section 2" style={{ marginTop: '10px' }}>
            <p style={{ margin: 0, color: '#666' }}>
              This is the content for section 2. Each section can be toggled independently.
            </p>
          </Collapse>
          <Collapse title="Section 3" style={{ marginTop: '10px' }}>
            <p style={{ margin: 0, color: '#666' }}>
              This is the content for section 3. Use collapse to organize large amounts of
              content.
            </p>
          </Collapse>
        </div>
      </div>

      <div className="showcase-section">
        <h2>With Custom Content</h2>
        <div className="showcase-example">
          <Collapse title="📋 Features">
            <ul style={{ margin: '0 0 0 20px', color: '#666' }}>
              <li>Simple to use</li>
              <li>Fully customizable</li>
              <li>Lightweight</li>
              <li>Accessible</li>
            </ul>
          </Collapse>
          <Collapse title="🎨 Styling" style={{ marginTop: '10px' }}>
            <p style={{ margin: 0, color: '#666' }}>
              You can style collapse components using CSS classes or inline styles.
            </p>
          </Collapse>
        </div>
      </div>
    </>
  )
}
