import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchQuiz } from "Redux/actions/quizAction";
import Quiz from "./Quiz";





const QuizHome = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchQuiz())
  },[dispatch])

  return (
    <>
      <Quiz></Quiz>
    </>
  )
}

export default QuizHome

