import { Box, Container, Grid } from '@mui/material';
import Content from 'components/shared/Content';
import SharedCard from 'components/Shared/SharedCard';
import Tagline from 'components/Shared/Tagline';
import React from 'react';

const Freeresources = ({ freeResources }) => {
    return (
        <Box sx={{ mt: '20px', backgroundColor: '#FFF6F6', padding: '30px 10px' }}>
            <Container sx={{
                maxWidth: {
                    lg: 'lg',
                    xl: 'xl'
                },
                textAlign: 'center'
            }}>
                <Tagline><div>Free Resources You’ll Enjoy</div></Tagline>
                <br />
                <Content></Content>
                <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        freeResources?.map(resource => (
                            <Grid key={resource?.id} item xs={12} sm={6} md={3} xl={3} >
                                <SharedCard resource={resource} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Freeresources;