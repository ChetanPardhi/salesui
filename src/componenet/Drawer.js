import {
    AppBar,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { makeStyles } from "@mui/styles";
  import { SubjectOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";
  import { useLocation, useNavigate } from "react-router-dom";
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import DraftsIcon from '@mui/icons-material/Drafts';
  import DownloadingIcon from '@mui/icons-material/Downloading';
  import TimelineIcon from '@mui/icons-material/Timeline';
  import {cyan, teal} from '@mui/material/colors'
  
  const useStyles = makeStyles((theme) => {
    return {
      page: {
        // background: "#f0fffd",
        width: '100%',
        
      },
      root: {
        display: "flex",
      },
      drawer: {
        width: "240px",
        // border : '1px solid black'
      },
      active: {
        background: "linear-gradient(45deg, #9c9898 30%, #524f4f 90%)",
      },
      appbar: {
        width: `calc(100% - 240px)`,
        background: "linear-gradient(45deg, #9c9898 30%, #524f4f 90%)",
      },
    };
  });
  
  export default function DrawerComponent({ children }) {
    const classes = useStyles();
  
    const navigate = useNavigate();
  
    const location = useLocation();
  
    const menuItems = [
      {
        text: "My Notes",
        icon: <SubjectOutlined style ={{color:cyan[400]}} />,
        path: "/addblog",
      },
      {
        text: "Create Notes",
        icon: <AddCircleOutlineOutlined style ={{color:teal[600]}} />,
        path: "/material",
      },
    ];

    const menuItemsNote = [
      {
        text: "History",
        icon: <TimelineIcon style ={{color:"#424242"}}  />,
        path: "/history",
      },
      {
        text: "Download",
        icon: <DownloadingIcon style ={{color:"#f9a825"}} />,
        path: "/material",
      },
      {
        text: "All Mails",
        icon: <MailOutlineIcon color="error" />,
        path: "/addblog",
      },
      {
        text: "Drafts",
        icon: <DraftsIcon color="secondary" />,
        path: "/material",
      },
    ];
  
    return (
      <div className={classes.root}>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor=" left"
          classes={{ paper: classes.drawer }}
        >
          <div>
            <Typography variant="h5">Ninja</Typography>
          </div>
  
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => navigate(item.path)}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          
          <div>
            <Typography variant="h5" marginTop="20px">App Features</Typography>
          </div>
  
          <List>
            {menuItemsNote.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => navigate(item.path)}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <div>
            <Typography variant="h5" marginTop="20px">My Apps</Typography>
          </div>
  
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => navigate(item.path)}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          </List>

        </Drawer>
        <div className={classes.page}>
          <div className={classes.toolbar} ></div>
          {children}
        </div>
      </div>
    );
  }