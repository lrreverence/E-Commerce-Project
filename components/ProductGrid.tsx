"use client";
import React, { useState } from 'react'
import HomeTabbar from './HomeTabbar'
import { productType } from '@/constants';

const ProductGrid = () => {
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
    const [products, setProducts]= useState([]);
    const [loading, setLoading] = useState(false);
    const query = `*[_type == 'product' && variant == $variant] | order(name asc)`;
    const params = {variant: selectedTab.toLocaleLowerCase()};

  return (
    <div className='mt-10 flex flex-col items-center'>
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  )
}

export default ProductGrid
