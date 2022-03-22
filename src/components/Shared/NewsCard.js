import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import React from 'react';
import Content from './Content';
import Tagline from './Tagline';
import styles from "../../styles/LatestNews.module.css"
import { Box } from '@mui/system';
const NewsCard = ({ news }) => {
    return (
        <Card sx={{ maxWidth: 320, mx: 'auto' }} className={styles.news_card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={news.cover}
                    alt=""
                />
                <CardContent>
                    <Content fontSize='16px'>{news.date}</Content>
                    <Tagline fontSize="24px">
                        {news.title}
                    </Tagline>
                    <Content fontSize='16px'>{news.details}</Content>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Button sx={{ color: "#EA2E10" }}>
                    Learn More
                </Button>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <Box sx={{ color: "#EA2E10" }}>
                        <ThumbUpOutlinedIcon />
                        <ChatBubbleOutlineOutlinedIcon />
                        <ShareOutlinedIcon />
                    </Box>

                </Box>
            </CardActions>
        </Card>
    );
};

export default NewsCard;