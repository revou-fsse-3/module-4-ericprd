import { CreateForm, DeleteAction, UpdateForm } from "components";

export const modalTypeMap = new Map([
  ['create', CreateForm],
  ['edit', UpdateForm],
  ['delete', DeleteAction],
]);
