import { Typography } from '@mui/material';
import React from 'react';

const Tagline = ({ children, fontSize, fontWeight }) => {
    return (
        <div>
            <Typography
                variant='h1'
                sx={{
                    fontStyle: 'normal',
                    fontWeight: { fontWeight } || 900,
                    fontSize: {
                        xs: '20px',
                        sm: '30px',
                        md: '40px',
                        lg: fontSize || '55px',
                    },
                    lineHeight: '125%',
                    color: '#272D4E',
                }}>
                {children}
            </Typography>
        </div>
    );
};

export default Tagline;