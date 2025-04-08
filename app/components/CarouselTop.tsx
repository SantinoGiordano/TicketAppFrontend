'use client';

import React from "react";
import Image from "next/image";

const CarouselTop = () => {
  return (
    <div className="max-w-screen mx-auto px-0">
      <div className="carousel w-full">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full h-[500px]">
          <Image
            src="/station.jpg"
            alt="Station"
            fill
            className="object-cover w-full h-full "
            priority
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full h-[500px]">
          <Image
            src="/sideTrainLandscape.jpg"
            alt="Side of Train"
            fill
            className="object-cover w-full h-full "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full h-[500px]">
          <Image
            src="/cityLandscape.jpg"
            alt="City Landscape"
            fill
            className="object-cover w-screen h-full "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselTop;
