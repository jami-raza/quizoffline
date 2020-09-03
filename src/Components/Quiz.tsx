import React, { useState } from 'react';
// Components 
import QuizCard from './QuizCard';
// Types
import {Quiz_type,Answer_object,QuizInfoType} from '../Types/Quiz_types'
// Api
import {Getquizdetail} from '../Services/Apiservice'
// Styles
import {GlobalStyle,Wrapper} from './QuizStyles'



const Total_question = 10
function Quiz(props:QuizInfoType) {
  let [quiz, setquiz]=useState<Quiz_type[]>([]);
  let [currentStep, setcurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [loading, setLoading] = useState(false);
  let [useranswer, setUserAnswer] = useState<Answer_object[]>([]);
  let [gameOver, setGameOver] = useState(true);
  

    const Startquiz = async()=>{
        setLoading(true);
        setGameOver(false)
      const questions = await Getquizdetail(props.questions,props.level);
      console.log(questions);
      setquiz(questions)
      setScore(0);
      setUserAnswer([]);
      setcurrentStep(0);
      setLoading(false);
    };
    
 const checkAnswer = (e:any)=>{
   // Check the correct answer and set score
     if (!gameOver){
    const answer = e.currentTarget.value;
    const correct = quiz[currentStep].correct_answer === answer;
        if (correct) setScore(++score)
    // Save the answer in array
    const answerObject = {
        question: quiz[currentStep].question,
        answer,
        correct,
        correctAnswer:quiz[currentStep].correct_answer,
    };
    setUserAnswer((score)=>[...score, answerObject]);
     }
 }
  
 const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQ = currentStep + 1;

    if (nextQ === quiz.length) {
      setGameOver(true)
      
    } else {
      setcurrentStep(nextQ)
      
      
    }
  };
  
  
  return (
      <>
    <GlobalStyle/>
    <Wrapper>
        <h1>Quiz Academy</h1>
        {gameOver || useranswer.length === Total_question ? (
          <button className='start' onClick={Startquiz}>
            Start {props.level}
          </button>
        ) : null}
        
        {!gameOver ? <p className='score'>Score:{score}</p>:null}
        {loading ? <p>Loading Questions...</p>:null}
        
        {!loading && !gameOver && (
      <QuizCard
      options={quiz[currentStep].options}
      question={quiz[currentStep].question}
      callback={checkAnswer}
      userAnswer= {useranswer ? useranswer[currentStep]:undefined}
      questionNr={currentStep +1}
      totalQuestions={Total_question}
      />
      )}
      {!gameOver && !loading && useranswer.length === currentStep + 1 && currentStep !== Total_question - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
        </Wrapper>
        
    </>
  );
}

export default Quiz;
