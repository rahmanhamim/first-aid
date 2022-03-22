import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import TagLine from '../shared/Tagline';
import NewsCard from '../Shared/NewsCard';
import styles from "../../styles/LatestNews.module.css"
import Carousel from '../Shared/Carousel';

const settings = {
    dots: true,
    className: "slick-center ",
    arrows: false,
    dots: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    speed: 500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                infinite: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
            }
        }
    ]
};

const LatestNews = ({ newses }) => {
    return (
        <Box sx={{ backgroundColor: '#FFF6F6', padding: '50px 0' }} >
            <Typography sx={{ textAlign: 'center', padding: '50px 0' }} ><TagLine>Our Latest News</TagLine></Typography>
            <Container sx={{ maxWidth: { xl: 'xl', lg: 'lg' } }}>
                <Container>
                    <Carousel
                        content={newses.map(news =>
                            <NewsCard key={news.id} news={news} />
                        )}
                        slidesToShow={3}
                        dots={true}
                    >
                    </Carousel>
                </Container>
            </Container >
        </Box >
    );
};

export default LatestNews;
