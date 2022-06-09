import {
  Box,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  CardMedia,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import { CartItemType } from "../../types";
import { CART_TABLE_ROWS } from "../../consts";
import { tableStyle, deleteButtonStyle } from "./productsCartTableStyle";

type ProductsCartTableProps = {
  products: CartItemType[];
};

const ProductsCartTable = (props: ProductsCartTableProps) => {
  const { products } = props;
  const { PRODUCT_NAME, PRICE, QUANTITY, TOTAL } = CART_TABLE_ROWS;

  const onXClicked = (productId: number) => {
    console.log("delete", productId);
  };
  
  return (
    <TableContainer component={Box}>
      <Table sx={tableStyle} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{PRODUCT_NAME}</TableCell>
            <TableCell align="center">{PRICE}</TableCell>
            <TableCell align="center">{QUANTITY}</TableCell>
            <TableCell align="center">{TOTAL}</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100 }}
                    image="https://phoneslab.net/palestine/wp-content/uploads/sites/15/2021/09/max4-600x600.jpg"
                    alt="Product name"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {product.name}
                      </Typography>
                      <Typography component="div" variant="h6">
                        ${product.price}
                      </Typography>
                    </CardContent>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="center"> ${product.price}</TableCell>
              <TableCell align="center">{product.quantity}</TableCell>
              <TableCell align="center">${product.totalPrice}</TableCell>
              <TableCell align="center">
                <Box
                  sx={deleteButtonStyle}
                  onClick={() => onXClicked(product.id)}
                >
                  {"x"}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsCartTable;
