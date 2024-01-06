import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { RegisterOptions } from 'react-hook-form';

export type CheckboxProps = {
  label?: string
  labelClassName?: string | string[]
  rules?: RegisterOptions
  name: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>