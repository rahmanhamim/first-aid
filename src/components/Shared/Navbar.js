import {
    AppBar,
    Badge,
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    InputBase,
    Menu,
    Paper,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LoginModal from "components/Auth/LoginModal";
import useAuth from "hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../images/logo.png";
import PrimaryButton from "./PrimaryButton";
import SegmentRoundedIcon from "@mui/icons-material/SegmentRounded";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

const Styles = {
    appBarStyle: {
        backgroundColor: "white",
        boxShadow: "none",
        padding: "40px 0px",
    },
    appBarStyleScroll: {
        padding: "10px 0px",
        backgroundColor: "#fff8f7",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },
    navlink: {
        color: "#4A5074",
        fontWeight: "bold",
        fontSize: {
            lg: "20.175px",
        },
        textTransform: "capitalize",
    },
    loginButton: {
        fontWeight: "bold",
        borderRadius: "11.21px",
        width: {
            xs: "100px",
            md: "152.43px",
        },
        height: "67.25px",
    },

    logoContainer: { mr: 2, display: { xs: "none", md: "flex" } },

    navLinkContainer: {
        flexGrow: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        display: {
            xs: "none",
            md: "flex",
        },
    },
    navLinkMobile: {
        display: "block",
        color: "#272D4E",
        my: 2,
        fontSize: "1rem",
        textAlign: "center",
        backgroundColor: "#FFF6F6",
        width: "130px",
        margin: "1em auto",
    },
};

const Navbar = () => {
    const states = useSelector((state) => state.cart);
    const { cart } = states;
    const router = useRouter();
    const { user, logOut, open, setOpen } = useAuth();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const gotoCart = () => {
        router.push("/cart");
    };

    const [state, setState] = useState(false);
    const [navScroll, setNavScroll] = useState(false);

    const changeNavBg = () => {
        if (window.scrollY > 80) {
            setNavScroll(true);
        } else {
            setNavScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavBg);
        return () => window.removeEventListener("scroll", changeNavBg);
    });

    //  --------------------------------------------
    return (
        <>
            <AppBar
                position="static"
                sx={navScroll ? Styles.appBarStyleScroll : Styles.appBarStyle}
            >
                <Container
                    sx={{
                        maxWidth: {
                            lg: "lg",
                            xl: "xl",
                        },
                    }}
                >
                    <Toolbar disableGutters>
                        <Typography variant="h6" noWrap component="div" sx={Styles.logoContainer}>
                            <Image src={logo} alt="" />
                        </Typography>

                        {user.email && (
                            <Typography sx={{ color: "black" }}>Signed in: {user?.email}</Typography>
                        )}

                        <Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: "flex", md: "none" }, maxWidth: "220px" }}
                            >
                                <Image src={logo} alt="" />
                            </Typography>
                        </Box>

                        <Box sx={Styles.navLinkContainer}>
                            {/* <TextField id="outlined-basic" placeholder="Search" variant="outlined" /> */}
                            <Paper
                                component="form"
                                sx={{
                                    p: 1,
                                    mx: 1,
                                    width: "290px",
                                    display: { md: "none", lg: "block" },
                                }}
                            >
                                <IconButton type="submit" sx={{}} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    placeholder="Search Course"
                                    inputProps={{ "aria-label": "Search Course" }}
                                />
                            </Paper>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexBasis: "500px",
                                }}
                            >
                                <Link href="/" style={{ textDecoration: "none" }} passHref>
                                    <Button sx={Styles.navlink}>Home</Button>
                                </Link>
                                <Link href="/#courses" passHref>
                                    <Button sx={Styles.navlink}>Courses</Button>
                                </Link>
                                <Link href="/blogs" style={{ textDecoration: "none" }} passHref>
                                    <Button sx={Styles.navlink}>Blogs</Button>
                                </Link>
                                <Button sx={Styles.navlink}>Contact</Button>

                                <Button>
                                    <Badge badgeContent={cart.length} color="error">
                                        <FaShoppingCart
                                            onClick={gotoCart}
                                            style={{ ...Styles.navlink, fontSize: "25px" }}
                                        />
                                    </Badge>
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
                            <PrimaryButton onClick={!user.email ? handleOpen : logOut}>
                                {!user.email ? "Login" : "Logout"}
                            </PrimaryButton>

                            <LoginModal handleClose={handleClose} open={open} />
                        </Box>

                        <Box
                            sx={{
                                marginLeft: "auto",
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                sx={{ color: "#272D4E" }}
                                onClick={() => setState(true)}
                            >
                                <SegmentRoundedIcon style={{ fontSize: "2rem" }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* mobile nav drawer */}
            <Drawer open={state} onClose={() => setState(false)}>
                <Box sx={{ width: 250 }}>
                    <Box sx={{ width: "150px", m: "2em auto" }}>
                        <Image src={logo} alt="site logo" />
                    </Box>
                    <Paper component="form" sx={{ px: 1, mx: 1 }}>
                        <IconButton type="submit" sx={{}} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            placeholder="Search Course"
                            inputProps={{ "aria-label": "Search Course" }}
                        />
                    </Paper>
                    <Link href="/" passHref>
                        <Button sx={Styles.navLinkMobile}>Home</Button>
                    </Link>
                    <Link href="/#courses" passHref>
                        <Button sx={Styles.navLinkMobile}>Courses</Button>
                    </Link>
                    <Link href="/blogs" passHref>
                        <Button sx={Styles.navLinkMobile}>Blogs</Button>
                    </Link>
                    <Link href="/" passHref>
                        <Button sx={Styles.navLinkMobile}>Contact</Button>
                    </Link>
                    <Divider />
                    <Button sx={Styles.navLinkMobile}>
                        <Badge badgeContent={cart.length} color="error">
                            <FaShoppingCart
                                onClick={gotoCart}
                                style={{ ...Styles.navlink, fontSize: "25px" }}
                            />
                        </Badge>
                    </Button>
                    <Box sx={Styles.navLinkMobile}>
                        <PrimaryButton onClick={!user.email ? handleOpen : logOut}>
                            {!user.email ? "Login" : "Logout"}
                        </PrimaryButton>

                        <LoginModal handleClose={handleClose} open={open} />
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
