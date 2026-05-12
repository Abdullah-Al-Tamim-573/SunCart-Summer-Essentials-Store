// import { fetchTrustFeaturesData } from "@/Fetch Apis/FetchApis";
// import { ShieldCheck } from "lucide";
import { FaTruckFast } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { ImPriceTag } from "react-icons/im";
import { ShieldCheck } from 'lucide-react';




const TrustFeatures = () => {
  

  return (
    <div className="my-3 md:my-5 lg:my-10 grid  grid-cols-1 gap-3 md:gap-4 w-full md:grid-cols-2 
    md:max-w-[660px]  lg:max-w-7xl mx-auto  lg:grid-cols-2 xl:grid-cols-4  justify-items-center">
           {/* 1st feature box */}
            <div className="bg-base-300 shadow-sm w-[300px] rounded-[13px] px-8 py-4 flex items-center gap-5">
                   <div>
                       <FaTruckFast color="#fd5c1c" size={45} />
                   </div>
                   <div className="flex flex-col gap-1 primary">
                           <h4 className="text-xl font-semibold">Free Shipping</h4>
                           <p className="font-medium">On orders over $50</p>
                   </div>
            </div>
           {/* 2nd feature box */}
            <div className="bg-base-300 shadow-sm w-[300px]  rounded-[13px] px-8 py-4 flex items-center gap-5">
                   <div>
                       <ShieldCheck color="blue" size={45} />
                   </div>
                   <div className="flex flex-col gap-1 primary">
                           <h4 className="text-xl font-semibold">Secure Payment</h4>
                           <p className="font-medium">100% secure checkout</p>
                   </div>
            </div>
           {/* 3rd feature box */}
            <div className="bg-base-300 shadow-sm w-[300px] rounded-[13px] px-8 py-4 flex items-center gap-5">
                   <div>
                       <BiSupport color="green" size={45}/>
                   </div>
                   <div className="flex flex-col gap-1 primary">
                           <h4 className="text-xl font-semibold">24/7 Support</h4>
                           <p className="font-medium">We're here to help</p>
                   </div>
            </div>
           {/* 4th feature box */}
            <div className="bg-base-300 shadow-sm w-[300px] rounded-[13px] px-8 py-4 flex items-center gap-5">
                   <div>
                       <ImPriceTag color="#ff879b" size={45} />
                   </div>
                   <div className="flex flex-col gap-1 primary">
                           <h4 className="text-xl font-semibold">Best Price</h4>
                           <p className="font-medium">Guaranteed deals</p>
                   </div>
            </div>
    </div>
  );
};

export default TrustFeatures;
