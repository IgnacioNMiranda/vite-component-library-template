import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FormField } from '../types/fields'

const useFieldSet = (field: FormField, onChange: any) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [editField, setEditField] = useState<FormField>(field)

  useEffect(() => {
    if (isEdit) setEditField(field)
  }, [isEdit])

  const handleLabelChange = useCallback(
    (data: string) => {
      setEditField({ ...editField, label: data })
    },
    [editField],
  )

  const handleEdit = useCallback(() => {
    if (!isEdit) {
      setEditField(field)
      setIsEdit(true)
    }
  }, [isEdit, setIsEdit])

  const handleSave = useCallback(() => {
    onChange(editField)
    setIsEdit(false)
  }, [editField])

  const handleCancel = useCallback(() => {
    setIsEdit(false)
  }, [])

  const handleDelete = useCallback(() => {
    console.log('handleDelete')
  }, [])

  const onRequiredChange = useCallback(
    (checked: boolean) => {
      setEditField({ ...editField, required: checked })
    },
    [editField],
  )

  const renderData = useMemo(() => (isEdit ? editField : field), [editField, isEdit, field])

  return {
    isEdit,
    editField,
    renderData,
    handleLabelChange,
    handleEdit,
    handleSave,
    handleCancel,
    handleDelete,
    onRequiredChange,
  }
}

export default useFieldSet
