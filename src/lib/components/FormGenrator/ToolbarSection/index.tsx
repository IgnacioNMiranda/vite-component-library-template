import React from 'react'
import { toolbarItems } from '../../../mockdata.ts'

export default function ToolbarSection() {
  console.log('toolBar', toolbarItems)

  return (
    <div className="toolbox text-center">
      {(toolbarItems || []).map((item, index) => (
        <div className="iconBox" key={index}>
          <div className="iconBoxInner">
            <i className={`icon fa-solid ${item.icon}`} />
            <span className="d-block">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
