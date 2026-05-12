import { fetchPopularProducts } from '@/Fetch Apis/FetchApis';
import React from 'react';
import Product from './Product/Product';

const PopularSummerProducts = async() => {
    let SummerProductsData = await fetchPopularProducts();
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-y-10 md:gap-x-8 justify-items-center lg:max-w-7xl mx-auto'>
               {
                  SummerProductsData.slice(0,3).map(productData => <Product key={productData.id} productData={productData}></Product>)
               }
        </div>
    );
};

export default PopularSummerProducts;