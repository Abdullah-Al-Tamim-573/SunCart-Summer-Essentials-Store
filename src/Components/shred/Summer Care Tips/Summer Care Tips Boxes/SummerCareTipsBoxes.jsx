import Image from "next/image";
import React from "react";


const SummerCareTipsBoxes = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-0 justify-items-center lg:grid-cols-3">
        {/* 1st box */}
      <div className="card  flex items-center justify-center w-96 bg-base-100 card-md shadow-sm">
        <div className="flex  items-center ">
            <div>
                 <Image alt="bottle" width={300} height={100} src={'/Images/summer care tips image/bottle2.png'}></Image>
            </div>
            <div>
                  <h4 className="text-[1.2rem] font-bold">
                       Stay Hydrated
                  </h4>
                  <p>
                          Drink plenty of water to keep your body cool & fresh.
                  </p>
            </div>
        </div>
      </div>
        {/* 2nd box */}
       <div className="card flex items-center justify-center  w-96 bg-base-100 card-md shadow-sm">
        <div className="flex gap-3 items-center ">
            <div >
                 <Image  alt="bottle" width={250} height={100} src={'/Images/summer care tips image/sunscreen2.png'}></Image>
            </div>
            <div>
                  <h4 className="text-[1.2rem] font-bold">
                       Use Sunscreen
                  </h4>
                  <p>
                          Always apply sunscreen to protect your skin from harmful UV rays
                  </p>
            </div>
        </div>
      </div>
        {/* 3rd box */}
     <div className="card  flex items-center justify-center w-96 bg-base-100 card-md shadow-sm">
        <div className="flex gap-3 items-center ">
            <div>
                 <Image alt="bottle" width={150} height={100} src={'/Images/summer care tips image/sunGlass2.png'}></Image>
            </div>
            <div>
                  <h4 className="text-[1.2rem] font-bold">
                       Wear Sunglasses
                  </h4>
                  <p>
                         Protect your eyes from UV rays in style.
                  </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SummerCareTipsBoxes;
