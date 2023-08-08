import React, { useCallback, useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import FieldHeader from '../../FormGenrator/FieldHeader'
import ItemLabel from '../../FormGenrator/ItemLabel'
import FieldFooter from '../../FormGenrator/FieldFooter'
import { FormField } from '../../../types/fields'
import useFieldSet from '../../../hook/useFieldSet'

export default function LabelField({ field, onChange }: { field: FormField; onChange: any }) {
  const { isEdit, handleLabelChange, handleEdit, handleSave, handleCancel, handleDelete, renderData } = useFieldSet(
    field,
    onChange,
  )

  return (
    <Col xs={12}>
      <Card>
        <FieldHeader onDelete={handleDelete} onEdit={handleEdit} title="TEXT INPUT" />
        <Card.Body className={isEdit ? '' : 'h5 fw-bold'}>
          <ItemLabel
            edit={isEdit}
            value={renderData.label}
            onChange={handleLabelChange}
            className="form-control"
            label="Label"
          />
        </Card.Body>
        {isEdit && (
          <Card.Footer>
            <FieldFooter onCancel={handleCancel} onSave={handleSave} />
          </Card.Footer>
        )}
      </Card>
    </Col>
  )
}
