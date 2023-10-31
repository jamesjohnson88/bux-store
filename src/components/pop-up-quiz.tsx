import React, { useState } from "react";
import { decodeHtml } from "@/lib/string-utils";

export interface QuizQuestion {
    question: string;
    category: string;
    type: string;
    difficulty: string;
    all_answers: string[];
    correct_answer: string;
    incorrect_answers: string[];
    id: number;
}

interface PopupQuizProps {
    question: QuizQuestion | null;
    onQuizComplete: () => void;
    onPlayAgain: () => void;
}

function PopupQuiz({ question, onQuizComplete, onPlayAgain }: PopupQuizProps) {
    const [backgroundClass, setBackgroundClass] = useState<string>("bg-yellow-500");
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [selectedCorrectly, setSelectedCorrectly] = useState<boolean | null>(null);
    
    const disabledBtnClasses = "cursor-not-allowed bg-gray-600 hover:bg-gray-700";

    const handleAnswerSelect = (selected: string) => {
        setSelectedAnswer(selected);

        const isCorrect = selected === question?.correct_answer;
        if (isCorrect) {
            setBackgroundClass("bg-green-500");
            setSelectedCorrectly(true);
        } else {
            setBackgroundClass("bg-red-500");
            setSelectedCorrectly(false);
        }
    };

    const handleCloseQuiz = () => {
        setSelectedAnswer(null);
        setBackgroundClass("bg-yellow-500");
        onQuizComplete();
    };

    const handlePlayAgain = () => {
        setSelectedAnswer(null);
        setBackgroundClass("bg-yellow-500");
        onPlayAgain();
    };

    if (!question) return <p>error: no questions found</p>;

    return (
        <div className="bg-black bg-opacity-50 absolute w-full h-full flex items-start justify-center">
            <div className={`${backgroundClass} max-w-3xl z-50 m-40 p-10 rounded-lg text-center text-black relative`}>
                <h2 className="text-2xl font-bold mb-10">Q: {decodeHtml(question.question)}</h2>
                <div className="grid grid-cols-2 gap-4">
                    {question.all_answers.map((answer, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(answer)}
                            className={`bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                                !!selectedAnswer ? disabledBtnClasses : ""
                            }`}
                            disabled={!!selectedAnswer}
                        >
                            {decodeHtml(answer)}
                        </button>
                    ))}
                </div>
                {!!selectedAnswer ? (
                    <div>
                        <h2 className="text-2xl font-bold mt-10">A: {decodeHtml(question.correct_answer)}</h2>
                        {!!selectedCorrectly ? (
                            <button
                                onClick={handleCloseQuiz}
                                className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            >
                                Close
                            </button>
                        ) : (
                            <button
                                onClick={handlePlayAgain}
                                className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            >
                                Play Again
                            </button>
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default PopupQuiz;
