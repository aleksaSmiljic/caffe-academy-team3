import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  const [submitBtn, setSubmitBtn] = useState(false);

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
      setSubmitBtn((oldSubmit) => !oldSubmit);
    } else {
      console.log("NOT MATCHING");
    }
    localStorage.setItem("user", JSON.stringify(registerForm));
  }

  return (
    <div className="flex bg-green-500 items-center justify-center h-screen w-full">
      {submitBtn ? (
        <div>
          <h2>Uspešno ste se registrovali!</h2>
          <h2>
            Čestitamo! Uspešno ste se registrovali. Sada možete uživati u brzom
            i jednostavnom naručivanju omiljene kafe online!
          </h2>
          <button className="block py-2 px-4 m-2 rounded-md border bg-blue-400">
            <Link to="/">Home Page</Link>
          </button>
        </div>
      ) : (
        <div>
          <div>
            <InformationCircleIcon className="w-10 h-10" />
            <form onSubmit={handleSubmit}>
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
              <p>
                <Link to="/login">Već imate kreiran nalog? Prijavite se</Link>
              </p>
              <button className="block py-2 px-4 m-2 rounded-md border bg-blue-400">
                REGISTER
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
