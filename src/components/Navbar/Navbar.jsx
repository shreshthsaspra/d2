import { React, useEffect, useState } from "react";
// import "../../index.css";
import { Link } from "react-router-dom";
import { close, menu, logo } from "../../assets";
import hanburger from "../../assets/hanbergur.svg";
import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [active, setActive] = useState();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };



  const navLinks = [
    {
      id: "top",
      title: "TOP",
    },
    {
      id: "whatWeDo",
      title: "WHAT WE DO",
    },
    {
      id: "about",
      title: "ABOUT US",
    },
    {
      id: "portfolio",
      title: "PORTFOLIO",
    },
    {
      id: "contact",
      title: "CONTACT",
    },
  ];

  return (
    <nav className="px-6 w-full flex items-center py-5 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto relative">
        {/* main navBar logo  */}
        <Link
          to="/"
          className="flex items-center gap-20"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="h-[30px] w-auto object-contain cursor-pointer"
          />
        </Link>

        {/* mobile navbar  */}
        <div className={`md:block ${isMobileMenuOpen? 'flex w-full absolute top-4 left-0 opacity-100 z-9999999' : 'hidden'}`}>
          {/* <div className={`md`}> */}

            <ul className={`list-none md:flex gap-10 md:space-x-4 ${isMobileMenuOpen ? 'flex flex-col my-[0.1rem] gap-5 py-2 px-4  w-[100%] bg-white absolute top-8 animation-slide-down' : 'animation-slide-up'} `}>
              {/* <ul className="list-none hidden sm:flex flex-row gap-10 md:block"> */}
              {navLinks.map((nav) => (
                <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-secondary" : "text-black"
                } hover:text-danger text-[18px]  cursor-pointer p-[10px]`}
                onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          {/* </div> */}
        </div>






        <div className="md:hidden">
          <button
            className="text-white p-2"
            onClick={toggleMobileMenu}
          >
            {!isMobileMenuOpen ? (
            <GiHamburgerMenu color="black" size={24} />
            ) : (
              <RxCross2 color="black" size={24} />
            )}
          </button>
        </div>



      </div>
    </nav>
  );
}
