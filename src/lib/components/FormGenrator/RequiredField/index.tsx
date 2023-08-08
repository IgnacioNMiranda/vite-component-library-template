import React, { ChangeEvent, useEffect, useState } from 'react'

const RequiredField = ({
  value = false,
  onChange,
  label,
  edit = false,
}: {
  value: boolean
  onChange: any
  label?: string
  edit: boolean
}) => {
  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    setChecked(value)
  }, [value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    if (onChange) onChange(e.target.checked)
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
