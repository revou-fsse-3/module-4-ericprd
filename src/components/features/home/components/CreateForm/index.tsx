import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { SpinnerIcon } from "assets";
import { Button, CreateCategoryRequest, Input, createCategoryApi, useHomeContext } from "components";
import { useQueryActions } from "hooks";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { schemaValidation } from "./validation";

export function CreateForm() {
  const { setOpenModal, setModalType } = useHomeContext();
  const formMethod = useForm<CreateCategoryRequest>({
    resolver: yupResolver(schemaValidation),
  });

  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit } = formMethod;

  const { invalidateQueries } = useQueryActions(['category-list']);

  const { mutate } = useMutation({
    mutationFn: (data: CreateCategoryRequest) => createCategoryApi(data),
    onSuccess: () => {
      setOpenModal(false);
      invalidateQueries();
      setIsLoading(false);
      setTimeout(() => {
        setModalType('init');
      }, 600);
      toast.success('Category created')
    },
    onError: () => {
      toast.error('Failed to create category');
      setIsLoading(false);
    },
  });

  function submitHandler(data: CreateCategoryRequest) {
    setIsLoading(true);
    mutate(data);
  }

  function closeCreateModalHandler() {
    setOpenModal(false);
    setTimeout(() => {
      setModalType('init');
    }, 600);
  }

  return (
    <FormProvider {...formMethod}>
      <form className="space-y-5" onSubmit={handleSubmit(submitHandler)}>
        <Input
          name="name"
          label="Name"
          placeholder="Input category name"
          isRequired
        />

        <div className="flex justify-end items-center gap-3">
          <Button
            type="submit"
            className="w-fit min-w-20 bg-blue-400 text-white p-2 rounded-md"
            disabled={isLoading}
          >{isLoading ? <SpinnerIcon className="animate-spin text-2xl mx-auto" /> : 'Submit'}</Button>

          <Button
            disabled={isLoading}
            type="button"
            onClick={closeCreateModalHandler}
            className="w-fit bg-slate-200 text-black p-2 rounded-md"
          >cancel</Button>
        </div>
      </form>
    </FormProvider>
  );
}