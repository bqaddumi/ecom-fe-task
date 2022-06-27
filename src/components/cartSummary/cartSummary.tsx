import {
  Box,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Button,
  Link,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getCheckout, sendDataToCheckout } from "../../axios";
import {
  CART_SUMMARY_TABLE_COLS,
  CHECKOUT_BUTTON,
  CHECKOUT_MULTIPLE_ADDRESS,
} from "../../consts";
import { CartItemType, CheckoutType } from "../../types";
import { numberWithCommas } from '../../helpers'
import { AlertColor } from "@mui/material/Alert";
import CustomizedSnackbars from "../../components/snackbar/snackbar";

import {
  summaryContainerStyle,
  cellTitleStyle,
  summaryCellStyle,
  checkoutButtonStyle,
  checkoutButtonContainerStyle,
  noBorderStyle,
  multipleAddressStyle,
} from "./cartSummaryStyle";

type CartSummaryProps = {
  totalPrice: number;
  products: CartItemType[];
  totalQuantity: number;
};

const CartSummary: React.FC<CartSummaryProps> = (props: CartSummaryProps) => {
  const [checkout, setCheckout] = useState<CheckoutType>([]);
  const [snackbar, setSnackbar] = useState<{
    message: string;
    severity: AlertColor;
  }>({
    message: "",
    severity: "success",
  });
  const { SUMMARY, SUBTOTAL, SHIPPING, ORDER_TOTAL } = CART_SUMMARY_TABLE_COLS;

  const { totalPrice, products, totalQuantity } = props;
  const orderTotal = totalPrice + 5;

  useEffect(() => {
    getCheckout()
      .then((res: { data: CheckoutType }) => {
        setCheckout(res.data);
      })
      .catch((e) => {
        console.error("Can't get checkout", e);
      });
  }, []);

  const onCheckoutClicked = () => {
    sendDataToCheckout([
      ...checkout,
      { items: products, totalQuantity, totalOrderPrice: orderTotal },
    ])
      .then(() => {
        setSnackbar({
          message: `Checkout Added! total quantity is ${totalQuantity}`,
          severity: "success",
        });
      })
      .catch((e) => {
        setSnackbar({
          message: `Checkout problem please try again later!`,
          severity: "error",
        });
      });
  };

  return (
    <Box sx={summaryContainerStyle}>
      <TableContainer component={Box}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={summaryCellStyle}>{SUMMARY}</TableCell>
              <TableCell align="center" />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={cellTitleStyle} align="left">
                {SUBTOTAL}
              </TableCell>
              <TableCell sx={summaryCellStyle} align="right">
                ${numberWithCommas(totalPrice.toFixed(2))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellTitleStyle} align="left">
                {SHIPPING}
              </TableCell>
              <TableCell sx={summaryCellStyle} align="right">
                {"$5.00"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ ...cellTitleStyle, ...noBorderStyle }}
                align="left"
              >
                {ORDER_TOTAL}
              </TableCell>
              <TableCell
                sx={{ ...summaryCellStyle, ...noBorderStyle }}
                align="right"
              >
                ${numberWithCommas(orderTotal.toFixed(2))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={checkoutButtonContainerStyle}>
        <Button onClick={onCheckoutClicked} sx={checkoutButtonStyle}>
          {CHECKOUT_BUTTON}
        </Button>
      </Box>
      <Box sx={{ ...multipleAddressStyle }}>
        <Link sx={cellTitleStyle}>{CHECKOUT_MULTIPLE_ADDRESS}</Link>
      </Box>
      <CustomizedSnackbars
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Box>
  );
};

export default CartSummary;
