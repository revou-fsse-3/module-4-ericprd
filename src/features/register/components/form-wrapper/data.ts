import { PersonalInformationForm, AddressInformationForm, AccountInformationForm } from 'features/register';

export const stepList = new Map([
  [1, PersonalInformationForm],
  [2, AddressInformationForm],
  [3, AccountInformationForm],
]);
