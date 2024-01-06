import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "utils";

type LayoutContextValue = {
  isOpenModal: boolean
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
  isAuthorized: boolean
  setIsAuthorized: Dispatch<SetStateAction<boolean>>
}

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined);

const token = import.meta.env.AUTHORIZE_KEY;

export function LayoutProvider(props: PropsWithChildren) {
  const { children } = props;
  
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const isAuth = getCookie(token)

    if (isAuth) {
      setIsAuthorized(true);
    }
  }, [])

  const value = {
    isOpenModal,
    setIsOpenModal,
    isAuthorized,
    setIsAuthorized
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLayoutContext() {
  const context = useContext(LayoutContext);

  if (context === undefined) {
    throw new Error('useLayoutContext must be used within LayoutProvider');
  }

  return context;
}
