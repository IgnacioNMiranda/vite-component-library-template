import { ButtonHTMLAttributes } from 'react'

export const AT_BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const
export type AtButtonVariant = keyof typeof AT_BUTTON_VARIANT

export const variantClasses: Record<AtButtonVariant, string> = {
  PRIMARY: 'bg-green-200 hover:bg-green-400 active:bg-green-500',
  SECONDARY: 'bg-blue-200 hover:bg-blue-400 active:bg-blue-500',
}

export interface AtButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: AtButtonVariant
}

export const AtButton = ({ label, variant = 'PRIMARY' }: AtButtonProps) => {
  return <button className={`transition-colors px-6 py-2 rounded-md ${variantClasses[variant]}`}>{label}</button>
}
