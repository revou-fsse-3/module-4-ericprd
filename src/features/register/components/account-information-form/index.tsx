import { Input } from "components";

export function AccountInformationForm() {
  return (
    <>
      <Input
        name="username"
        label="Username"
        placeholder="Input your username"
        containerClassName='border-0 border-b'
        isRequired={true}
      />

      <Input
        name="password"
        label="Password"
        placeholder="Input your password"
        type="password"
        containerClassName='border-0 border-b'
        isRequired={true}
      />
    </>
  );
}