"use client";
import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import CarouselHell from "@/components/CarouselHell";

const Hell = () => {
  return (
    <div className="bg-[#E8ECFD] w-[100vw] h-[59rem]  flex items justify-between flex-col">
      {/* top */}
      <div>
        {/* left */}
        <div className="relative flex justify-between  mt-[6rem] ">
          {/* <input type="text" className="bg-white w-[14rem] h-[2rem] z-20 relative mb-[4rem] ml-[13rem]"
        />   */}
          <div className="bg-[#E8ECFD] w-[12rem] h-[1rem] z-20 relative mb-[4rem] ml-[14rem]"></div>
          <Image
            src={require("/public/L.png")}
            className="h-[28rem] w-[14rem]  ml-[11rem] z-10 absolute"
          />
          <Image
            src={require("/public/R.png")}
            className="h-[28rem] w-[15rem] mt-[4rem] ml-[27rem] absolute "
          />
        </div>

        {/* right */}
        <div className="ml-[40rem] flex flex-col items-center justify-start ">
          <div className="flex flex-col gap-3">
            <p className="text-[#351A5F] text-sm font-semibold text-[Inter 400]">
              WORK WITH
            </p>
            <div className="">
              <h2 className="text-[#351A5F] text-3xl font-bold text-[Inter 500]">
                Software service for
              </h2>
              <h2 className="mb-[3rem] text-[#351A5F] text-3xl font-bold text-[Inter 500]">
                your business.
              </h2>
            </div>
            <div className="mb-[2rem]">
              <p className="text-[#351A5F] text-sm font-semibold text-[Inter 400]">
                Lorem Ipsum estibulum blandit libero at mauris condime
              </p>
              <p className="text-[#351A5F] text-sm font-semibold text-[Inter 400]">
                ntummales uada scelerisque in mauris ut malesuada. Ute
              </p>
              <p className="text-[#351A5F] text-sm font-semibold text-[Inter 400]">
                littellus, luctus nec.
              </p>
            </div>
          </div>
          <div className=" flex flex-col px-4 gap-4 ml-[-13rem] justify-center ">
            <div className="flex items-center gap-2 ">
              <MdVerified className="text-[#822EF7] text-lg font-semibold" />
              <p className="text-[#351A5F] text-sm font-semibold text-[Inter 400]">
                Digital strategy
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MdVerified className="text-[#822EF7] text-lg font-semibold" />
              <p className="text-[#351A5F] text-sm font-semibold text-[Inter 400]">
                Modernized prospecting
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MdVerified className="text-[#822EF7] text-lg font-semibold" />
              <p className="text-[#351A5F] text-sm font-semibold text-[Inter 400]">
                Digital strategy
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}

      {/* Carousel */}
      <div className="flex items-center justify-center mr-[4rem] mt-[2rem]">
        <CarouselHell />
      </div>
    </div>
  );
};

export default Hell;
