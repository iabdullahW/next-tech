"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaStarSolid } from 'react-icons/lia';


export default function CarouselHell() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <div className="bg-[#E8ECFD] text-[#351A5F] carousel-container w-[80vw] overflow-x-hidden h-[19rem]">
    <Slider {...settings}>
      <div className="p-4 text-center">
        <div className="flex justify-center gap-2">
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
        </div>
        <h1 className="text-3xl font-bold mt-[2rem]">Lorem Ipsum Te Amo</h1>
        <p className="mt-[1rem]">CEO at BECCA</p>
      </div>
      <div className="p-4 text-center">
        <div className="flex justify-center mb-2">
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
        </div>
        <h1 className="text-3xl font-bold mt-[2rem]">Es Te Vosotros Siuu</h1>
        <p className="mt-[1rem]">HRO at BECCA</p>
      </div>
      <div className="p-4 text-center">
        <div className="flex justify-center mb-2">
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
          <LiaStarSolid className="text-[#822EF7]" />
        </div>
        <h1 className="text-3xl font-bold mt-[2rem]">Muchas Gracias Efficion</h1>
        <p className="mt-[1rem]">HEC at BECCA</p>
      </div>
    </Slider>
  </div>
  );
}