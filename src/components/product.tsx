﻿"use client";
import React, {useEffect, useMemo, useState} from 'react';
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
    const [showDescription, setShowDescription] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [priceInfo, setPriceInfo] = useState({
        includesVat: false,
        price: Number(product.price).toFixed(2)
    });

    useEffect(() => {
        const randomlyIncludeVat = Math.random() > 0.5;
        setPriceInfo(getPrice(product.price, randomlyIncludeVat));
    }, [product.price]);
    
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
    
    const handleShowDescription = () => {
        tokenState.removeTokens(1);
        setShowDescription(true);
    }
    
    const handleShowPrice = () => {
        tokenState.removeTokens(1);
        setShowPrice(true);
    }
    
    return (
        <div className="product flex flex-col bg-blue-900 border-2 border-blue-500 p-5">
            <div className="flex justify-center">
                <div
                    className="relative m-4"
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
            <h3 className="font-bold p-5 pt-2.5 pb-1">
                {product.name}
            </h3>
            <p className="italic p-5 pt-0 pb-1">
                by {product.author}
            </p>
            {showDescription ? (
                <p className="text-sm flex-grow p-5 pt-2.5 pb-1">
                    {product.description}
                </p>) : (
                <button
                    className="text-center font-bold pt-5"
                    onClick={handleShowDescription}
                >
                    Show description
                </button>
            )}
            {showPrice ? (
                <>
                    <div className="text-center font-bold pt-5">
                        £{priceInfo.price}
                    </div>
                    <div className="text-center text-xs">
                        {priceInfo.includesVat ? '(inc. VAT)' : '(excl. VAT)'}
                    </div>
                </>
            ) : (
                <button
                    className="text-center font-bold pt-5 mb-2"
                    onClick={handleShowPrice}
                >
                    Show price
                </button>
            )}
        </div>
    );
}

export default Product;
