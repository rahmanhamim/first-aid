import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import blogsBanner from "../../images/blogs-cover-1.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const BlogDetailsBanner = ({ blog }) => {
 const Styles = {
  bannerContainer: {
   background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${blogsBanner.src}) `,
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   minHeight: "287px",
  },
  textWrapper: { color: "#fff", mb: 1 },
  linkColor: {
   color: "#fff",
  },
  bannerTitleText: {
   color: "#fff",
   fontWeight: "bold",
   fontSize: "2.5rem",
   maxWidth: "1000px",
  },
 };

 return (
  <Box sx={Styles.bannerContainer}>
   <Container
    sx={{
     maxWidth: { xl: "xl", lg: "lg" },
     minHeight: "287px",
     display: "flex",
     alignItems: "center",
     py: 15,
    }}
   >
    <Box>
     <Typography sx={Styles.textWrapper}>
      <Link href="/">
       <a style={Styles.linkColor}>Home </a>
      </Link>
      / Blogs
     </Typography>
     <Typography variant="h2" sx={Styles.bannerTitleText}>
      {blog.mainTitle}
     </Typography>
     <Typography
      variant="body"
      sx={{ color: "#fff", display: "flex", alignItems: "center", my: 1 }}
     >
      <CalendarMonthIcon sx={{ mr: 1 }} />
      {blog.postDate}
     </Typography>
    </Box>
   </Container>
  </Box>
 );
};

export default BlogDetailsBanner;
