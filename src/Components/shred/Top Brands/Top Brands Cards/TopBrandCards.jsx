import Image from "next/image";
import React from "react";

const TopBrandCards = () => {
  return (
    <div className="grid justify-items-center max-w-7xl my-10 md:my-15 text-center grid-cols-1  md:grid-cols-2 gap-3 xl:grid-cols-4">
    {/* 1st box */}
      <div className=" w-96 md:w-full  p-3 rounded-xl   bg-[#feefcc]  shadow-sm">
        <div className="flex relative top-2  flex-col justify-center items-center">
          <Image className="mx-auto" alt="sunglass" width={80} height={60} src={'/Images/summer care tips image/sunGlass2.png'}></Image>
          
          <h4 className="text-2xl font-semibold">
              
              SUNSHADE
          </h4>
          <p className="tracking-[4px]">
               EYEWEAR
          </p>
        </div>
      </div>
    {/* 2nd box */}
      <div className=" w-96 md:w-full p-3 rounded-xl flex flex-col justify-center items-center  bg-[#e1f4f5]  shadow-sm">
        <div className="">
          <Image className="mx-auto" alt="sunglass" width={80} height={60} src={'/Images/Top Brands Images/iland-icon.png'}></Image>
          
          <h4 className="text-2xl font-semibold">
              BEACHWEAR
          </h4>
          <p className="tracking-[4px]">
               FASHION
          </p>
        </div>
      </div>
    {/* 3rd box */}
      <div className=" p-3 w-96 md:w-full rounded-xl flex flex-col justify-center items-center  bg-[#e0f4de]  shadow-sm">
        <div className="">
          <Image className="mx-auto" alt="sunglass" width={80} height={60} src={'/Images/Top Brands Images/green.png'}></Image>
          
          <h4 className="text-2xl font-semibold">
              COOLSKIN
          </h4>
          <p className="tracking-[4px]">
               SKINCARE
          </p>
        </div>
      </div>
    {/* 4th box */}
      <div className=" p-3 rounded-xl w-96 md:w-full  flex flex-col justify-center items-center  bg-[#d8effd]  shadow-sm">
        <div className="">
          <Image className="mx-auto" alt="sunglass" width={80} height={60} src={'/Images/Top Brands Images/wather-wave.png'}></Image>
          
          <h4 className="text-2xl font-semibold">
              WAVESTYLE
          </h4>
          <p className="tracking-[4px]">
               ACCESSORLES
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBrandCards;
