import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HeroCircularLayout from 'components/Shared/HeroCircularLayout';
import PrimaryButton from 'components/Shared/PrimaryButton';
import Tagline from 'components/Shared/Tagline';
import React from 'react';
import styles from '../../styles/Hero.module.css'
import Image from 'next/image';
import doctor_img from '../../images/doctors.png'
import firstaid_box from '../../images/first-aid-box.png'
import quiz_icon from '../../images/grid3.png'
import ArrowIcon from 'components/Shared/ArrowIcon';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import PromoModel from './PromoModel';




const Hero = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Container sx={{ maxWidth: { xl: 'xl', lg: 'lg' } }}>
            <Box className={styles.hero_container}>
                <Box className={styles.hero_grid}>
                    <Tagline > <div>Engaging & <br /> Accessible Online Courses</div> </Tagline> <br />
                    <Link href="/#courses">
                        <PrimaryButton>Explore Now</PrimaryButton>
                    </Link>
                    <Box className={styles.grid_image} sx={{
                        bottom: 0,
                        right: 0,
                        'width': {
                            lg: '50%',
                            xs: '25%'
                        }
                    }}>
                        <Image src={doctor_img} alt='' />
                    </Box>
                    <PromoModel open={open} handleClose={handleClose} />
                    <Box sx={{
                        position: 'absolute', bottom: '-111px',
                        right: {
                            xs: '-150px',
                            sm: '-50px',
                            lg: '-40px'
                        },

                    }}>
                        <HeroCircularLayout />
                    </Box>
                </Box>
                <Box>
                    <Box className={styles.hero_grid} sx={{ height: '250px' }}>
                        <Tagline fontSize='35px'>
                            <div>Trustable First Aid <br /> Courses Online</div>
                        </Tagline>
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center', mt: 1, width: '50%' }}>
                            <ArrowIcon handleOpen={handleOpen} />
                            <Typography sx={{
                                fontWeight: 600,
                                fontSize: {
                                    xs: '15px',
                                    lg: '22px',
                                },
                                lineHeight: '36px',
                                color: '#272D4E'
                            }}>
                                Watch Promo
                            </Typography>
                        </Box>
                        <Box className={styles.grid_image} sx={{
                            top: '60px',
                            right: {
                                lg: '-100px',
                                xs: '10px'
                            },
                            width: {
                                lg: '50%',
                                xs: '25%'
                            }
                        }}>
                            <Image src={firstaid_box} alt='' />
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            top: '-40px',
                            right: {
                                xs: '-150px',
                                sm: '-80px',
                                lg: '-100px'
                            }
                        }}>
                            <HeroCircularLayout />
                        </Box>
                    </Box>
                    <Box className={styles.hero_grid} sx={{ height: '240px', mt: '10px' }}>
                        <Tagline fontSize='35px'>
                            <div>Awesome Quizzes <br /> you can explore</div>
                        </Tagline>
                        <Box className={styles.grid_image} sx={{
                            top: '60px',
                            right: {
                                lg: '-100px',
                                xs: '10px'
                            },
                            width: {
                                lg: '50%',
                                xs: '25%'
                            }
                        }}>
                            <Image src={quiz_icon} alt='' />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Link href='/quiz' >
                                <a className={styles.link}>Explore Now</a>
                            </Link>
                            <ArrowRightAltIcon
                                sx={{
                                    color: '#EA2E10',
                                    ml: 1
                                }} />
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '-40px',
                            right: {
                                xs: '-150px',
                                sm: '-80px',
                                lg: '-100px'
                            },

                        }}>
                            <HeroCircularLayout />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Container>
    );
};

export default Hero;