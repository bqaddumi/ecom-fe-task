import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import {
  paginationContainer,
  pageStyle,
  pageButton,
  hoverEffect,
} from './paginationButton-style';

interface PaginationButtonProps {
  isActive?: boolean;
  onTabClicked: () => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = (
  props: PaginationButtonProps,
) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { isActive, onTabClicked } = props;
  useEffect(() => {});

  const buttonStyle =
    isActive || isHover ? { ...pageStyle, ...hoverEffect } : { ...pageStyle };

  return (
    <Box onClick={onTabClicked} sx={paginationContainer}>
      <Box
        onMouseEnter={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        sx={pageButton}
      >
        <Box onMouseEnter={() => setIsHover(true)} sx={buttonStyle} />
      </Box>
    </Box>
  );
};

export default PaginationButton;
