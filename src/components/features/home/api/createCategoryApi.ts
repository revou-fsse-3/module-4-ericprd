import { axiosInstance } from "api";
import { AxiosError } from "axios";
import { CreateCategoryRequest } from "components";

export async function createCategoryApi(params: CreateCategoryRequest) {
  try {
    const { data } = await axiosInstance().post('/category/create', params);

    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error

      if (response?.data?.error?.code) {
        const errorCode = response.data.error.code

        throw new Error(errorCode)
      }
    }

    throw new Error('UNEXPECTED_ERROR')
  }
}