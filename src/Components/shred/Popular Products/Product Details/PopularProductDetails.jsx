import Image from "next/image";

import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

const PopularProductDetails = ({ product }) => {
  console.log(product);
  let {
    id,
    badge,
    brand,
    category,
    description,
    image,
    name,
    price,
    rating,
    stock,
    reviews
  } = product;
  return (
    <>
      <div className="hero bg-base-200 my-20">
        <div className="hero-content flex-col lg:flex-row items-start gap-10 flex-col lg:flex-row">
          <Image
            width={600}
            height={800}
            alt={name}
            src={image}
          ></Image>
          <div className="flex flex-col gap-5">
            <span className="px-5 w-fit rounded-[13px] py-1 text-white font-bold bg-linear-to-r from-[#fc932c] to-[#fd5c1c]">
               {badge}
            </span>
            <h2 className="text-3xl font-bold">UV Protection Sunglasses</h2>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[1rem]">Brand: </span>
                <span className="text-[blue] text-[1rem]">{brand}</span>
              </div>
              <div>
                <span className="text-[1rem]">Category: </span>
                <span className="text-[blue] text-[1rem]">{category}</span>
              </div>
            </div>
            <div className="flex justify-between mx-4 items-center">
              <div className="flex gap-1 items-center">
                <FaStar size={20} color="fd5c1c" />
                <p className="text-[1rem] font-medium">{rating}</p>
                <p className="text-1rem">({reviews} Reviews)</p>
              </div>
            </div>

            <div className="text-2xl text-[#fd5c1c] font-bold">${price}</div>

            <div>
              <span className="text-[green] text-[18px] font-bold flex gap-1 items-center">
                <FaCheckCircle />
                In Stock <span className="text-[17px] text-black font-medium">({stock} available)</span>
                {/* <span className="text-2xl">In Stock </span>   */}
              </span>
            </div>
            <hr />
            <div className="text-[1rem] font-medium">
              {description}
            </div>

            <div>
              <p className="text-[18px] font-bold">Quantity</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 items-center">
                <button className="btn ">
                  <FaPlus size={12} />
                </button>
                <span className="text-[1.3rem]">1</span>
                <button className="btn ">
                  <FaMinus />
                </button>
              </div>
              <div>
                <button className="btn flex gap-2 btn-primary text-white font-bold border-none bg-linear-to-r from-[#fc932c] to-[#fd5c1c] text-[18px]">
                  <FaCartShopping size={20} />
                  Add To Card
                </button>
              </div>
              <div>
                <FcLike size={33} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProductDetails;
