import React from "react";
import CarouselRev from "@/components/CarouselRev"

const Review = () => {
  return (
    <div className=" bg-[#E8ECFD] w-[100vw] h-[30rem] flex justify-between items-center  m-auto">
      {/* left */}
      <div className="flex flex-col  p-auto ml-[6rem]">
        <div>
          <h3 className="text-[14px] text-[#351A5F] leading-[17px] font-[Inter 500] font-semibold mb-[1rem]">
            WORK WITH
          </h3>
        </div>
        <div>
          <h1 className="text-[33px] text-[#351A5F] leading-[41px] font-[Inter 500] font-semibold">
            Creative app ideas and
          </h1>
          <h1 className="text-[33px] text-[#351A5F] leading-[41px] font-[Inter 500] font-semibold">
            
            monetization software for
          </h1>
          <h1 className="text-[33px] text-[#351A5F] leading-[41px] font-[Inter 500] font-semibold">
            
            creators
          </h1>
        </div>
        <div className="mt-[3rem] flex flex-col">
          <p className="text-[16px] text-[#351A5F] leading-[25px] font-[Inter 500] font-semibold mb-0">
            Lorem Ipsum estibulum blandit libero at mauris condime
          </p>
          <p className="text-[16px] text-[#351A5F] leading-[25px] font-[Inter 500] font-semibold mb-[1rem]">
            ntum males uada scelerisque in mauris ut malesuada.
          </p>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center flex-row m-auto">
      <CarouselRev />
      </div>
    </div>
  );
};

export default Review;
