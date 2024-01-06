import { PlusIcon, TrashBinIcon } from "assets";
import { Button, Card, useGetCategoryList, Pagination, Skeleton, useHomeContext } from "components";
import { useState } from "react";
import { dateFormatter } from "utils";

export function CategoryList() {
  const { setOpenModal, setModalType, setCategoryId } = useHomeContext();

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isRefetching, refetch } = useGetCategoryList({
    page: currentPage,
  });

  const categoryListData = data?.data;
  const totalPage = data?.total_page;
  const totalData = data?.total_item ?? 0;

  function nextPageHandler() {
    setCurrentPage((prev) => prev + 1);
    refetch();
  }

  function previousPageHandler() {
    setCurrentPage((prev) => prev - 1);
    refetch();
  }

  function openCreateModal() {
    setOpenModal(true);
    setModalType('create');
  }

  function deleteCategoryHandler(id: string) {
    setCategoryId(id);
    setModalType('delete');
    setOpenModal(true);
  }

  function updateCategoryHandler(id: string) {
    setCategoryId(id);
    setModalType('edit');
    setOpenModal(true);
  }

  return (
    <>
      <p className="mb-5 font-bold">Total Data: {totalData}</p>
      <div className="grid grid-cols-4 gap-10">
        {(isLoading || isRefetching) && <Skeleton length={8} className="min-h-60" />}

        {!(isLoading || isRefetching) && totalData > 0 && (
          <>
            {categoryListData?.map((category) => (
              <Card className="py-10 px-5 space-y-10" key={category.id}>
                <div>
                  <p className="text-lg" >Name: {category.name}</p>
                  <p className="text-lg" >Active: {category.is_active ? 'Yes' : 'No'}</p>
                  <p className="text-lg" >Created At: {dateFormatter({ dateTime: category.updated_at, format: 'DD/MMM/YYYY HH:mm' })}</p>
                </div>

                <div className="flex items-center justify-end gap-5">
                  <Button onClick={() => updateCategoryHandler(category.id)} className="w-fit bg-yellow-600 text-white p-2 rounded-lg">Edit</Button>
                  <Button onClick={() => deleteCategoryHandler(category.id)} className="w-fit">
                    <TrashBinIcon className="text-red-400 text-xl" />
                  </Button>
                </div>
              </Card>
            ))}

            <Pagination
              currentPage={currentPage}
              totalPage={totalPage as number}
              previousPageHandler={previousPageHandler}
              nextPageHandler={nextPageHandler}
            />
          </>
        )}

        {!(isLoading || isRefetching) && totalData === 0 && (
          <p>No Data</p>
        )}

        <Button
          onClick={openCreateModal}
          className="fixed bottom-10 right-10 aspect-square h-16 w-16 rounded-full bg-blue-300"
        >
          <PlusIcon className="mx-auto text-4xl text-white" />
        </Button>
      </div>
    </>
  );
}