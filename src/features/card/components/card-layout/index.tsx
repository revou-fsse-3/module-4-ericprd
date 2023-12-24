import { Card } from "components";
import { useRegisterContext } from "features";
import { HTMLAttributes } from "react";

export function CardLayout(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className } = props;
  
  const { isError } = useRegisterContext();

  return (
    <Card className={className}>
      {isError && <div className="absolute w-full top-0 left-0 text-white py-3 text-center bg-red-500">Please check again your input</div>}
      {children}
    </Card>
  )
}