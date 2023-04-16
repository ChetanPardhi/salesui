import {
  Stack,
  Typography,
  Container,
  Button,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
} from "@mui/material";
import HomeLogo from "../images/Home.png";

import InstagramIcon from '@mui/icons-material/Instagram';

import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Home = () => {
  return (
    <Stack direction="row">
      <Container sx={{ width: "400px", display: "flex", alignItems: "center" }}>
        <Stack >
        <Typography variant="h2">Welcome to Salesman.co</Typography>
        <Stack direction="row" spacing={3} marginTop='20px'>
        <Button variant="outlined" color="error" startIcon={<MailOutlineIcon />}>
            Mail
        </Button>
        <Button variant="outlined" color="primary" startIcon={<InstagramIcon />}>
            Instagram
        </Button>
        </Stack>
        </Stack>
        
      </Container>
      <Container
        sx={{
          width: "400px",
          display: "flex",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <img
          src={HomeLogo}
          alt="sd"
          style={{ width: "400px", height: "400px" }}
        ></img>
      </Container>
    </Stack>
  );
};

export default Home;
