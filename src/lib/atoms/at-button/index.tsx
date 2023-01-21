import { ButtonHTMLAttributes } from 'react'

export interface AtButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const AtButton = ({ label }: AtButtonProps) => {
  return <button>{label}</button>
}
