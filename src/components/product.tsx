import React from 'react';

interface ProductProps {
    id: number;
    name: string;
    author: string;
    description: string;
    price: number;
    imageUrl: string;
}

function Product({ ...product }: ProductProps) {
    return (
        <div className="product flex flex-col bg-blue-900 border-2 border-blue-500 p-5">
            <h3 className="font-bold">
                {product.name}
            </h3>
            <p className="italic mb-2">
                by {product.author}
            </p>
            <p className="text-sm flex-grow">
                {product.description}
            </p>
            <div className="flex justify-center">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-64 h-64 border border-b-blue-200"
                />
            </div>
        </div>
    );
}

export default Product;
