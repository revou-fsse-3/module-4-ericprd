import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  const { children, className, disabled, ...rest } = props;

  return (
  <button
    className={twMerge('border-none w-full', !disabled && 'hover:brightness-110', className)}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
  )
}
