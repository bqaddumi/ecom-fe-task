import { tabsClasses } from "@mui/material/Tabs";
export const tabsContainer = {
  marginTop: "50px",
};

export const tabPanelContainer = {
  borderTop: 1,
  borderColor: "divider",
  margin: "0% 10%",
};

export const tabPanel = {
  paddingTop: "20px",
};

export const indicator = {
  [`& .${tabsClasses.indicator}`]: {
    background: "#000",
  },
};
