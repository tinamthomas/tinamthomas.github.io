import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';

const list = () => (
  <Box
    sx={{ width: 300, backgroundImage: 'linear-gradient(to right, #4287f5 , #123f87)', height: '100%'}}
    
  >
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
>
    <Avatar alt="Remy Sharp" src="/Tina_bg.jpg" sx={{ width: 120, height: 120 }} style={{alignSelf: 'center'}}/>
    <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
          Tina Thomas 
    </Typography>
    <Typography sx={{ fontSize: 16 }} color="white" gutterBottom>
      Application Developer
    </Typography>
    <Typography sx={{ fontSize: 10 }} color="white" gutterBottom>
      Senior consultant
    </Typography>
  </Grid>  
    <List>
      {['Overview', 'Experience', 'Projects', 'Education'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />

  </Box>
);


function App() {
const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
       
      <CssBaseline />
      <Drawer variant="permanent">
        {list()}
      </Drawer>
      
    </ThemeProvider>
  );
}

export default App;
