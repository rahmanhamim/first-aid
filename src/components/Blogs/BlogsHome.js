import { Container, Grid, Pagination, PaginationItem } from "@mui/material";
import ViewCourseBottom from "components/Shared/ViewCourseBottom";
import { useState } from "react";
import BlogsBanner from "./BlogsBanner";
import BlogsPostsCard from "./BlogsPostsCard";
import BlogsSideBar from "./BlogsSideBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BlogsHome = ({ blogsData }) => {
 const [currentPage, setCurrentPage] = useState(1);
 const [postsPerPage] = useState(4);

 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = blogsData.slice(indexOfFirstPost, indexOfLastPost);

 const pageNumbers = [];
 for (let i = 1; i <= Math.ceil(blogsData.length / postsPerPage); i++) {
  pageNumbers.push(i);
 }

 const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };

 return (
  <>
   <BlogsBanner />
   <Container sx={{ mt: 10, mb: 3, maxWidth: { xl: "xl", lg: "lg" } }}>
    <Grid
     container
     spacing={2}
     sx={{ dispaly: "flex", justifyContent: "space-between" }}
    >
     <Grid item xs={12} md={7}>
      {currentPosts.map((blog) => (
       <BlogsPostsCard key={blog.id} blog={blog} />
      ))}
     </Grid>
     <Grid item xs={12} md={4}>
      <BlogsSideBar />
     </Grid>
    </Grid>
   </Container>

   <Pagination
    sx={{ display: "flex", justifyContent: "center", py: 5 }}
    count={pageNumbers.length}
    onChange={(e, value) => paginate(value)}
    renderItem={(item) => (
     <PaginationItem
      sx={{
       color: "#435770",
       borderRadius: "8px",
       p: 3,
       border: "1px solid rgba(0, 0, 0, 0.15)",
       "&.Mui-selected": {
        backgroundColor: "#ED3B45",
        color: "white",
       },
      }}
      components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
      {...item}
     />
    )}
   />
   <ViewCourseBottom />
  </>
 );
};

export default BlogsHome;
