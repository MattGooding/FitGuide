import React from 'react'
import { Typography, Stack, Button } from '@mui/material';
import { FiTarget } from "react-icons/fi";
import { GiGymBag } from "react-icons/gi";
import { GiStrong } from "react-icons/gi";




import './style.scss';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail = [
        {
            icon: <FiTarget alt={bodyPart} fontSize="50px" />,
            name: bodyPart,
        },
        {
            icon: <GiStrong alt={target} fontSize="50px" />,
            name: target,
        },
        {
            icon: <GiGymBag alt={equipment} fontSize="50px" />,
            name: equipment,
        },
    ]

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row', p: '20px', alignItems: 'center' } }}>
            <img src={gifUrl} alt={name} loading='lazy' className='detailImage'></img>
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant='h1' fontSize='50px' textTransform='capitalize'>
                    {name}
                </Typography>
                <Typography>
                    Working out keeps you strong and healthy. {name} is an exercise that will target your {target}.
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: '#edf6ff', borderRadius: '50%', width: "100px", height: "100px" }}>
                            {item.icon}
                        </Button>
                        <Typography variant="h2" fontSize="30px" textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail