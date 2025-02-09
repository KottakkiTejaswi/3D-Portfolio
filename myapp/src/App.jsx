import React, { useEffect , useState} from 'react';
import 'boxicons';
import './index.css'; 
import {  Box, Typography, useTheme } from '@mui/material';

import { PageProvider } from './components/PageContext';


import ProfilePage from './components/ProfilePage'; // Import ProfilePage component
import ExperienceEducation from './components/ExperienceEducation'; // Import ExperienceEducation component
import SkillsPage from './components/SkillsPage'; // Import SkillsPage component
import ProjectsPage from './components/ProjectsPage'; // Import ProjectsPage component
import AchievementsCertifications from './components/AchievementsCertifications'; // Import AchievementsCertificationPage component


function App() {
  const theme = useTheme(); // Access the MUI theme for breakpoints..
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2; // Total number of pages (0-indexed)
  const [pagesTurned, setPagesTurned] = useState(0);
  // Page turning logic
  // const handlePageTurn = (direction) => {
  //   console.log('direction', direction);
  //   if (direction === 'next' && currentPage < totalPages ) {
  //     setCurrentPage(prev => prev + 1);
  //   } else if (direction === 'prev' && currentPage > 0) {
  //     setCurrentPage(prev => prev - 1);
  //   }
  //   console.log(currentPage)
  // };
  const handlePageTurn = (direction) => {
    setPagesTurned(prev => {
      const newValue = direction === 'next' ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(newValue, totalPages));
    });
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handlePageTurn('next');
      if (e.key === 'ArrowLeft') handlePageTurn('prev');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);
  

  return (
    <>
     <PageProvider value={{ currentPage, totalPages, handlePageTurn }}>
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
      <div className={`book-page page-left ${currentPage === 0 ? 'active' : ''}`}>
          <ProfilePage />
        </div>
        {/* <div className={`book-page page-right ${currentPage >= 1 ? 'turn' : ''}`}> */}
        <div 
  className={`book-page page-right ${pagesTurned > 1 ? 'turn' : ''}`}
  style={{ zIndex: 20 - 1 }}
>
          <div className='page-front'>
          <ExperienceEducation />
          
          </div>
          <div className='page-back'>
          <SkillsPage  />
         
          </div>
         
        </div>
        {/* <div className={`book-page page-right ${currentPage >= 2 ? 'turn' : ''}`}> */}
        <div 
  className={`book-page page-right ${pagesTurned > 2 ? 'turn' : ''}`}
  // style={{ zIndex: 20 - 3}}
>
          <div className='page-front'>
          <ProjectsPage />
         
          </div>
          <div className='page-back'>
          <AchievementsCertifications />
              
          </div>
        </div>
      

          

        </Box> 
        </Box>
        </PageProvider>
    </>
  );
}

export default App;
