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
import {
  CART_SUMMARY_TABLE_COLS,
  CHECKOUT_BUTTON,
  CHECKOUT_MULTIPLE_ADDRESS,
} from "../../consts";
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
};

const CartSummary: React.FC<CartSummaryProps> = (props: CartSummaryProps) => {
  const { SUMMARY, SUBTOTAL, SHIPPING, ORDER_TOTAL } = CART_SUMMARY_TABLE_COLS;

  const { totalPrice } = props;
  const orderTotal = totalPrice + 5;

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
                ${totalPrice}
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
                ${orderTotal}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={checkoutButtonContainerStyle}>
        <Button sx={checkoutButtonStyle}>{CHECKOUT_BUTTON}</Button>
      </Box>
      <Box sx={{ ...multipleAddressStyle }}>
        <Link sx={cellTitleStyle}>{CHECKOUT_MULTIPLE_ADDRESS}</Link>
      </Box>
    </Box>
  );
};

export default CartSummary;
