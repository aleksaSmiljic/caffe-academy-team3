import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { LoginContext } from "../context/loginContext";
import { OrderContext } from "../context/OrderContext";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const USER = { userEmail: "user@user.com", userPassword: "user1234" };
  const ADMIN = { adminEmail: "admin@admin.com", adminPassword: "admin1234" };

  const { login, setLogin, setIsAdmin } = useContext(LoginContext);
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
    setIsAdmin(false);
  }
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const localStorageDataUser = JSON.parse(localStorage.getItem("user"));
    const localStorageDataAdmin = JSON.parse(localStorage.getItem("admin"));
    if (
      (localStorageDataUser?.email === email &&
        localStorageDataUser?.password === password) ||
      (localStorageDataAdmin?.email === email &&
        localStorageDataAdmin?.password === password) ||
      (USER.userEmail === email && USER.userPassword === password) ||
      (ADMIN.adminEmail === email && ADMIN.adminPassword === password)
    ) {
      if (email.includes("@coffee.com") || email === ADMIN.adminEmail) {
        setIsAdmin(true);
      }
      setLogin(true);
      navigate("/");
    } else {
      alert("Invalid email or password!");
    }
  }

  return (
    <div className="flex flex-col bg-white items-center justify-center w-full h-screen">
      {login ? (
        <div>
          <button className="block py-2 px-4 w-full text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md font-montserrat">
            <Link to="/">Home Page</Link>
          </button>
          <button
            onClick={handleLogOut}
            className="block py-2 px-4 mt-10 w-full text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md font-montserrat"
          >
            <Link to="/login">Log Out</Link>
          </button>
        </div>
      ) : (
        <>
          <div className="w-full pb-20 flex justify-center items-center flex-col">
            <InformationCircleIcon className="w-10 h-10 text-[#248CC5]" />
            <p className="font-montserrat text-[#248CC5] w-[300px] text-center">
              Da bi zavrišili porudžbinu, potrebno je da budete registrovani.
            </p>
          </div>
          <div className="w-full">
            <form
              className="flex justify-center items-center flex-col"
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="Email"
                className="font-montserrat w-full px-4 md:w-[400px] m-2"
              >
                Email
                <input
                  required
                  type="email"
                  className="block border border-black w-full h-8"
                  value={email}
                  onChange={(e) => handleEmailChange(e)}
                />
              </label>
              <label
                htmlFor="password"
                className="font-montserrat w-full px-4 md:w-[400px] m-2"
              >
                Šifra
                <input
                  required
                  type="password"
                  className="block border border-black w-full h-8"
                  value={password}
                  onChange={(e) => handlePasswordChange(e)}
                />
              </label>
              <p className="underline font-montserrat text-sm text-[#248CC5]">
                <Link to="/register">Želim da se registrujem</Link>
              </p>
              <div>
                <Link
                  to="/password-reset"
                  className="underline font-montserrat text-sm text-[#248CC5]"
                >
                  Zaboravio sam šifru
                </Link>
              </div>
              <div className="w-full px-4 md:w-[400px]">
                <button className="block py-2 px-4 my-10 w-full text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md">
                  Prijavi se
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
