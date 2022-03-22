import { Box, Typography, Paper, Grid, Container } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import PrimaryButton from 'components/Shared/PrimaryButton';
import certificateBg from '../../Images/certificatebackground.png'
import certificate from '../../Images/certificate.png'
import Tagline from 'components/Shared/Tagline';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const certificateBackground = {
    certificateBg: {
        backgroundImage: `url(${certificateBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    }
}

const CourseCertificate = () => {
    return (
        <>
            <Box sx={{ ...certificateBackground.certificateBg, display: 'flex', alignItems: 'center' }}>
                <Container maxWidth='xl'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} xl={6}>
                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0', marginTop: '30px' }}>
                                <Tagline>Assesment & Certification</Tagline>
                                <Typography sx={{ margin: '45px 0px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At elit, gravida vitae ac elementum tellus. Justo quam vestibulum aenean pellentesque posuere eu. Euismod mattis mi dictum id. Pellentesque arcu sagittis, id et vitae convallis. Vitae quam et, urna quis nunc, enim leo sit phasellus. Lectus non id non pharetra, sed aliquet bibendum eleifend sagittis. Ac et volutpat facilisis scelerisque purus etiam interdum. Est amet, iaculis sem in mauris netus rutrum. Morbi vitae quis quis eu ut vel at sodales. Eros, purus velit ut vel vitae sit. At interdum sagittis, viverra vitae amet, justo arcu dolor, tortor.</Typography>
                                <PrimaryButton>BUY NOW</PrimaryButton>
                            </Item>
                        </Grid>
                        <Grid item xs={12} xl={6}>
                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><Image src={certificate} /></Item>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
export default CourseCertificate;