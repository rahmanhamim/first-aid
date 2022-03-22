import { Box, Typography } from "@mui/material"

const QuizResultHeader = ({correctAnswerArray,answer}) => {
  return (
    <Box sx={{background: "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 51.22%, rgba(255, 255, 255, 0) 127.72%), #ED3B45",px:2,color:"#fff", height:"50px", display: 'flex',justifyContent: 'space-between',alignItems: 'center',borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}>
       <Typography>{correctAnswerArray.length} /{ answer.length} answer</Typography>

       { 
        correctAnswerArray.length > 5 ? <Typography> Quiz Pass</Typography>:<Typography> Quiz Fail</Typography>
       }
    
    </Box>
  )
}

export default QuizResultHeader