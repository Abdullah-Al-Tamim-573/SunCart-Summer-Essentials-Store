import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";



const Product = ({ productData }) => {
  console.log(productData, "productData");
  let { id, name, brand, price, rating, badge, image, stock, category } = productData;
  return (
    <>
      {/* card */}
      <div className="card bg-base-100  shadow-sm primary">
        <figure className="h-[200px] md:h-[220px]">
          <Image width={400} height={100} alt={name} src={image}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-xl">{name}</h2>
          <p className="text-[1rem]">
            {brand}
          </p>
          <div className="flex justify-between mx-4 items-center">
             <div className="flex gap-1 items-center">
                   <FaStar size={20} color="fd5c1c" />
                   <p className="text-[1rem] font-medium">
                      {
                        rating
                      }

                   </p>
                   <p className="text-1rem">
                       ({
                        stock
                       })
                   </p>
             </div>
             <div className="text-2xl text-[#fd5c1c] font-bold">
                  ${
                    price
                  }
             </div>
          </div>
          <div className="grid grid-cols-4 my-2 items-center gap-5">
            <Link className="col-span-3 btn btn-primary" href={`/popular-product-details/${id}`}>
                  <button>View Details</button>
            </Link>
            <LuShoppingCart className="col-span-1 " size={30}/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
