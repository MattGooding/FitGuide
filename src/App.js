import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import ExerciseInfo from './pages/ExerciseInfo';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseInfo />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
