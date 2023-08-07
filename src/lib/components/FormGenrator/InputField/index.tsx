import React, { useCallback, useEffect, useState } from 'react'
import FieldHeader from '../FieldHeader'
import ItemLabel from '../ItemLabel'
import RequiredField from '../RequiredField'
import FieldFooter from '../FieldFooter'
import { Card, Col } from 'react-bootstrap'

const InputField = ({ field }: { field: any }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [editField, setEditField] = useState(null)

  useEffect(() => {
    if (isEdit) setEditField(field)
  }, [isEdit])

  const handleLabelChange = (data: any, abc: any) => {
    console.log('dddata', data)
    console.log('ddabc', abc)
  }
  const tempValue = `<p>dfgh &nbsp;hgdjn <strong>gfhj</strong> &nbsp; xfghn <i>rthg xsd</i><a href="fdgn hgmnfhn fhgn"><i> </i></a><a href="gh nfhgn fghn"><i>hgsg</i></a><i>&nbsp;</i></p>`

  const handleEdit = useCallback(() => {
    setIsEdit(!isEdit)
    console.log('handleEdit')
  }, [isEdit, setIsEdit])

  const handleSave = useCallback(() => {
    console.log('handleSave')
  }, [])

  const handleCancel = useCallback(() => {
    console.log('handleCancel')
  }, [])
  const handleDelete = useCallback(() => {
    console.log('handleDelete')
  }, [])

  const onRequiredChange = useCallback(() => {
    console.log('onRequiredChange')
  }, [])

  return (
    <>
      <Col xs={12}>
        <Card>
          <FieldHeader onDelete={handleDelete} onEdit={handleEdit} title="Text INPUT" />
          <Card.Body>
            <ItemLabel edit={isEdit} value={tempValue} onChange={handleLabelChange} className="form-control" />
            <RequiredField edit={isEdit} onChange={onRequiredChange} />
          </Card.Body>
          <Card.Footer>
            <FieldFooter onCancel={handleCancel} onSave={handleSave} />
          </Card.Footer>
        </Card>
      </Col>
    </>
  )
}

export default InputField
