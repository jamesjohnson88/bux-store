"use client";
import React, {useEffect, useRef, useState} from "react";

interface QuizQuestion {
    question: string;
    category: string;
    type: string;
    difficulty: string;
    correct_answer: string;
    incorrect_answers: string[];
    id: number;
}

function PopupQuiz(){

    const questionRef = useRef<QuizQuestion | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("/api/quiz")
            .then((res) => res.json())
            .then((data) => {
                questionRef.current = data[0]
                setLoading(false);
            });
    }, []);

    if (isLoading) return null;
    if (!questionRef.current) return <p>No questions available, uh oh!</p>

    return (
        <div className="bg-black bg-opacity-50 absolute w-full h-full flex items-start justify-center">
            <div className="bg-yellow-500 max-w-2xl z-50 m-40 p-10 rounded-lg text-center text-black relative">
                <h2 className="text-2xl font-bold mb-2">Question: {questionRef.current?.question}</h2>
                <p>{questionRef.current?.correct_answer} or {questionRef.current?.incorrect_answers[0]}</p>
            </div>
        </div>
    );
}

export default PopupQuiz;