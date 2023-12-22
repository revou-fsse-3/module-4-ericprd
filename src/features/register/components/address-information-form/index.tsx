import { Input } from "components";

export function AddressInformationForm() {
  return (
    <>
      <Input
        name="address"
        label="Street Address"
        placeholder="Address"
        containerClassName='border-0 border-b'
        isRequired={true}
      />

      <Input
        name="city"
        label="City"
        placeholder="City"
        containerClassName='border-0 border-b'
        isRequired={true}
      />

      <Input
        name="state"
        label="State"
        placeholder="State"
        containerClassName='border-0 border-b'
        isRequired={true}
      />

      <Input
        name="zipcode"
        label="Zip Code"
        placeholder="Zip Code"
        containerClassName='border-0 border-b'
        isRequired={true}
      />
    </>
  )
}