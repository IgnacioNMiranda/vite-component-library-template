import React, { useEffect, useState } from 'react'
import ToolbarSection from '../../components/FormGenrator/ToolbarSection'
import FieldEditSection from '../../components/FormGenrator'

export const FormGenrator = () => {
  return (
    <div>
      <div className="form-builder">
        <div className="d-flex align-items-center px-4 py-3 bg-white topbar">
          <h6 className="fw-bold mb-0">Add Template</h6>
          <div className="ms-auto">
            <button type="button" className="btn btn-outline-defult">
              Cancel
            </button>
            <button type="button" className="btn mx-3 btn-outline-darkblue">
              Preview
            </button>
            <button type="button" className="btn btn-darkblue">
              Save
            </button>
          </div>
        </div>
        <div className="d-flex">
          <ToolbarSection />
          <FieldEditSection />
        </div>
      </div>
    </div>
  )
}
