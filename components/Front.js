import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";


const Front = () => {
  return (
    <div className="flex justify-between w-[100vw] overflow-x-hidden m-auto ">
      {/* left div */}
      <div className="px-2 mt-[8rem] ml-[4rem]  ">
        <div>
          <h1 className="text-[#351A5F] font-[Inter-500 ] font-semibold text-[50px]">
            Work with users{" "}
          </h1>
          <h1 className="text-[#351A5F] font-[Inter-500 ] font-semibold text-[50px]">
            and sync them from{" "}
          </h1>
          <h1 className="text-[#351A5F] font-[Inter-500 ] font-semibold text-[50px]">
            idea to code/{" "}
          </h1>
        </div>
        <div className="mt-[10px]">
          <p className="text-[18px] text-[#351A5F] font-normal">
            Lorem Ipsum estibulum blandit libero at mauris condi .
          </p>
          <p className="text-[18px] text-[#351A5F] font-normal">
            mentum males uada scelerisque in mauris ut mada.
          </p>
        </div>
        <div className=" flex gap-x-5 mt-[2rem]">
          <button className="text-[16px] font-normal text-[#ffff] bg-[#7F2EF8] rounded-md cursor-pointer p-3">
            Learn More{" "}
          </button>
         <div className="flex items-center  gap-4">
         <button className="text-[16px] font-normal text-[#7F2EF8] cursor-pointer p-3">
            Contact
          </button>
          <FaLongArrowAltRight className="text-[#7F2EF8] cursor-pointer text-xl hover:pl-[4px] transition delay-50"/>
         </div>
          
        </div>
      </div>

      {/* right div */}
      <div className="rounded-sm mt-[4rem] ">
        <Image src={require("/public/webic.png")} />
      </div>
    </div>
  );
};

export default Front;
