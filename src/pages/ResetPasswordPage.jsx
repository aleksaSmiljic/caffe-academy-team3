import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");

  const navigate = useNavigate();

  function handlePasswordChange(e) {
    setNewPassword(e.target.value);
  }

  function handlePasswordChangeAgain(e) {
    setNewPasswordAgain(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    if (newPassword === newPasswordAgain) {
      localStorageData.password = newPassword;
      localStorageData.passwordAgain = newPassword;
      console.log(localStorageData);
      localStorage.setItem("user", JSON.stringify(localStorageData));
      navigate("/login");
    } else {
      alert("PASSWORDS NOT MATCHING");
    }
  }

  return (
    <>
      <div className="flex flex-col bg-white items-center justify-center w-full h-screen">
        <div className="w-full pb-20 flex justify-center items-center flex-col">
          <InformationCircleIcon className="w-10 h-10 text-[#248CC5]" />
          <p className="font-montserrat text-[#248CC5] w-[300px] text-center">
            Ovde mozete resetovati vašu lozinku
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
              Nova Šifra
              <input
                required
                type="password"
                className="block border border-black w-full h-8"
                value={newPassword}
                onChange={(e) => handlePasswordChange(e)}
              />
            </label>
            <label
              htmlFor="password"
              className="font-montserrat w-full px-4 md:w-[400px] m-2"
            >
              Ponovi šifru
              <input
                required
                type="password"
                className="block border border-black w-full h-8"
                value={newPasswordAgain}
                onChange={(e) => handlePasswordChangeAgain(e)}
              />
            </label>
            <div className="w-full px-4 md:w-[400px]">
              <button className="block py-2 px-4 my-10 w-full text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md">
                Promeni šifru
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
