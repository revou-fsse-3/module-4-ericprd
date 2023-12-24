import { RegisterProvider } from "features/register";
import { FormWrapper } from "..";
import { CardLayout } from "features";

export function RegisterWrapper() {
  return (
    <RegisterProvider>
      <div className="relative max-w-xl mx-auto min-w-[10rem] flex place-items-center min-h-dvh">
        <CardLayout>
          <FormWrapper />
        </CardLayout>
      </div>
    </RegisterProvider>
  );
}