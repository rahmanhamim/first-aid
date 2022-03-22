import { Box, Button, Grid, Typography } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BlogDetailsResponseCard from "./BlogDetailsResponseCard";

const BlogDetailsResponses = () => {
 return (
  <>
   <Box sx={{ display: { md: "flex" }, alignItems: "center", mt: 10 }}>
    <Typography
     variant="h4"
     sx={{ color: "#272D4E", fontWeight: "bold", mb: { xs: 5, md: 0 } }}
    >
     People`s Response
    </Typography>
    <Box>
     <Box
      sx={{
       display: "flex",
       width: "130px",
       alignItems: "center",
       boxShadow: "0px 15.8px 36.86px rgba(90, 141, 217, 0.2)",
       px: 2,
       py: 1,
       borderRadius: "8px",
       m: 2,
      }}
     >
      <ThumbUpOutlinedIcon sx={{ color: "#ED3B45" }} />

      <Typography sx={{ marginLeft: "10px", fontWeight: "bold" }}>
       Like
       <Typography component="span" sx={{ color: "#85899F", ml: 1 }}>
        112
       </Typography>
      </Typography>
     </Box>
    </Box>
    <Box
     sx={{
      display: "flex",
      width: "130px",
      alignItems: "center",
      boxShadow: "0px 15.8px 36.86px rgba(90, 141, 217, 0.2)",
      px: 2,
      py: 1,
      borderRadius: "8px",
      m: 2,
     }}
    >
     <Typography
      sx={{ marginLeft: "10px", fontWeight: "bold", display: "flex" }}
     >
      <ShareOutlinedIcon sx={{ color: "#ED3B45", mr: 1 }} />
      <Typography component="span" sx={{ fontWeight: "bold" }}>
       Share
      </Typography>
     </Typography>
    </Box>
   </Box>

   <Box sx={{ mb: 15 }}>
    <Grid container spacing={4} sx={{ mb: 5, mt: 2 }}>
     {Array.from(Array(4)).map((_, index) => (
      <Grid key={index} item xs={12} md={6}>
       <BlogDetailsResponseCard />
      </Grid>
     ))}
    </Grid>
    <Button
     sx={{
      color: "#ED3B45",
      border: "2px solid #ED3B45",
      px: 5,
      py: "12px",
      fontWeight: "bold",
      display: "block",
      mx: "auto",
     }}
    >
     Load More
    </Button>
   </Box>
  </>
 );
};

export default BlogDetailsResponses;
