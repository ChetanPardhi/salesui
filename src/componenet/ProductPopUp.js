import {
  Dialog,
  DialogContent,
  DialogTitle,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Avatar,
  Button,
  Stack,
} from "@mui/material";

import { DeleteOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { green, pink, red, yellow, blue, purple } from "@mui/material/colors";

const ProductPopUp = ({
  productName,
  quantity,
  totalSales,
  area,
  openPopup,
  setOpenPopup,
}) => {
  return (
    <Dialog open={openPopup}>
      <DialogTitle style={{ background: "#606361" }}>
        ProductDetails
      </DialogTitle>
      <DialogContent style={{ background: "#606361" }}>
        <Card elevation={2} style={{ background: "#303331", boxShadow: 12 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  backgroundColor: () => {
                    if (
                      typeof productName === "string" &&
                      productName.length > 0
                    ) {
                      if (productName[0] === "P") {
                        return yellow[700];
                      }
                      if (productName[0] === "A") {
                        return green[500];
                      }
                      return "linear-gradient(45deg, #9c9898 30%, #524f4f 90%)";
                    }
                    return null; // or a default color
                  },
                }}
              >
                {typeof productName === "string" && productName.length > 0
                  ? productName[0].toUpperCase()
                  : ""}
              </Avatar>
            }
            action={
              <IconButton sx={{ color: "#f5f5f5" }}>
                <DeleteOutlined onClick={() => setOpenPopup(false)} />
              </IconButton>
            }
            sx={{ color: "#f5f5f5" }}
            title={productName}
            subheader="id : 2"
          />
          <CardContent>
            <Stack spacing={2}>
              <Button
                variant="outlined"
                sx={{ border: "1px solid #009688", color: "#f5f5f5" }}
              >
                {area}
              </Button>
              <Button
                variant="outlined"
                sx={{ border: "1px solid #009688", color: "#f5f5f5" }}
              >
                Total Sales : {totalSales}
              </Button>
              <Button
                variant="outlined"
                sx={{ border: "1px solid #009688", color: "#f5f5f5" }}
              >
                Total Quantity : {quantity}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ProductPopUp;
