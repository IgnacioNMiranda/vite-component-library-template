import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import TwoColumn from './TwoColumn'
import InputField from './InputField'

export default function FieldEditSection() {
  return (
    <div className="w-100 p-3">
      <Row className="gy-3">
        <InputField field={{}} />
        <TwoColumn />
        <Col xs={12}>
          <div className="dropzone">Drop Zone</div>
        </Col>
      </Row>
    </div>
  )
}
