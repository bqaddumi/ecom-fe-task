import { Box } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';
import {
  quantityContainerStyle,
  quantityButtonStyle,
  quantitytitleStyle,
} from './productDetails-style';
import { Dispatch, SetStateAction } from 'react';

interface ProductCounterProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

const ProductCounter: React.FC<ProductCounterProps> = (
  props: ProductCounterProps,
) => {
  const { quantity, setQuantity } = props;
  return (
    <Box sx={quantityContainerStyle}>
      <Box
        data-testid="decrementBtn"
        sx={quantityButtonStyle}
        onClick={() => quantity > 1 && setQuantity((prev: number) => prev - 1)}
      >
        <Remove />
      </Box>
      <Box data-testid="quantity" sx={quantitytitleStyle}>
        {quantity}
      </Box>
      <Box
        data-testid="incrementBtn"
        sx={quantityButtonStyle}
        onClick={() => setQuantity((prev: number) => prev + 1)}
      >
        <Add />
      </Box>
    </Box>
  );
};

export default ProductCounter;
