import * as React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import TabPanel from './TabPanel';
import {
  tabsContainer,
  tabPanelContainer,
  indicator,
} from './productInfo-style';
import { PRODUCT_TABS } from '../../consts';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface ProductInfoProps {
  desc: string;
  moreInfo: string;
  reviews: string;
}

const ProductInfo: React.FC<ProductInfoProps> = (props: ProductInfoProps) => {
  const { desc, moreInfo, reviews } = props;
  const [value, setValue] = React.useState(0);
  const tabPanels = [desc, moreInfo, reviews];
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
          {PRODUCT_TABS.map((tabName: string, index: number) => (
            <Tab
              key={index}
              data-testid={`${tabName}Tab`}
              label={tabName}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={tabPanelContainer}>
        {tabPanels.map((item: string, index: number) => (
          <TabPanel key={index} value={value} index={index}>
            {item}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default ProductInfo;
