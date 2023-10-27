"use client";
import React, { useState } from "react";
import {decodeHtml} from "@/lib/string-utils";

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

function PopupQuiz(question: QuizQuestion) {
    const [backgroundClass, setBackgroundClass] = useState("bg-yellow-500");

    const handleAnswerSelect = (selected: string) => {
        const isCorrect = selected === question?.correct_answer;

        if (isCorrect) {
            setBackgroundClass("bg-green-500");
        } else {
            setBackgroundClass("bg-red-500");
        }
    };

    if (!question) return <p>error: no questions found</p>;

    return (
        <div className="bg-black bg-opacity-50 absolute w-full h-full flex items-start justify-center">
            <div className={`${backgroundClass} max-w-3xl z-50 m-40 p-10 rounded-lg text-center text-black relative`}>
                <h2 className="text-2xl font-bold mb-2">Q: {decodeHtml(question.question)}</h2>
                <div className="grid grid-cols-2 gap-4">
                    {question.all_answers.map((answer, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(answer)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {decodeHtml(answer)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PopupQuiz;
