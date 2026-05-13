import { fetchPopularProducts } from '@/Fetch Apis/FetchApis';
import React from 'react';

const ProductDetails = async({params}) => {
    let {id} = await params;
    let SummerProductsData = fetchPopularProducts();
     
    return (
        <div>
              i am product details
        </div>
    );
};

export default ProductDetails;