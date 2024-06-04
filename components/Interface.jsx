import React from "react";
import Image from "next/image";
import CarouselClientWrapper from "../components/CarouselClientWrapper";

// import dynamic from 'next/dynamic';

// const CarouselClientWrapper = dynamic(() => import('../components/CarouselClientWrapper'), { ssr: false });
const Interface = () => {
  return (
    <div className="bg-[#16031F] h-[108rem] w-[100vw] overflow-x-hidden m-auto">
      {/* top */}
      <div>
        <div className="flex flex-col items-center space-y-3 ">
          <h1 className="text-3xl font-semibold text-white text-[Inter-500] mt-[9rem] ">
            Why millions of entrepreneurs choose Becca
          </h1>
          <h3 className="text-[16px] text-white text-[Inter-500]">
            Lorem Ipsum estibulum blandit libero at mauris
          </h3>
        </div>
        {/* images */}
        <div className="relative flex justify-around  mt-[7rem]">
          <Image
            src={require("/public/left.png")}
            className="h-[15rem] w-[13rem] rounded-l-lg object-cover  mt-[2rem] ml-[5rem]"
          />
          <Image
            src={require("/public/main.jpg")}
            className="h-[40rem] w-[50%] object-cover mr-[18rem] flex "
          />
          <Image
            src={require("/public/right.png")}
            className="h-[17rem] w-[14rem] mt-[18rem] ml-[57rem] absolute "
          />
        </div>
      </div>
      {/* bottom */}
<div className="flex flex-col justify-center items-center py-10">
  {/* carousel */}
  <div className="flex flex-col justify-center ">
    <div>
    <CarouselClientWrapper/>
    </div>
   
    <hr className="w-[80vw] border-2 border-slate-400 rounded my-5 self-center flex justify-center" />
  </div>

  <div className="flex justify-around items-start space-x-12 mt-16 w-3/4 ml-[6rem]">
    <div className="flex-1 ">
      <h1 className="text-white text-xl font-medium">Integration</h1>
     <div className="mt-[2rem]">
     <h3 className="text-white text-[16px] font-medium">Lorem ipsum dolor sit amet,</h3>
      <h3 className="text-white text-[16px] font-medium">consectetur adipiscing elit.</h3>
      <h3 className="text-white text-[16px] font-medium">Ut elit tellus, luctus nec</h3>
     </div>
    </div>
    <div className="flex-1">
      <h1 className="text-white text-xl font-medium">Management</h1>
      <div className="mt-[2rem]">
      <h3 className="text-white text-[16px] font-medium">Lorem ipsum dolor sit amet,</h3>
      <h3 className="text-white text-[16px] font-medium">consectetur adipiscing elit. Ut elit</h3>
      <h3 className="text-white text-[16px] font-medium">tellus, luctus nec.</h3>
      </div>
    </div>
    <div className="flex-1">
      <h1 className="text-white text-xl font-medium">Employee Training</h1>
      <div className="mt-[2rem]">
      <h3 className="text-white text-[16px] font-medium">Lorem ipsum dolor sit amet,</h3>
      <h3 className="text-white text-[16px] font-medium">consectetur adipiscing elit.</h3>
      <h3 className="text-white text-[16px] font-medium">Ut elit tellus, luctus nec.</h3>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Interface;
