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
} from "@mui/material";
import { CartItemType, ProductsImagesType } from "../../types";
import { CART_TABLE_ROWS } from "../../consts";
import {
  tableStyle,
  deleteButtonStyle,
  quantityContainerStyle,
  quantitytitleStyle,
  quantityButtonStyle,
} from "./productsCartTableStyle";

type ProductsCartTableProps = {
  products: CartItemType[];
  onXClicked: (productId: number) => void;
  onIncreaseclicked: (productId: number, price: number, name: string) => void;
  onDecreaseclicked: (productId: number) => void;
  productsImages: ProductsImagesType;
};

const ProductsCartTable: React.FC<ProductsCartTableProps> = (
  props: ProductsCartTableProps
) => {
  const {
    products = [],
    onXClicked,
    productsImages = [],
    onIncreaseclicked,
    onDecreaseclicked,
  } = props;

  const { PRODUCT_NAME, PRICE, QUANTITY, TOTAL } = CART_TABLE_ROWS;

  const getProductImage = (productId: number) => {
    const product = productsImages.find(
      (product: { id: number; imgUrl: string }) => product.id === productId
    );

    const imageUrl = product?.imgUrl || "";

    return imageUrl;
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
                    image={getProductImage(product.id)}
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
              <TableCell align="center">
                <Box sx={quantityContainerStyle}>
                  <Box
                    sx={quantityButtonStyle}
                    onClick={() => onDecreaseclicked(product.id)}
                  >
                    -
                  </Box>
                  <Box sx={quantitytitleStyle}>{product.quantity}</Box>
                  <Box
                    sx={quantityButtonStyle}
                    onClick={() =>
                      onIncreaseclicked(product.id, product.price, product.name)
                    }
                  >
                    +
                  </Box>
                </Box>
              </TableCell>
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
