import { fetchPopularProducts } from "@/Fetch Apis/FetchApis";

import PopularProductDetails from "@/Components/shred/Popular Products/Product Details/PopularProductDetails";



const ProductDetails = async ({ params }) => {
  let { id } = await params;
  let SummerProductsData = fetchPopularProducts();
//   console.log(typeof id, 'params id')

  let filterPopularProduct = SummerProductsData.filter(product => product.id === Number(id) )

  return (
    <div>
        {
            filterPopularProduct.map(product => <PopularProductDetails key={product.id} product={product}></PopularProductDetails>)
        }
     
    </div>
  );
};

export default ProductDetails;
