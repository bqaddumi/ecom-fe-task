import React from "react";
import { Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { container, footer, button } from "./categoryFooter-style";
import { SECTION_FOOTER, LEARN_MORE } from "../../consts";

const CategoryFooter: React.FC = () => {
  return (
    <Box sx={container}>
      <Box sx={footer}> {SECTION_FOOTER}</Box>
      <Box sx={button}>
        {LEARN_MORE} <ArrowRightAltIcon />
      </Box>
    </Box>
  );
};

export default CategoryFooter;
