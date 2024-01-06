import { InputHTMLAttributes, ReactNode } from "react"
import { RegisterOptions } from "react-hook-form"

type InputType = {
  label?: string;
  id?: string;
  isRequired?: boolean;
  type?: string;
  name: string;
  rules?: RegisterOptions;
  containerClassName?: string;
  rightNode?: ReactNode;
  rightNodeClick?: () => void;
}

export type InputProps = InputType & InputHTMLAttributes<HTMLInputElement>