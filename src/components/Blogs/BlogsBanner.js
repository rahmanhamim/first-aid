import { Box, Typography } from "@mui/material";
import Link from "next/link";
import blogsBanner from "../../images/blogs-banner.png";

const BlogsBanner = () => {
 const Styles = {
  bannerContainer: {
   background: `url(${blogsBanner.src})`,
   minHeight: "287px",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
  },
  textWrapper: { color: "#fff", mb: 2 },
  linkColor: {
   color: "#fff",
  },
  blogsBlodText: { color: "#fff", fontWeight: "bold", fontSize: "3em" },
 };

 return (
  <Box sx={Styles.bannerContainer}>
   <Box sx={{ textAlign: "center" }}>
    <Typography sx={Styles.textWrapper}>
     <Link href="/">
      <a style={Styles.linkColor}>Home </a>
     </Link>
     / Blogs
    </Typography>
    <Typography variant="h2" sx={Styles.blogsBlodText}>
     Blogs
    </Typography>
   </Box>
  </Box>
 );
};

export default BlogsBanner;
