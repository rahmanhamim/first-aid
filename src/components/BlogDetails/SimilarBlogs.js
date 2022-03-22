import { Box, CardMedia, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
 backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
 ...theme.typography.body2,
 padding: theme.spacing(2),
 textAlign: "center",
 color: theme.palette.text.secondary,
}));
const SimilarBlogs = ({ blogsData }) => {
 return (
  <Box sx={{ mb: 10 }}>
   <Typography
    variant="h4"
    sx={{ mr: 1, color: "#272D4E", fontSize: "3rem", fontWeight: "900", m: 2 }}
   >
    Similar Blogs
   </Typography>
   <Box sx={{ flexGrow: 1 }}>
    <Grid
     container
     spacing={{ xs: 2, md: 3 }}
     columns={{ xs: 4, sm: 8, md: 12 }}
    >
     {blogsData.slice(1, 4).map((blog, index) => (
      <Grid item xs={12} sm={4} md={4} key={index} sx={{ height: "100%" }}>
       <Item sx={{ boxShadow: "none" }}>
        <CardMedia
         component="img"
         height="240"
         image={blog?.featureImg1}
         alt="green iguana"
         sx={{ borderRadius: "8px", mb: 1 }}
        />
        <Box sx={{ display: "flex", my: 2 }}>
         <Typography
          sx={{ fontWeight: "bold", fontSize: "13.49px", color: "#333333" }}
         >
          DEVELOPMENT
         </Typography>
         <Typography sx={{ fontSize: "13.49px", color: "#999999", pl: 2 }}>
          23 September 2020
         </Typography>
        </Box>
        <Box sx={{ textAlign: "left" }}>
         <Typography
          sx={{
           fontWeight: "900",
           fontSize: "26.98px",
           color: "#272D4E",
           fontFamily: "Circular Std",
          }}
         >
          {blog.mainTitle}
         </Typography>
         <Typography
          sx={{
           fontWeight: "400",
           fontSize: "15.98px",
           color: "#435770",
           fontFamily: "Manrope",
           my: 3,
          }}
         >
          {blog.summary.slice(0, 150)}
         </Typography>
         <Link href="/">
          <a
           style={{
            textDecoration: "none",
            color: "#ED3B45",
           }}
          >
           Read more
          </a>
         </Link>
        </Box>
       </Item>
      </Grid>
     ))}
    </Grid>
   </Box>
  </Box>
 );
};

export default SimilarBlogs;
