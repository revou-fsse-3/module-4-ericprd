import { Card, RegisterForm } from "components";

export function RegisterWrapper() {
  return (
    <Card className="max-w-lg mx-auto">
      <p className="text-center mb-5 text-2xl font-bold">Register</p>
      
      <RegisterForm />
    </Card>
  );
}