import React, {useMemo, useState} from 'react';
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

    const priceInfo = useMemo(() => {
        const randomlyIncludeVat = Math.random() > 0.5;
        return getPrice(product.price, randomlyIncludeVat);
    }, [product.price]);

    const { includesVat, price } = priceInfo;
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    
    const handleAddToBasket = () => {
        tokenState.removeTokens(1);
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
            <div className="flex justify-center">
                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        height={254}
                        width={254}
                        quality={30}
                        className="border-2 border-yellow-500"
                    />
                    {isHovered && (
                        <button
                            className="absolute inset-0 flex items-center justify-center w-full h-full bg-blue-800 
                            bg-opacity-0 text-white text-xl font-bold hover:bg-opacity-80 transition-all shadow-md
                            border-2 border-blue-500"
                            onClick={handleAddToBasket}
                        >
                            Add to basket
                        </button>
                    )}
                </div>
            </div>
            <div>£{price}</div>
            <div>{includesVat ? '(inc. VAT)' : '(excl. VAT)'}</div>
        </div>
    );
}

export default Product;
