import { useQuery } from "@tanstack/react-query";
import { Category, CategoryRequest, categoryListApi } from "components";
import { ResponseData } from "types";

export function useGetCategoryList(params: CategoryRequest) {
  return useQuery<ResponseData<Category[]>>({
    queryKey: ['category-list', params],
    queryFn: () => categoryListApi(params),
  });
}
