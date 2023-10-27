"use client";
import React, {useEffect, useState} from "react";
import useTokenStore from "@/stores/usage-token-store";
import useProductListingStore from "@/stores/product-listing-store";
import PopupQuiz, {QuizQuestion} from "@/components/pop-up-quiz";
import {shuffleArray} from "@/lib/array-utils";

function GameBar() {
    const tokenState = useTokenStore();
    const listingState = useProductListingStore();
    
    const [questionInProgress, setQuestionInProgress] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);

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
    
    function initQuit(){
        fetch("/api/quiz")
            .then((res) => res.json())
            .then((data) => {
                const { correct_answer, incorrect_answers } = data[0];
                const all_answers = [correct_answer, ...incorrect_answers];
                shuffleArray(all_answers);
                setCurrentQuestion({
                    ...data[0],
                    all_answers,
                });
                // setQuestionInProgress(true);
            });
    }
    
    function handleNewQuiz(){
        return null;// todo- logic
    }
    
    useEffect(() => {
        initQuit();
    }, []);
    
    return (
        <div>
            {listingState.isLocked && currentQuestion && <PopupQuiz {...currentQuestion}/>}
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