import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MobileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
            TabIndicatorProps={{style: {background:'#99ffcc'}}} // CHANGE INDICATOR COLOR HERE
            value={value} 
            onChange={handleChange} 
            centered
            aria-label="basic tabs example"
            sx={{
                ".Mui-selected": {
                color: `#99ffcc`, // CHANGE THE COLOR OF HIGHLIGHTED TAB HERE
                },
                '& .inactiveTab': {color: '#fff', fontFamily: 'NTR, sans-serif'}
            }}>
          <Tab label="1." {...a11yProps(0)} className={value !== 0 ? 'inactiveTab' : ''} />
          <Tab label="2." {...a11yProps(1)} className={value !== 1 ? 'inactiveTab' : ''} />
          <Tab label="3." {...a11yProps(2)} className={value !== 2 ? 'inactiveTab' : ''} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='slide-tab'>
          <h1 className='job_title' style={{paddingTop: '20px'}}>Course Assistant for Intro to Computer Science II at UIUC</h1>
          <h3 className='job_date'>Fall 2022 - Present</h3>
          <ul className='tester_list'>
            <li className='job_desc'>Developed a grade management system with JavaScript that calculated class grades for the entire course</li>
            <li className='job_desc'>Helped to develop and draft the prompts for course material that explained foundational CS concepts</li>
            <li className='job_desc'>Hosted and coordinated multiple office hours every week</li>
          </ul>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='slide-tab'>
          <h1 className='job_title' style={{paddingTop: '20px'}}>Course Assistant for Discrete Structures at UIUC</h1>
          <h3 className='job_date'>Spring 2023 - Present</h3>
          <ul className='tester_list'>
            <li className='job_desc'>Created tutoring approach that best fit each students' learning style</li>
            <li className='job_desc'>Assess and troubleshoot conceptual misunderstandings brought by students</li>
            <li className='job_desc'>Led large gatherings of the class where new material was learned and practiced</li>
            <li className='job_desc'>Developed content that was used by the entire class</li>
          </ul>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='slide-tab'>
          <h1 className='job_title' style={{paddingTop: '20px'}}>Undergraduate Research Assistant at Illinois Geometry Lab</h1>
          <h3 className='job_date'>Fall 2023</h3>
          <ul className='tester_list'>
            <li className='job_desc'>Working closely with Radu's Algorithm and its' application to combinatorics/number theory</li>
            <li className='job_desc'>Automating several larger proofs of partition function properties in Mathematica</li>
            <li className='job_desc'>Using Radu's algorithm to discover new families of congruences as they relate to modular functions</li>
          </ul>
        </div>
      </CustomTabPanel>
    </Box>
  );
}