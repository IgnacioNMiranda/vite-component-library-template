import React, { useEffect, useState } from 'react'
import InputField from '../../components/FormGenrator/InputField'

export const FormGenrator = () => {
  const [data, setData] = useState()
  useEffect(() => {
    const field = localStorage.getItem('testData')
    if (field) {
      setData(JSON.parse(field))
    }
  }, [])

  return <div> {data && <InputField field={data} />}</div>
}
