"use client";
import React, {useEffect, useState} from "react";
import useTokenStore from "@/stores/usage-token-store";
import PopupQuiz, {QuizQuestion} from "@/components/pop-up-quiz";
import {shuffleArray} from "@/lib/array-utils";

function GameBar() {
    const tokenState = useTokenStore();

    const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);

    function addTokens(amount :number) {
        tokenState.addTokens(amount);
    }
    function removeTokens(amount :number) {
        tokenState.removeTokens(amount);
    }
    
    const handleStartQuiz =() =>{
        setQuizCompleted(false);
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
            });
    }
    
    const handleNewQuiz= () =>{
        handleStartQuiz();
    }
    
    const handleQuizComplete =() => {
       addTokens(3);
       setQuizCompleted(true);
       setCurrentQuestion(null);
    }

    useEffect(() => {
        removeTokens(1); // That's what you get for refreshing...
    }, []);
    
    return (
        <div>
            {!quizCompleted && currentQuestion
                && <PopupQuiz 
                    question={currentQuestion}
                    onQuizComplete={handleQuizComplete}
                    onPlayAgain={handleNewQuiz}
                />}
            <div className="flex w-full bg-yellow-400 p-0 m-0 font-bold text-gray-800">
                <div className="flex-1 text-l p-2 ml-20">You have {tokenState.tokens} BuxCoin to spend on browsing!</div>
                {tokenState.tokens === 0 ? (
                    <div>
                        <button className="flex-1 p-2 mr-20 text-right" onClick={handleNewQuiz}>
                            Click to earn more BuxCoin!
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default GameBar;