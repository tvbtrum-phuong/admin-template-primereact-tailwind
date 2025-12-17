import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function Register() {
  return (
    <Card title="Register" className="w-full">
      <div className="flex flex-col gap-3">
        {/* Full name */}
        <div className="flex flex-col gap-1">
          <small>Full Name</small>
          <InputText />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <small>Email</small>
          <InputText />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <small>Password</small>
          <InputText type="password" />
        </div>

        {/* Confirm password */}
        <div className="flex flex-col gap-1">
          <small>Confirm Password</small>
          <InputText type="password" />
        </div>

        <Button label="Register" />
      </div>
    </Card>
  );
}
