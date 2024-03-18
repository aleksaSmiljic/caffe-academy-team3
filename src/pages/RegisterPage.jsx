import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  // const patterns = {
  //   fullName: /^([a-zA-Z]{2,})\s([a-zA-Z]{2,})$/,
  //   email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
  //   password: /^[\w!@#$%^&*]{8,20}$/i,
  // };

  function handleInputChange(e) {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-red-200">
      <div>
        <InformationCircleIcon className="w-10 h-10" />
        <form>
          <label>
            Full Name
            <input
              pattern="([a-zA-Z]{2,})\s([a-zA-Z]{2,})"
              required
              value={registerForm.fullName}
              type="text"
              className="block border "
              name="fullName"
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email
            <input
              pattern="([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})"
              required
              value={registerForm.email}
              type="email"
              className="block border "
              name="email"
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              pattern="[\w!@#$%^&*]{8,20}$"
              required
              value={registerForm.password}
              type="password"
              className="block border "
              name="password"
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password again
            <input
              required
              value={registerForm.passwordAgain}
              type="password"
              className="block border "
              name="passwordAgain"
              onChange={handleInputChange}
            />
          </label>
          <button className="block py-2 px-4 m-2 rounded-md border bg-blue-400">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

// Uspešno ste se registrovali!

// Čestitamo! Uspešno ste se registrovali. Sada možete uživati u brzom i jednostavnom naručivanju omiljene kafe online!
