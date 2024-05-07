import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Typography fontSize="110px">404</Typography>
            <Typography fontSize="40px">Page Not Found</Typography>
            <Button variant="contained" component={Link} to="/" sx={{ px: "20px" }}>
                Back to Home
            </Button>
        </Box>
    )
}

export default NotFound