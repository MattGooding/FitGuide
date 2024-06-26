import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../../assets/images/Logo.png'

import './style.scss';

const Navbar = () => {
    return (
        <Stack className="navbar" direction="row" justifyContent="space-around" alignItems="center" sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
            <Link to="/">
                <img src={Logo} alt='Logo' />
            </Link>
            <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
                <Link to="/">Home</Link>
                <a href='#exercises'>Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar