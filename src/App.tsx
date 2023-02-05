import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import Menubar from './Menubar';

function App() {
const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menubar/>
      <Outlet/>
    </ThemeProvider>
  );
}

export default App;
