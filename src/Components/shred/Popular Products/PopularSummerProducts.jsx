import { fetchPopularProducts } from "@/Fetch Apis/FetchApis";
import React from "react";
import Product from "./Product/Product";
// import FireAnimation from "@/Components/Ui/FireAnimation/FireAnimation";
import FireAnimationPage from "@/Components/Ui/FireAnimation/FireAnimation";

const PopularSummerProducts = async () => {
  let SummerProductsData = await fetchPopularProducts();

  return (
    <div className="max-w-7xl my-10 md:my-15 mx-auto primary md:text-left text-center">
    <h3 className="text-3xl font-bold flex gap-2 mb-2 items-center primary md:justify-start justify-center ">
      <FireAnimationPage></FireAnimationPage>  <span className="relative top-[5px]">Popular Products</span>
    </h3>
   
    <p className="ml-1">
        Handpicked summer favorites just for you!
    </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-y-10 md:gap-x-8 justify-items-center lg:max-w-7xl mx-auto">
        {SummerProductsData.slice(0, 3).map((productData) => (
          <Product key={productData.id} productData={productData}></Product>
        ))}
      </div>
    </div>
  );
};

export default PopularSummerProducts;
