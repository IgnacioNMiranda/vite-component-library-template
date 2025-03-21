import { cva } from 'cva'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

const buttonStyles = cva(['h-12', 'rounded-lg', 'font-semibold'], {
  variants: {
    intent: {
      primary: ['bg-primary-600', 'text-white'],
    },
    size: {
      sm: ['w-72'],
      md: ['w-80'],
      lg: ['w-96'],
      full: ['w-full'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
})

function Button({ className = '', ...props }: ButtonProps) {
  return <button className={`${className} ${buttonStyles()}`} {...props} />
}

export { Button }
export type { ButtonProps }
