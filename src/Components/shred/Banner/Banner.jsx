import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
    {/* 1st */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item h-[250px] md:h-[400px] xl:h-[500px] 2xl:h-[800px] relative w-full">
          <Image fill className="object-fit"  alt="hero 1" src={'/Images/Banner Img/hero1.png'}></Image>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* 2nd */}
        <div id="slide2" className="carousel-item h-[250px] md:h-[400px] xl:h-[500px] 2xl:h-[800px] relative w-full">
         <Image alt="hero 2" fill className="object-fit" src={'/Images/Banner Img/hero4.png'}></Image>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* 3rd */}
        <div id="slide3" className="carousel-item  h-[250px] md:h-[400px] xl:h-[500px] 2xl:h-[800px] relative w-full">
         <Image fill className="object-fit"  alt="hero 3" src={'/Images/Banner Img/hero22.png'}></Image>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Banner;
