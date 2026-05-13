import Banner from "@/Components/shred/Banner/Banner";
import PopularSummerProducts from "@/Components/shred/Popular Products/PopularSummerProducts";
import SummerCareTips from "@/Components/shred/Summer Care Tips/SummerCareTips";
import TopBrands from "@/Components/shred/Top Brands/TopBrands";

import TrustFeatures from "@/Components/shred/Trust Features/TrustFeatures";
// import { DrawerPart } from "@/Components/Ui/Drawer/Drawer";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto my-10 md:my-15">

        <TrustFeatures></TrustFeatures>
        <PopularSummerProducts></PopularSummerProducts>
        
      </div>
      <div className="primary text-center max-w-7xl mx-auto my-10 md:my-15">
          <SummerCareTips></SummerCareTips>
      </div>
        <div className="primary  max-w-7xl mx-auto my-10 md:my-15">
          <TopBrands></TopBrands>
        </div>
    </div>
  );
}
