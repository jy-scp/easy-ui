import { Button } from '@easy/ui'

export default function ButtonShowcase() {
  return (
    <>
      <div className="showcase-section">
        <h2>Variants</h2>
        <div className="showcase-example">
          <h3>Default</h3>
          <div className="showcase-example-content">
            <Button variant="default">Default Button</Button>
            <Button variant="default" disabled>
              Disabled
            </Button>
          </div>
        </div>

        <div className="showcase-example" style={{ marginTop: '20px' }}>
          <h3>Outline</h3>
          <div className="showcase-example-content">
            <Button variant="outline">Outline Button</Button>
            <Button variant="outline" disabled>
              Disabled
            </Button>
          </div>
        </div>

        <div className="showcase-example" style={{ marginTop: '20px' }}>
          <h3>Ghost</h3>
          <div className="showcase-example-content">
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="ghost" disabled>
              Disabled
            </Button>
          </div>
        </div>
      </div>

      <div className="showcase-section">
        <h2>Sizes</h2>
        <div className="showcase-example">
          <h3>Small</h3>
          <div className="showcase-example-content">
            <Button size="sm">Small</Button>
          </div>
        </div>

        <div className="showcase-example" style={{ marginTop: '20px' }}>
          <h3>Medium (Default)</h3>
          <div className="showcase-example-content">
            <Button size="md">Medium</Button>
          </div>
        </div>

        <div className="showcase-example" style={{ marginTop: '20px' }}>
          <h3>Large</h3>
          <div className="showcase-example-content">
            <Button size="lg">Large</Button>
          </div>
        </div>
      </div>

      <div className="showcase-section">
        <h2>Combinations</h2>
        <div className="showcase-example">
          <div className="showcase-example-content">
            <Button variant="default" size="sm">
              Default SM
            </Button>
            <Button variant="outline" size="lg">
              Outline LG
            </Button>
            <Button variant="ghost" size="md">
              Ghost MD
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
