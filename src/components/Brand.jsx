import React from "react";
import brand1 from "../assets/brand1.svg"
import gift from '../assets/Gift.svg'
import premium from '../assets/Premium.svg'
import glare from '../assets/glare.svg'
const Brand = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center py-[70px]">
      <div className="w-full flex justify-center items-end">
        <section className="border-[#F24949] border-[2px] rounded-3xl px-5 flex justify-center items-center bg-white">
          <h1 className=" text-[#F24949] text-[32px] flex justify-center pb-1 font-semibold">
            Brand Experience
          </h1>
        </section>
      </div>
      <div className="w-full flex gap-[32px] justify-center items-center mt-[25px]">
        <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-[32px] border-[#F24949] border-[2px] rounded-lg">
                <img src={brand1} alt="" />
            </div>
            <small className="text-[#F24949] text-[14px] w-[120px] text-center">Handcrafted Excellence</small>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-[32px] border-[#F24949] border-[2px] rounded-lg">
                <img src={premium} alt="" />
            </div>
            <small className="text-[#F24949] text-[14px] w-[120px] text-center">Premium Quality Materials</small>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-[32px] border-[#F24949] border-[2px] rounded-lg">
                <img src={glare} alt="" />
            </div>
            <small className="text-[#F24949] text-[14px] w-[120px] text-center">Unique and Trendy Designs</small>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-[32px] border-[#F24949] border-[2px] rounded-lg">
                <img src={gift} alt="" />
            </div>
            <small className="text-[#F24949] text-[14px] w-[120px] text-center">Gift-Worthy Packaging</small>
        </div>
      </div>
    </div>
  );
};

export default Brand;
