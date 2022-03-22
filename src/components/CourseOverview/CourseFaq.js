import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import coursefaqBg from '../../Images/faqbackground.png';
import { Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tagline from 'components/Shared/Tagline';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const coursefaqbackground = {
    coursefaqBg: {
        backgroundImage: `url(${coursefaqBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    }
}
const CourseFaq = () => {
    return (
        <>
            <Box sx={{ ...coursefaqbackground.coursefaqBg }}>
                <Container maxWidth='xl'>
                    <Box sx={{ padding: '100px 0px' }}>
                        <Tagline>FAQs</Tagline>
                        <Box sx={{ flexGrow: 1, marginTop: '75px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} xl={6}>
                                    <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0px 0px 0px rgba(90, 141, 217, 0.1)' }}><Accordion sx={{ marginBottom: '20px', boxShadow: '0px 16px 37px rgba(90, 141, 217, 0.1)', borderRadius: '8px' }}>
                                        <AccordionSummary
                                            expandIcon={<AddIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Why should i choose a Design studio like TanahAir over full-service agency?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                        <Accordion sx={{ marginBottom: '20px', boxShadow: '0px 16px 37px rgba(90, 141, 217, 0.1)', borderRadius: '8px' }}>
                                            <AccordionSummary
                                                expandIcon={<AddIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography>How does TanahAir create website content without knowing our Business plan?</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion sx={{ marginBottom: '20px', boxShadow: '0px 16px 37px rgba(90, 141, 217, 0.1)', borderRadius: '8px' }}>
                                            <AccordionSummary
                                                expandIcon={<AddIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography>What often will results be reported?</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion></Item>
                                </Grid>
                                <Grid item xs={12} xl={6}>
                                    <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0px 0px 0px rgba(90, 141, 217, 0.1)' }}><Accordion sx={{ marginBottom: '20px', boxShadow: '0px 16px 37px rgba(90, 141, 217, 0.1)', borderRadius: '8px' }}>
                                        <AccordionSummary
                                            expandIcon={<AddIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>What often will results be reported?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                        <Accordion sx={{ marginBottom: '20px', boxShadow: '0px 16px 37px rgba(90, 141, 217, 0.1)', borderRadius: '8px' }}>
                                            <AccordionSummary
                                                expandIcon={<AddIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography>How does TanahAir create website content without knowing our Business plan?</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion sx={{ marginBottom: '20px', boxShadow: '0px 16px 37px rgba(90, 141, 217, 0.1)', borderRadius: '8px' }}>
                                            <AccordionSummary
                                                expandIcon={<AddIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography>What often will results be reported?</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion sx={{ marginBottom: '20px', boxShadow: '0px 16px 37px rgba(90, 141, 217, 0.1)', borderRadius: '8px' }}>
                                            <AccordionSummary
                                                expandIcon={<AddIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography>How does TanahAir create website content without knowing our Business plan?</Typography>
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
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default CourseFaq;