import React from "react";
import { Box, Typography } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import { usePage } from './PageContext';

function ExperienceEducation() {
  const { handlePageTurn } = usePage();
  return (
    <>
      <Box
        sx={{
          p: { xs: 2, sm:0 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 1, sm: 1, md: 2 },
        }}
      >
        {/* Experience Section */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#555",
            fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2rem" },
          }}
        >
          Experience
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            alignItems: "flex-start",
            gap: 4,
            maxWidth: "600px",
            width: "100%",
          }}
        >
          {/* Timeline line */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "12px",
              bottom: 0,
              width: "2px",
              backgroundColor: "#007acc",
              zIndex: 1,
            }}
          ></Box>

          {/* Experience items */}
          {[
            {
              date: "Jul 2024 - Present",
              role: "Software Development Engineer",
              organization: "JPMC",
            },
            {
              date: "Jan 2024 - Jun 2024",
              role: "Intern",
              organization: "JPMC",
            },
          ].map((experience, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: "#007acc",
                  zIndex: 2,
                  position: "absolute",
                  left: "4px",
                  top: "6px",
                }}
              ></Box>
              <Box sx={{ ml: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.15rem" },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CalendarToday
                      sx={{ fontSize: 16, mr: 1, color: "#007acc" }}
                    />
                    <Typography sx={{ color: "#007acc" }}>
                      <strong>{experience.date}:</strong>
                    </Typography>
                  </Box>
                  {experience.role} - <strong>{experience.organization}</strong>
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Education Section */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#555",
            fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2rem" },
           
          }}
        >
          Education
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            alignItems: "flex-start",
            gap: 4,
            maxWidth: "600px",
            width: "100%",
          }}
        >
          {/* Timeline line */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "12px",
              bottom: 0,
              width: "2px",
              backgroundColor: "#007acc",
              zIndex: 1,
            }}
          ></Box>

          {/* Education items */}
          {[
            {
              date: "2020 - 2024",
              qualification: "Bachelor of Technology, Computer Science",
              organization: "KL University",
              grade: "9.4 CGPA",
            },
            {
              date: "2018 - 2020",
              qualification: "Intermediate, MPC",
              organization: "Sri Chaitanya Junior College",
              grade: "9.34 CGPA",
            },
            {
              date: "2018",
              qualification: "High School, 10th SSC",
              organization: "Sri Chaitanya School",
              grade: "9.7 CGPA",
            },
          ].map((education, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: "#007acc",
                  zIndex: 2,
                  position: "absolute",
                  left: "4px",
                  top: "6px",
                }}
              ></Box>
              <Box sx={{ ml: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    fontSize: { xs: "0.9rem", sm: "0.97rem", md: "1.15rem" },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CalendarToday
                      sx={{ fontSize: 16, mr: 1, color: "#007acc" }}
                    />
                    <Typography sx={{ color: "#007acc" }}>
                      <strong>{education.date}:</strong>
                    </Typography>
                  </Box>
                  {education.qualification} <br />
                  <strong>{education.organization}</strong>{" "}
                  <i>- {education.grade}</i>
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        {/* <Box sx={{ display: "flex",justifyContent:'flex-end', alignItems: "center", cursor: "pointer",transition: ".5s",  width:'100%'}}>
          {/* <Typography sx={{ fontSize: "0.875rem", color: "#007acc", mr: 1 }}>
            1
          </Typography> */}
          {/* <box-icon name="chevron-right" sx={{cursor:'pointer'}}></box-icon>
        </Box> */} 
        <span className='number-page'>1</span>
              <span className="nextprev-btn " data-page="turn-1" 
              onClick={() => handlePageTurn('next')}
              >
               
                <box-icon name='chevron-right'></box-icon>
        </span>
      </Box>
    
    </>
  );
}

export default ExperienceEducation;
