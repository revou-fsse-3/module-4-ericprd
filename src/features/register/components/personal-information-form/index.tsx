import { Input } from "components/base";

export function PersonalInformationForm() {
  return (
    <>
      <Input
        name="fullname"
        label="Full Name"
        placeholder="Input your full name"
        containerClassName='border-0 border-b'
        isRequired={true}
      />

      <Input
        name="email"
        label="Email"
        placeholder="Input your active email"
        type="email"
        containerClassName='border-0 border-b'
        isRequired={true}
      />
      
      <Input
        name="date"
        label="Date of Birth"
        type="date"
        containerClassName='border-0 border-b'
        isRequired={true}
      />
    </>
  );
}
