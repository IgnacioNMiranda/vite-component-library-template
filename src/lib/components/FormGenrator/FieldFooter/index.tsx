import React from 'react'

const FieldFooter = ({ onSave, onCancel, loader }: { onSave: () => void; onCancel: () => void; loader?: boolean }) => {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <div>
        <button type="button" className="btn btn-light mx-2" onClick={onCancel}>
          Calcel
        </button>
        <button type="button" className="btn btn-primary" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  )
}

export default FieldFooter
