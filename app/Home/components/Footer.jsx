import React from "react";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer w-full flex justify-center items-center flex-col px-2 md:px-4 mt-2">
      <div className="flex justify-between flex-wrap gap-2 bg-black w-full text-sm text-gray-500 py-5 md:py-7 px-5 md:px-10 rounded-t-3xl ">
        <p className="hidden md:block">
          Copyright &copy; 2025 IIC BIT Sindri | All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/Contact" className="text-gray-300 hover:text-orange-400">
            Contact
          </Link>
          <p>|</p>
          <Link href="/About" className="text-gray-300 hover:text-orange-400">
            About Us
          </Link>
        </div>
        <div className="flex items-center gap-4 ">
          <a
            href="https://www.linkedin.com/company/iic-bit-sindri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-400"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/iic_bitsindri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-400"
          >
            <FaInstagramSquare className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/iicbitsindri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-400"
          >
            <FaFacebookSquare className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/iicbitsindri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-400"
          >
            <FaTwitterSquare className="h-5 w-5" />
          </a>
        </div>
        <p className="md:hidden text-xs mt-7">
          Copyright &copy; 2025 IIC BIT Sindri | All Rights Reserved.
        </p>
        <p className="text-right flex text-xs md:text-base">
          Made with{" "}
          <CiHeart className="inline-block h-4 w-4 md:h-5 md:w-5 text-red-500 mx-1" />{" "}
          by Team IICBITS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
