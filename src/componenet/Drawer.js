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
  
  
  const useStyles = makeStyles((theme) => {
    return {
      page: {
        background: "#f3f3f3",
        width: '100%',
      },
      root: {
        display: "flex",
      },
      drawer: {
        width: "240px",
      },
      active: {
        background: "linear-gradient(45deg, #9c9898 30%, #524f4f 90%)",
      },
      appbar: {
        width: `calc(100% - 240px)`,
        background: "linear-gradient(45deg, #9c9898 30%, #524f4f 90%)",
      },
      toolbar: {
        marginTop : '100px',
      }
    };
  });
  
  export default function DrawerComponent({ children }) {
    const classes = useStyles();
  
    const navigate = useNavigate();
  
    const location = useLocation();
  
    const menuItems = [
      {
        text: "My Notes",
        icon: <SubjectOutlined color="primary" />,
        path: "/addblog",
      },
      {
        text: "Create Notes",
        icon: <AddCircleOutlineOutlined color="primary" />,
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
        </Drawer>
        <div className={classes.page}>
          <div className={classes.toolbar} style={{marginTop:"50px"}}></div>
          {children}
        </div>
      </div>
    );
  }