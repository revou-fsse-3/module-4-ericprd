import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Card(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className } = props;
  return (
    <div className={twMerge('relative overflow-hidden w-full border py-14 px-20 rounded-lg shadow-md', className)}>
      {children}
    </div>
  );
}
