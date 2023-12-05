"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState({ status: false, key: "" });

  const dropdownHandle = (key) => {
    if (dropdown.key === key) {
      setDropdown({
        status: false,
        key: "",
      });
    } else {
      setDropdown({
        status: true,
        key,
      });
    }
  };

  const handleMenu = () => {
    return isOpen ? "flex" : "absolute";
  };
  return (
    <header className="absolute w-full p-12 font-overpass md:font-ubuntu antialiased md:subpixel-antialiased  z-50">
      <div className={`${handleMenu()} absolute  ml-0 md:ml-12`}>
        <Image src={"/logo.svg"} width={100} height={50} />
      </div>
      <div className="absolute right-12 top-14 md:hidden md:right-8">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={`${isOpen ? "/icon-close.svg" : "/icon-hamburger.svg"}`}
            width={24}
            height={24}
            alt=""
          />
        </button>
      </div>
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col justify-center bg-white rounded-md mt-20 md:mt-0 md:bg-transparent md:flex-row md:justify-between font-normal text-sm ml-0 md:ml-52 h-auto md:h-10 pt-4 md:p-0 md:flex`}
      >
        <div className=" flex flex-col md:items-center md:flex-row text-blogr-very-dark-blue md:text-white ">
          <div className="flex flex-col -space-y-6 -mb-8 md:-mb-0 md:-space-y-0 md:ml-4 items-center text-base md:text-normal md:font-normal font-semibold md:text-normal md:flex-row md:space-x-2  md:items-start">
            <div
              className="group relative cursor-pointer py-2 text-center"
              onClick={() => dropdownHandle("first")}
              onMouseEnter={() => dropdownHandle("first")}
              onMouseLeave={() => dropdownHandle("first")}
            >
              <div className="flex items-center justify-center px-4 md:justify-between">
                <a className=" text-blogr-very-dark-blue md:text-white menu-hover my-2 py-2 text-base font-semibold md:font-normal  lg:mx-4">
                  Products
                </a>
                <picture>
                  <source
                    media="(min-width: 900px)"
                    srcset="/icon-arrow-light.svg"
                  />
                  <source
                    media="(min-width: 320px)"
                    srcset="/icon-arrow-dark.svg"
                  />
                  <img
                    src="/icon-arrow-light.svg"
                    className={`${
                      dropdown.key == "first" ? "rotate-180" : ""
                    } transform duration-300 -mt-1 ml-2 `}
                  />
                </picture>
              </div>
              <div
                className={`${
                  dropdown.key == "first" ? "invisible" : "hidden"
                } md:invisible relative md:absolute md:flex z-50 w-full flex-col bg-gray-200 md:bg-white rounded-md py-1 px-20 md:px-4 text-gray-800  group-hover:visible`}
              >
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm  text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  Overview
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  Pricing
                </a>
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  Marketplace
                </a>
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  Features
                </a>
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  Integrations
                </a>
              </div>
            </div>
            <div
              className="group relative cursor-pointer py-2 text-center"
              onClick={() => dropdownHandle("second")}
              onMouseEnter={() => dropdownHandle("second")}
              onMouseLeave={() => dropdownHandle("second")}
            >
              <div className="flex items-center justify-center px-4 md:justify-between">
                <a className=" text-blogr-very-dark-blue md:text-white menu-hover my-2 py-2 text-base font-semibold md:font-normal  lg:mx-4">
                  Company
                </a>
                <picture>
                  <source
                    media="(min-width: 900px)"
                    srcset="/icon-arrow-light.svg"
                  />
                  <source
                    media="(min-width: 320px)"
                    srcset="/icon-arrow-dark.svg"
                  />
                  <img
                    src="/icon-arrow-light.svg"
                    className={`${
                      dropdown.key == "second" ? "rotate-180" : ""
                    } transform duration-300 -mt-1 ml-2`}
                  />
                </picture>
              </div>
              <div
                className={`${
                  dropdown.key == "second" ? "invisible" : "hidden"
                } md:invisible relative md:absolute md:flex z-50 w-full flex-col bg-gray-200 md:bg-white rounded-md py-1 px-24 md:px-4 text-gray-800  group-hover:visible`}
              >
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  About
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  Team
                </a>
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  Blog
                </a>
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  Careers
                </a>
              </div>
            </div>
            <div
              className="group relative cursor-pointer py-2 text-center"
              onClick={() => dropdownHandle("third")}
              onMouseEnter={() => dropdownHandle("third")}
              onMouseLeave={() => dropdownHandle("third")}
            >
              <div className="flex items-center justify-center px-4 md:justify-between ">
                <a className=" text-blogr-very-dark-blue md:text-white menu-hover my-2 py-2 text-base font-semibold md:font-normal  lg:mx-4">
                  Connect
                </a>
                <picture>
                  <source
                    media="(min-width: 900px)"
                    srcset="/icon-arrow-light.svg"
                  />
                  <source
                    media="(min-width: 320px)"
                    srcset="/icon-arrow-dark.svg"
                  />
                  <img
                    src="/icon-arrow-light.svg"
                    className={`${
                      dropdown.key == "third" ? "rotate-180" : ""
                    } transform duration-300 -mt-1 ml-2`}
                  />
                </picture>
              </div>
              <div
                className={`${
                  dropdown.key == "third" ? "invisible" : "hidden"
                } md:invisible relative md:absolute md:flex z-50 w-full flex-col bg-gray-200 md:bg-white rounded-md py-1 px-24 md:px-4 text-gray-800  group-hover:visible`}
              >
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  Contact
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  Newsletter
                </a>
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-md md:text-sm text-blogr-very-dark-grayish-blue hover:text-black md:mx-2">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:mt-0 mt-6 p-6">
          <div className="flex md:hidden w-full  md:w-0 md:h-0 h-[0.01rem] bg-blogr-very-dark-grayish-blue/20"></div>
          <Link
            href={"/"}
            className=" flex flex-col justify-center mb-3 mt-8 md:mt-0 md:mb-0 text-blogr-very-dark-blue md:text-white font-bold md:font-normal text-lg md:text-sm  w-28 h-10 translate-x-0 md:translate-x-3 md:transform duration-200 md:hover:-translate-x-1 rounded-full self-center md:hover:bg-blogr-cta-hover text-center"
          >
            Login
          </Link>
          <Link
            href={"/"}
            className="flex flex-col justify-center w-28 h-10 transform duration-200 bg-gradient-to-r from-blogr-very-light-red to-blogr-light-red md:bg-none md:bg-white font-bold text-white md:text-blogr-cta-text md:hover:-translate-x-1 hover:text-white rounded-full self-center hover:bg-blogr-cta-hover text-center"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
