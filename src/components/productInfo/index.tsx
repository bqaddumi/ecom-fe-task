import * as React from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';

import {
  tabsContainer,
  tabPanelContainer,
  tabPanel,
  indicator,
} from './productInfo-style';
import { PRODUCT_TABS } from '../../consts';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={tabPanel}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface ProductInfoProps {
  desc?: string;
  moreInfo?: string;
  reviews?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = (props: ProductInfoProps) => {
  const { desc, moreInfo, reviews } = props;
  const [value, setValue] = React.useState(0);
  const { DETAILS, INFO, REVIEWS } = PRODUCT_TABS;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={tabsContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          centered
          sx={indicator}
        >
          <Tab label={DETAILS} {...a11yProps(0)} />
          <Tab label={INFO} {...a11yProps(1)} />
          <Tab label={REVIEWS} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box sx={tabPanelContainer}>
        <TabPanel value={value} index={0}>
          {desc}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {moreInfo}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {reviews}
        </TabPanel>
      </Box>
    </Box>
  );
};

export default ProductInfo;
