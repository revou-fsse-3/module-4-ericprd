import { axiosInstance } from "api";
import { AxiosError } from "axios";

export async function deleteCategoryApi(id: string) {
  try {
    const { data } = await axiosInstance().delete(`/category/${id}`);

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