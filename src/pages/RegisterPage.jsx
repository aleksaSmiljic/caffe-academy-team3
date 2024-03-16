import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="h-screen w-full flex items-center justify-center bg-red-200">
      <div>
        <InformationCircleIcon className="w-10 h-10" />
        <form>
          <label htmlFor="email">
            Email
            <input type="email" className="block border " />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" className="block border " />
          </label>
          <label htmlFor="password">
            Password again
            <input type="password" className="block border " />
          </label>
        </form>
      </div>
    </div>
  );
}
