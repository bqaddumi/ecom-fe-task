import {
  Box,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import { CART_SUMMARY_TABLE_COLS } from "../../consts";
import {
  summaryContainerStyle,
  cellStyle,
  summaryCellStyle,
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
              <TableCell sx={cellStyle} align="left">
                {SUBTOTAL}
              </TableCell>
              <TableCell sx={cellStyle} align="right">
                {totalPrice}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle} align="left">
                {SHIPPING}
              </TableCell>
              <TableCell sx={cellStyle} align="right">
                {"$5.00"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellStyle} align="left">
                {ORDER_TOTAL}
              </TableCell>
              <TableCell sx={cellStyle} align="right">
                {orderTotal}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartSummary;
