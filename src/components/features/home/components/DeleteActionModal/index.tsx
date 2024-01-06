import { useMutation } from "@tanstack/react-query";
import { SpinnerIcon } from "assets";
import { Button, deleteCategoryApi, useHomeContext } from "components";
import { useQueryActions } from "hooks";
import { useState } from "react";
import { toast } from "react-toastify";

export function DeleteAction() {
  const { setModalType, setOpenModal, categoryId } = useHomeContext();

  const [isLoading, setIsLoading] = useState(false);

  const { invalidateQueries } = useQueryActions(['category-list']);

  const { mutate } = useMutation({
    mutationFn: () => deleteCategoryApi(categoryId),
    onSuccess: () => {
      invalidateQueries();
      setOpenModal(false);
      setIsLoading(false);
      setTimeout(() => {
        setModalType('init');
      }, 600);
      toast.success('Category deleted');
    },
    onError: () => {
      toast.error('Failed to delete category');
      setIsLoading(false);
    }
  })

  function closeCreateModalHandler() {
    setOpenModal(false);
    setTimeout(() => {
      setModalType('init');
    }, 600);
  }

  function deleteHandler() {
    setIsLoading(true);
    mutate();
  }

  return (
    <div className="space-y-5">
      <p>Are you sure you want to delete this category?</p>

      <div className="flex justify-end items-center gap-3">
        <Button
          className="w-fit min-w-20 bg-red-400 text-white p-2 rounded-md"
          disabled={isLoading}
          onClick={deleteHandler}
        >{isLoading ? <SpinnerIcon className="animate-spin text-2xl mx-auto" /> : 'Submit'}</Button>

        <Button
          disabled={isLoading}
          type="button"
          onClick={closeCreateModalHandler}
          className="w-fit bg-slate-200 text-black p-2 rounded-md"
        >cancel</Button>
      </div>
    </div>
  );
}
