import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import Answer from "./Answer";
import QuizCourse from "./QuizCourse";
import QuizResultHeader from "./QuizResultHeader";


const ResultsHome = ({courses}) => {

  const answer = useSelector(state => state.allQuiz.finalAnswers)
  const [level,setLevel]=useState();
  let beginner = 0;
  let intermediate = 0;
  let advanced = 0;


   let correctAnswerArray =[]
  //  let quizAnswerlevel =[]
      answer.forEach((element) => {
         element.options.forEach((option) => {
              if(option.isCorrect && element.selectedAnswer.isCorrect){
                  correctAnswerArray.push(option.option)
                  // quizAnswerlevel.push(element.level)
              }
         })
         if (element.selectedAnswer.isCorrect && element.level === 'beginner') {
          beginner++;
        }
        else if (element.selectedAnswer.isCorrect && element.level === 'intermediate') {
           intermediate++;
      }
      else if (element.selectedAnswer.isCorrect && element.level === 'advanced') {
          advanced++;
      }

      })
      useEffect(() => {
        if (beginner > intermediate || beginner > advanced) {
          setLevel('beginner')
        }
       else if (intermediate > beginner || intermediate > advanced) {
          setLevel('intermediate')
       }
        else if (advanced > beginner || advanced > intermediate) {
          setLevel('advanced');
        }
       else {
          setLevel('beginner');
         }
      },[beginner,advanced,intermediate])

  
  return (
      
    <Container sx={{my:1}}>

      <QuizResultHeader answer={answer} correctAnswerArray={correctAnswerArray} ></QuizResultHeader>
      <Answer  answer={answer}/>
        <QuizCourse level={level} courses={courses}/>
    </Container>
  )
}

export default ResultsHome