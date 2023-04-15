import logo from "./images/logo.png";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import {  Typography, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Upload from "./pages/Upload";
import Stats from "./pages/Stats";
import About from "./pages/About";
import DrawerComponent from "./componenet/Drawer";
import Appbar from './componenet/Appbar'

const theme = createTheme({
  typography: {
    fontFamily: "QuickSand",
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightLight: 400,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerComponent>
        <Appbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={
              <div>
                {" "}
                <Typography>Oops!! Page not found</Typography>
              </div>
            }
          />
        </Routes>
      </DrawerComponent>
    </ThemeProvider>
  );
}

export default App;
