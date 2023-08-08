import React from 'react'
import { toolbarItems } from '../../../mockdata.ts'

export default function ToolbarSection() {
  return (
    <div className="toolbox text-center">
      {(toolbarItems || []).map((item) => (
        <div className="iconBox" key={item.key}>
          <div className="iconBoxInner">
            <i className={`icon fa-solid ${item.icon}`} />
            <span className="d-block">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
