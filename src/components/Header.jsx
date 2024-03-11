import { Link } from "react-router-dom";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
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

  return (
    <div className="border-b-2 border-black w-full bg-white">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        <div className="flex item-center top-6 gap-2">
          <Link to="/">
            <img
              src="logo.png"
              alt="caffe-academy-logo"
              className="h-auto w-40 py-6 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex w-10 h-10 m-2 mr-5 absolute items-center right-16 top-6 cursor-pointer ">
          <UserCircleIcon />
        </div>
        <div
          onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}
          className="flex w-10 h-10 m-2 absolute items-center right-8 top-6 cursor-pointer "
        >
          <Bars3Icon />
        </div>
        <ul
          className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:z-auto z-[-1] left-0 w-full transition-all bg-white duration-500 ease-in ${
            isOpen ? "top-20" : "top-[-400px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.link} className="font-semibold md:my-7  md:ml-8">
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
