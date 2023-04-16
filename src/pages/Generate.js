import {
  Button,
  Grid,
  TextField,
  Stack,
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Container,
} from "@mui/material";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { makeStyles, styled } from "@mui/styles";
import dayjs from "dayjs";


import HomeLogo from "../images/Generate.png";

import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import CategoryIcon from "@mui/icons-material/Category";
import Man4Icon from "@mui/icons-material/Man4";
import SortIcon from "@mui/icons-material/Sort";

import { teal } from "@mui/material/colors";

import "react-datepicker/dist/react-datepicker.css";
import ProductPopUp from "../componenet/ProductPopUp";

const tablehead = [
  {
    cell: "ProductName",
  },
  {
    cell: "Quantity",
  },
  {
    cell: "SalesAmount",
  },
  {
    cell: "SalesmanName",
  },
  {
    cell: "SalesmanArea",
  },
  {
    cell: "SalesmanCommission",
  },
];

const sortButtons = [
  {
    name: "Sort By",
    icon: <SortIcon sx={{ color: "#69f0ae" }} />,
  },
  {
    name: "Quantity",
    icon: <CategoryIcon sx={{ color: "action" }} />,
  },
  {
    name: "ProductName",
    icon: <TextIncreaseIcon style={{ color: teal[600] }} />,
  },
  {
    name: "Salesman",
    icon: <Man4Icon style={{ color: "#ffc400" }} />,
  },
];

const Generate = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(dayjs(new Date()));
  const [isPending, setPending] = useState(false);
  const [loged, setLoged] = useState(true);

  const [openPopup, setOpenPopup] = useState(false);
  const [popData, setPopData] = useState([]);

  const handleData = () => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");

    fetch(`http://localhost:8080/sales/commission/date/${formattedDate}`)
      .then((res) => {
        return res.json();
      })
      .then((returnedData) => {
        setData(returnedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    console.log(data);

    if (loged) {
      setPending(true);
      setLoged(true);
    }
  };

  return (
    <Box>
      {!isPending && (
        <Stack direction="row">
          <Stack marginTop="50px">
          <Typography variant="h4" paddingLeft='50px' color="#212121"> Generate Your File!!</Typography>
            <Stack
              spacing={4}
              sx={{ width: "250px", marginLeft: "100px", marginTop: "100px" }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date"
                  renderInput={(params) => <TextField {...params} />}
                  value={date}
                  onChange={(e) => setDate(e)}
                  format="DD-MM-YYYY"
                />
              </LocalizationProvider>
              <Button
                color="error"
                onClick={handleData}
                variant="contained"
                align="center"
                startIcon={<AutoAwesomeIcon />}
              >
                {" "}
                Generate
              </Button>
            </Stack>
          </Stack>
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
      )}

      {isPending && (
        <Stack>
          <Stack marginTop="20px">
            <Grid container spacing={2}>
              <Grid item alignContent="center">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fontSize="14px"
                    label="Select Date"
                    renderInput={(params) => <TextField {...params} />}
                    value={date}
                    onChange={(e) => setDate(e)}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleData}
                  variant="contained"
                  align="center"
                  color="error"
                  startIcon={<AutoAwesomeIcon />}
                >
                  {" "}
                  Generate
                </Button>
              </Grid>
              <Grid item>
                {sortButtons.map((btn) => (
                  <Button
                    key={btn.name}
                    variant="outlined"
                    startIcon={btn.icon}
                    sx={{
                      color: () => {
                        if (btn.name === "Sort By") {
                          return "#212121";
                        }
                        if (btn.name === "Quantity") {
                          return "#f50057";
                        }
                        if (btn.name === "Salesman") {
                          return "#ffc400";
                        }
                        if (btn.name === "ProductName") {
                          return teal[600];
                        }
                      },
                      marginLeft: "10px",
                      border: "2px solid black",
                    }}
                  >
                    {btn.name}
                  </Button>
                ))}
              </Grid>
            </Grid>
          </Stack>
          <Stack marginTop="30px">
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <DashboardCustomizeIcon
                        style={{
                          justifyContent: "center",
                        }}
                      />
                    </TableCell>
                    {tablehead.map((head) => (
                      <TableCell key={head.cell}>{head.cell}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <TableCell>
                        <DashboardCustomizeIcon
                          style={{
                            justifyContent: "center",
                          }}
                          onClick={() => {
                            setPopData(row);
                            setOpenPopup(true);
                          }}
                        />
                      </TableCell>
                      <TableCell componenet="th" scope="row">
                        {row.productName}
                      </TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{row.salesAmount}</TableCell>
                      <TableCell align="right">{row.salesmanName}</TableCell>
                      <TableCell align="right">{row.salesmanArea}</TableCell>
                      <TableCell align="right">
                        {row.salesmanCommission}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <ProductPopUp
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              productName={popData.productName}
              quantity={popData.quantity}
              totalSales={popData.salesAmount}
              area={popData.salesmanArea}
            ></ProductPopUp>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default Generate;
