import React from "react";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center mt-3 bg-white py-7">
      <div className="w-[80%] border-y-[2px] border-[#02071B] flex h-[310px] text-[#02071B] ">
        <div className="w-1/4 h-full px-3 pr-[62px]">
          <h1 className="text-[20px] font-bold font-urban mt-[32px]">
            About Us
          </h1>
          <p className="text-[14px] font-thin font-urban mt-[15px]">
            We understand that jewellery is more than just an accessory; it is a
            form of self-expression. That's why we offer customization options,
            allowing you to create a truly unique anklet that embodies your
            personal style.
          </p>
        </div>
        <div className="w-1/4 flex flex-col h-full px-3 pr-[40px]">
          <div className="h-[50%] w-full">
            <h1 className="text-[20px] font-bold font-urban mt-[32px]">
              Contact Us
            </h1>
            <p className="text-[14px] font-thin font-urban mt-[15px]">
              B-9/10, Dauji Complex, Kinari Bazar, Agra - 282003
            </p>
          </div>
          <div className="h-[50%] w-full">
            <h1 className="text-[20px] font-bold font-urban">
              <a href="tel:0562-6713836">0562-6713836</a>
            </h1>
            <p className="text-[14px] font-thin font-urban mt-[15px]">
              {" "}
              <a href="mailto: shivanijewellersagra@gmail.com">shivanijewellersagra@gmail.com</a>{" "}
            </p>
          </div>
        </div>
        <div className="w-1/4 px-3 pr-[40px]">
          <h1 className="text-[20px] font-bold font-urban mt-[32px]">
            Quick Links
          </h1>
          <div className="flex flex-col font-urban gap-3 mt-[15px]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="w-1/4"></div>
      </div>
      <div className="text-[#02071B] text-[20px] font-bold w-[80%] mt-[39px] mb-[5px]">
        <h1>@2023 Shivani Jewellers | All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
