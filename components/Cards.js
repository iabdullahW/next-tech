import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="bg-white h-[100vh] w-[100vw] mt-[10rem] m-auto ">
      {/* cards */}
      {/* top */}
      <div className="flex justify-around items-center p-auto  mr-[6rem] ml-[6rem] relative space-x-3">
      
        <div className=" bg-slate-200 border border-slate-300 h-[24rem] w-[24rem] shadow-lg rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 p-3 flex flex-col justify-between ">
          <h1 className="flex justify-end text-[#351a5f] text-[16px] font-semibold mt-[3rem] mr-[2rem]">Settings</h1>
          <h3 className="text-[#351a5f] font-bold text-[23px] flex justify-end mb-[1rem] px-3">Introducing New Line of Exclusive Products & Designes</h3>
        </div>
        <div className=" bg-slate-200 border border-slate-300 h-[24rem] w-[24rem] shadow-lg rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 p-3 flex flex-col justify-between ">
          <h1 className="flex justify-end text-[#351a5f] text-[16px] font-semibold mt-[3rem] mr-[2rem]">Settings</h1>
          <h3 className="text-[#351a5f] font-bold text-[23px] flex justify-end mb-[1rem] px-3">Make Your Business Grow platform for creators and modern</h3>
        </div>
        <div className=' bg-slate-200 border border-slate-300 h-[24rem] w-[24rem] shadow-lg rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 p-3 flex flex-col justify-between'>
        <h1 className="flex justify-end text-[#351a5f] text-[16px] font-semibold mt-[3rem] mr-[2rem]">Settings</h1>
        <h3 className="text-[#351a5f] font-bold text-[23px] flex justify-end mb-[1rem] px-3">Best Tools for Adding a Vanity Phone Number to Your Site</h3>
        </div>
      </div>

      {/* bottom */}
      <div className="flex justify-center items-center mt-[4rem]   ">
        <div className="bg-slate-200 border border-slate-300 shadow-lg w-[73rem] rounded-md flex justify-between items-center gap-x-2 p-4 backdrop-filter backdrop-blur-lg bg-opacity-30 ]">
        <div className="flex items-center gap-x-2 ml-[24rem]">
        <FaHandshake  className="text-[#16031F] text-lg font-extrabold "/>
            <h6 className=" text-[#303043] ">we are hiring self-motivated to join us</h6>
            <FaLongArrowAltRight className="text-[#7F2EF8] cursor-pointer text-xl hover:pl-[4px] transition delay-50"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
