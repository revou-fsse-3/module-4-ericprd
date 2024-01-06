import { axiosInstance } from "api";
import { AxiosError } from "axios";
import { CategoryRequest } from "components";

export async function categoryListApi(params: CategoryRequest) {
  const { page = 1 } = params
  try {
    const { data } = await axiosInstance().get('/category', {
      params: {
        page,
      }
    });

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