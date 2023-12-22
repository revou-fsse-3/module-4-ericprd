import { CloseEyeIcon, OpenEyeIcon } from "assets";
import { Input } from "components/base";
import { useState } from "react";

export function AccountInformationForm() {
  const [showPassword, setShowPassword] = useState(false);

  function showPasswordHandler() {
    setShowPassword((prev) => !prev);
  }

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
        type={showPassword ? 'text' : 'password'}
        containerClassName='border-0 border-b'
        isRequired={true}
        rightNode={showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
        rightNodeClick={showPasswordHandler}
      />
    </>
  );
}