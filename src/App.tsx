import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import Menubar from './Menubar';

function App() {
const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
      <Box
          component="main"
          sx={{ flexGrow: 0, p: 3, width: { sm: `300px` } }}
        >
        <Menubar/>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 500px )`} , pr: 50 }}
        >
          <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
