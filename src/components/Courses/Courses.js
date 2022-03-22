import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import CourseCard from "./CourseCard";
import Carousel from "../shared/Carousel";
import CarouselButton from "../shared/CarouselButton";
import Content from "../shared/Content";
import Tagline from "../shared/Tagline";

const Courses = ({ courses }) => {
 const sliderRef = useRef(null);

 return (
  <div>
   <Container
    sx={{
     mt: "50px",
     maxWidth: {
      lg: "lg",
      xl: "xl",
     },
    }}
    id="courses"
   >
    <Tagline>Interacting First Aid Courses</Tagline>
    <Box
     sx={{
      display: "flex",
      justifyContent: "space-between",
      flexDirection: { xs: "column", md: "row" },
     }}
    >
     <Content>
      <Typography component="span">
       We are a company who is best known for offering awarding body accredited
       courses for anyone who wishes to <br /> take their professional life to
       the next level.
      </Typography>
     </Content>
     <Box>
      <CarouselButton sliderRef={sliderRef} />
     </Box>
    </Box>

    <Box sx={{ mt: "30px", padding: "10px" }}>
     <Container sx={{ maxWidth: { lg: "lg", xl: "xl" } }}>
      <Carousel
       sliderRef={sliderRef}
       content={courses?.map((course) => (
        <CourseCard key={course.id} course={course} />
       ))}
      />
     </Container>
    </Box>
   </Container>
  </div>
 );
};

export default Courses;
