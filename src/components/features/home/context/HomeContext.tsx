import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

type HomeContextValue = {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  modalType: string
  setModalType: Dispatch<SetStateAction<string>>
  categoryId: string
  setCategoryId: Dispatch<SetStateAction<string>>
}

const HomeContext = createContext<HomeContextValue | undefined>(undefined);

export function HomeProvider(props: PropsWithChildren) {
  const { children } = props;
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('init');
  const [categoryId, setCategoryId] = useState('');


  const value = {
    openModal,
    setOpenModal,
    modalType,
    setModalType,
    categoryId,
    setCategoryId,
  }

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useHomeContext() {
  const context = useContext(HomeContext);

  if (context === undefined) {
    throw new Error('useHomeContext must be used within HomeProvider');
  }

  return context;
}
