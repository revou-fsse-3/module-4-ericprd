import { FormProvider, useForm } from "react-hook-form";
import { FormRegisterType } from "./type";
import { validationSchema } from "./validation";
import { useRegisterContext, ActionButtonRegister } from "features/register";

import { stepList } from "./data";
import { yupResolver } from "@hookform/resolvers/yup";

export function FormWrapper() {
  const { step, setStep, isError, setIsError, setIsSubmitButton } = useRegisterContext();

  const formMethods = useForm<FormRegisterType>({
    resolver: yupResolver(validationSchema)
  });

  const { handleSubmit, reset } = formMethods;

  function submitHandler(data: FormRegisterType) {
    if (isError) setIsError(false);
    alert(JSON.stringify(data, null, 2));
    reset();
    setStep(1);
    setIsSubmitButton(false);
  }

  const StepPage = stepList.get(step);

  if (!StepPage) return;

  return (
    <FormProvider {...formMethods}>
      <form className="space-y-12" onSubmit={handleSubmit(submitHandler)}>
        <p className='text-center text-3xl font-bold'>Register</p>

        <div className="flex flex-col justify-between min-h-[30rem]">
          <div className='space-y-5'>
            <StepPage />
          </div>

          <ActionButtonRegister />
        </div>
      </form>
    </FormProvider>
  );
}