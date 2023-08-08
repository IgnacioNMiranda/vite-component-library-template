import React from 'react'
import { Card, Col } from 'react-bootstrap'
import FieldHeader from './FieldHeader'
import FieldFooter from './FieldFooter'

const FieldCard = ({ handleDelete, handleEdit, handleCancel, handleSave, isEdit, children, value }: any) => {
  return (
    <Col xs={12}>
      <Card>
        <FieldHeader onDelete={handleDelete} onEdit={handleEdit} title={value.fieldName} />
        <Card.Body>{children}</Card.Body>
        {isEdit && (
          <Card.Footer>
            <FieldFooter onCancel={handleCancel} onSave={handleSave} />
          </Card.Footer>
        )}
      </Card>
    </Col>
  )
}

export default FieldCard
