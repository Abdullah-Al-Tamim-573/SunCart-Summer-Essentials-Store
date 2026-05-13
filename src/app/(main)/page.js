import Banner from "@/Components/shred/Banner/Banner";
import PopularSummerProducts from "@/Components/shred/Popular Products/PopularSummerProducts";
import SummerCareTips from "@/Components/shred/Summer Care Tips/SummerCareTips";

import TrustFeatures from "@/Components/shred/Trust Features/TrustFeatures";
// import { DrawerPart } from "@/Components/Ui/Drawer/Drawer";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div>

        <TrustFeatures></TrustFeatures>
        <PopularSummerProducts></PopularSummerProducts>
        
      </div>
      <div className="primary text-center">
          <SummerCareTips></SummerCareTips>
      </div>
    </div>
  );
}
