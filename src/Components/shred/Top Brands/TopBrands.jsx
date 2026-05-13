import Image from "next/image";
import TopBrandCards from "./Top Brands Cards/TopBrandCards";

const TopBrands = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-2 items-center ">
          <Image
            width={50}
            height={100}
            alt="Star img"
            src={"/Images/Top Brands Images/star.png"}
          ></Image>

          <span className="text-3xl font-bold">Top Brands</span>
        </div>
        <p className=" text-[1rem] font-medium">
          Loved by thousands of happy customers
        </p>
      </div>
      <div>
            <TopBrandCards></TopBrandCards>
      </div>
    </>
  );
};

export default TopBrands;
