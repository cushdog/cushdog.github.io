import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        TabIndicatorProps={{style: {background:'orange'}}} // CHANGE INDICATOR COLOR HERE
        value={value}
        onChange={handleChange}
        textColor="orange"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
            ".Mui-selected": {
            color: `orange`, // CHANGE THE COLOR OF HIGHLIGHTED TAB HERE
            },
        }}
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
  );
}