const authPath = [
  {
    label: "Register",
    path: '/auth/register',
  },
  {
    label: "Login",
    path: '/auth/login',
  },
];

// const mainPath = [
//   {
//     label: "Home",
//     path: '/',
//   },
// ];

// const paths = isAuthorized ? mainPath : authPath;

export const tabList = [
  ...authPath,
];
