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
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getCheckout, sendDataToCheckout } from '../../axios';
import {
  CART_SUMMARY_TABLE_COLS,
  CHECKOUT_BUTTON,
  CHECKOUT_MULTIPLE_ADDRESS,
} from '../../consts';
import { CartItemType, CheckoutType } from '../../types';
import { numberWithCommas } from '../../helpers';
import { AlertColor } from '@mui/material/Alert';
import CustomizedSnackbars from '../snackbar';

import {
  summaryContainerStyle,
  cellTitleStyle,
  summaryCellStyle,
  checkoutButtonStyle,
  checkoutButtonContainerStyle,
  noBorderStyle,
  multipleAddressStyle,
} from './cartSummary-Style';

// TODO: need to be refactored

interface CartSummaryProps {
  totalPrice: number;
  products: CartItemType[];
  totalQuantity: number;
}

const CartSummary: React.FC<CartSummaryProps> = (props: CartSummaryProps) => {
  const [checkout, setCheckout] = useState<CheckoutType>([]);
  const [snackbar, setSnackbar] = useState<{
    message: string;
    severity: AlertColor;
  }>({
    message: '',
    severity: 'success',
  });
  const { SUMMARY, SUBTOTAL, SHIPPING, ORDER_TOTAL } = CART_SUMMARY_TABLE_COLS;

  const { totalPrice, products, totalQuantity } = props;
  const orderTotal = totalPrice + 5;

  useEffect(() => {
    const fetchData = async () => {
      const checkout = await getCheckout();
      setCheckout(checkout.data);
    };
    fetchData();
  }, []);

  const onCheckoutClicked = async () => {
    const checkoutData = await sendDataToCheckout([
      ...checkout,
      { items: products, totalQuantity, totalOrderPrice: orderTotal },
    ]);

    if (checkoutData.status === 200) {
      setSnackbar({
        message: `Checkout Added! total quantity is ${totalQuantity}`,
        severity: 'success',
      });
    } else {
      setSnackbar({
        message: `Checkout problem please try again later!`,
        severity: 'error',
      });
    }
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
              <TableCell data-testid="subtotal" sx={summaryCellStyle} align="right">
                ${numberWithCommas(totalPrice.toFixed(2))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={cellTitleStyle} align="left">
                {SHIPPING}
              </TableCell>
              <TableCell  data-testid="shipping" sx={summaryCellStyle} align="right">
                {'$5.00'}
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
                data-testid="orderTotal"
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
