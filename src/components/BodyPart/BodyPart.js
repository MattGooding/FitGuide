import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../../assets/images/exerciseIcon.png';

import './style.scss';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={Icon} alt="Dumbbell Icon"></img>
            <Typography fontSize="24px" fontWeight="600" color="#000" textTransform="capitalize">{item}</Typography>
        </Stack >
    )
}

export default BodyPart