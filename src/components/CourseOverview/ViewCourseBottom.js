import viewCourseBg from '../../Images/viewcoursebackground.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const viewCourseBackground = {
    viewCourseBg: {
        backgroundImage: `url(${viewCourseBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: { xl: '288px', xs: '700px' },
        width: '100%',
    }
}
const ViewCourseBottom = () => {
    return (
        <>
            <Box sx={{ ...viewCourseBackground.viewCourseBg, display: 'flex', alignItems: 'center' }}>
                <Container maxWidth='xl'>
                    <Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} xl={8}>
                                    <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                        <Typography sx={{ fontStyle: 'normal', fontSize: '50px', lineHeight: '125%', color: 'white' }}>
                                            Be Confident! Have an wonder journey with our course
                                        </Typography>
                                        <Typography sx={{ fontStyle: 'normal', fontSize: '20px', lineHeight: '32px', fontweight: '500', color: 'white' }}>
                                            The sky was cloudless and of a deep dark blue spectacle before us
                                        </Typography>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} xl={4}>
                                    <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                        <Button sx={{ color: 'red', backgroundColor: 'white !important', marginTop: '50px', width: '241px', height: '75px', fontSize: '22px', borderRadius: '8px', fontWeight: '500' }}>View Course</Button>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default ViewCourseBottom;