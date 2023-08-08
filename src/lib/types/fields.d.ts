export interface BaseFormField {
  id: number
  type: string
  label: string
  value: string
  fieldName: string
  placeholder?: string
  required: boolean
}

export interface Option {
  label: string
  value: string
  selected: boolean
}

export interface OptionValueField extends BaseFormField {
  options: Array<Option>
}

export interface TextValueField extends BaseFormField {
  value: string
}

export type FormField = OptionValueField | TextValueField
