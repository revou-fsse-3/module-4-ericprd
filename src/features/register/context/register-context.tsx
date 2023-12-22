import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react"

type RegisterValueType = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  isSubmitButton: boolean;
  setIsSubmitButton: Dispatch<SetStateAction<boolean>>;
}

const registerContext = createContext<RegisterValueType | undefined>(undefined);

export function RegisterProvider(props: PropsWithChildren) {
  const { children } = props;

  const [step, setStep] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isSubmitButton, setIsSubmitButton] = useState(false);

  const value = {
    step,
    setStep,
    isError,
    setIsError,
    isSubmitButton,
    setIsSubmitButton,
  }

  return (
    <registerContext.Provider value={value}>{children}</registerContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRegisterContext() {
  const context = useContext(registerContext);

  if (!context) throw new Error('useRegisterContext must be used within a Register Provider');

  return context;
}
