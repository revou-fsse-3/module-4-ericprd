import { useMutation } from "@tanstack/react-query";
import { CloseEyeIcon, OpenEyeIcon, SpinnerIcon } from "assets";
import { Button, Input } from "components/bases";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RegisterRequestParams, registerUserApi } from "components/features";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidation } from "./validation";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const formMethods = useForm<RegisterRequestParams>({
    resolver: yupResolver(schemaValidation),
  });
  const navigate = useNavigate();

  const { handleSubmit } = formMethods;

  function showPasswordHandler() {
    setShowPassword((prev) => !prev);
  }

  const { mutate } = useMutation({
    mutationFn: (data: RegisterRequestParams) => registerUserApi(data),
    onSuccess: () => {
      setIsloading(false);
      toast.success('Registered');
      navigate('/auth/login');
    }
    ,
    onError: () => {
      toast.error('Register Failed');
      setIsloading(false);
    },
  });

  function submitHandler(data: RegisterRequestParams) {
    setIsloading(true);
    mutate(data);
  }

  return (
    <FormProvider {...formMethods}>
      <form className="space-y-7" onSubmit={handleSubmit(submitHandler)}>
        <Input
          label="Name"
          name="name"
          placeholder="Input your name"
          containerClassName='border-0 border-b'
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Input your email"
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
        >{isLoading ? <SpinnerIcon className="animate-spin mx-auto h-6" /> : 'Register'}</Button>
      </form>
    </FormProvider>
  );
}
