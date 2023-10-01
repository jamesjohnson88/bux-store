"use client";
import React from 'react';
import { useState } from 'react';
import Product from "@/components/product";
import useProductListingStore from "@/stores/product-listing-store";

interface ProductListingProps {
    // @ts-ignore
    products: Product[];
}

function ProductListing({ products }: ProductListingProps) {
    const productListingState = useProductListingStore();
    const [sortType, setSortType] = useState('');
    
    var lockClass = productListingState.isLocked ? 'bg-red-500' : 'bg-green-500';
  
  function toggleSortType() {
    setSortType(sortType === 'Random' ? 'No' : 'Random');
    sortType === 'Random' ?
        products.sort((a, b) => a.id - b.id) :
        products.sort(() => Math.random() - 0.5);
  }
  
  return (
    <div className={`product-listing ${lockClass}`}>
        <div className="container mx-auto flex justify-between items-center">
        <button onClick={toggleSortType} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded">
          Sort by price? {sortType}
        </button>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-2">
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;