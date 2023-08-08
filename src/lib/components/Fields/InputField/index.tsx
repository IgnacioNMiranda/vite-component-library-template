import React, { useMemo } from 'react'
import FieldHeader from '../../FormGenrator/FieldHeader'
import ItemLabel from '../../FormGenrator/ItemLabel'
import RequiredField from '../../FormGenrator/RequiredField'
import FieldFooter from '../../FormGenrator/FieldFooter'
import { Card, Col } from 'react-bootstrap'
import { FormField } from '../../../types/fields'
import useFieldSet from '../../../hook/useFieldSet'
import FieldCard from '../../FormGenrator/FieldCard'

const InputField = ({ field, onChange }: { field: FormField; onChange: any }) => {
  const {
    isEdit,
    renderData,
    handleLabelChange,
    handleEdit,
    handleSave,
    handleCancel,
    handleDelete,
    onRequiredChange,
  } = useFieldSet(field, onChange)

  return (
    <FieldCard
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      handleCancel={handleCancel}
      handleSave={handleSave}
      isEdit={isEdit}
      value={renderData}
    >
      <ItemLabel
        edit={isEdit}
        value={renderData.label}
        onChange={handleLabelChange}
        className="form-control"
        required={renderData.required}
      />

      <input type="text" className="form-control my-2" disabled />

      <RequiredField edit={isEdit} value={renderData.required} onChange={onRequiredChange} />
    </FieldCard>
  )
}

export default InputField
