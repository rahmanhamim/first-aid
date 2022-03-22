import { Box, Button, Container, Typography } from "@mui/material"
import CourseCard from "components/Courses/CourseCard"


import Link from "next/link"
import React,{ useEffect, useState } from "react"



const QuizCourse = ({level , courses}) => {
 
    const [courseByquizLvl,setCourseByQuizlvl]=useState([])
 
    
       useEffect(() => {
        const courseByLevel = courses?.filter(course => course.level === level)
        setCourseByQuizlvl(courseByLevel);
       },[level,courses])
   
   

  return (
    <Box sx={{ my: 3 }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h5">Recommended Courses For You</Typography>
        </Box>
        <Box sx={{
          display: 'flex', flexDirection: {
            xs: 'column',
            sm: 'column', md: 'row'

          }
        }}>

          {
            courseByquizLvl?.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
          }

        </Box>
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Link href="/quiz"><a> <Button sx={{
            color: '#fff', backgroundColor: 'red', px: 3, "&:hover": {
              backgroundColor: "red"
            }
          }}>Retake</Button></a></Link>
        </Box>
      </Container>

    </Box>
  )
}

export default QuizCourse