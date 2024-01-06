import { Card } from "components";
import { SkeletonProps } from "./type";
import { twMerge } from "tailwind-merge";

export function Skeleton(props: SkeletonProps) {
  const { length = 0, className } = props;

  return (
    Array.from({ length }).map((_, i) => (
      <Card className={twMerge('py-10 px-5 min-h-40 bg-slate-200 animate-pulse', className)} key={i} />
    ))
  );
}