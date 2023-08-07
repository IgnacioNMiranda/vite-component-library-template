import React from 'react'
import { Card } from 'react-bootstrap'

const FieldHeader = ({ onEdit, onDelete, title }: { onEdit: () => void; onDelete: () => void; title: string }) => {
  return (
    <Card.Header>
      <div className="card-title">{title}</div>
      <div className="card-toolbar">
        <i className="cursor-pointer fa-solid fa-pen-line icon" onClick={onEdit} />
        <i className="cursor-pointer fa-solid fa-trash icon" onClick={onDelete} />
        <div className="icon">
          <i className="cursor-pointer fa-solid fa-ellipsis-vertical" />
          <i className="cursor-pointer fa-solid fa-ellipsis-vertical ms-1" />
        </div>
      </div>
    </Card.Header>
  )
}

export default FieldHeader
