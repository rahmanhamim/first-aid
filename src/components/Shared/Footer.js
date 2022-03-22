import {
 Box,
 Button,
 Container,
 Grid,
 styled,
 TextField,
 Typography,
} from "@mui/material";
import Image from "next/image";
import logo from "../../images/footer-logo.png";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

// contact input field style
const CssTextField = styled(TextField)({
 "*": {
  color: "#C5C5C5 !important",
 },
 "& label.Mui-focused": {
  color: "#C5C5C5",
 },
 "& .MuiOutlinedInput-root": {
  "& fieldset": {
   borderColor: "#C5C5C5",
  },
  "&:hover fieldset": {
   borderColor: "#ED3B45",
  },
  "&.Mui-focused fieldset": {
   borderColor: "rgba(237, 59, 69, 0.7)",
  },
 },
});

const Footer = () => {
 return (
  <Box sx={{ background: "#332727", color: "#fff", py: 8 }}>
   <Container sx={{ maxWidth: { xl: "xl", lg: "lg" } }}>
    <Grid container spacing={2}>
     <Grid item xs={12} md={4}>
      <Image src={logo} alt="logo" />
      <Typography sx={{ mt: 2, mb: 3 }}>
       Beaufort House, 15 St Botolph <br /> Street, London EC3A 7BB
      </Typography>
      <Box
       sx={{
        "*": {
         bgcolor: "#463131",
         fontSize: "50px !important",
         padding: "9px",
         borderRadius: "50%",
         mr: 2,
        },
       }}
      >
       <FacebookTwoToneIcon />
       <LinkedInIcon />
       <TwitterIcon />
      </Box>
     </Grid>
     {/* Help Links */}
     <Grid item xs={12} md={2}>
      <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", mb: 3 }}>
       Help Links
      </Typography>
      <Link href="/">
       <a style={{ display: "block", margin: "3px 0" }}>Home</a>
      </Link>
      <Link href="/">
       <a style={{ display: "block", margin: "3px 0" }}>About</a>
      </Link>
      <Link href="/">
       <a style={{ display: "block", margin: "3px 0" }}>All Courses</a>
      </Link>
      <Link href="/">
       <a style={{ display: "block", margin: "3px 0" }}>Events</a>
      </Link>
      <Link href="/">
       <a style={{ display: "block", margin: "3px 0" }}>Termes of use</a>
      </Link>
      <Link href="/">
       <a style={{ display: "block", margin: "3px 0" }}>Contact</a>
      </Link>
     </Grid>

     {/* Free Resourses Links */}
     <Grid item xs={12} md={2}>
      <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", mb: 3 }}>
       Free Resources
      </Typography>
      <Link href="/">
       <a style={{ display: "block", margin: "3px 0" }}>CV Template</a>
      </Link>
      <Link href="/">
       <a style={{ display: "block", margin: "3px 0" }}>Free Courses</a>
      </Link>
      <Link href="/quiz">
       <a style={{ display: "block", margin: "3px 0" }}>Free Quizzes</a>
      </Link>
     </Grid>
     {/* Contact Us Section */}
     <Grid item xs={12} md={4}>
      <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", mb: 3 }}>
       Contact Us
      </Typography>
      <CssTextField
       fullWidth
       label="Enter Your Number"
       id="custom-css-outlined-input"
      />
      <Button
       variant="contained"
       sx={{
        background: "rgba(237, 59, 69, 0.7)",
        my: 3,
        px: 3,
        py: 1,

        "&:hover": {
         background: "#fff",
         color: "#332727",
        },
       }}
      >
       Request a Callback
      </Button>
     </Grid>
    </Grid>
   </Container>
  </Box>
 );
};

export default Footer;
