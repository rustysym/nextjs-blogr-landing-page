import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="relative bottom-0 bg-blogr-footer-gray w-full h-auto mt-12 md:mt-0 pb-12 rounded-tr-[3rem] font-ubuntu">
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center md:place-items-start space-y-12 md:space-y-0 pt-12 px-20 lg:pt-14 lg:px-24">
        <div>
          <Image src={"/logo.svg"} width={70} height={50} alt=""/>
        </div>
        <div className="flex flex-col text-sm mt-12 md:mt-0 text-blogr-footer-text font-thin space-y-2 w-20">
          <span className="font-medium text-white mb-4">Product</span>
          <a href="#" className="hover:underline">
            Overview
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Marketplace
          </a>
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Integrations
          </a>
        </div>
        <div className="flex flex-col text-sm text-blogr-footer-text font-thin space-y-2 w-20">
          <span className="font-medium text-white mb-4">Company</span>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Team
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            Careers
          </a>
        </div>
        <div className="flex flex-col text-sm text-blogr-footer-text font-thin space-y-2 w-20">
          <span className="font-medium text-white mb-4">Connect</span>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Newsletter
          </a>
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
