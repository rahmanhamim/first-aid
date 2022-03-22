import { Container, Grid } from "@mui/material";
import React from "react";
import BlogDetailsBanner from "./BlogDetailsBanner";
import BlogDetailsContent from "./BlogDetailsContent";
import BlogDetailsResponses from "./BlogDetailsResponses";
import BlogsDetailsSideBar from "./BlogDetailsSidebar";
import SimilarBlogs from "./SimilarBlogs";

const BlogDetailsHome = ({ blog, allBlogsData }) => {
 console.log(blog);
 return (
  <>
   <BlogDetailsBanner blog={blog} />
   <Container sx={{ mt: 10, mb: 3, maxWidth: { xl: "xl", lg: "lg" } }}>
    <Grid
     container
     spacing={2}
     sx={{ dispaly: "flex", justifyContent: "space-between" }}
    >
     <Grid item xs={12} md={7}>
      <BlogDetailsContent blog={blog} />
     </Grid>
     <Grid item xs={12} md={4}>
      <BlogsDetailsSideBar />
     </Grid>
    </Grid>
    <BlogDetailsResponses />
    <SimilarBlogs blogsData={allBlogsData} />
   </Container>
  </>
 );
};

export default BlogDetailsHome;
