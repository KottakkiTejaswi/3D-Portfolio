import React, { useEffect } from 'react';
import 'boxicons';
import './index.css'; 
import ProfilePage from './components/ProfilePage'; // Import ProfilePage component
import ExperienceEducation from './components/ExperienceEducation'; // Import ExperienceEducation component
import SkillsPage from './components/SkillsPage'; // Import SkillsPage component
import ProjectsPage from './components/ProjectsPage'; // Import ProjectsPage component
import AchievementsCertifications from './components/AchievementsCertifications'; // Import AchievementsCertificationPage component
import { initPageTurn } from './script'; // Import the page turning logic

function App() {
  useEffect(() => {
    // Initialize the page turn logic when the component is mounted
    initPageTurn();
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="cover cover-left"></div>
        <div className="cover cover-right turn"></div>

        <div className="book">
          {/* Page 1: Profile */}
          <div className="book-page page-left">
            <ProfilePage />
          </div>

          {/* Page 2 & 3 */}
          <div className="book-page page-right turn" id="turn-1" style={{ border: '2px solid red'}}>
            
              <ExperienceEducation />
              <SkillsPage />
             
          </div>

          {/* Page 4 & 5  */}
          <div className="book-page page-right turn " id="turn-2">
            <ProjectsPage />
            <AchievementsCertifications />
          </div>

          

         
        </div> 
      </div>
    </>
  );
}

export default App;
