import React, { useState } from 'react'
import './App.css'
import ButtonShowcase from './cases/Button'
import ModalShowcase from './cases/Modal'
import CollapseShowcase from './cases/Collapse'
import SelectShowcase from './cases/Select'
import DropdownShowcase from './cases/Dropdown'

type ComponentName = 'button' | 'modal' | 'collapse' | 'select' | 'dropdown'

const components: Record<ComponentName, { name: string; component: React.ReactNode }> = {
  button: { name: 'Button', component: <ButtonShowcase /> },
  modal: { name: 'Modal', component: <ModalShowcase /> },
  collapse: { name: 'Collapse', component: <CollapseShowcase /> },
  select: { name: 'Select', component: <SelectShowcase /> },
  dropdown: { name: 'Dropdown', component: <DropdownShowcase /> },
}

export default function App() {
  const [active, setActive] = useState<ComponentName>('button')

  return (
    <div className="playground-container">
      <aside className="sidebar">
        <div className="logo">🎨 Easy-UI</div>
        <nav className="components-nav">
          <h3>Components</h3>
          <ul>
            {Object.entries(components).map(([key, { name }]) => (
              <li key={key}>
                <button
                  className={`nav-button ${active === key ? 'active' : ''}`}
                  onClick={() => setActive(key as ComponentName)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="content">
        <div className="component-showcase">
          <h1>{components[active].name}</h1>
          <div className="showcase-content">
            {components[active].component}
          </div>
        </div>
      </main>
    </div>
  )
}
