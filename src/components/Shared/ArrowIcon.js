import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const ArrowIcon = ({handleOpen}) => {
    return (
        <div>
            <PlayArrowIcon  onClick={handleOpen}
                sx={{
                    color: '#EA2E10',
                    backgroundColor: 'rgba(234, 46, 16, 0.1)',
                    padding: 1,
                    borderRadius: '50%',
                    mr: 1,
                    fontSize: '40px', 
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'rgba(234, 46, 16, 0.2)',
                        
                    }

                }} />
        </div>
    );
};

export default ArrowIcon;