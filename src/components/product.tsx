import React, {useState} from 'react';
import Image from 'next/image';
import useTokenStore from "@/stores/usage-token-store";

interface ProductProps {
    id: number;
    name: string;
    author: string;
    description: string;
    price: number;
    imageUrl: string;
}

interface MaybeVatMaybeNot {
    includesVat: boolean;
    price: string;
}

const getPrice = (price: number, includesVat: boolean): MaybeVatMaybeNot => {
    if (includesVat) {
        return {
            includesVat: true,
            price: Number(price * 1.2).toFixed(2),
        };
    }

    return {
        includesVat: false,
        price: Number(price).toFixed(2),
    };
}

function Product({ ...product }: ProductProps) {
    const tokenState = useTokenStore();
    
    const [isHovered, setIsHovered] = useState(false);
    
    const randomlyIncludeVat = Math.random() > 0.5;
    const { includesVat, price} = getPrice(product.price, randomlyIncludeVat);
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    
    const handleAddToBasket = () => {
        alert("Item out of stock");
    }
    
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
            <div className="flex justify-center"
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
                {isHovered && (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleAddToBasket}
                    >
                        Add to basket
                    </button>
                )}
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    height={254}
                    width={254}
                    quality={30}
                    className="border border-b-blue-200"
                />
            </div>
            <div>£{price}</div>
            <div>{includesVat ? '(inc. VAT)' : '(excl. VAT)'}</div>
        </div>
    );
}

export default Product;
