import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
 Button,
 Card,
 CardActions,
 CardContent,
 CardMedia,
 Typography,
} from "@mui/material";
import Link from "next/link";
import cover1 from "../../images/blogs-cover-1.png";

const BlogsPostsCard = ({ blog }) => {
 console.log(blog.title);

 const Styles = {
  card: { maxWidth: "100%", pb: "1em", mb: 5 },
  cardMedia: { borderRadius: "8px" },
  cardDateContainer: {
   display: "flex",
   alignItems: "center",
   color: "#435770",
   my: { xs: 1, md: 2 },
  },
  cardTitleText: {
   color: "#272D4E",
   fontSize: "1.6rem",
   fontWeight: "bold",
   letterSpacing: { xs: "0px", md: "1px" },
  },
  readBtn: { color: "#ED3B45", fontWeight: "bold" },
 };

 return (
  <Card sx={Styles.card}>
   <CardMedia
    component="img"
    height="300"
    image={cover1.src}
    alt="green iguana"
    sx={Styles.cardMedia}
   />
   <CardContent>
    <Typography gutterBottom variant="body1" sx={Styles.cardDateContainer}>
     <CalendarMonthIcon />
     <Typography variant="span" sx={{ mt: "2px", ml: "4px" }}>
      {blog.postDate}
     </Typography>
    </Typography>
    <Typography gutterBottom variant="h1" sx={Styles.cardTitleText}>
     {blog.mainTitle}
    </Typography>
    <Typography variant="body2" sx={{ color: "#435770" }}>
     Leverage agile frameworks to provide a robust synopsis for high level
     overviews. Iterative approaches to corporate strategy foster collaborative
     thinking to further the overall value proposition.
    </Typography>
   </CardContent>
   <CardActions>
    <Link href={`/blogs/${blog.id}`} passHref>
     <Button size="small" sx={Styles.readBtn}>
      Read More
     </Button>
    </Link>
   </CardActions>
  </Card>
 );
};

export default BlogsPostsCard;
