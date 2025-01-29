import React from "react";
import Link from "next/link"; // Import Link from next/link
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#000000]">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl text-white">Hamza Sheikh</span>
          </a>
          <p className=" text-white text-md sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Copyright © 2024 Hamza Sheikh Portfolio
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              href="https://linkedin.com/in/sheikh-muhammad-hamza-b20b8a31a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500"
            >
              <BsLinkedin className="text-2xl hover:text-[#ffffff] " />
            </Link>
            <Link
              href="https://github.com/Hamzasheikh8669"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 ml-5"
            >
              <FaGithub className="text-2xl hover:text-[#ffffff] mr-5" />
            </Link>
            <Link
              href="Sheikhmhamza37@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 "
            >
              <MdOutlineMailOutline className="text-2xl hover:text-[#ffffff] mr-5" />
            </Link>
            <Link
              href="Sheikhmhamza37@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 "
            >
              <FaInstagram className="text-2xl hover:text-[#ffffff] mr-5" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
