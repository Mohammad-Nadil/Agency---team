"use client";
import React, { useEffect, useState } from "react";
import Container from "./layer/Container";
import logo from "../assets/logo.png";
import logoSmall from "../assets/logoSmall.png";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { IoBagOutline, IoMenu } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const Li = ({ text, href, children, className, icon, onClick, Class }) => {
  return (
    <li
      onClick={onClick}
      className={`font-poppins leading-4  text-base duration-300 relative text-nowrap  ${className}`}
    >
      <Link
        href={href}
        className={`flex items-center gap-x-1.5 hover:text-primaryOrange hover:scale-110 duration-300 ${Class}`}
      >
        {text} {icon}
      </Link>
      {children}
    </li>
  );
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menu, setMenu] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".menu")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className=" relative after:absolute after:top-0 after:left-1/2 after:w-full after:h-full after:z-[-1]  after:bg-white">
      <Container className="flex justify-between  items-center text-sm leading-6 bg-white p-4 rounded-full">
        <div className="icon">
          <Image className="hidden xl:flex" src={logo} alt="logo" />
          <Image className="flex xl:hidden" src={logoSmall} alt="logo" />
        </div>

        <ul
          className={` menu  flex items-center gap-x-7 2xl:gap-x-11 ${
            menu ? "flex" : "hidden"
          }`}
        >
          <Li text="Home" href="/" />
          <Li text="About" href="/" />
          <Li
            text="Services"
            onClick={() => toggleDropdown("Services")}
            href="/"
            icon={<FaChevronDown />}
          >
            <ul
              className={`absolute top-7 bg-primaryBlue/10 rounded-md duration-300 flex flex-col gap-y-3 px-4 py-3 z-50 overflow-hidden transition-all ${
                activeDropdown === "Services"
                  ? "max-h-44 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              <Li text="Web Development" href="/" />
              <Li text="App Development" href="/" />
              <Li text="Digital Marketing" href="/" />
            </ul>
          </Li>
          <Li
            text="Team"
            onClick={() => toggleDropdown("Team")}
            href="/"
            icon={<FaChevronDown />}
          >
            <ul
              className={`absolute top-7 bg-primaryBlue/10 rounded-md duration-300 flex flex-col gap-y-3 px-4 py-3 z-50 overflow-hidden transition-all ${
                activeDropdown === "Team"
                  ? "max-h-44 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              <Li text="Management" href="/" />
              <Li text="Developers" href="/" />
              <Li text="Designers" href="/" />
            </ul>
          </Li>
          <Li
            text="Pages"
            onClick={() => toggleDropdown("Pages")}
            href="/"
            icon={<FaChevronDown />}
          >
            <ul
              className={`absolute top-7 bg-primaryBlue/10 rounded-md duration-300 flex flex-col gap-y-3 px-4 py-3 z-50 overflow-hidden transition-all ${
                activeDropdown === "Pages"
                  ? "max-h-44 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              <Li text="Portfolio" href="/" />
              <Li text="Blog" href="/" />
              <Li text="FAQs" href="/" />
            </ul>
          </Li>
          <Li
            text="News"
            onClick={() => toggleDropdown("News")}
            href="/"
            icon={<FaChevronDown />}
          >
            <ul
              className={`absolute top-7 bg-primaryBlue/10 rounded-md duration-300 flex flex-col gap-y-3 px-4 py-3 z-50 overflow-hidden transition-all ${
                activeDropdown === "News"
                  ? "max-h-44 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              <Li text="Latest News" href="/" />
              <Li text="Updates" href="/" />
            </ul>
          </Li>

          <Li text="Contact" href="/" />
        </ul>
        <div className="btns flex items-center gap-x-4 xl:gap-x-6">
          <div className="search">
            <button className=" text-xl xl:text-2xl text-primaryBlue p-3 xl:p-4 aspect-square rounded-full border border-primaryBlue hover:scale-110 duration-300">
              <FaSearch />
            </button>
          </div>
          <div className="cart">
            <button className=" text-xl xl:text-2xl text-primaryBlue p-3 xl:p-4 aspect-square rounded-full border border-primaryBlue hover:scale-110 duration-300">
              <IoBagOutline />
            </button>
          </div>
          <div className="quote hidden lg:flex ">
            <button className=" 2xl:text-2xl text-white py-3 xl:py-4 px-5 xl:px-7 flex items-center gap-x-2.5 rounded-full hover:scale-110 duration-300 border bg-primaryBlue ">
              <p className=" font-DM ">Free Quote</p>
              <FaArrowRight />
            </button>
          </div>
          <div
            onclick={() => {
              setMenu(!menu);
            }}
            className="menuBtn lg:hidden"
          >
            <IoMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
