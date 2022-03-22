import { Box, Typography } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
const Answer = ({answer}) => {
  return (
    <Box sx={{p:5,backgroundColor: '#ebedef'}}>{
        answer.map((ans,index)=>
         
              <Box key={ans.questionId} sx={{borderBottom:"0.6px solid #999",pt:2}}>
               {
                        ans.selectedAnswer.isCorrect ? <Typography sx={{display: 'flex',fontSize:"24px"}}> <CheckIcon sx={{fontSize:"30px",color: 'green',mx:1}}/>Quiz {index+1}</Typography>:<Typography sx={{display: 'flex',fontSize:"24px"}}><ClearIcon  sx={{fontSize:"30px",color: 'red' ,mx:1}}/> Quiz {index+1}</Typography>
                    }
               
               <Box sx={{p:{
                   xs:2,
                     sm:3,
                        md:4,
               }}}>
                    
                       <Typography sx={{fontSize:"16px"}}>{ans.question}</Typography>
                      

             
               { ans.selectedAnswer.isCorrect === false && <Box>
                        <Typography  sx={{fontSize:"20px",color:"#84e71a",textDecoration:"underline",my:'2px'}}>Correct Answer</Typography>
                  { 
                      
                      ans.options.map(option=>
                        <>
                         
                          {option.isCorrect && ans.selectedAnswer.isCorrect===false && <Typography sx={{fontSize:"16px"}}>{option.option}</Typography>}
                        </>
                        
                        )
                  }
                  </Box>}
                  </Box>
              </Box>
         
        )
      }</Box>
  )
}

export default Answer