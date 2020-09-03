import React from 'react';
//types 
import {quizPropsTypes} from '../Types/Quiz_types';
//styles
import {ButtonWrapper,Wrapper} from './Quiz_cardStyles'



const QuizCard:React.FC<quizPropsTypes> = ({question, options,questionNr,totalQuestions,userAnswer, callback}) =>{
    
    return(
        
        <Wrapper>
            <p>Question: {questionNr}/{totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html:question}}/>
            <div>
                {options.map((answer)=>(
                    <ButtonWrapper
                    key={answer}
                    correct={userAnswer ?.correctAnswer === answer}
                    userClicked={userAnswer ?.answer === answer}
                    >
                    <button disabled={userAnswer ? true: false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}
export default QuizCard;
