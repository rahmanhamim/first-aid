import { Button, Card, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import Tagline from './Tagline';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import Image from 'next/image';
const SharedCard = ({ resource }) => {
    console.log(resource.icon)
    return (

        <Card sx={{ maxWidth: 300, pt: '30px', mt: '20px', mx: 'auto',boxShadow:'none',borderRadius:" 19.0829px" }}>
            {/* sx={{ backgroundColor: '#FDE3E0', width: '60px', borderRadius: '50%', padding: '40px', mx: 'auto' }} */}
            <Box sx={{ backgroundColor: '#FDE3E0', width: "150px", borderRadius: '50%', padding: '40px', mx: 'auto' }} >
                <Image src={resource.icon} alt="" width="10px" height="10px" layout='responsive' />
            </Box>
            <CardContent sx={{ mt: '20px' }}>
                <Tagline fontWeight={500} fontSize='20px'>{resource.title}</Tagline>
                {
                    !resource?.link ?

                        <Link
                            style={{ textDecoration: 'none' }}
                            href='/quiz' passHref
                        >
                            <Button variant="outlined" sx={{
                                width: '100%',
                                mt: '50px',
                                border: '2.54439px solid rgba(234, 46, 16, 0.2)',
                                color: '#EA2E10',
                                fontWeight: 600,"&:hover": {
                                    border: '2.54439px solid rgba(234, 46, 16, 0.6)',
                                    color: 'red',
                                },
                                borderRadius: '12.7219px'

                            }}>
                                Explore Now
                                <ArrowRightAltIcon />
                            </Button>
                        </Link>

                        :

                        <Button variant="outlined" sx={{
                            width: '100%',
                            mt: '50px',
                            border: '2.54439px solid rgba(234, 46, 16, 0.2)',
                            color: '#EA2E10',
                            fontWeight: 600,
                            textDecoration: 'none',
                            "&:hover": {
                                border: '2.54439px solid rgba(234, 46, 16, 0.6)',
                                color: 'red',
                            },
                            borderRadius: '12.7219px'
                        }}
                            href={resource.link} target='_blank'
                        >
                            Explore Now
                            <ArrowRightAltIcon />
                        </Button>
                }

            </CardContent>
        </Card>
    );
};

export default SharedCard;