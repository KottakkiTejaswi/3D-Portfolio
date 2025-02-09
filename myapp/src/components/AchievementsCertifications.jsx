import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  useTheme
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  School as SchoolIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
} from "@mui/icons-material";
import { usePage } from './PageContext';

function AchievementsCertifications() {
  const theme = useTheme();
  const { handlePageTurn } = usePage();
  return (
    <>
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        maxWidth: "900px",
        margin: "auto",
        background: 'linear-gradient(to bottom right, #f8f9fa 0%, #ffffff 100%)',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#555",
          mb: 4,
          textTransform: 'uppercase',
          letterSpacing: 1.2,
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        Achievements
      </Typography>

      {/* Certifications Section */}
      <Box sx={{ width: '100%' }}>
        <Accordion
          sx={{
            width: '100%',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px !important',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            '&:hover': {
              transform: 'perspective(1000px) rotateX(5deg) translateY(-5px)',
              boxShadow: '0 15px 45px rgba(0,0,0,0.2)',
              background: 'rgba(255, 255, 255, 0.9)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '5%',
              width: '90%',
              height: '20px',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)',
              filter: 'blur(10px)',
              zIndex: -1,
              opacity: 0,
              transition: 'opacity 0.3s',
            },
            '&:hover::before': {
              opacity: 0.4,
            }
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#ff9900' }} />}>
            <CloudIcon sx={{ color: "#ff9900", fontSize: 28, mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Certifications
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 1.5 }}>
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                • AWS Cloud Practitioner
              </Typography>
              <Chip
                label="2024"
                size="small"
                sx={{
                  ml: 1,
                  bgcolor: "#ff990022",
                  color: "#ff9900",
                  fontWeight: 600,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Academic & Research Section */}
      <Box sx={{ width: '100%' }}>
        <Accordion
          sx={{
            width: '100%',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px !important',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            '&:hover': {
              transform: 'perspective(1000px) rotateX(5deg) translateY(-5px)',
              boxShadow: '0 15px 45px rgba(0,0,0,0.2)',
              background: 'rgba(255, 255, 255, 0.9)',
            },
            '&::before': {
              /* Same shadow effect as previous */
            }
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#2196f3' }} />}>
            <SchoolIcon sx={{ color: "#2196f3", fontSize: 28, mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Academic & Research
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 2 }}>
            <Box sx={{ p: 1.5 }}>
              <Typography variant="body1" paragraph>
                Presented research paper:
              </Typography>
              <Box sx={{
                bgcolor: 'rgba(33, 150, 243, 0.05)',
                p: 2,
                borderRadius: 2,
                borderLeft: '3px solid #2196f3'
              }}>
                <Typography variant="body2" sx={{ fontStyle: "italic", mb: 1 }}>
                  "Analysis of Country Wise Autonomous Vehicle Preparedness Index"
                </Typography>
                <Chip
                  label="9th INDAM Conference"
                  size="small"
                  sx={{
                    bgcolor: "#2196f322",
                    color: "#2196f3",
                    fontWeight: 600,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Hackathons Section */}
      <Box sx={{ width: '100%' }}>
        <Accordion
          sx={{
            width: '100%',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px !important',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            '&:hover': {
              transform: 'perspective(1000px) rotateX(5deg) translateY(-5px)',
              boxShadow: '0 15px 45px rgba(0,0,0,0.2)',
              background: 'rgba(255, 255, 255, 0.9)',
            },
            '&::before': {
              /* Same shadow effect as previous */
            }
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#4caf50' }} />}>
            <CodeIcon sx={{ color: "#4caf50", fontSize: 28, mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Hackathons & Competitions
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 2 }}>
            <Box sx={{ p: 1.5 }}>
              {[
                "🏆 2nd Place – Inception Hackathon",
                "• Participant – Code for Good Hackathon",
                "• Participant – Devpost Hackathon"
              ].map((text, index) => (
                <Box key={index} sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 1.5,
                  p: 1.5,
                  borderRadius: 2,
                  background: 'rgba(76, 175, 80, 0.05)',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateX(5px)'
                  }
                }}>
                  <Typography variant="body1" sx={{ flexGrow: 1 }}>
                    {text}
                  </Typography>
                  {index === 0 && (
                    <Chip
                      label="2025"
                      size="small"
                      sx={{
                        bgcolor: "#4caf5022",
                        color: "#4caf50",
                        fontWeight: 600,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
    <span className="number-page">4</span>
          <span className="nextprev-btn back" data-page="turn-2" 
          onClick={() => handlePageTurn('prev')}
          >

            <box-icon name="chevron-left"></box-icon>
          </span>
    </>

  );
}

export default AchievementsCertifications;