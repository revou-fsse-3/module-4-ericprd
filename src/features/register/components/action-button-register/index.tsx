import { Button } from "components/base";
import { useRegisterContext } from "features";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export function ActionButtonRegister() {
  const { step, setStep, setIsError, isSubmitButton, setIsSubmitButton } = useRegisterContext();
  const { formState: { errors } } = useFormContext();

  function backHandler() {
    if (step > 1) setStep((prev) => prev - 1);
    if (step < 3) setIsSubmitButton(false);
  }

  function nextHandler() {
    if (step < 3) setStep((prev) => prev + 1);
    if (step === 3) setIsSubmitButton(true);
  }

  useEffect(() => {
    const errorCount = Object.keys(errors).length
    if (errorCount > 0) setIsError(true);
    else setIsError(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors])

  return (
    <div className="flex justify-between items-center">
      <Button
        type="button"
        disabled={step <= 1}
        onClick={backHandler}
        className="max-w-fit bg-slate-100"
      >
        Back
      </Button>

      <span>{step}/3</span>

      <Button
        type={isSubmitButton ? 'submit' : 'button'}
        onClick={nextHandler}
        className="max-w-fit bg-blue-400 text-white"
      >
        {step >= 3 ? 'Submit' : 'Next'}
      </Button>
    </div>
  )
}