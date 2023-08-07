import React from 'react'

const FieldHeader = ({ onEdit, onDelete, title }: { onEdit: () => void; onDelete: () => void; title: string }) => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-secondary text-white px-2">
      <div className="text-uppercase">{title}</div>
      <div>
        <button type="button" className="btn btn-sm" onClick={onEdit}>
          <i className="fa fa-pen text-white"></i>
        </button>
        <button type="button" className="btn btn-sm" onClick={onDelete}>
          <i className="fa fa-trash text-white"></i>
        </button>
        <button type="button" className="btn btn-sm">
          <i className="fa-solid fa-grip-vertical text-white"></i>{' '}
        </button>
      </div>
    </div>
  )
}

export default FieldHeader
