import { NavLink, useLocation } from "react-router-dom";
import { tabList } from "./data";
import { useLayoutContext } from "components/layouts";
import { TabProps } from "./type";
import { twMerge } from "tailwind-merge";

const excludePath = [
  '/auth/register',
  '/auth/login',
];

export function Navbar() {
  const { isAuthorized } = useLayoutContext();
  const { pathname } = useLocation()

  function renderMenu(tab: TabProps) {
    return (
      <NavLink
        className={twMerge(
          'p-3 text-black',
          pathname === tab.path && 'bg-blue-300 text-white rounded-lg'
        )}
        to={tab.path}
        key={tab.path}
      >{tab.label}</NavLink>
    )
  }

  return (
    <nav className="space-x-5 text-xl font-bold py-10 w-full text-center">
      {tabList.map(tab => (
        isAuthorized ?
          !excludePath.includes(tab.path) && renderMenu(tab)
          : renderMenu(tab)
      ))}
    </nav>
  );
}
