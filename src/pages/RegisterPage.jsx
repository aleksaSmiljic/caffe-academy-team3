import { useContext, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/loginContext";

export function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  const { login, setLogin } = useContext(LoginContext);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (registerForm.password === registerForm.passwordAgain) {
      setLogin(true);
      localStorage.setItem("user", JSON.stringify(registerForm));
    } else {
      alert("PASSWORDS NOT MATCHING");
      setLogin(false);
    }
  }

  return (
    <div className="flex flex-col bg-white items-center justify-center w-full h-screen">
      {login ? (
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-3xl font-montserrat text-center">
            Uspešno ste se registrovali!
          </h2>
          <h2 className="text-lg m-6 text-center font-montserrat">
            Čestitamo! Uspešno ste se registrovali. Sada možete uživati u brzom
            i jednostavnom naručivanju omiljene kafe online!
          </h2>
          <button className="block py-2 px-4 my-10 w-[200px] text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md font-montserrat">
            <Link to="/">Home Page</Link>
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
              onSubmit={handleSubmit}
              className={`flex justify-center items-center flex-col`}
            >
              <label className="font-montserrat w-full px-4 md:w-[400px] m-2">
                Ime i Prezime
                <input
                  pattern="([a-zA-Z]{2,})\s([a-zA-Z]{2,})"
                  required
                  value={registerForm.fullName}
                  type="text"
                  className={`block w-full h-8 border border-black `}
                  name="fullName"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
              </label>
              <label className="font-montserrat w-full px-4 md:w-[400px] m-2">
                Email
                <input
                  pattern="([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})"
                  required
                  value={registerForm.email}
                  type="email"
                  className="block border border-black w-full h-8"
                  name="email"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
              </label>
              <label className="font-montserrat w-full px-4 md:w-[400px] m-2">
                Šifra
                <input
                  pattern="[\w!@#$%^&*]{8,20}$"
                  required
                  value={registerForm.password}
                  type="password"
                  className="block border border-black w-full h-8"
                  name="password"
                  onChange={handleInputChange}
                />
              </label>
              <label className="font-montserrat w-full px-4 md:w-[400px] m-2">
                {`Šifra (ponovo)`}
                <input
                  required
                  value={registerForm.passwordAgain}
                  type="password"
                  className="block border border-black w-full h-8"
                  name="passwordAgain"
                  onChange={handleInputChange}
                />
              </label>
              <p className="underline font-montserrat text-sm text-[#248CC5]">
                <Link to="/login">Već imate kreiran nalog? Prijavite se</Link>
              </p>
              <div className="w-full px-4 md:w-[400px]">
                <button className="block py-2 px-4 my-10 w-full text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md font-montserrat">
                  Registruj se
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
