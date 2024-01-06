import { Controller, get, useFormContext } from "react-hook-form";
import { CheckboxProps } from "./type";
import { useId } from "react";
import { twMerge } from "tailwind-merge";

export function Checkbox(props: Omit<CheckboxProps, 'type'>) {
  const { label, name, id, rules, labelClassName, ...rest } = props;

  const { register, control, formState: { errors }, setValue } = useFormContext();

  const generatedId = useId();

  const error = get(errors, name)

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={false}
      render={({ field: { value } }) => (
        <div className="space-y-3">
          <label htmlFor={id} className="flex gap-2 items-center">
            <input
              type="checkbox"
              id={id ?? generatedId}
              checked={!!value}
              {...register(name, rules)}
              {...rest}
              onChange={() => {
                const isChecked = !!value;

                if (isChecked) {
                  setValue(name, false);
                }
                if (!isChecked) {
                  setValue(name, true);
                }
              }}
              className={twMerge('scale-150 cursor-pointer', error && 'outline-[#DF0000]')}
            />
            {label && <span className={twMerge('text-black select-none cursor-pointer', labelClassName, error && 'outline-[#DF0000]')}>{label}</span>}
          </label>

          {error && (
            <p className="text-xs italic text-[#DF0000] mt-1">
              {error?.message?.toString()}
            </p>
          )}
        </div>
      )}
    />
  )
}