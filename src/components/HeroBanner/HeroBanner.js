import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import './style.scss';

import HeroBannerImage from '../../assets/images/hero.jpg'

const HeroBanner = () => {
    return (
        <Box className="hero-banner" sx={{ mt: { lg: '50px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <Typography color="#1976D2" fontWeight="600" fontSize="26px">
                Fit Guide
            </Typography>
            <Typography fontWeight="700" sx={{ fontSize: { lg: '48px', xs: '40px' }, width: { lg: '800px', xs: '100%' } }}>
                Your Ultimate Exercise Companion
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb="30px" sx={{ width: { lg: '1000px', xs: '100%' } }}>
                Explore over <strong>1300+</strong> new exercises, learn how to perform them <br />correctly, and understand their target muscles.
            </Typography>
            <Button variant="contained" href="#exercises" sx={{ px: '40px', py: '10px' }}>
                Exlpore Exercises
            </Button>
            <Typography fontWeight="600" fontSize="200px" color="#555" sx={{ opacity: 0.05, display: { md: 'block', xs: 'none' } }}>
                FITGUIDE
            </Typography>
            <img src={HeroBannerImage} alt="Man Working Out"></img>
        </Box >
    )
}

export default HeroBanner