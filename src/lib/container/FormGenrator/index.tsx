import React, { useEffect, useState } from 'react'
import InputField from '../../components/FormGenrator/InputField'
import { Card, Col, Row } from 'react-bootstrap'

export const FormGenrator = () => {
  const [data, setData] = useState()
  useEffect(() => {
    const field = localStorage.getItem('testData')
    if (field) {
      setData(JSON.parse(field))
    }
  }, [])

  return (
    <div>
      <div className="form-builder">
        <div className="d-flex align-items-center px-4 py-3 bg-white topbar">
          <h6 className="fw-bold mb-0">Add Template</h6>
          <div className="ms-auto">
            <button type="button" className="btn btn-outline-defult">
              Cancel
            </button>
            <button type="button" className="btn btn-outline-primary mx-3">
              Preview
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
        <div className="d-flex">
          <div className="toolbox text-center">
            <div className="iconBox">
              <div className="iconBoxInner">
                <i className="icon fa-solid fa-line-columns" />
                <span className="d-block">Two Column Row</span>
              </div>
            </div>
            <div className="iconBox">
              <div className="iconBoxInner">
                <i className="icon fa-solid fa-line-columns" />
                <span className="d-block">Two Column Row</span>
              </div>
            </div>
            <div className="iconBox">
              <div className="iconBoxInner">
                <i className="icon fa-solid fa-line-columns" />
                <span className="d-block">Two Column Row</span>
              </div>
            </div>
            <div className="iconBox">
              <div className="iconBoxInner">
                <i className="icon fa-solid fa-line-columns" />
                <span className="d-block">Two Column Row</span>
              </div>
            </div>
            <div className="iconBox">
              <div className="iconBoxInner">
                <i className="icon fa-solid fa-line-columns" />
                <span className="d-block">Two Column Row</span>
              </div>
            </div>
            <div className="iconBox">
              <div className="iconBoxInner">
                <i className="icon fa-solid fa-line-columns" />
                <span className="d-block">Two Column Row</span>
              </div>
            </div>
          </div>
          <div className="w-100 p-3">
            <Row className="gy-3">
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
                  <Card.Body />
                </Card>
              </Col>
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
              <Col xs={12}>
                <div className="dropzone">Drop Zone</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {data && <InputField field={data} />}
    </div>
  )
}
