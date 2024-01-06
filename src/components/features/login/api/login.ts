import { axiosInstance } from "api";
import { AxiosError } from "axios";
import { LoginRequestParams } from "components";

export async function loginUserApi(params: LoginRequestParams) {
  try {
    const { data } = await axiosInstance().post('/user/login', params);

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
