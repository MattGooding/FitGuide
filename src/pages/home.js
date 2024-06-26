import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner/HeroBanner';
import SearchExercises from '../components/SearchExercises/SearchExercises';
import Exercises from '../components/Exercises/Exercises';


const Home = () => {

    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

    return (
        <Box>
            <HeroBanner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            {Array.isArray(exercises) && <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />}
        </Box>
    )
}

export default Home