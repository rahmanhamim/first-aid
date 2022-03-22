import {
 Box,
 Button,
 Card,
 Container,
 FormControl,
 FormControlLabel,
 Radio,
 RadioGroup,
 Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Question from "./Question";

const Quiz = () => {
 const quiz = useSelector((state) => state.allQuiz.quiz);
 const dispatch = useDispatch();
 const [index, setIndex] = useState(0);
 const [showQuestion, setShowQuestion] = useState(true);
 const [selectedAnswer, setSelectedAnswer] = useState([]);
 const [isSelected, setIsSelected] = useState(false);
 const [isSubmitted, setIsSubmitted] = useState(false);
 let userSelectedAnswers = [];
 const router = useRouter();

 useEffect(() => {
  setShowQuestion(true);
  selectedAnswer.forEach((element) => {
             if ( element.questionId === userSelectedAnswers[userSelectedAnswers.length - 1]?.questionId) {
                              userSelectedAnswers.pop();
                                userSelectedAnswers.push(element);
                                } 
                else {
                        userSelectedAnswers.push(element);
                 }

            let newArr = [...userSelectedAnswers];
             dispatch({
                type: "SUBMIT_QUIZ",
                payload: newArr,
              });
             });
             }, [
                     index,
                isSubmitted,
                isSelected,
                dispatch,
                selectedAnswer,
                userSelectedAnswers,
                ]);
 const goNext = () => {
  setShowQuestion(false);
  setIsSelected(false);
  let currentIndex = index;
  currentIndex += 1;
  setIndex(currentIndex);
 };
 const goBack = () => {
  let currentIndex = index;
  currentIndex -= 1;
  setIndex(currentIndex);
 };
 const handleOnChange = (option) => {
  setIsSelected(true);

  const answer = {
   questionId: quiz[index].id,
   question: quiz[index].question,
   options: quiz[index].options,
   selectedAnswer: option,
   level: quiz[index].level,
  };
  console.log(answer);
  const newArr = [...selectedAnswer, answer];
  setSelectedAnswer(newArr);
 };

 const submitQuiz = () => {
  setIsSubmitted(true);
  router.push("/quiz/results");
 };
 return (
  <Container
   sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
   }}
  >
   {showQuestion && (
    <Card
     sx={{
      width: {
       xs: "100%",
       sm: "50%",
       md: "900px",
      },
      p: 2,
      boxShadow: "-8px 4px 19px 0 rgb(0 0 0 / 12%)",
      padding: {
       xs: "2 2",
       sm: "2  2",
       md: "60px 80px",
      },
      borderRadius: "20px",
      mb: 5,
     }}
    >
     <Typography variant="h6" sx={{ textAlign: "left" }}>
      <Box
       sx={{
        display: "inline",
        background: "red",
        px: "6px",
        py: "2px",
        borderRadius: "4px",
        color: "#fff",
       }}
      >
       {quiz[index]?.id}
      </Box>
      . {quiz[index]?.question}
     </Typography>
     <Question
      index={index}
      quiz={quiz}
      handleOnChange={handleOnChange}
     ></Question>
     <Box sx={{ display: "flex", justifyContent: "space-around", py: 2 }}>
      <Typography sx={{ fontWeight: 600, fontSize: "26px" }}>
       Question {index + 1}/{quiz.length}
      </Typography>

      {index > 0 && (
       <Button
        sx={{ background: "red",px: { xs: 2,sm: 4, md: 6,
         },
         fontSize: {
          xs: "16px",
          sm: "16px",
          md: "16px",
         },
         fontWeight: "800",
         color: "#fff",
         "&:hover": {
          background: "#DB4040 ",
         },
        }}
        variant="contained"
        onClick={goBack}
       >
        Prev
       </Button>
      )}
      {index === quiz.length - 1 ? (
       <Button
        sx={{
         background: "red",
         px: {
          xs: 2,
          sm: 4,
          md: 6,
         },
         fontSize: {
          xs: "16px",
          sm: "16px",
          md: "16px",
         },
         fontWeight: "800",
         color: "#fff",
         "&:hover": {
          background: "#DB4040 ",
         },
        }}
        onClick={submitQuiz}
        disabled={!isSelected}
        variant="contained"
       >
        Submit
       </Button>
      ) : (
       <Button
        sx={{
         background: "red",
         px: {
          xs: 2,
          sm: 4,
          md: 4,
         },
         fontSize: {
          xs: "16px",
          sm: "16px",
          md: "16px",
         },
         fontWeight: "800",
         color: "#fff",
         "&:hover": {
          background: "#DB4040 ",
         },
        }}
        onClick={goNext}
        disabled={index === quiz.length - 1 || !isSelected}
       >
        Next
       </Button>
      )}
     </Box>
    </Card>
   )}
  </Container>
 );
};

export default Quiz;
