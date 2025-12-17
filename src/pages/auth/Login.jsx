import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function Login() {
  return (
    <Card title="Login" className="w-full">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <small>Email</small>
          <InputText />
        </div>

        <div className="flex flex-col gap-1">
          <small>Password</small>
          <InputText type="password" />
        </div>

        <Button label="Login" />
      </div>
    </Card>
  );
}
