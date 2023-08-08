import React from 'react'

const FieldFooter = ({ onSave, onCancel, loader }: { onSave: () => void; onCancel: () => void; loader?: boolean }) => {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <div>
        <button type="button" className="btn btn-outline-darkblue mx-2" onClick={onCancel}>
          Cancel
        </button>
        <button type="button" className="btn btn-darkblue" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  )
}

export default FieldFooter
