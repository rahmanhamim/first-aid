import { Box, Typography } from "@mui/material";
import Image from "next/image";

const BlogDetailsContent = ({ blog }) => {
 console.log(blog);

 const Styles = {
  textContentStyle: {
   textAlign: "justify",
   mb: 5,
   color: "#435770",
  },
  quoteTextStyle: {
   textAlign: "justify",
   mt: 5,
   mb: 1,
   fontWeight: "bold",
   borderLeft: "4px solid #C4C4C4",
   pl: 2,
   color: "#272D4E",
  },
  quoteAuthorStyle: {
   display: "block",
   mb: 5,
   ml: 5,
  },
  imageContainer: { display: "flex", justifyContent: "space-between", my: 4 },
 };

 return (
  <>
   <Typography variant="body1" sx={Styles.textContentStyle}>
    {blog.textContent1}
   </Typography>
   <Typography variant="body1" sx={Styles.textContentStyle}>
    {blog.textContent1}
   </Typography>
   <Typography variant="body1" sx={Styles.quoteTextStyle}>
    {blog.quote} <br />
   </Typography>
   <Typography component="span" sx={Styles.quoteAuthorStyle}>
    --- {blog.quoteAuthor}
   </Typography>
   <Typography variant="body1" sx={Styles.textContentStyle}>
    {blog.textContent3}
   </Typography>
   <Box sx={Styles.imageContainer}>
    <Box sx={{ mx: 1 }}>
     <Image src={blog.featureImg1} alt="feature img" width="240" height="160" />
    </Box>
    <Box sx={{ mx: 1 }}>
     <Image src={blog.featureImg2} alt="feature img" width="240" height="160" />
    </Box>
    <Box sx={{ mx: 1 }}>
     <Image src={blog.featureImg3} alt="feature img" width="240" height="160" />
    </Box>
   </Box>
   <Typography variant="body1" sx={Styles.textContentStyle}>
    {blog.textContent4}
   </Typography>
  </>
 );
};

export default BlogDetailsContent;
