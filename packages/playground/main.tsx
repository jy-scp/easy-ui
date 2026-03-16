import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Button, Collapse, Select, Dropdown, Modal, useModalContext } from '@easy/ui'
import './index.css'
const divider = {
  width: '100%',
  height: '1px',
  margin: '5vh 0',
  backgroundColor: '#000',
}
import { cva } from "class-variance-authority";

const overlayVariants = cva("fixed inset-0 bg-black/50 backdrop-blur-sm");
const contentVariants = cva("fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-xl rounded-lg", {
  variants: {
    size: {
      sm: "w-80",
      lg: "w-[600px]",
    }
  }
});

// Modal 内部组件，可以访问 useModalContext
const ModalContent = () => {
  const { setIsOpen } = useModalContext()
  
  return (
    <>
      <div style={{marginBottom: '1rem'}}>
        <button onClick={() => setIsOpen(true)} style={{padding: '8px 16px', cursor: 'pointer'}}>
          打开 Modal
        </button>
      </div>

      <Modal.Portal>
        <Modal.Overlay className={overlayVariants()} />
        <Modal.Content className={contentVariants({ size: "lg" })}>
          <h2 style={{marginBottom: '1rem'}}>我是 Headless Modal!</h2>
          <p style={{marginBottom: '1rem', color: '#666'}}>
            点击遮罩或按 ESC 可以关闭，也可以点击下面的按钮
          </p>
          <button 
            onClick={() => setIsOpen(false)} 
            style={{padding: '8px 16px', cursor: 'pointer', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px'}}
          >
            关闭
          </button>
        </Modal.Content>
      </Modal.Portal>
    </>
  )
}

export const MyStyledModal = () => (
  <Modal>
    <ModalContent />
  </Modal>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{
      width: '50vw',
      height: '100vh',
      margin: '0 auto',
    }}>
      <Button>Hello from UI</Button>
      <div style={divider} />
      <Collapse title="hajimi">129</Collapse>
      <div style={divider} />
      <Dropdown />
      <div style={divider} />
      <Select
        onChange={(val) => console.log(val)}
        options={[{ label: 'A', value: 'a' }]}
      />
      <div style={divider} />
      <Select
        multiple
        onChange={(val) => console.log(val)}
        options={[{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }, { label: 'C', value: 'c' }]}
      />
      <MyStyledModal />



      
    </div>

  </React.StrictMode>,
)
