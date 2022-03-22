import React from "react";
import { Box, Typography } from "@mui/material";
import Tagline from "./Tagline";
import ArrowIcon from "./ArrowIcon";
import Image from "next/image";
import PromoModel from "components/Home/PromoModel";

const SharedBox = ({ text, fontSize, tips }) => {
    const Styles = {
        gridStyle: {
            backgroundColor: "#FFF6F6",
            position: "relative",
            overflow: "hidden",
            padding: "50px 20px",
            px: tips && "10px",
            mr: 2,
        },
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // console.log(tips?.title)
    return (
        <Box sx={Styles.gridStyle}>
            <Box
                component="img"
                sx={{
                    top: "-80px",
                    right: {
                        xs: "-180px",
                        lg: "-180px",
                        xl: "-250px",
                    },
                    width: "100%",
                    position: "absolute",
                    height: "400px",
                    borderRadius: "50%",
                }}
                src={tips?.img}
            />

            <Tagline fontSize={fontSize}>{text}</Tagline>

            <Typography sx={{ width: "50%" }}>
                <Tagline fontSize="18px">{tips?.title}</Tagline>
            </Typography>
            <PromoModel open={open} handleClose={handleClose} />
            <Box
                component="span"
                sx={{ display: "flex", alignItems: "center", mt: 1, width: "50%" }}
            >
                <ArrowIcon handleOpen={handleOpen} />
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: (tips && "18px") || "22px",
                        lineHeight: "36px",
                        color: "#272D4E",
                    }}
                >
                    Watch Promo
                </Typography>
            </Box>
        </Box>
    );
};

export default SharedBox;
