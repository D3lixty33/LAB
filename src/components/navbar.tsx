import React from "react";
import logo from "@/assets/images/logo/logo.png";
import gsap from "gsap";

export default function Navbar() {

  gsap.to(".a" , {
    
  })
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="nav flex grow items-center gap-16 justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white relative transition-all">
        {/* Desktop Menu */}
        <div className="w-42 h-42 flex items-center flex-start">
          <img src={logo} alt="Logo" className="" />
        </div>

        <div className="hidden sm:flex items-center gap-8">
          <a href="#" className="nav-item">
            Network
          </a>
          <a href="#" className="nav-item">
            Privati e Aziende
          </a>
          <a href="#" className="nav-item">
            Contatti
          </a>
          <button className="cursor-pointer px-8 py-2 transition text-white rounded-full bg-indigo-500">
            Area Riservata
          </button>
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          {/* Menu Icon SVG */}
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Contact
          </a>
          <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
            Login
          </button>
        </div>
      </nav>
    </>
  );
}
