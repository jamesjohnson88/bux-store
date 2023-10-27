"use client";
import React, { useEffect } from "react";
import useTokenStore from "@/stores/usage-token-store";
import useProductListingStore from "@/stores/product-listing-store";
import PopupQuiz from "@/components/pop-up-quiz";

function GameBar() {
    const tokenState = useTokenStore();
    const listingState = useProductListingStore();

    useEffect(() => {
        if (tokenState.tokens === 0) {
            listingState.lockListings();
        } else if (tokenState.tokens === 1) {
            listingState.unlockListings();
        }
    }, [tokenState.tokens]);

    // todo - these will become obsolete
    function addToken() {
        tokenState.addTokens(1);
    }
    function removeToken() {
        tokenState.removeTokens(1);
    }
    
    function handleNewQuiz(){
        return null;
    }
    
    return (
        <div>
            {listingState.isLocked && <PopupQuiz />}
            <div className="w-full bg-yellow-400 p-0 m-0">
                <div className="text-2xl font-bold">{} Tokens: {tokenState.tokens === 0 ? "No" : "Yes"}</div>
                {/* todo - remove these buttons */}
                <button className="text-2xl font-bold" onClick={addToken}>
                    [debug] Token++
                </button>
                <button className="text-2xl font-bold" onClick={removeToken}>
                    [debug] Token--
                </button>
                <div>
                    <button className="text-2xl font-bold" onClick={handleNewQuiz}>
                        Earn Tokens
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GameBar;