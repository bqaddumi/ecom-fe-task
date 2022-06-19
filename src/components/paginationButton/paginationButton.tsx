import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  paginationContainer,
  pageStyle,
  pageButton,
  hoverEffect,
} from "./paginationButton-style";

type PaginationProps = { isActive?: boolean; onTabClicked: () => void };

const PaginationButton: React.FC<PaginationProps> = (
  props: PaginationProps
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
        <Box onMouseEnter={() => setIsHover(true)} sx={buttonStyle}></Box>
      </Box>
    </Box>
  );
};

export default PaginationButton;
