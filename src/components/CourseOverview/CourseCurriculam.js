import { Box, Typography, Paper, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { HiPlusCircle } from "react-icons/hi"
import { AiOutlineClockCircle } from "react-icons/ai"
import Tagline from 'components/Shared/Tagline';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const CourseCurriculam = ({ course }) => {
    return (
        <>
            <Box sx={{ width: '100%', height: { xl: '1400px', xs: '1500px' } }}>
                <Container maxWidth='xl'>
                    <Box sx={{ marginTop: '73px' }}>
                        <Tagline>Course Overview</Tagline>
                        <Typography sx={{ fontSize: '18px', fontWeight: '500', fontStyle: 'normal', lineHeight: '32px', marginTop: '45px' }}>{course.overview}</Typography>
                    </Box>
                    <Box sx={{ marginTop: '99px' }}>
                        <Tagline>Course Curriculam</Tagline>
                        <Grid container spacing={2} sx={{ marginTop: '53px' }}>
                            <Grid item xs={12} xl={8}>
                                <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                    <Accordion>
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px', marginRight: '10px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px', marginRight: '10px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px', marginRight: '10px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px', marginRight: '10px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px', marginRight: '10px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px', marginRight: '10px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px', marginRight: '10px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion></Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default CourseCurriculam;