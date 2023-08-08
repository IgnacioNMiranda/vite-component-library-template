import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Editor from 'ckeditor5-custom-build/build/ckeditor'

const ItemLabel = ({
  value = 'Label Text',
  onChange,
  edit = false,
  className,
  required = false,
  label = 'Question',
}: {
  value?: string
  onChange?: any
  onSubmit?: any
  edit?: boolean
  className?: string
  required?: boolean
  label?: string
}) => {
  const [data, setData] = useState<string>()

  const handleChanges = (event: any, editor: any) => {
    const dataValue = editor.getData()
    setData(dataValue)
    if (onChange) onChange(dataValue, event)
  }

  if (!edit) {
    return (
      <div className="d-flex">
        <div dangerouslySetInnerHTML={{ __html: value }} className="" />
        {required && <div className="ml-2 text-danger">*</div>}
      </div>
    )
  }

  return (
    <div>
      <label htmlFor="editor">{label || 'Question'}</label>
      <CKEditor
        editor={Editor}
        data={data}
        id={'editor'}
        config={{
          toolbar: {
            items: ['bold', 'italic', 'underline', 'link', 'undo', 'redo', 'removeFormat'],
            shouldNotGroupWhenFull: true,
          },
        }}
        onReady={(editor) => {
          editor.setData(value || '')
          setData(value || '')
        }}
        onChange={handleChanges}
      />
    </div>
  )
}

export default ItemLabel
