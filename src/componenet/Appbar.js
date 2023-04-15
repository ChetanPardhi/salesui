import { Container, Toolbar, Typography } from "@mui/material";
import Logo from "../images/logo.png"

const Appbar = () => {
  return (
    <Appbar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <img src={Logo} sx={{display : { xs : 'none' , md : 'flex'}, mr:1}} />
            <Typography 
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr : 2,
                    display : { xs : 'none' , md : 'flex'} ,
                    letterSpacing : '.3rem',
                    color : 'red',
                    textDecoration : 'none',
                }}
            >
              Salesman.Co
            </Typography>
        </Toolbar>
      </Container>
    </Appbar>
  );
};

export default Appbar;
