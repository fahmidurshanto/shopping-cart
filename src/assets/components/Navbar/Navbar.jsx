import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  return (
    <nav className="shadow-lg bg-yellow-500 p-3">
      <div className="md:hidden cursor-pointer " onClick={() => setOpen(!open)}>
        {open === true ? (
          <IoMdClose className="text-3xl  " />
        ) : (
          <FiMenu className="text-3xl " />
        )}
      </div>
      <ul
        className={`absolute md:static  md:p-5 md:flex 
        ${open ? "top-14" : "-top-60"}
        bg-yellow-200 md:bg-transparent text-black font-extralight duration-1000 ml-4 rounded shadow-2xl`}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
