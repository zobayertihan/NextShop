import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#C1DCDC] ">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-12 tw-container">
        <div className="max-w-[190px] flex flex-col gap-6 mt-12">
          <h1 className="text-[#000] font-normal text-xl">NextShop</h1>
          <p className="text-[#1E1E1E] text-lg opacity-50">
            We help you find your dream product
          </p>
          <div className="flex gap-10">
            <FaFacebook className="text-[#000] text-3xl rounded-xl" />
            <FaInstagramSquare className="text-[#000] text-3xl rounded-xl" />
            <FaTwitter className="text-[#000] text-3xl rounded-xl" />
          </div>
        </div>
        <div className="flex gap-16 mt-12 text-[#000]">
          <div className="flex flex-col gap-10 ">
            <p className="font-bold">Information</p>
            <p>About</p>
            <p>Product</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col gap-10 ">
            <p className="font-bold">Company</p>
            <p>Community</p>
            <p>Career</p>
            <p>Our Story</p>
          </div>
          <div className="flex flex-col gap-10 ">
            <p className="font-bold">Contact</p>
            <p>Getting Started</p>
            <p>Pricing</p>
            <p>Resources</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-600">
        <h1 className="text-gray-50  text-center text-lg py-5">
          All right Reserved @ NextShop
        </h1>
      </div>
    </div>
  );
};

export default Footer;
