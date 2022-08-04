import { useNavigate } from 'react-router-dom';
import { Box, Badge } from '@mui/material';
import { useTotalQuantity } from '../../shared/totalQuantityContext';
import { useTotalFavorite } from '../../shared/favoriteContext';
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  Autorenew,
} from '@mui/icons-material';

import { iconStyle } from './header-style';

const Icons: React.FC = () => {
  const navigate = useNavigate();
  const {
    state: { totalQuantity },
  } = useTotalQuantity();
  const {
    state: { totalFavorite },
  } = useTotalFavorite();

  return (
    <>
      <Box sx={iconStyle}>
        <Badge  badgeContent={'0'} color="error">
          <Autorenew />
        </Badge>
      </Box>
      <Box sx={iconStyle}>
        <Badge data-testid="totalFavorite" badgeContent={totalFavorite || '0'} color="error">
          <FavoriteBorderOutlined />
        </Badge>
      </Box>
      <Box data-testid="cartIcon" onClick={() => navigate('/cart')} sx={iconStyle}>
        <Badge data-testid="totalQuantity" badgeContent={totalQuantity || '0'} color="error">
          <ShoppingCartOutlined />
        </Badge>
      </Box>
    </>
  );
};

export default Icons;
