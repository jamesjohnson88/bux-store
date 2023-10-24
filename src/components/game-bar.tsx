"use client";
import React, { useEffect } from "react";
import useTokenStore from "../stores/usage-token-store";
import useProductListingStore from "@/stores/product-listing-store";

function GameBar() {
    const tokenState = useTokenStore();
    const listingState = useProductListingStore();

    useEffect(() => {
        if (tokenState.tokens === 0) {
            listingState.lockListings();
        } else if (tokenState.tokens === 1) {
            console.log("unlocking listings"); // todo - we don't want to call this if we're going from 2 to 1
            listingState.unlockListings();
        }
    }, [tokenState.tokens]);

    function addToken() {
        tokenState.addTokens(1);
    }

    function removeToken() {
        tokenState.removeTokens(1);
    }

    return (
        <div className="w-full bg-yellow-400 p-0 m-0">
            <div className="text-2xl font-bold">Game Bar</div>
            <div className="text-2xl font-bold">Tokens: {tokenState.tokens}</div>
            <button className="text-2xl font-bold" onClick={addToken}>
                Add Token
            </button>
            <div />
            <button className="text-2xl font-bold" onClick={removeToken}>
                Remove Token
            </button>
        </div>
    );
}

export default GameBar;