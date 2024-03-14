import { Link } from "react-router-dom";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Login", link: "/login" },
    { name: "Register", link: "/register" },
    { name: "Status", link: "/status" },
    { name: "Admin", link: "/admin" },
  ];

  function handleClick() {
    setIsOpen((oldIsOpen) => !oldIsOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  }

  return (
    <header
      className={`top-0 sticky z-10 p-2 border-b border-black w-full  bg-white md:flex md:items-center md:justify-between ${
        isOpen ? "h-screen" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex item-center top-2 gap-2">
          <Link to="/">
            <img
              src="logo.png"
              alt="caffe-academy-logo"
              className="h-auto w-40 py-2 cursor-pointer "
            />
          </Link>
        </div>
        <span className="flex items-center">
          <span className="w-10 h-10 cursor-pointer md:hidden block">
            <Link to="/login">
              <UserCircleIcon />
            </Link>
          </span>
          <span
            onClick={handleClick}
            className="w-10 h-10 cursor-pointer md:hidden block"
          >
            {isOpen ? <XMarkIcon /> : <Bars3Icon />}
          </span>
        </span>
      </div>
      <nav
        className={`md:flex md:items-center md:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <ul className="md:flex items-center justify-between ">
          {Links.map((link) => (
            <li
              onClick={() => setIsOpen(false)}
              key={link.link}
              className="hover:text-blue-400 duration-500 block md:inline-block mt-2 md:mt-2 mr-10"
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

{
  /* <nav className="top-0 sticky z-10 p-1 border-b border-black w-full  bg-white md:flex md:items-center md:justify-between">
<div className="flex justify-between items-center">
  <div className="flex item-center top-6 gap-2">
    <Link to="/">
      <img
        src="logo.png"
        alt="caffe-academy-logo"
        className="h-auto w-40 py-6 cursor-pointer "
      />
    </Link>
  </div>
  <span className="flex items-center">
    <span className="w-10 h-10 cursor-pointer md:hidden block">
      <Link to="/login">
        <UserCircleIcon />
      </Link>
    </span>
    <span
      onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}
      className="w-10 h-10 cursor-pointer md:hidden block"
    >
      {isOpen ? <XMarkIcon /> : <Bars3Icon />}
    </span>
  </span>
</div>
<ul
  className={`md:flex md:items-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300
  ${isOpen ? "top-[80px] opacity-100 z-50 bg-white" : ""}`}
>
  {Links.map((link) => (
    <li
      key={link.link}
      className="hover:text-blue-400 duration-500 mx-4 my-6 md:my-0"
    >
      <Link to={link.link}>{link.name}</Link>
    </li>
  ))}
</ul>
</nav> */
}
