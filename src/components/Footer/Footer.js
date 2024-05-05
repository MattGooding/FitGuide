import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../../assets/images/Logo.png';

import './style.scss';

const Footer = () => {
    return (
        <Box mt="60px">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
                <img src={Logo} alt="Logo" width="100px" height="100px"></img>
                <Typography variant='h5' pb="40px" mt="40px">
                    Developed By Matthew Gooding
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer