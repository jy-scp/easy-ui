import { Select } from '@easy/ui'

export default function SelectShowcase() {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ]

  return (
    <>
      <div className="showcase-section">
        <h2>Basic Select</h2>
        <div className="showcase-example">
          <Select options={options} placeholder="Choose an option" />
        </div>
      </div>

      <div className="showcase-section">
        <h2>Select with Default Value</h2>
        <div className="showcase-example">
          <Select options={options} placeholder="Choose an option" defaultValue="option2" />
        </div>
      </div>

      <div className="showcase-section">
        <h2>Multiple Selects</h2>
        <div className="showcase-example">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Select options={options} placeholder="First select" />
            <Select options={options} placeholder="Second select" defaultValue="option1" />
            <Select options={options} placeholder="Third select" />
          </div>
        </div>
      </div>
    </>
  )
}
