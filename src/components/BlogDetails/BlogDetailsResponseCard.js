import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import userImg from "../../images/user-image.png";

const BlogDetailsResponseCard = () => {
 return (
  <Card
   sx={{
    maxWidth: "100%",
    px: 4,
    py: 2,
    boxShadow: "0px 15.8px 36.86px rgba(90, 141, 217, 0.1)",
   }}
  >
   <Box sx={{ display: "flex", alignItems: "center" }}>
    <CardMedia
     component="img"
     image={userImg.src}
     alt="green iguana"
     sx={{ maxWidth: "60px" }}
    />
    <Typography
     gutterBottom
     variant="h5"
     sx={{ fontSize: "1.2rem", color: "#272D4E", ml: 2 }}
    >
     Connor Morgan <br />{" "}
     <Typography
      component="span"
      sx={{ fontSize: "15px", color: "#272D4E", fontWeight: "light" }}
     >
      3 days Ago
     </Typography>
    </Typography>
   </Box>

   <CardContent sx={{ p: 0, mt: 2 }}>
    <Typography color="text.secondary">
     Lizards are a widespread group of squamate reptiles, with over 6,000
     species, ranging across all continents except Antarctica
    </Typography>
   </CardContent>
  </Card>
 );
};

export default BlogDetailsResponseCard;
