import { PropsWithChildren } from "react";

export function Card(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className='relative overflow-hidden w-full border py-14 px-20 rounded-lg shadow-md'>
      {children}
    </div>
  );
}
