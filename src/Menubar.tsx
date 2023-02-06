import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
const drawerWidth = 240
const list = () => (
  <Grid>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
    >
      <Avatar alt="Remy Sharp" src="/Tina_bg.jpg" sx={{ width: 120, height: 120 }} style={{ alignSelf: 'center' }} />
      <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
        Tina Thomas
      </Typography>
      <Typography sx={{ fontSize: 16 }} color="white" gutterBottom>
        Application Dev
      </Typography>
      <Typography sx={{ fontSize: 10 }} color="white" gutterBottom>
        Senior consultant
      </Typography>
    </Grid>
    <List>
      {['Overview', 'Experience', 'Projects', 'Education'].map((text, index) => (
        <Link to={`${text}`}>
          <ListItem key={text} disablePadding>
            <ListItemButton>

              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
    <Divider />
  </Grid >
);

function Menubar() {

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open>
        {list()}
      </Drawer>
      <Drawer
        variant="temporary"
        open={true}
        // onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100px' },
        }}
      >  hello
        {list()}
      </Drawer>
    </Box>
  );
}
export default Menubar;
