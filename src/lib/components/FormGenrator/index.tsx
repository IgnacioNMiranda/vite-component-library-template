import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TwoColumn from './TwoColumn'
import InputField from '../Fields/InputField'
import LabelField from '../Fields/labelField'
import { FormField } from '../../types/fields'

export default function FieldEditSection({ data, onChange }: { data: FormField[]; onChange: any }) {
  const renderSwitch = (item: FormField) => {
    switch (item.type) {
      case 'input':
        return <InputField key={item.type} field={item} onChange={onChange} />
      // case 'label':
      //   return <LabelField key={item.type} field={item} onChange={onChange} />
      case 'twoColumn':
        return <TwoColumn key={item.type} />
      default:
        return null
    }
  }

  return (
    <div className="w-100 p-3">
      <Row className="gy-3">
        {data && data.map((item: FormField) => renderSwitch(item))}
        <TwoColumn />
        <Col xs={12}>
          <div className="dropzone">Drop Zone</div>
        </Col>
      </Row>
    </div>
  )
}
