"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselRev() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5, // Show 1 full slide and part of the next slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true, // Center the slides
    centerPadding: "1%", // Padding on the sides of centered slide

  };

  return (
    <div className="w-[40rem] h-[21rem] overflow-hidden ml-[12rem] ">
      <Slider {...settings}>
     
          <div>
          <div className="p-2">
            <Image
              src={require("/public/revone.jpeg")}
              className="h-[15rem] w-[100vw] rounded-lg object-cover"
              alt="Slide 1"
              layout="intrinsic"
            />
          </div>
          </div>
        
      
        <div>
        <div className="p-2">
            <Image
              src={require("/public/revtwo.webp")}
              className="h-[15rem] w-[100vw] rounded-lg object-cover"
              alt="Slide 2"
              layout="intrinsic"
            />
          </div>
        </div>
       
      <div>
        
      <div className="p-2">
            <Image
              src={require("/public/revthree.webp")}
              className="h-[15rem] w-[100vw] rounded-lg object-cover"
              alt="Slide 3"
              layout="intrinsic"
            />
          </div>
      </div>
       
        
          <div>
          <div className="p-2">
            <Image
              src={require("/public/revtwo.webp")}
              className="h-[15rem] w-[100vw] rounded-lg object-cover"
              alt="Slide 2"
              layout="intrinsic"
            />
          </div>
          </div>
        
      </Slider>
    </div>
  );
}
