import { useId } from "react";
import { get, useFormContext } from "react-hook-form";
import { InputProps } from "./type";
import { twMerge } from 'tailwind-merge';

export function Input(props: InputProps ) {
  const {
    label,
    id,
    isRequired = false,
    type = 'text',
    rules,
    name,
    containerClassName,
    ...rest
  } = props;

  const generateId = useId();

  const { register, formState: { errors } } = useFormContext();

  const error = get(errors, name)

  return (
    <div>
      {label && (
        <label htmlFor={id ?? generateId} className="font-semibold text-lg text-gray-500">
          {label}
          {isRequired && <sup className="text-red-500">*</sup>}
        </label>
      )}

      <div className={twMerge('flex border border-slate-400', error && 'border-[#DF0000]', containerClassName)}>
        <input
          className="w-full p-2 outline-none ring-0 focus:ring-0 focus:outline-none"
          id={id ?? generateId}
          type={type}
          {...register(name, rules)}
          {...rest}
        />
      </div>

      {error && (
        <p className="text-xs italic text-[#DF0000] mt-1">
          {error?.message?.toString()}
        </p>
      )}
    </div>
  )
}