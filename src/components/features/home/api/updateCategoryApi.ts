import { axiosInstance } from "api";
import { AxiosError } from "axios";
import { UpdateCategoryRequest } from "components";

export async function updateCategoryApi(params: UpdateCategoryRequest) {
  try {
    const { data } = await axiosInstance().put(`/category/update`, params);

    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error;

      if (response?.data?.error?.code) {
        const errorCode = response.data.error.code;

        throw new Error(errorCode);
      }
    }

    throw new Error('UNEXPECTED_ERROR');
  }
}