import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { CART_LINK } from '../../consts';
import {
  titleStyle,
  cartLinkContainerStyle,
  balanceStyle,
} from './header-style';

const CartLink: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={cartLinkContainerStyle} onClick={() => navigate('/')}>
      <Typography component="div" sx={titleStyle}>
        {CART_LINK}
      </Typography>
      <Typography component="div" sx={balanceStyle}>
        {'$0.00'}
      </Typography>
    </Box>
  );
};

export default CartLink;
