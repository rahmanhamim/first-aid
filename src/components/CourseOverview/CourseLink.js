import { Box, Container } from '@mui/material';
import Link from 'next/link';


const Style = {
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
    },
    li: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize:'24px',
        lineHeight: '145%',
        color:'#272D4E',
        marginRight:'30px'
    }
}


const CourseLink = () => {
    return (
        <>
            <Box sx={{ marginTop: '73px', marginBottom: '96px'}}>
                <Container maxWidth='xl'>
                    <ul style={Style.ul} className='list-ul'>
                        <li style={Style.li}>
                            <Link href="#" className='course-index-link' to="#overview"
                            >
                                Overview
                            </Link>
                        </li>
                        <li style={Style.li}>
                            <Link href="#" className='course-index-link' to="#curriculam"
                            >
                                Curriculam
                            </Link>
                        </li>
                        <li style={Style.li}>
                            <Link href="#" className='course-index-link' to="#certificate"
                            >
                                Assesment & Certification
                            </Link>
                        </li>
                        <li style={Style.li}>
                            <Link href="#" className='course-index-link' to="#reviews"
                            >
                                Reviews
                            </Link></li>
                        <li style={Style.li}>
                            <Link href="#" className='course-index-link' to="#faqs"
                            >
                                FAQs
                            </Link>
                        </li>
                    </ul>
                </Container>
            </Box>
        </>
    );
}
export default CourseLink;