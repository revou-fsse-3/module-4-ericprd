import { Card } from "components";
import { LoginForm } from "components/features";

export function LoginWrapper() {
  return (
    <Card className="max-w-lg mx-auto">
      <p className="text-center mb-5 text-2xl font-bold">Login</p>

      <LoginForm />
    </Card>
  );
}
