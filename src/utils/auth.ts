import { getCookie } from "utils";

export function getAuth() {
  const tokenKey = import.meta.env.VITE_AUTHORIZE_KEY;

  return getCookie(tokenKey);
}
