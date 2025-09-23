import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-foreground">
      <div className="h-9 bg-neutral-700 flex">
        <div className="bg-foreground w-2/5 h-full rounded-tr-3xl"></div>
        <div className="bg-foreground h-full w-1/5">
          <div className="bg-neutral-700 w-full h-full rounded-b-2xl text-center text-sm font-semibold flex items-center text-white pl-12">
            <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Inductions Open for 2k25
          </div>
        </div>
        <div className="bg-foreground w-2/5 h-full rounded-tl-3xl"></div>
      </div>
      <div className=" px-8 md:px-16 flex justify-between items-center">
        <div className="flex items-center h-20">
          <Image
            src="/images/logos/IIC logo.png"
            alt="Image 1"
            width={100}
            height={100}
            className="mr-2"
          />
          <div className="w-[2px] h-1/2 bg-accent"></div>
          <Image
            src="/images/logos/BIT logo.png"
            alt="Image 1"
            width={100}
            height={100}
            className=""
          />
        </div>
        <nav className="hidden md:flex space-x-8 text-secondary">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Initiatives
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Incubation
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Team
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Gallery
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Resources
          </a>
        </nav>
        <a
          href="#"
          className="px-4 py-2 border-2 border-neutral-700 rounded-full text-sm text-white bg-neutral-600 transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
