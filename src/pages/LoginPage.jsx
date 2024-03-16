import { Link } from "react-router-dom";
import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <div className="flex bg-green-500 items-center justify-center h-screen w-full">
      <div className="">
        <InformationCircleIcon className="w-10 h-10 block" />
        <form className="" onSubmit={handleSubmit}>
          <label htmlFor="Email">
            Email
            <input
              type="email"
              className="block"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              className="block"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
            <span>
              <Link className="text-sm" to="/register">
                Zelim da se registrujem
              </Link>
            </span>
          </label>
          <button className="block border bg-blue-300 py-2 px-3 rounded-md transform hover:scale-95 transition duration-200">
            Uloguje se
          </button>
        </form>
      </div>
    </div>
  );
}
