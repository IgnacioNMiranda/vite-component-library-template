import React, { useCallback, useEffect, useState } from 'react'
import { FormGenrator } from './container'
import { FormField } from './types/fields'

export const Main = () => {
  const [data, setData] = useState<Array<FormField>>([])

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('formData') ?? '[]'))
  }, [])

  const handleChnage = useCallback(
    (newItem: FormField) => {
      const newData = data.map((item: FormField) => {
        if (item.id === newItem.id) {
          return newItem
        }
        return item
      })

      setData(newData)
      localStorage.setItem('formData', JSON.stringify(newData))
    },
    [data],
  )
  // localStorage.setItem(
  //   'formData',
  //   JSON.stringify([
  //     {
  //       id: 1,
  //       label: 'label',
  //       type: 'label',
  //       value: 'Header Label',
  //       fieldName: "Label"
  //     },
  //     {
  //       id: 2,
  //       label: 'Question',
  //       type: 'input',
  //       fieldName: "Input",
  //       placeholder: 'Enter placeholder text',
  //       required: true,
  //       defaultValue: '',
  //       value: '',
  //     },
  //   ]),
  // )
  return (
    <div>
      <FormGenrator data={data} onChange={handleChnage} />
    </div>
  )
}
