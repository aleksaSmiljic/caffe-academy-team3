import { useState } from "react";

export function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="h-screen w-full flex items-center justify-center bg-red-200">
      <div>
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
