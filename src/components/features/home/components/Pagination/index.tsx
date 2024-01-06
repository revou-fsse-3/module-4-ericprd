import { Button } from "components";
import { twMerge } from "tailwind-merge";
import { PaginationProps } from "./type";

export function Pagination(props: PaginationProps) {
  const { previousPageHandler, nextPageHandler, totalPage, currentPage} = props;

  return (
    <div className="col-span-4 flex items-center justify-center w-full text-black gap-5">
      <Button
        className="bg-slate-300 w-fit p-3 rounded-md"
        onClick={previousPageHandler}
        disabled={currentPage <= 1}
      >Prev</Button>

      {Array.from({ length: totalPage as number }).map((_, i) => <p className={twMerge(currentPage === i + 1 && 'underline underline-offset-4')} key={i}>{i + 1}</p>)}

      <Button
        className="bg-slate-300 w-fit p-3 rounded-md"
        onClick={nextPageHandler}
        disabled={currentPage >= (totalPage as number)}
      >Next</Button>
    </div>
  )
}