import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box } from '@mui/material';
import { iconsContainer } from './productDetails-style';

interface FavProductProps {
  isFavorite: boolean;
  onFavoriteClicked: () => void;
}

const FavProduct: React.FC<FavProductProps> = (props: FavProductProps) => {
  const { isFavorite, onFavoriteClicked } = props;
  return (
    <Box
      sx={{
        ...iconsContainer,
        color: isFavorite ? '#D32F2F' : '#707070',
      }}
      onClick={onFavoriteClicked}
    >
      {isFavorite ? <Favorite /> : <FavoriteBorder />}
    </Box>
  );
};

export default FavProduct;
