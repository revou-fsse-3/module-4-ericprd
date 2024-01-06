import { axiosInstance } from "api";
import { AxiosError } from "axios";
import { RegisterRequestParams } from "components/features";

export async function registerUserApi(params: RegisterRequestParams) {
  try {
    const { data } = await axiosInstance().post('/user/register', params);

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
