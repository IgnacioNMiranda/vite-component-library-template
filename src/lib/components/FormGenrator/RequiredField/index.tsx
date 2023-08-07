import React, { useEffect, useState } from 'react'

const RequiredField = ({ value = false, onChange, label, edit = false }: any) => {
  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    setChecked(value)
  }, [value])

  const handleChange = (e: any) => {
    setChecked(e.target.checked)
  }

  if (!edit) {
    return null
  }

  return (
    <span>
      <input
        type="checkbox"
        checked={checked}
        id="isRequired"
        className="form-check-input"
        onChange={handleChange}
        name="isRequired"
        value="isRequired"
      />
      <label className="form-check-label mx-2" htmlFor="isRequired">
        {label || 'Required'}
      </label>
    </span>
  )
}

export default RequiredField
