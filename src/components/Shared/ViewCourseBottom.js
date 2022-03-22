import { Box, Button, Container, Typography } from "@mui/material";

const ViewCourseBottom = () => {
 const Styles = {
  sloganBoxStyles: {
   background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 51.22%, rgba(255, 255, 255, 0) 127.72%), #ED3B45",
   height: "220px",
   display: "flex",
   alignItems: "center",
   py: { xs: 20, md: 15 },
  },
  sloganContainerStyles: {
   color: "#fff",
   display: { xs: "block", md: "flex" },
   justifyContent: "space-between",
   alignItems: "center",
   maxWidth: { xl: "xl", lg: "lg" },
  },
  viewCourseBtnStyles: {
   bgcolor: "#fff",
   color: "#ED3B45",
   fontWeight: "bold",
   py: 2,
   px: 4,
   my: 2,
   "&:hover": {
    bgcolor: "#332727",
    color: "#fff",
   },
  },
 };

 return (
  <Box sx={Styles.sloganBoxStyles}>
   <Container sx={Styles.sloganContainerStyles}>
    <Box>
     <Typography variant="h4" sx={{ fontWeight: "bold" }}>
      Be Confidend! Have an wonder <br />
      journey with our course
     </Typography>
     <Typography>
      The sky was cloudless and of a deep dark blue spectacle before us
     </Typography>
    </Box>
    <Button sx={Styles.viewCourseBtnStyles}>View Course</Button>
   </Container>
  </Box>
 );
};

export default ViewCourseBottom;
