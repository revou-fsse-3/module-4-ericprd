import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { CloseEyeIcon, OpenEyeIcon, SpinnerIcon, } from "assets";
import { Button, Input, LoginRequestParams, loginUserApi } from "components";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { setCookie } from "utils/cookies";
import { schemaValidation } from "./validation";

const tokenKey = import.meta.env.VITE_AUTHORIZE_KEY;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formMethods = useForm<LoginRequestParams>({
    resolver: yupResolver(schemaValidation),
  });

  const { handleSubmit } = formMethods;

  const { mutate } = useMutation({
    mutationFn: (data: LoginRequestParams) => loginUserApi(data),
    onSuccess: (res) => {
      const { data } = res;
      setCookie(tokenKey, data.token);
      window.location.href = '/';
    },
    onError: () => {
      toast.error('Login failed');
      setIsLoading(false);
    }
  });

  function showPasswordHandler() {
    setShowPassword((prev) => !prev);
  }

  function submitHandler(data: LoginRequestParams) {
    setIsLoading(true);
    mutate(data);
  }

  return (
    <FormProvider {...formMethods}>
      <form className="space-y-7" onSubmit={handleSubmit(submitHandler)}>
        <Input
          label="Email"
          name="email"
          placeholder="Input your email"
          type="email"
          containerClassName='border-0 border-b'
        />

        <Input
          name="password"
          label="Password"
          placeholder="Input your password"
          type={showPassword ? 'text' : 'password'}
          containerClassName='border-0 border-b'
          rightNode={showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
          rightNodeClick={showPasswordHandler}
        />

        <Button
          type="submit"
          className="bg-blue-400 p-2 text-white rounded-md"
          disabled={isLoading}
        >{isLoading ? <SpinnerIcon className="animate-spin mx-auto h-6" /> : 'Login'}</Button>
      </form>
    </FormProvider>
  );
}
