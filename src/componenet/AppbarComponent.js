import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Icon,
  createTheme,
} from "@mui/material";
import Logo from "../images/logo.png";
import FoundationIcon from "@mui/icons-material/Foundation";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useLocation, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles({
  active: {
    background: "linear-gradient(45deg, #565f61 50%, #25dff7 90%)",
    // background : "#313634",
    color: "#f3f3f3",
  },
});

const theme = createTheme();

const page = [
  {
    text: "Home",
    icon: <FoundationIcon sx={{ color: "action" }} />,
    path: "/",
  },
  {
    text: "Upload",
    icon: <UploadFileIcon sx={{ color: "action" }} />,
    path: "/upload",
  },
  {
    text: "Generate",
    icon: <AccountTreeIcon sx={{ color: "action" }} />,
    path: "/generate",
  },
  {
    text: "Stats",
    icon: <QueryStatsIcon sx={{ color: "action" }} />,
    path: "/stats",
  },
  {
    text: "About",
    icon: <AcUnitIcon sx={{ color: "action" }} />,
    path: "/about",
  },
];

const AppbarComponent = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const classes = useStyles();

  return (
    <AppBar position="static" style={{ backgroundColor: "#f0fffd" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="img" sx={{ height: 100 }} alt="logo" src={Logo} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: "flex" },
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
              fontFamily: "Sedgwick Ave Display",
            }}
          >
            Salesman.Co
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", '&button' : {m:1} } }}>
            {page.map((currentPage) => (
              <Button
                key={currentPage.text}
                onClick={() => navigate(currentPage.path)}
                className={
                  location.pathname === currentPage.path ? classes.active : null
                }
                sx={{ my: 2, display: "block", padding: "15px", color : "#24ab94" }}
              >
                <Icon>{currentPage.icon}</Icon>
                {currentPage.text} 
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppbarComponent;
