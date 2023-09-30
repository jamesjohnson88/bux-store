"use client";
import React from "react";
import useTokenStore from "../stores/usage-token-store";

function GameBar() {

    const tokenState = useTokenStore();
    
    return (
        <div className="w-full bg-yellow-400 p-0 m-0">
            <div className="text-2xl font-bold">Game Bar</div>
            <div className="text-2xl font-bold">Tokens: {tokenState.tokens}</div>
            <button className="text-2xl font-bold" onClick={() => tokenState.addTokens(1)}>Add Token</button>
            <div />
            <button className="text-2xl font-bold" onClick={() => tokenState.removeTokens(1)}>Remove Token</button>
        </div>
    )
}

export default GameBar;