import React from 'react'
import { Modal, useModalContext } from '@easy/ui'
import { cva } from 'class-variance-authority'

const overlayVariants = cva('fixed inset-0 bg-black/50 backdrop-blur-sm')
const contentVariants = cva(
  'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-xl rounded-lg',
  {
    variants: {
      size: {
        sm: 'w-80',
        md: 'w-96',
        lg: 'w-[600px]',
      },
    },
  },
)

interface ModalItemProps {
  title: string
  size: 'sm' | 'md' | 'lg'
}

const ModalItem = ({ title, size }: ModalItemProps) => {
  return (
    <Modal defaultOpen={false}>
      <ModalTrigger title={`Open ${title}`} />
      <Modal.Portal>
        <Modal.Overlay className={overlayVariants()} />
        <Modal.Content className={contentVariants({ size })}>
          <ModalPopup />
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  )
}

const ModalTrigger = ({ title }: { title: string }) => {
  const { setIsOpen } = useModalContext()

  return (
    <button
      onClick={() => setIsOpen(true)}
      style={{
        padding: '10px 20px',
        cursor: 'pointer',
        backgroundColor: '#ff9500',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 500,
        fontSize: '14px',
      }}
    >
      {title}
    </button>
  )
}

const ModalPopup = () => {
  const { setIsOpen } = useModalContext()

  return (
    <>
      <h2 style={{ marginBottom: '1rem', color: '#333' }}>Modal Dialog</h2>
      <p style={{ marginBottom: '1.5rem', color: '#666' }}>
        This is a headless modal component. You can click outside or press ESC to close.
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            backgroundColor: '#ff9500',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 500,
          }}
        >
          Close Modal
        </button>
      </div>
    </>
  )
}

export default function ModalShowcase() {
  return (
    <>
      <div className="showcase-section">
        <h2>Basic Modal (Medium)</h2>
        <div className="showcase-example">
          <ModalItem title="Basic Modal" size="md" />
        </div>
      </div>

      <div className="showcase-section">
        <h2>Small Modal</h2>
        <div className="showcase-example">
          <ModalItem title="Small Modal" size="sm" />
        </div>
      </div>

      <div className="showcase-section">
        <h2>Large Modal</h2>
        <div className="showcase-example">
          <ModalItem title="Large Modal" size="lg" />
        </div>
      </div>
    </>
  )
}
