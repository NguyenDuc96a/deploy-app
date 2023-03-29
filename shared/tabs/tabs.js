import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TabCarousel from '@/components/Carousel/TabCarousel';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Pin Năng Lượng" />
        <Tab label="Bộ inverter" />
      </Tabs>
      <Box sx={{ padding: 2 }}>
        {value === 0 && (
          <Box>
            <TabCarousel isItem={'item1'} />
          </Box>
        )}
        {value === 1 && (
          <Box>
            <TabCarousel isItem={'item2'} />
          </Box>
        )}

      </Box>
    </Box>
  );
}