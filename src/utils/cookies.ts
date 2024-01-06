import cookies from 'js-cookie'

export function getCookie(name: string) {
  return cookies.get(name);
}

export function setCookie(name:string, value: string) {
  cookies.set(name, value);
}
