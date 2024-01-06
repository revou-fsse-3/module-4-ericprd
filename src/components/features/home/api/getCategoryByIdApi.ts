import { axiosInstance } from "api";
import { AxiosError } from "axios";

export async function getCategoryById(id: string) {
  try {
    const { data } = await axiosInstance().get(`/category/${id}`);

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