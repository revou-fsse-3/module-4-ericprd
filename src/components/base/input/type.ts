import { InputHTMLAttributes } from "react"
import { RegisterOptions } from "react-hook-form"

type InputType = {
  label?: string
  id?: string
  isRequired?: boolean
  type?: string
  name: string
  rules?: RegisterOptions
  containerClassName?: string
}

export type InputProps = InputType & InputHTMLAttributes<HTMLInputElement>
