"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "./layer/Container";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import facebook from "../assets/facebook.png";
import facebookOFF from "../assets/facebookOFF.png";
import tweet from "../assets/tweet.png";
import tweetOFF from "../assets/tweetOFF.png";
import linkdin from "../assets/linkdin.png";
import linkdinOFF from "../assets/linkdinOFF.png";
import youtube from "../assets/youtube.png";
import youtubeOFF from "../assets/youtubeOFF.png";
import america from "../assets/america.png";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  let languages = [
    { name: "English", link: america },
    { name: "Bangla", link: america },
    { name: "Hindi", link: america },
    { name: "Arabic", link: america },
    { name: "French", link: america },
  ];

  let [show, setShow] = useState(false);
  let [size, setSize] = useState("English");
  let manage = (element) => {
    setSize(element.target.innerText);
  };

  return (
    <div className=" relative after:absolute after:top-0 after:right-1/2 after:w-full after:h-full after:z-[-1]  after:bg-primaryBlue">
      <Container className=" flex justify-between flex-wrap items-center text-sm leading-6 text-white bg-primaryBlue py-2 rounded-full ">
        <div className="left flex gap-x-2 justify-between items-center w-full sm:w-auto md:gap-x-6 xl:gap-x-7">
          <p className="welcome">
            <a href="" className="block text-[11px] sm:text-sm">
              Welcome to Ortencey Digital Market Agency
            </a>
          </p>
          <div className=" w-0.5 bg-[#708FFF]"></div>
          <p className="number flex items-center gap-x-2">
            <Image className="w-4 " src={phone} alt="phone icon" />
            <a href="" className=" hidden lg:block">
              +88 ( 5548 ) 6548
            </a>
          </p>
          <div className=" w-0.5 bg-[#708FFF]"></div>
          <p className="mail flex items-center gap-x-3">
            <Image className="w-5" src={mail} alt="mail icon" />
            <a href="" className=" hidden lg:block">
              infoyour@gmail.com
            </a>
          </p>
        </div>
        <div className="right flex items-center gap-x-6 xl:gap-x-11">
          <div className="language">
            <div>
              <div
                onClick={() => setShow(!show)}
                className="flex items-center gap-x-2  !relative"
              >
                <Image className="" src={america} alt="america icon" />
                <p>{size}</p>
                <FaChevronDown />
                <ul
                  onClick={manage}
                  className={`w-full bottom-0 translate-y-full left-0 z-50 absolute transition-all duration-300 bg-white ${
                    show ? "visible opacity-100" : " invisible opacity-0"
                  }`}
                >
                  {languages.map((item, index) => (
                    <li
                      key={index}
                      className="border border-white/40 w-full cursor-default text-center bg-primaryBlue/60 hover:bg-primaryBlue duration-300 flex  justify-between px-2 py-1"
                    >
                      {/* <Image
                        className=""
                        height={"12px"}
                        width={"19px"}
                        src={item.link}
                        alt="america icon"
                      /> */}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="links flex gap-x-4">
            <a href="" className="block relative">
              <Image
                className="h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-0 hover:opacity-100 duration-300"
                src={facebook}
                alt="facebook icon"
              />
              <Image className="h-4" src={facebookOFF} alt="facebook icon" />
            </a>
            <div className=" w-0.5 bg-[#708FFF]"></div>
            <a href="" className="block relative">
              <Image
                className="h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-0 hover:opacity-100 duration-300"
                src={linkdin}
                alt="linkdin icon"
              />
              <Image className="h-4" src={linkdinOFF} alt="linkdin icon" />
            </a>
            <div className=" w-0.5 bg-[#708FFF]"></div>
            <a href="" className="block relative">
              <Image
                className="h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-0 hover:opacity-100 duration-300"
                src={tweet}
                alt="tweet icon"
              />
              <Image className="h-4" src={tweetOFF} alt="tweet icon" />
            </a>
            <div className=" w-0.5 bg-[#708FFF]"></div>
            <a href="" className="block relative">
              <Image
                className="h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-0 hover:opacity-100 duration-300"
                src={youtube}
                alt="youtube icon"
              />
              <Image className="h-4" src={youtubeOFF} alt="youtube icon" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
