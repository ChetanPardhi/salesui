import { Button, Box, Stack, TextField, Container, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import dayjs from "dayjs";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";


import HomeLogo from "../images/Upload.png";

const Upload = () => {
  const [file, setFile] = useState();
  const [date, setDate] = useState(dayjs(new Date()));

  const handleUpdateWhenUploaded = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          setFile(json);
        } catch (error) {
          console.error("Error parsing JSON file", error);
        }
      };
      reader.readAsText(selectedFile);
    } else {
      console.error("Invalid JSON file");
    }
  };

  const handleData = () => {

    console.log(file)

    const formattedDate = dayjs(date).format("YYYY-MM-DD");

    fetch(`http://localhost:8080/sales/${formattedDate}`, {
      method: "POST",
      body: JSON.stringify(file),
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <Stack direction='row'>
        
      <Stack marginTop='50px'>
        <Typography variant="h4" paddingLeft='50px'> Upload Your File!!</Typography>
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
          <TextField
            label="Selected File"
            type="file"
            renderInput={(params) => <TextField {...params} />}
            // value={file}
            onChange={
              handleUpdateWhenUploaded
            }
          ></TextField>
          <Button
            color="error"
            onClick={handleData}
            variant="contained"
            align="center"
            startIcon={<AutoAwesomeIcon />}
          >
            {" "}
            Upload
          </Button>
        </LocalizationProvider>
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
    </Box>
  );
};

export default Upload;
