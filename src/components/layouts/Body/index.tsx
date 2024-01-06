import { Navbar } from "components";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { getAuth } from "utils";

const excludePaths = [
  '/auth/register',
  '/auth/login',
]

export function Body() {
  const { pathname } = useLocation();
  const isAuthorized = !!getAuth();

  useEffect(() => {
    if (!isAuthorized && !excludePaths.includes(pathname)) window.location.href = '/auth/login';
    else if (isAuthorized && excludePaths.includes(pathname)) window.location.href = '/';

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthorized])

  return (
    <main className="min-h-[100svh] space-y-10 relative">
      {!isAuthorized && <Navbar />}

      <div className="p-5">
        <Outlet />
      </div>
    </main>
  );
}