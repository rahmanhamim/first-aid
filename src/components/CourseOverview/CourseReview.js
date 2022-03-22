import { Box, Typography, Paper, Container, Grid, Button } from '@mui/material';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import reviewDesign from '../../Images/reviewdesign.png'
import { styled } from '@mui/material/styles';
import conorOne from '../../Images/conorone.png'
import conorTwo from '../../Images/conortwo.png'
import conorThree from '../../Images/conorThree.png'
import conorFour from '../../Images/conorFour.png'
import Tagline from 'components/Shared/Tagline';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CourseReview = () => {
    return (
        <>
            <Box sx={{ height: { xl: '800px', xs: '1450px' } }}>
                <Container maxWidth='xl'>
                    <Box sx={{ display: 'flex', position: 'relative', alignItems: 'center', marginTop: '40px' }} >
                        <Tagline>Reviews of This Course</Tagline> <Box sx={{ marginLeft: '30px' }}><Image src={reviewDesign} alt="" />
                            <Typography sx={{ position: 'absolute', left: { xl: '630px', xs: '180px', md: '630px' }, top: { xl: '16px', xs: '5px', md: '16px' }, color: 'white', fontSize: { xl: '30px', xs: '16px' }, fontStyle: 'normal', fontWeight: '400', lineHeight: '40px' }}><FaStar style={{
                                color: '#FFB300'
                            }} /> 4.8 User Rating</Typography></Box>
                    </Box>
                    <Box sx={{ flexGrow: 1, paddingTop: '100px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={6} md={12}>
                                <Item sx={{ boxShadow: '0px 15.8px 36.86px rgba(90, 141, 217, 0.1)', borderRadius: '19.0829px' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box>
                                                <Image src={conorOne} alt="" />
                                            </Box>
                                            <Box sx={{ marginTop: '-60px', textAlign: 'left' }}>
                                                <Box sx={{ fontSize: { xl: '24px', xs: '16px' }, marginTop: '20px' }}><span style={{ fontStyle: 'normal', lineHeight: '160%', fontWeight: '500', color: '#272D4E' }}>Connor Morgan</span></Box> <br />
                                                <Box sx={{ fontSize: { xl: '24px', xs: '16px' }, marginTop: '-10px' }}><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /></Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginTop: '-80px', marginRight: '30px' }}>
                                            <Typography sx={{ marginTop: '10px' }}>3 days Ago</Typography>
                                        </Box>
                                    </Box>
                                    <Box><Typography sx={{ textAlign: 'left', marginLeft: '40px', marginTop: '-50px' }}>This course has some very interesting tips that one can apply when communicating with your customers. Some of these tips are extremely valuable and useful! This is by far one of the best.</Typography></Box>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={6} md={12}>
                                <Item sx={{ boxShadow: '0px 15.8px 36.86px rgba(90, 141, 217, 0.1)', borderRadius: '19.0829px' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box>
                                                <Image src={conorTwo} alt="" />
                                            </Box>
                                            <Box sx={{ marginTop: '-60px', textAlign: 'left' }}>
                                                <Box sx={{ fontSize: { xl: '24px', xs: '16px' }, marginTop: '20px' }}><span style={{ fontStyle: 'normal', lineHeight: '160%', fontWeight: '500', color: '#272D4E' }}>Connor Morgan</span></Box> <br />
                                                <Box sx={{ fontSize: { xl: '24px', xs: '16px' }, marginTop: '-10px' }}><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /></Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginTop: '-80px', marginRight: '30px' }}>
                                            <Typography sx={{ marginTop: '10px' }}>3 days Ago</Typography>
                                        </Box>
                                    </Box>
                                    <Box><Typography sx={{ textAlign: 'left', marginLeft: '40px', marginTop: '-50px' }}>This course has some very interesting tips that one can apply when communicating with your customers. Some of these tips are extremely valuable and useful! This is by far one of the best.</Typography></Box>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={6} md={12}>
                                <Item sx={{ boxShadow: '0px 15.8px 36.86px rgba(90, 141, 217, 0.1)', borderRadius: '19.0829px' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box>
                                                <Image src={conorThree} alt="" />
                                            </Box>
                                            <Box sx={{ marginTop: '-60px', textAlign: 'left' }}>
                                                <Box sx={{ fontSize: { xl: '24px', xs: '16px' }, marginTop: '20px' }}><span style={{ fontStyle: 'normal', lineHeight: '160%', fontWeight: '500', color: '#272D4E' }}>Connor Morgan</span></Box> <br />
                                                <Box sx={{ fontSize: { xl: '24px', xs: '16px' }, marginTop: '-10px' }}><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /></Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginTop: '-80px', marginRight: '30px' }}>
                                            <Typography sx={{ marginTop: '10px' }}>3 days Ago</Typography>
                                        </Box>
                                    </Box>
                                    <Box><Typography sx={{ textAlign: 'left', marginLeft: '40px', marginTop: '-50px' }}>This course has some very interesting tips that one can apply when communicating with your customers. Some of these tips are extremely valuable and useful! This is by far one of the best.</Typography></Box>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={6} md={12}>
                                <Item sx={{ boxShadow: '0px 15.8px 36.86px rgba(90, 141, 217, 0.1)', borderRadius: '19.0829px' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box>
                                                <Image src={conorFour} alt="" />
                                            </Box>
                                            <Box sx={{ marginTop: '-60px', textAlign: 'left' }}>
                                                <Box sx={{ fontSize: { xl: '24px', xs: '16px' }, marginTop: '20px' }}><span style={{ fontStyle: 'normal', lineHeight: '160%', fontWeight: '500', color: '#272D4E' }}>Connor Morgan</span></Box> <br />
                                                <Box sx={{ fontSize: { xl: '24px', xs: '16px' }, marginTop: '-10px' }}><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /><FaStar style={{
                                                    color: '#FFB300',
                                                }} /></Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginTop: '-80px', marginRight: '30px' }}>
                                            <Typography sx={{ marginTop: '10px' }}>3 days Ago</Typography>
                                        </Box>
                                    </Box>
                                    <Box><Typography sx={{ textAlign: 'left', marginLeft: '40px', marginTop: '-50px' }}>This course has some very interesting tips that one can apply when communicating with your customers. Some of these tips are extremely valuable and useful! This is by far one of the best.</Typography></Box>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={12} md={12} sx={{ marginTop: '40px' }}>
                                <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                    <Button sx={{ width: '241px', height: '75px', backgroundColor: 'white !important', border: '1px solid #ED3B45', color: '#ED3B45', fontSize: '22px', fontStyle: 'normal', fontweight: '900', lineHeight: '32px' }}>Load More</Button>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default CourseReview;