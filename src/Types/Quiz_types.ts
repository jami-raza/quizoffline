import React from 'react';


export type QuestionType ={
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string

}

export type Quiz_type={
    question:string
    answer:string
    options:string[]
    correct_answer:string
}
export type Answer_object={
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}
export type quizPropsTypes={
    question:string
    options:string[]
    callback:(e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: Answer_object | undefined;
    questionNr: number;
    totalQuestions: number;
}
export type QuizInfoType = {
    level: string,
    questions: number
}