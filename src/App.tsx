import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box className="App">
      <Header />
      <Outlet />
    </Box>
  );
}

export default App;
