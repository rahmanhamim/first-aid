import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';

// import AiOutlineArrowRight from 'react-icons/ai';
// import AiOutlineArrowLeft from 'react-icons/ai';

const Styles = {
    nextPrev: {
        background: '#FFF1EF',
        borderRadius: '6px',
        padding: '20px',
        color: '#EA2E10',
        '&:active': {
            color: '#FFFFFF',
            background: '#EA2E10'
        }
    }
}

const CarouselButton = ({ sliderRef }) => {

    return (
        <>
            <Button sx={{ ...Styles.nextPrev, mr: '10px' }} onClick={() => sliderRef?.current?.slickPrev()}>
                <ArrowBackIcon />
            </Button>
            <Button sx={Styles.nextPrev} onClick={() => sliderRef?.current?.slickNext()}>
                <ArrowForwardIcon />
            </Button>
        </>
    );
};

export default CarouselButton;