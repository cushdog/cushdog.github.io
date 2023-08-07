// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import '../CSS/test.css'
// import '../App.css'
// import '../CSS/Work.css'

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// // export default function VerticalTabs() {
// //   const [value, setValue] = React.useState(0);

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

// //   return (
// //     <Box
// //       sx={{ flexGrow: 1, bgcolor: '#222725', display: 'flex', height: 'fit-content', width: '100vh' }}
// //     >
// //       <Tabs
// //         TabIndicatorProps={{style: {background:'#5FDD9D'}}} // CHANGE INDICATOR COLOR HERE
// //         orientation="vertical"
// //         variant="scrollable"
// //         value={value}
// //         onChange={handleChange}
// //         aria-label="Vertical tabs example"
// //         centered
// //         sx={{ 
// //           borderRight: 1,
// //           borderColor: 'divider',
// //           ".Mui-selected": {
// //           color: '#5FDD9D', // CHANGE THE COLOR OF HIGHLIGHTED TAB HERE
// //           fontFamily: 'NTR, sans-serif',
// //           fontSize: '2vh',
// //           width: 400,
// //           }, 
// //           '& .inactiveTab': {color: 'white', fontFamily: 'NTR, sans-serif', fontSize: '2vh', width: 400}
// //         }}
// //       >
// //         <Tab label="CS 128" {...a11yProps(0)} className={value !== 0 ? 'inactiveTab' : ''} />
// //         <Tab label="CS 173" {...a11yProps(1)} className={value !== 1 ? 'inactiveTab' : ''}/>
// //         <Tab label="IGL" {...a11yProps(2)} className={value !== 2 ? 'inactiveTab' : ''}/>
// //       </Tabs>
// //       <TabPanel value={value} index={0}>
// //         <div className='slide-tab'>
// //           <h1 className='job_title'>Course Assistant for CS 128 at UIUC</h1>
// //           <h3 className='job_date'>Fall 2022 - Present</h3>
// //           <ul className='tester_list'>
// //             <li className='job_desc'>Developed a grade management system with JavaScript that calculated class grades for the entire course</li>
// //             <li className='job_desc'>Helped to develop and draft the prompts for course material that explained foundational CS concepts</li>
// //             <li className='job_desc'>Hosted and coordinated multiple office hours every week</li>
// //           </ul>
// //         </div>
// //       </TabPanel>
// //       <TabPanel value={value} index={1}>
// //         <div className='slide-tab'>
// //           <h1 className='job_title'>Course Assistant for CS 173 at UIUC</h1>
// //           <h3 className='job_date'>Spring 2023 - Present</h3>
// //           <ul className='tester_list'>
// //             <li className='job_desc'>Created tutoring approach that best fit each students' learning style</li>
// //             <li className='job_desc'>Assess and troubleshoot conceptual misunderstandings brought by students</li>
// //             <li className='job_desc'>Led large gatherings of the class where new material was learned and practiced</li>
// //             <li className='job_desc'>Developed content that was used by the entire class</li>
// //           </ul>
// //         </div>
// //       </TabPanel>
// //       <TabPanel value={value} index={2}>
// //         <div className='slide-tab'>
// //           <h1 className='job_title'>Undergraduate Research Assistant @ IGL</h1>
// //           <h3 className='job_date'>Fall 2023</h3>
// //           <ul className='tester_list'>
// //             <li className='job_desc'>Working closely with Radu's Algorithm and its' application to combinatorics/number theory</li>
// //             <li className='job_desc'>Developing several solutions to various questions posed by this algorithm in Mathematica</li>
// //             <li className='job_desc'>Processing and computing new and efficient solutions to proofs that have existed on paper for some time</li>
// //           </ul>
// //         </div>
// //       </TabPanel>
// //     </Box>

// //    );
// // }


// export default function VerticalTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box
//       sx={{
//         flexGrow: 1,
//         bgcolor: '#222725',
//         display: 'grid',
//         gridTemplateColumns: '200px 1fr',
//         height: 'fit-content'
//       }}
//     >
//       <Tabs
//         TabIndicatorProps={{ style: { background: 'green' } }} // CHANGE INDICATOR COLOR HERE
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         centered
//         sx={{
//           borderRight: 1,
//           borderColor: 'divider',
//           '.Mui-selected': {
//             color: `green`, // CHANGE THE COLOR OF HIGHLIGHTED TAB HERE
//             fontFamily: 'NTR, sans-serif',
//             fontSize: '2vh'
//           },
//           '& .inactiveTab': {
//             color: '#fff',
//             fontFamily: 'NTR, sans-serif',
//             fontSize: '2vh',
//           },
//         }}
//       >
//         <Tab
//           label="CS 128"
//           {...a11yProps(0)}
//           className={value !== 0 ? 'inactiveTab' : ''}
//         />
//         <Tab
//           label="CS 173"
//           {...a11yProps(1)}
//           className={value !== 1 ? 'inactiveTab' : ''}
//         />
//         <Tab
//           label="IGL"
//           {...a11yProps(2)}
//           className={value !== 2 ? 'inactiveTab' : ''}
//         />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         <div className="slide-tab">
//           <h1 className="job_title">Course Assistant for CS 128 at UIUC</h1>
//           <h3 className="job_date">Fall 2022 - Present</h3>
//           <ul className="tester_list">
//             <li className="job_desc">
//               Developed a grade management system with JavaScript that
//               calculated class grades for the entire course
//             </li>
//             <li className="job_desc">
//               Helped to develop and draft the prompts for course material that
//               explained foundational CS concepts
//             </li>
//             <li className="job_desc">
//               Hosted and coordinated multiple office hours every week
//             </li>
//           </ul>
//         </div>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <div className="slide-tab">
//           <h1 className="job_title">Course Assistant for CS 173 at UIUC</h1>
//           <h3 className="job_date">Spring 2023 - Present</h3>
//           <ul className="tester_list">
//             <li className="job_desc">
//               Created tutoring approach that best fit each students' learning
//               style
//             </li>
//             <li className="job_desc">
//               Assess and troubleshoot conceptual misunderstandings brought by
//               students
//             </li>
//             <li className="job_desc">
//               Led large gatherings of the class where new material was learned
//               and practiced
//             </li>
//             <li className="job_desc">
//               Developed content that was used by the entire class
//             </li>
//           </ul>
//         </div>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <div className="slide-tab">
//           <h1 className="job_title">Undergraduate Research Assistant @ IGL</h1>
//           <h3 className="job_date">Fall 2023</h3>
//           <ul className="tester_list">
//             <li className="job_desc">
//               Working closely with Radu's Algorithm and its' application to
//               combinatorics/number theory
//             </li>
//             <li className="job_desc">
//               Developing several solutions to various questions posed by this
//               algorithm in Mathematica
//             </li>
//             <li className="job_desc">
//               Processing and computing new and efficient solutions to proofs
//               that have existed on paper for some time
//             </li>
//           </ul>
//         </div>
//       </TabPanel>
//     </Box>
//   );
// }
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: '#222725',
        display: 'grid',
        gridTemplateColumns: '150px 1fr',
        height: 'fit-content',
      }}
    >
      <Tabs
        TabIndicatorProps={{ style: { background: '#64ffda' } }} // CHANGE INDICATOR COLOR HERE
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        centered
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          '.Mui-selected': {
            color: `#64ffda`, // CHANGE THE COLOR OF HIGHLIGHTED TAB HERE
            fontFamily: 'NTR, sans-serif',
            fontSize: '2vh',
          },
          '& .inactiveTab': {
            color: '#fff',
            fontFamily: 'NTR, sans-serif',
            fontSize: '2vh',
          },
          '& button': {
            alignItems: 'flex-start',
          },
        }}
      >
        <Tab
          label="CS 128"
          {...a11yProps(0)}
          className={value !== 0 ? 'inactiveTab' : ''}
        />
        <Tab
          label="CS 173"
          {...a11yProps(1)}
          className={value !== 1 ? 'inactiveTab' : ''}
        />
        <Tab
          label="IGL"
          {...a11yProps(2)}
          className={value !== 2 ? 'inactiveTab' : ''}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="slide-tab">
          <h1 className="job_title">Course Assistant for CS 128 at UIUC</h1>
          <h3 className="job_date">Fall 2022 - Present</h3>
          <ul className="tester_list">
            <li className="job_desc">
              Developed a grade management system with JavaScript that
              calculated class grades for the entire course
            </li>
            <li className="job_desc">
              Helped to develop and draft the prompts for course material that
              explained foundational CS concepts
            </li>
            <li className="job_desc">
              Hosted and coordinated multiple office hours every week
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="slide-tab">
          <h1 className="job_title">Course Assistant for CS 173 at UIUC</h1>
          <h3 className="job_date">Spring 2023 - Present</h3>
          <ul className="tester_list">
            <li className="job_desc">
              Created tutoring approach that best fit each students' learning
              style
            </li>
            <li className="job_desc">
              Assess and troubleshoot conceptual misunderstandings brought by
              students
            </li>
            <li className="job_desc">
              Led large gatherings of the class where new material was learned
              and practiced
            </li>
            <li className="job_desc">
              Developed content that was used by the entire class
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="slide-tab">
          <h1 className="job_title">Undergraduate Research Assistant @ IGL</h1>
          <h3 className="job_date">Fall 2023</h3>
          <ul className="tester_list">
            <li className="job_desc">
            Working closely with Radu's Algorithm and its' application to combinatorics/number theory
            </li>
            <li className="job_desc">
            Automating several larger proofs of partition function properties in Mathematica
            </li>
            <li className="job_desc">
            Using Radu's algorithm to discover new families of congruences as they relate to modular functions
            </li>
          </ul>
        </div>
      </TabPanel>
    </Box>
  );
}