import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function TwoColumn() {
  return (
    <Col xs={12}>
      <Card>
        <Card.Header>
          <div className="card-title">Header Text</div>
          <div className="card-toolbar">
            <i className="fa-solid fa-pen-line icon" />
            <i className="fa-solid fa-trash icon" />
            <div className="icon">
              <i className="fa-solid fa-ellipsis-vertical" />
              <i className="fa-solid fa-ellipsis-vertical ms-1" />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Row className="g-3">
            <Col xs={6}>
              <Card>
                <Card.Header>
                  <div className="card-title">Header Text</div>
                  <div className="card-toolbar">
                    <i className="fa-solid fa-pen-line icon" />
                    <i className="fa-solid fa-trash icon" />
                    <div className="icon">
                      <i className="fa-solid fa-ellipsis-vertical" />
                      <i className="fa-solid fa-ellipsis-vertical ms-1" />
                    </div>
                  </div>
                </Card.Header>
                <Card.Body />
              </Card>
            </Col>
            <Col xs={6}>
              <Card>
                <Card.Header>
                  <div className="card-title">Header Text</div>
                  <div className="card-toolbar">
                    <i className="fa-solid fa-pen-line icon" />
                    <i className="fa-solid fa-trash icon" />
                    <div className="icon">
                      <i className="fa-solid fa-ellipsis-vertical" />
                      <i className="fa-solid fa-ellipsis-vertical ms-1" />
                    </div>
                  </div>
                </Card.Header>
                <Card.Body />
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}
