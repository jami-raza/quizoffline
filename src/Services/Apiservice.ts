import {QuestionType,Quiz_type} from '../Types/Quiz_types'

const shuffelArray = (array:any[])=>
[...array].sort(()=> Math.random() -0.5)

export const Getquizdetail=async(totalques:number,level:string): Promise<Quiz_type[]> =>{
    const data = await fetch(`https://opentdb.com/api.php?amount=${totalques}&category=9&difficulty=${level}&type=multiple`);
    let {results} = await data.json();
    const quiz:Quiz_type[]=results.map((questionobj:QuestionType)=>{
        return{
            question:questionobj.question,
            correct_answer:questionobj.correct_answer,
            options:shuffelArray([...questionobj.incorrect_answers,questionobj.correct_answer])
            
        }
    })
    return quiz;
}