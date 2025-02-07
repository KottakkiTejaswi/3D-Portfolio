import React, { useEffect } from 'react';
import 'boxicons';
import './index.css'; 
import {  Box, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';


import ProfilePage from './components/ProfilePage'; // Import ProfilePage component
import ExperienceEducation from './components/ExperienceEducation'; // Import ExperienceEducation component
import SkillsPage from './components/SkillsPage'; // Import SkillsPage component
import ProjectsPage from './components/ProjectsPage'; // Import ProjectsPage component
import AchievementsCertifications from './components/AchievementsCertifications'; // Import AchievementsCertificationPage component


function App() {
  const theme = useTheme(); // Access the MUI theme for breakpoints

  

  return (
    <>
     <Box className="wrapper" 
      // style={{backgroundColor:'#00abf0'}}
      sx={{
        width: { xs: '50rem', sm: '55rem', md: '66rem' }, // Responsive width
        height: { xs: '40rem', sm: '40rem', md: '45rem' }, // Responsive height
        padding: { xs: '1rem', sm: '2rem' }, // Adjust padding
      }}
      >
        <Box className="cover cover-left"
        // style={{border:'solid red'}}
        sx={{
          width: { xs: '50%', sm: '50%', md: '50%' }, // Responsive width
          height: { xs: '100%', sm: '100%', md: '100%' }, // Responsive height
        }}
        ></Box>
      
      <Box className="cover cover-right turn"
      sx={{
        width: { xs: '50%', sm: '50%', md: '50%' }, // Responsive width
        height: { xs: '100%', sm: '100%', md: '100%' }, // Responsive height
      }}
      ></Box>

      <Box className="book">
        <div className = "book-page page-left ">
          <ProfilePage />
        </div>
        <div className = "book-page page-right turn " >
          <div className='page-front'>
          <ExperienceEducation />
          </div>
          <div className='page-back'>
          <SkillsPage />
          </div>
         
        </div>
        <div className = "book-page page-right turn ">
          <div className='page-front'>
          <ProjectsPage />
          </div>
          <div className='page-back'>
          <AchievementsCertifications />
          </div>
        </div>
      

          

        </Box> 
        </Box>
    </>
  );
}

export default App;
