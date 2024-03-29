import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { LoginContext } from "../context/loginContext";
import { OrderContext } from "../context/OrderContext";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, setLogin } = useContext(LoginContext);
  const { setCart, setOrderAmound } = useContext(OrderContext);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleLogOut() {
    setLogin(false);
    setCart([]);
    setOrderAmound(0);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (
      localStorageData.email === email &&
      localStorageData.password === password
    ) {
      setLogin(true);
    } else {
      alert("Invalid email or password!");
    }
  }

  return (
    <div className="flex bg-green-500 items-center justify-center h-screen w-full">
      {login ? (
        <div>
          <p>Uspesno ste se prijavili</p>
          <button className="block border bg-blue-300 py-2 px-3 rounded-md transform hover:scale-95 transition duration-200">
            <Link to="/">Home Page</Link>
          </button>
          <button
            onClick={handleLogOut}
            className="block border bg-blue-300 py-2 px-3 rounded-md transform hover:scale-95 transition duration-200"
          >
            <Link to="/login">Log Out</Link>
          </button>
        </div>
      ) : (
        <div className="">
          <InformationCircleIcon className="w-10 h-10 block" />
          <form className="" onSubmit={handleSubmit}>
            <label htmlFor="Email">
              Email
              <input
                required
                type="email"
                className="block"
                value={email}
                onChange={(e) => handleEmailChange(e)}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                required
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
              Prijavi se
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
