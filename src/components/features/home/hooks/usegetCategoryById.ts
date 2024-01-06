import { useQuery } from "@tanstack/react-query";
import { Category, getCategoryById } from "components";
import { ResponseData } from "types";

export function useGetCategoryById(id: string) {
  return useQuery<ResponseData<Category>>({
    queryKey: ['category-by-id', id],
    queryFn: () => getCategoryById(id),
  });
}
